"use server"

import { redirect } from 'next/navigation'
import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function checkout(formData) {

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        line_items: JSON.parse(formData.get('items')),
        mode: 'payment',
        success_url: `https://www.bakedbymary.com/?success=true`,
        cancel_url: `https://www.bakedbymary.com/?canceled=true`,
    });

    redirect(session.url);

    console.log(headers.get('host'))
}