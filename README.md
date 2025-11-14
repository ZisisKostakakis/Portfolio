Front end page for Website

**https://www.zisiskostakakis.com/**

## Environment Variables

To enable the contact form email functionality, you need to set up the following environment variable:

### Required

- `RESEND_API_KEY` - Your Resend API key for sending emails

### Setup Instructions

1. Get your Resend API key from [https://resend.com](https://resend.com)
2. For local development, create a `.env.local` file in the root directory:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
3. For production (Vercel), add the environment variable in your Vercel project settings:
   - Go to your project settings → Environment Variables
   - Add `RESEND_API_KEY` with your API key value

**Note:** The contact form sends emails to the address defined in `src/lib/data/personal.ts` (currently `business@zisiskostakakis.com`).
