import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Verificamos si la clave existe antes de hacer nada
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("ERROR: No se encuentra la variable RESEND_API_KEY en Vercel");
    return NextResponse.json({ error: 'Falta la API Key en el servidor' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { clinica, email, tel, web, tipo, presupuesto } = body;

    const data = await resend.emails.send({
      // PROBAMOS CON EL REMITENTE POR DEFECTO DE RESEND PARA DESCARTAR
      from: 'Acme <onboarding@resend.dev>', 
      to: ['info@utilix.es'], 
      replyTo: email, 
      subject: `SOLICITUD ADMISIÓN: ${clinica.toUpperCase()}`,
      html: `<p>Nueva solicitud de: ${clinica} (${email})</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    // ESTO NOS DIRÁ EL ERROR REAL EN LOS LOGS DE VERCEL
    console.error("DETALLE DEL ERROR DE RESEND:", error.message || error);
    return NextResponse.json({ error: error.message || 'Error interno' }, { status: 500 });
  }
}