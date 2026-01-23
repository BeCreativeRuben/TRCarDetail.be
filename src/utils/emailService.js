import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
// Replace with your actual EmailJS public key
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'

export const submitBooking = async (formData) => {
  // If EmailJS is not configured, log the data and return success
  // This allows the form to work during development
  if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.log('EmailJS not configured. Form data:', formData)
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true }
  }

  try {
    emailjs.init(EMAILJS_PUBLIC_KEY)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      vehicle: formData.vehicle,
      service: formData.service,
      date: formData.date,
      notes: formData.notes || 'Geen opmerkingen',
      to_email: 'info@trcardetail.be'
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    if (response.status === 200) {
      return { success: true }
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('EmailJS error:', error)
    throw error
  }
}
