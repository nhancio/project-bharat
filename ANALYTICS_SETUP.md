# Analytics Setup Instructions

## Google Analytics Setup

1. **Create a Google Analytics Account**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Update the Analytics ID**
   - Open `index.html`
   - Replace `GA_MEASUREMENT_ID` with your actual Google Analytics Measurement ID
   - Example: `gtag('config', 'G-ABC123DEF4');`

## Hotjar Setup

1. **Create a Hotjar Account**
   - Go to [Hotjar](https://www.hotjar.com/)
   - Create a new site
   - Get your Site ID (numeric value)

2. **Update the Hotjar ID**
   - Open `index.html`
   - Replace `YOUR_HOTJAR_ID` with your actual Hotjar Site ID
   - Example: `h._hjSettings={hjid:1234567,hjsv:6};`

## Analytics Features Implemented

### Event Tracking
- **CTA Clicks**: Track all call-to-action button clicks
- **Form Submissions**: Track franchise application form submissions
- **Form Field Interactions**: Track user engagement with form fields
- **Franchise Interest**: Track when users show interest in franchise opportunities
- **Page Navigation**: Track section scrolling and navigation

### Conversion Tracking
- **Lead Generation**: Track franchise application form completions
- **Contact Interactions**: Track phone calls and email clicks
- **User Engagement**: Track scroll depth and time on page

### Custom Events
- `franchise_interest`: When users click franchise-related CTAs
- `form_submit`: When users submit the franchise application form
- `CTA_click`: When users click any call-to-action button
- `contact_form_interaction`: When users interact with form fields

## Testing Analytics

1. **Google Analytics**
   - Use Google Analytics Real-Time reports to verify events
   - Check Events section in GA4 interface
   - Use Google Tag Assistant browser extension

2. **Hotjar**
   - Check Hotjar dashboard for recorded sessions
   - Verify heatmaps are being generated
   - Test custom events in Hotjar Events section

## Privacy Compliance

- The analytics setup respects user privacy
- No personal data is collected without consent
- Form submissions are tracked only after user interaction
- All tracking is anonymous and aggregated

## Performance Impact

- Analytics scripts are loaded asynchronously
- No impact on page load speed
- Minimal JavaScript overhead
- Optimized for mobile devices
