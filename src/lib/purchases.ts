import { fs } from "./firebase";

const donationColl = fs.collection("donations");
const transactionColl = fs.collection("transactions");

type Purchase = {
  id: string;
  from: string;
  amount: number;
  message: string;
  date: Date;
  status: string;
};
export async function getConfirmedPayments(): Promise<Purchase[]> {

  const snapshot  =  await donationColl.get()
  const donations = snapshot.docs.map((d) => {
    const data = d.data();
    const {from, amount, message, date, status} =  data;
    return {
      id: d.id,
      from,
      amount,
      message,
      date,
      status
    }
  });
  return donations
  // Mock data
  return [
    {
      id: "1",
      from: "Pepito",
      amount: 33000,
      message: "Ahi te va mi aporte",
      date: new Date(),
      status: "confirmed",
    },
    {
      id: "2",
      from: "Juanita",
      amount: 54000,
      message: "Apoyo esta campaña",
      date: new Date(),
      status: "confirmed",
    },
    {
      id: "3",
      from: "Pepita",
      amount: 60000,
      message: "Ojalá que llegues",
      date: new Date(),
      status: "confirmed",
    },
  ];
}

export async function createPurchase(
  newPurchInput: Pick<Purchase, "from" | "amount" | "message">
): Promise<string> {
  const purchase = {
    ...newPurchInput,
    date: new Date(),
    status: "pending",
  };
  const transactionDoc = await transactionColl.add(purchase);
  return transactionDoc.id
}

export function confirmPurchase(purchaseId: string) {
  // confirmamos la compra en la DB
  transactionColl.doc(purchaseId).get().then(async (p)=>{
    console.log(!p.exists)
    if(!p.exists) {
      console.log(`Purchase ${purchaseId} not confirmed`);
      return
    };
    var transactionData = p.data();
    transactionData.status = "confirmed"
    await transactionColl.doc(purchaseId).update(transactionData);
    console.log(`Purchase ${purchaseId} confirmed ${transactionData}`);

    await donationColl.add({
      from: transactionData.from,
      amount: transactionData.amount,
      message: transactionData.message,
      date: new Date(),
      status: "confirmed",
    })

    return true
  })
}
