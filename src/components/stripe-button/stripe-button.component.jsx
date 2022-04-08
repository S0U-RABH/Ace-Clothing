import StripeCheckout from "react-stripe-checkout";
import React from 'react'

//https://svgshare.com/s/g4t //for svg img logo

export const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KmNTiSHZQT3xD5Ok2rLKpKD3qOffNPHBkGfojMNn73ueqKdQ5bKFFF0Hcxo4a7NrJvD3ZqoNgq1VrnQZwUQAehJ00jhCVSDvJ'

    const onToken = token => {
        alert(`₹${price} Payment Successful`)
    }

    return (

        <StripeCheckout
            label="Pay Now"
            name="Ace Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/g4t.svg"
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            currency='INR'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;
