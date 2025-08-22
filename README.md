# Vaquitapp

Vaquitapp es una aplicación web que permite a los usuarios crear y gestionar campañas de recaudación de fondos. Los usuarios pueden crear una campaña, establecer un monto objetivo y compartirla con otros. Los donantes pueden contribuir a la campaña utilizando Mercado Pago.

## Características

*   **Creación de Campañas**: Crea una campaña de recaudación de fondos con un título, descripción y monto objetivo.
*   **Procesamiento de Donaciones**: Acepta donaciones a través de Mercado Pago.
*   **Progreso en Tiempo Real**: Visualiza el progreso de la campaña en tiempo real.
*   **Historial de Donaciones**: Consulta una lista de todas las donaciones realizadas a la campaña.

## Tecnologías Utilizadas

*   **Next.js**: Un framework de React para construir aplicaciones web renderizadas en el servidor y estáticas.
*   **TypeScript**: Un superconjunto tipado de JavaScript que compila a JavaScript plano.
*   **Sass**: Un preprocesador de CSS que añade potencia y elegancia al lenguaje básico.
*   **Firebase**: Una plataforma para construir aplicaciones web y móviles. Se utiliza para la base de datos (Firestore).
*   **Mercado Pago**: Una plataforma de pagos utilizada para procesar las donaciones.

## Empezando

Para obtener una copia local y ponerla en marcha, sigue estos sencillos pasos.

### Prerrequisitos

*   Node.js (v20 o posterior)
*   pnpm

### Instalación

1.  Clona el repositorio
    ```sh
    git clone https://github.com/tu_usuario/sd-l3-vaquitapp.git
    ```
2.  Instala los paquetes NPM
    ```sh
    pnpm install
    ```

### Configuración

Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes variables de entorno:

```
# Firebase
FIREBASE_TYPE=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
FIREBASE_AUTH_URI=
FIREBASE_TOKEN_URI=
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=
FIREBASE_CLIENT_X509_CERT_URL=
FIREBASE_UNIVERSE_DOMAIN=

# Mercado Pago
MP_TOKEN=

# Vercel
VERCEL_URL=
```

### Ejecutando el Servidor de Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:4004](http://localhost:4004) con tu navegador para ver el resultado.

## Estructura del Proyecto

*   `src/app`: Contiene las páginas y componentes de la aplicación.
*   `src/lib`: Contiene la lógica de negocio de la aplicación.
    *   `campaign.ts`: Gestiona los datos de la campaña.
    *   `firebase.ts`: Inicializa el SDK de Firebase Admin.
    *   `mercadopago.ts`: Contiene la lógica de integración de Mercado Pago.
    *   `purchases.ts`: Gestiona la creación y confirmación de las compras.
*   `src/app/api/webhooks/mp`: Contiene el manejador de webhooks de Mercado Pago.

## Despliegue

La forma más fácil de desplegar tu aplicación Next.js es utilizar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.
