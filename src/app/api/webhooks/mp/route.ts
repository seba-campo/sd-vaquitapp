import { getPaymentById, WebhokPayload } from "@/lib/mercadopago";
import { confirmPurchase } from "@/lib/purchases";

export async function POST(request: Request, { params }) {
  const body: WebhokPayload = await request.json();
  console.log("Webhook received", body);

  if (body.type === "payment") {
    const mpPayment = await getPaymentById(body.data.id);
    console.log(mpPayment)
    if (mpPayment.status === "approved") {
      console.log(`Payment ${mpPayment.id} approved`);
      const purchaseId = mpPayment.external_reference;
      console.log("EXTERNAL ", purchaseId)

      await confirmPurchase(purchaseId);
    }
  }

  // Se le responde a MP siempre (si o si) para que no vuelva a llamar a este endpoint
  // con el mismo pago, aunque puede suceder
  return Response.json({ received: true });
}
