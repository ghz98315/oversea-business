# Request Sample Feature - Configuration Guide

## Overview
The Request Sample system allows users to submit product sample requests through modal forms on product pages or a full-page form on the OEM/Supplier Match page.

## Files Created

### 1. Components
- `src/components/RequestSampleModal.tsx` - Main modal form component
- `src/components/ProductPageClient.tsx` - Client wrapper for product detail pages
- `src/components/MobileStickyButton.tsx` - Mobile sticky CTA button

### 2. API Route
- `src/app/api/request-sample/route.ts` - Handles form submissions

### 3. Pages
- `src/app/thank-you/page.tsx` - Confirmation page after submission

## Form Fields

### Required Fields
- Full Name
- Company Name
- Email (with validation)
- Country
- Target Market

### Optional Fields
- WhatsApp/Phone
- Charging Standard (dropdown: CCS1, CCS2, NACS, GB/T, Type 1, Type 2, CHAdeMO, Not Sure)
- Certifications Needed (multi-select: CE, UL, FCC, RoHS, ETL, IEC 62196, SAE J3400, Not Sure)
- Intended Use
- Estimated Order Volume
- OEM/Customization Requirements
- Additional Message

### Auto-filled Fields (hidden)
- Product Name
- Product Category
- Product URL

## Smart Features

### Certification Recommendations
The form automatically recommends certifications based on product category:
- **CCS2/Type 2**: CE, IEC 62196, RoHS
- **CCS1/Type 1**: UL, FCC, ETL
- **NACS**: UL, SAE J3400, FCC

### Reference ID Format
`PG-YYYYMMDD-XXX` (e.g., PG-20260602-001)

## Required Configuration

### 1. Email Service Integration
Currently, the API route logs emails to console. You need to integrate a real email service:

**Recommended Services:**
- **Resend** (recommended for Next.js)
- **SendGrid**
- **Amazon SES**
- **Mailgun**

**Files to update:**
- `src/app/api/request-sample/route.ts`

```typescript
// Replace console.log with actual email service
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@pearlgatesourcing.com',
  to: data.email,
  subject: 'Sample Request Confirmation',
  text: confirmationBody,
});
```

### 2. Database Integration
Currently logs to console. Integrate with:

**Options:**
- **Airtable** (easiest, no-code database)
- **Notion Database**
- **PostgreSQL/MySQL**
- **MongoDB**

**Files to update:**
- `src/app/api/request-sample/route.ts`

**Airtable Example:**
```typescript
const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

await base('Sample Requests').create([
  {
    fields: {
      'Reference ID': referenceId,
      'Full Name': data.fullName,
      'Company': data.company,
      'Email': data.email,
      // ... other fields
    }
  }
]);
```

### 3. Contact Information
Update placeholder contact details in:

**File: `src/app/thank-you/page.tsx`**
```typescript
// Line 95: WhatsApp link
href="https://wa.me/YOUR_WHATSAPP_NUMBER"

// Line 98: WhatsApp number display
<span className="text-sm text-gray-600">+X XXX XXX XXXX</span>

// Line 113: LinkedIn URL
href="https://linkedin.com/company/YOUR_COMPANY"

// Line 116: LinkedIn display
<span className="text-sm text-gray-600">Your Company Name</span>
```

**File: `src/app/api/request-sample/route.ts`**
```typescript
// Line 60: WhatsApp in confirmation email
- WhatsApp: [TO BE CONFIGURED]

// Line 63: LinkedIn in confirmation email
- LinkedIn: [TO BE CONFIGURED]
```

### 4. Environment Variables
Create `.env.local` file with:

```env
# Email Service (choose one)
RESEND_API_KEY=your_resend_api_key
# OR
SENDGRID_API_KEY=your_sendgrid_api_key

# Database (choose one)
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id
# OR
DATABASE_URL=your_database_connection_string

# Business Contact Info
BUSINESS_EMAIL=hello@pearlgatesourcing.com
BUSINESS_WHATSAPP=+1234567890
BUSINESS_LINKEDIN=https://linkedin.com/company/your-company
```

## CTA Button Positions

### Product Detail Pages
1. **Hero Section** - Primary CTA below product info
2. **After Specifications** - Banner-style CTA
3. **Bottom of Page** - Large dark section with CTA
4. **Mobile Sticky Button** - Appears after scrolling 300px (mobile only)

### Products Listing Page
- No changes made yet (will add in next phase)

### Home Page
- Existing "Submit EVSE Inquiry" button will be updated to open modal

## User Flow

1. User clicks "Request Sample" button
2. Modal opens with form (or full page on OEM Match route)
3. Form auto-fills product details (if on product page)
4. Smart certification recommendations displayed
5. User fills required fields
6. On submit:
   - Form validates required fields
   - Generates Reference ID (PG-YYYYMMDD-XXX)
   - Sends notification email to business
   - Sends confirmation email to user
   - Saves to database
   - Redirects to Thank You page
7. Thank You page shows:
   - Reference ID
   - What's next (3 steps)
   - Quick contact options (WhatsApp, Email, LinkedIn)
   - CTA to browse more products

## Testing Checklist

- [ ] Modal opens and closes correctly
- [ ] All form fields work
- [ ] Form validation works (required fields, email format)
- [ ] Certification recommendations display correctly
- [ ] Form submission success flow
- [ ] Thank You page displays
- [ ] Reference ID generates correctly
- [ ] Email notifications sent (after configuring)
- [ ] Database records created (after configuring)
- [ ] Mobile sticky button appears on scroll
- [ ] Responsive design on mobile/tablet/desktop

## Next Steps (Future Phases)

### Phase 2: OEM/Supplier Match Page
- Full-page form (not modal)
- 10-section layout with case studies
- Same form fields but different presentation

### Phase 3: Additional CTA Placements
- Products listing page
- Home page CTA integration
- Navbar integration (optional)

### Phase 4: Analytics Tracking
- Google Analytics events
- Conversion tracking
- Form abandonment tracking

## Notes

- Modal uses Tailwind CSS classes matching site design system
- All colors use orange-500/orange-600 for CTAs
- Form is mobile-responsive
- Modal prevents body scroll when open
- Success state shows briefly before redirect
- Form data includes hidden fields for tracking source page
