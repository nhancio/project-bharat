// Analytics utility functions for tracking user interactions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    hj: (...args: any[]) => void;
  }
}

// Google Analytics event tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Hotjar event tracking
export const trackHotjarEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && window.hj) {
    window.hj('event', eventName);
  }
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('click', 'CTA', `${ctaName} - ${location}`);
  trackHotjarEvent(`CTA Click - ${ctaName}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'Form', formName);
  trackHotjarEvent(`Form Submit - ${formName}`);
};

// Track page views
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', 'Navigation', pageName);
  trackHotjarEvent(`Page View - ${pageName}`);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', 'Engagement', `Scroll Depth - ${depth}%`);
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent('timing', 'Engagement', 'Time on Page', timeInSeconds);
};

// Track franchise interest
export const trackFranchiseInterest = (source: string) => {
  trackEvent('franchise_interest', 'Lead Generation', source);
  trackHotjarEvent(`Franchise Interest - ${source}`);
};

// Track testimonial views
export const trackTestimonialView = (testimonialId: string) => {
  trackEvent('view', 'Testimonials', testimonialId);
};

// Track contact form interactions
export const trackContactFormInteraction = (action: string, field?: string) => {
  trackEvent(action, 'Contact Form', field);
  trackHotjarEvent(`Contact Form - ${action}${field ? ` - ${field}` : ''}`);
};
