# Stripe Payment Integration

A simple, secure payment integration using Stripe with Node.js, Express, and vanilla JavaScript. This project is ready for deployment on Vercel and includes a complete payment flow with webhooks.

## 🚀 Features

- **Secure Payment Processing**: Uses Stripe Elements for secure card input
- **Real-time Validation**: Client-side and server-side validation
- **Webhook Support**: Handle payment confirmations and failures
- **Responsive Design**: Mobile-friendly payment form
- **Error Handling**: Comprehensive error handling and user feedback
- **Vercel Ready**: Configured for seamless Vercel deployment

## 🛠️ Quick Start

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Set Up Stripe

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
3. Copy `env.example` to `.env` and fill in your keys:

```env
STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### 3. Update Frontend Configuration

Edit `public/index.html` and replace the placeholder with your publishable key:

```javascript
const stripe = Stripe('pk_test_your_actual_publishable_key_here');
```

### 4. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to see the payment form.

## 🌐 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard

### Environment Variables for Production

In your Vercel dashboard, add these environment variables:

- `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key  
- `STRIPE_WEBHOOK_SECRET`: Your webhook endpoint secret
- `NODE_ENV`: `production`

## 🔗 API Endpoints

### POST `/api/create-payment-intent`

Creates a payment intent for processing a payment.

**Request Body:**
```json
{
  "amount": 10.00,
  "currency": "usd",
  "metadata": {
    "order_id": "12345"
  }
}
```

**Response:**
```json
{
  "clientSecret": "pi_xxx_secret_xxx",
  "id": "pi_xxx"
}
```

### POST `/webhook`

Handles Stripe webhook events for payment confirmations.

### GET `/api/health`

Health check endpoint.

## 🧪 Testing

Use these test card numbers:

- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`
- **Insufficient Funds**: `4000 0000 0000 9995`

Use any future expiry date and any 3-digit CVC.

## 📁 Project Structure

```
├── api/
│   └── index.js          # Express server with Stripe integration
├── public/
│   └── index.html        # Payment form with Stripe Elements
├── package.json          # Dependencies and scripts
├── vercel.json          # Vercel configuration
├── env.example          # Environment variables template
└── README.md            # This file
```

## 🔒 Security Features

- **PCI Compliance**: Stripe Elements handles sensitive card data
- **Webhook Verification**: Verifies webhook signatures
- **Input Validation**: Server-side amount and data validation
- **CORS Protection**: Configurable CORS settings
- **Error Handling**: Secure error messages

## 📝 Webhook Setup

1. Go to your [Stripe Dashboard](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Use your deployment URL + `/webhook` (e.g., `https://your-app.vercel.app/webhook`)
4. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
5. Copy the webhook secret to your environment variables

## 🎨 Customization

### Styling
The payment form is fully customizable. Edit the CSS in `public/index.html` to match your brand.

### Additional Payment Methods
You can easily add support for:
- Apple Pay / Google Pay
- Bank transfers (ACH)
- Buy now, pay later options
- International payment methods

### Metadata
Add custom metadata to track orders, customers, or other business data:

```javascript
const paymentIntent = await stripe.paymentIntents.create({
  amount: amount * 100,
  currency: 'usd',
  metadata: {
    order_id: '12345',
    customer_email: 'customer@example.com'
  }
});
```

## 🐛 Troubleshooting

### Common Issues

1. **"No such payment intent"**: Check your API keys match between test/live modes
2. **Webhook signature verification failed**: Ensure webhook secret is correct
3. **CORS errors**: Add your domain to allowed origins in production

### Debug Mode

Set `NODE_ENV=development` to see detailed error messages.

## 📚 Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Elements Guide](https://stripe.com/docs/stripe-js)
- [Webhook Best Practices](https://stripe.com/docs/webhooks/best-practices)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

MIT License - feel free to use this project for your applications!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**⚠️ Important**: This is a demo implementation. For production use, consider adding:
- User authentication
- Database integration for order tracking
- Enhanced security measures
- Logging and monitoring
- Rate limiting
- Input sanitization
