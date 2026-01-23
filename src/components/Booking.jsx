import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import { nl } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import './Booking.css'
import { submitBooking } from '../utils/emailService'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    date: null,
    notes: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Input sanitization functions
  const sanitizeName = (value) => {
    // Allow letters, spaces, hyphens, apostrophes, and accented characters
    return value.replace(/[^a-zA-ZàáâäãåèéêëìíîïòóôöõùúûüýÿñçÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕÙÚÛÜÝŸÑÇ\s'-]/g, '')
  }

  const sanitizeVehicle = (value) => {
    // Allow letters, numbers, spaces, hyphens, and slashes (for model names like "BMW 3 Series")
    return value.replace(/[^a-zA-Z0-9àáâäãåèéêëìíîïòóôöõùúûüýÿñçÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕÙÚÛÜÝŸÑÇ\s\-\/]/g, '')
  }

  const sanitizePhone = (value) => {
    // Allow numbers, spaces, hyphens, plus signs, parentheses, and forward slashes
    return value.replace(/[^0-9\s\-\+\(\)\/]/g, '')
  }

  const handleKeyDown = (e, fieldType) => {
    // Prevent typing unwanted characters
    const key = e.key
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End']

    if (allowedKeys.includes(key) || e.ctrlKey || e.metaKey) {
      return // Allow control keys
    }

    if (fieldType === 'name') {
      // Allow letters, spaces, hyphens, apostrophes
      if (!/^[a-zA-ZàáâäãåèéêëìíîïòóôöõùúûüýÿñçÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕÙÚÛÜÝŸÑÇ\s'-]$/.test(key)) {
        e.preventDefault()
      }
    } else if (fieldType === 'vehicle') {
      // Allow letters, numbers, spaces, hyphens, slashes
      if (!/^[a-zA-Z0-9àáâäãåèéêëìíîïòóôöõùúûüýÿñçÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕÙÚÛÜÝŸÑÇ\s\-\/]$/.test(key)) {
        e.preventDefault()
      }
    } else if (fieldType === 'phone') {
      // Allow numbers, spaces, hyphens, plus signs, parentheses, slashes
      if (!/^[0-9\s\-\+\(\)\/]$/.test(key)) {
        e.preventDefault()
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let sanitizedValue = value

    // Apply sanitization based on field type
    if (name === 'name') {
      sanitizedValue = sanitizeName(value)
    } else if (name === 'vehicle') {
      sanitizedValue = sanitizeVehicle(value)
    } else if (name === 'phone') {
      sanitizedValue = sanitizePhone(value)
    }
    // Email and notes don't need sanitization (email has its own validation, notes is free text)

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ongeldig e-mailadres'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefoonnummer is verplicht'
    }

    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Voertuig is verplicht'
    }

    if (!formData.service) {
      newErrors.service = 'Service is verplicht'
    }

    if (!formData.date) {
      newErrors.date = 'Datum is verplicht'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      selectedDate.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = 'Datum moet in de toekomst liggen'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Convert date to string format for email
      const bookingData = {
        ...formData,
        date: formData.date ? formData.date.toISOString().split('T')[0] : ''
      }
      await submitBooking(bookingData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        service: '',
        date: null,
        notes: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section className="booking" id="booking">
      <h2 className="section-title">Boek Uw Afspraak</h2>
      <p className="section-subtitle">
        Krijg binnen 24 uur een offerte of bel ons om te beginnen.
      </p>

      <div className="booking-container">
        <div className="booking-info">
          <h3 className="info-title">Contact Informatie</h3>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>123 Hoofdstraat, Stad, 12345</span>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <a href="tel:+32123456789">(123) 456-7890</a>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <a href="mailto:info@trcardetail.be">info@trcardetail.be</a>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <div>Maandag - Vrijdag: 9:00 - 18:00</div>
              <div>Zaterdag: 10:00 - 16:00</div>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Volledige Naam *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, 'name')}
              className={errors.name ? 'error' : ''}
              placeholder="Jan Janssen"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="jan@voorbeeld.nl"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefoon *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, 'phone')}
              className={errors.phone ? 'error' : ''}
              placeholder="+32 123 456 789"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="vehicle">Voertuig Merk & Model *</label>
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, 'vehicle')}
              className={errors.vehicle ? 'error' : ''}
              placeholder="2020 Tesla Model 3"
            />
            {errors.vehicle && <span className="error-message">{errors.vehicle}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Pakket *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={errors.service ? 'error' : ''}
            >
              <option value="">Selecteer een service</option>
              <option value="interieur">Interieur (€110)</option>
              <option value="exterieur">Exterieur (€90)</option>
              <option value="combined">Interieur + Exterieur (€180)</option>
            </select>
            {errors.service && <span className="error-message">{errors.service}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Gewenste Datum *</label>
            <div className="date-picker-wrapper">
              <FaCalendarAlt className="date-picker-icon" />
              <DatePicker
                id="date"
                selected={formData.date}
                onChange={(date) => {
                  setFormData(prev => ({ ...prev, date }))
                  if (errors.date) {
                    setErrors(prev => ({ ...prev, date: '' }))
                  }
                }}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Selecteer een datum"
                className={`date-picker-input ${errors.date ? 'error' : ''}`}
                showPopperArrow={false}
                calendarClassName="custom-calendar"
                popperClassName="custom-datepicker-popper"
                locale={nl}
              />
            </div>
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="notes">Aanvullende Opmerkingen</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Eventuele speciale verzoeken of opmerkingen..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="form-message success">
              Bedankt! Uw aanvraag is verzonden. We nemen zo spoedig mogelijk contact met u op.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-message error">
              Er is een fout opgetreden. Probeer het later opnieuw of bel ons direct.
            </div>
          )}

          <button
            type="submit"
            className="btn form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verzenden...' : 'Boek Mijn Afspraak'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Booking
