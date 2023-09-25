import { useState } from 'react';

// import css
import './payment.css'
import Divider from '../utils/Space';

// prop type
type PaymentPropsType = {
    activeStep: number;
    handleStepChange: (step: number) => void;
}

const Payment = ({ activeStep, handleStepChange }: PaymentPropsType) => {
    const [name, setName] = useState('');

    return (
        <div className='paymentContainer'>
            <h2>Payment Detail</h2>

            <form>
                <div>
                    <label>Cardholder's Name</label>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label>Card Number</label>
                    <input className='stripeInputField'></input>
                </div>

                <div>
                    <label>Expiration</label>
                    <input className='stripeInputField'></input>
                </div>

                <div>
                    <label>Security Code</label>
                    <input className='stripeInputField'></input>
                </div>
            </form>

            <Divider />

            <button onClick={() => handleStepChange(activeStep - 1)}>Back</button>
        </div>
    )
}

export default Payment;