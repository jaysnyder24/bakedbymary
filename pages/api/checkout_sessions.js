const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

    console.log(req.body)

    if (req.method === 'POST') {
        try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                price: price_1LfxSZCOBAz9bDRCWaPGrIPD,
                quantity
            }],
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
            automatic_tax: {enabled: true},
        });
        res.redirect(303, session.url);
        } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}