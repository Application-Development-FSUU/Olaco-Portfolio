'use client'

export default function EmailJSDebug() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px' }}>
      <h3>EmailJS Configuration Debug</h3>
      <p>
        <strong>Service ID:</strong>{' '}
        <span style={{ color: serviceId && serviceId !== 'your_service_id_here' ? 'green' : 'red' }}>
          {serviceId ? `${serviceId.substring(0, 20)}...` : 'NOT SET'}
        </span>
      </p>
      <p>
        <strong>Template ID:</strong>{' '}
        <span style={{ color: templateId && templateId !== 'your_template_id_here' ? 'green' : 'red' }}>
          {templateId ? `${templateId.substring(0, 20)}...` : 'NOT SET'}
        </span>
      </p>
      <p>
        <strong>Public Key:</strong>{' '}
        <span style={{ color: publicKey && publicKey !== 'your_public_key_here' ? 'green' : 'red' }}>
          {publicKey ? `${publicKey.substring(0, 20)}...` : 'NOT SET'}
        </span>
      </p>
      <hr />
      <p style={{ fontSize: '11px', color: '#666' }}>
        If any values show "NOT SET" or the placeholder text, update your .env.local file and restart the dev server.
      </p>
    </div>
  )
}
