import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Movemos la inicialización fuera del alcance global para evitar el error de build
export async function POST(req: Request) {
  // Inicializamos la clave AQUÍ dentro
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { clinica, email, tel, web, tipo, presupuesto } = body;

    // Validación extra para que TypeScript no se queje
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const data = await resend.emails.send({
      from: 'Utilix Studio <admisiones@utilixstudio.com>', 
      to: ['info@utilix.es'], 
      replyTo: email, 
      subject: `SOLICITUD ADMISIÓN: ${clinica.toUpperCase()}`,
      html: `
        <div style="font-family: 'Times New Roman', serif; max-width: 600px; margin: auto; background-color: #FAF9F6; padding: 40px; border: 1px solid #B59E85; color: #1A1A1A;">
          <h2 style="font-weight: normal; font-style: italic; border-bottom: 1px solid #B59E85; padding-bottom: 20px; margin-bottom: 30px;">
            Protocolo de Admisión: Nueva Auditoría
          </h2>
          <div style="margin-bottom: 25px;">
            <p style="margin: 5px 0;"><strong>Clínica:</strong> ${clinica}</p>
            <p style="margin: 5px 0;"><strong>Perfil:</strong> ${tipo}</p>
            <p style="margin: 5px 0;"><strong>Inversión:</strong> ${presupuesto}</p>
            <p style="margin: 5px 0;"><strong>Activo Digital:</strong> ${web || 'No indicada'}</p>
          </div>
          <div style="margin-bottom: 35px; padding-top: 15px; border-top: 1px solid #eee;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${tel}</p>
          </div>
           <footer style="text-align: center; margin-top: 50px; border-top: 1px solid #eee; padding-top: 20px;">
            <p style="font-size: 9px; text-transform: uppercase; letter-spacing: 3px; color: #999;">
              Utilix Studio — Gestión de Activos Digitales
            </p>
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error en Resend:", error);
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
  }
}