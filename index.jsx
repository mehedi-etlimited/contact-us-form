import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectDetails: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const InputField = ({ name, label, type = 'text' }: { name: string, label: string, type?: string }) => {
    const [isFocused, setIsFocused] = useState(false)
    
    return (
      <div className="relative mb-6">
        <input
          type={type}
          id={name}
          name={name}
          className="w-full px-0 py-2 text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 transition-colors peer"
          placeholder=" "
          value={formData[name as keyof typeof formData]}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <label
          htmlFor={name}
          className={`absolute left-0 transition-all duration-300 pointer-events-none 
            ${isFocused || formData[name as keyof typeof formData] 
              ? '-top-3.5 text-sm text-blue-600' 
              : 'top-2 text-gray-500'
            }`}
        >
          {label}
        </label>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-white shadow-lg rounded-lg font-['Poppins']">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Get in touch with our IT experts to discuss your project needs.
      </p>
      <form onSubmit={handleSubmit}>
        <InputField name="fullName" label="Full Name" />
        <InputField name="email" label="Email Address" type="email" />
        <InputField name="phone" label="Phone Number" type="tel" />
        
        <div className="relative mb-6">
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={4}
            className="w-full px-0 py-2 text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 transition-colors peer resize-none"
            placeholder=" "
            value={formData.projectDetails}
            onChange={handleInputChange}
          ></textarea>
          <label
            htmlFor="projectDetails"
            className={`absolute left-0 transition-all duration-300 pointer-events-none 
              ${formData.projectDetails 
                ? '-top-3.5 text-sm text-blue-600' 
                : 'top-2 text-gray-500'
              }`}
          >
            Project Details
          </label>
        </div>

        <button
          type="submit"
          className="group flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-2xl hover:bg-blue-700 transition-all duration-300"
        >
          Submit
          <ArrowRight className="ml-2 transition-all duration-300 group-hover:ml-3" size={20} />
        </button>
      </form>
    </div>
  )
}
