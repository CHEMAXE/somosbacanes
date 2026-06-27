// api/subscribe.js
// Función serverless de Vercel que añade un correo a tu lista de Brevo.
// La API key vive en las variables de entorno de Vercel, NUNCA en el código público.

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Leer el correo del cuerpo de la petición
  const { email } = req.body || {};

  // Validación básica en el servidor (no confiar solo en el navegador)
  const emailOk = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ error: 'Correo inválido' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true, // si el correo ya existe, no falla
      }),
    });

    // Brevo responde 201 (creado) o 204 (actualizado) en éxito
    if (response.ok) {
      return res.status(200).json({ ok: true });
    }

    // Si el contacto ya existía, Brevo a veces devuelve 400 con code "duplicate_parameter".
    // Lo tratamos como éxito: la persona ya está en la lista.
    const data = await response.json().catch(() => ({}));
    if (data && data.code === 'duplicate_parameter') {
      return res.status(200).json({ ok: true, already: true });
    }

    return res.status(502).json({ error: 'Brevo error', detail: data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}
