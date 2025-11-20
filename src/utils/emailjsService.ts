import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Send franchise application email via EmailJS
export const sendFranchiseApplicationEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}): Promise<boolean> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing. Please check your .env file.');
      return false;
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      location: formData.location,
      message: formData.message || 'No additional message provided',
      to_email: 'ajay@hesaglobal.com', // Recipient email
      subject: `New Franchise Application - ${formData.name}`,
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      })
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    if (response.status === 200) {
      console.log('Email sent successfully via EmailJS:', response);
      return true;
    } else {
      console.error('EmailJS returned non-200 status:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error sending email via EmailJS:', error);
    return false;
  }
};

