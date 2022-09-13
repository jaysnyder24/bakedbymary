import { loadStripe } from "@stripe/stripe-js";


export async function handleCheckout({lineItems}) {


    let stripePromise = null;
    const getStripe = () => {
        if(!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
        }
        return stripePromise
    }

    const stripe = await getStripe();

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [{
            price: "prod_MP7C3FqLchSyTp",
            quantity: 1
        }],
        successURL: window.location.origin,
        cancelURL: window.location.origin,
    })
}