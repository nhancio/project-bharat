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
}): Promise<{ success: boolean; error?: string }> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Log environment variables (without exposing sensitive data)
    console.log('EmailJS Configuration Check:', {
      hasServiceId: !!serviceId,
      hasTemplateId: !!templateId,
      hasPublicKey: !!publicKey,
      serviceIdPrefix: serviceId ? serviceId.substring(0, 10) + '...' : 'missing',
      templateIdPrefix: templateId ? templateId.substring(0, 10) + '...' : 'missing'
    });

    if (!serviceId || !templateId || !publicKey) {
      const missingVars = [];
      if (!serviceId) missingVars.push('VITE_EMAILJS_SERVICE_ID');
      if (!templateId) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
      if (!publicKey) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
      
      const errorMsg = `EmailJS configuration is missing: ${missingVars.join(', ')}. Please check your environment variables in Netlify.`;
      console.error(errorMsg);
      return { success: false, error: errorMsg };
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

    console.log('Sending email via EmailJS with params:', {
      serviceId,
      templateId,
      from_name: templateParams.from_name,
      from_email: templateParams.from_email
    });

    // Send email using EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('EmailJS Response:', {
      status: response.status,
      text: response.text,
      statusText: response.statusText
    });

    if (response.status === 200) {
      console.log('✅ Email sent successfully via EmailJS');
      return { success: true };
    } else {
      const errorMsg = `EmailJS returned status ${response.status}: ${response.text || response.statusText}`;
      console.error('❌', errorMsg);
      return { success: false, error: errorMsg };
    }
  } catch (error: any) {
    const errorMsg = error?.text || error?.message || 'Unknown error occurred';
    console.error('❌ Error sending email via EmailJS:', {
      error: errorMsg,
      code: error?.code,
      status: error?.status,
      fullError: error
    });
    return { success: false, error: errorMsg };
  }
};

