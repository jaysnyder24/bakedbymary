import ImageSelector from './ImageSelector';
import AdjustCart from '../../AdjustCart';

async function getCookie(slug) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const products = await stripe.products.search({
        query: `metadata[\'slug\']:\'${slug}\'`,
        expand: ['data.default_price'],
    });

    return products.data[0];
}

export default async function Cookie ({params}) {

    const cookie = await getCookie(params.slug);

    const priceDecimal = cookie.default_price.unit_amount / 100;

    const priceSplit = priceDecimal.toString().split("");

    async function specialOrderForm(formData) {
        'use server'

        const sendgrid = require('@sendgrid/mail');
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

        const email = formData.get("email");

        const message = {
            to: email,
            from: 'mary@bakedbymary.com',
            subject: 'Special Order Request',
            text: 'Thank you so much for the order request! Let\'s get a few of the details out of the way: what cookies would you like, how many of each kind and when would you like to pick them up?',
            html: '<p>Thank you so much for the order request! Let\'s get a few of the details out of the way: what cookies would you like, how many of each kind and when would you like to pick them up?</p>',
        }

        sendgrid.send(message).then((response) => {
            console.log(response[0].statusCode);
            console.log(response[0].headers)
        }).catch((error) => {
            console.error(error);
        })
    }

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            <main className="flex flex-row justify-center items-start w-full p-14 h-[90vh] space-x-14 relative">
                <ImageSelector image={cookie.metadata.imageUnique} name={cookie.name} slug={cookie.metadata.slug} breadcrumb={true} />
                <div className=" w-2/3 h-auto flex flex-col space-y-8">
                    <div className="w-full flex flex-col justify-start items-start space-y-5">
                        <h1 className="font-bold font-playfair text-6xl text-pink-950">{cookie.name} Cookie</h1>
                        <span className="w-full font-poppins font-medium text-lg text-pink-600 flex flex-row justify-start items-center">${priceDecimal}{priceSplit.length > 2 ? "0" : ".00"} / half dozen</span>
                    </div>
                    <p className='w-full font-poppins text-lg'>{cookie.description}</p>
                    {cookie.metadata.available === "lineup" ?
                        <AdjustCart item={cookie} delay={false} theme={"dark"} orientation={"row"} />
                        : 
                        <form action={specialOrderForm} className="flex flex-row justify-start items-center space-x-5 overflow-visible w-full">
                            <span className='font-poppins font-bold text-lg text-pink-700'>special order:</span>
                            <input className="overflow-visible outline-none underline underline-offset-[6px] decoration-pink-600 focus:decoration-pink-700 font-poppins py-2" type="email" placeholder="jondoe@gmail.com" aria-label="email" name="email" />
                            <button className="bg-pink-700 hover:bg-pink-800 font-poppins text-sm font-bold px-4 py-2 text-white rounded-full" type="submit">submit</button>
                        </form>
                    }
                    <div className="w-full flex flex-col justify-start items-start space-y-5">
                        <h2 className="font-semibold font-playfair text-2xl text-black">Pairs Well With...</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}