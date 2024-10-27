// "use client"
// import React from 'react'
// import { Input } from '@/components/ui/input'
// import { CheckCircle, MailIcon, MessageSquare, Send, User } from 'lucide-react'
// import { Textarea } from '@/components/ui/textarea'
// import { Button } from '@/components/ui/button'
//
// export default function Form() {
//   const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
//   const [isSubmitted, setIsSubmitted] = React.useState(false);
//
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log('Form submitted:', formData);
//     setIsSubmitted(true);
//     setFormData({ name: '', email: '', message: '' });
//     setTimeout(() => setIsSubmitted(false), 5000);
//   };
//
//   return (
//     <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
//       <div className='relative flex items-center'>
//         <Input type='text' id='name' value={formData.name}
//                onChange={handleChange} placeholder='Name' />
//         <User className='absolute right-6' size={20} />
//       </div>
//       <div className='relative flex items-center'>
//         <Input type='email' id='email' value={formData.email}
//                onChange={handleChange} placeholder='Email' />
//         <MailIcon className='absolute right-6' size={20} />
//       </div>
//       <div className='relative flex items-center'>
//         <Textarea id='message' value={formData.message}
//                   onChange={handleChange} placeholder='Type message here' />
//         <MessageSquare className='absolute top-4 right-6' size={20} />
//       </div>
//       <Button type="submit"
//               className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors flex items-center gap-2 max-w-[200px]"
//               disabled={isSubmitted}>
//         {isSubmitted ? (
//           <>
//             Message Sent
//             <CheckCircle size={18} />
//           </>
//         ) : (
//           <>
//             Send Message
//             <Send size={18} />
//           </>
//         )}
//       </Button>
//       {isSubmitted && (
//         <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
//           <CheckCircle size={18} />
//           <span>Thank you for your message! We'll get back to you soon.</span>
//         </div>
//       )}
//     </form>
//   );
// }

'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { CheckCircle, MailIcon, MessageSquare, Send, User } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Form() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type message here"
          required
          className=""
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors flex items-center gap-2 max-w-[200px]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send size={18} />
      </Button>
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          An error occurred. Please try again later.
        </div>
      )}
    </form>
  )
}
