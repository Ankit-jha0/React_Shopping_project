import React from 'react'
import { BadgeCheck } from 'lucide-react';

const OrderConfirmation = (props) => {
  return (
    <div className='min-h-screen'>
        <div className='flex justify-center items-center h-screen '>
          <div className='bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 '>
            <div className='text-center'>
              <BadgeCheck className='w-16 h-16 text-green-500 mx-auto mb-4' />
              <h2 className='text-3xl font-bold text-white mb-2'>Order Confirmed!</h2>
              <p className='text-gray-400 mb-4'>Thank you for your purchase, {props.name}.</p>
              <p className='text-gray-400 mb-4'>Your order details:</p>
              <ul className='text-left text-sm font-sans font-semibold text-green-300 bg-green-900/90 p-2 rounded-lg'>
                <li>Address: {props.name}</li>
                <li>Address: {props.address}</li>
                <li>City: {props.city}</li>
                <li>Pin Code: {props.zip}</li>
              </ul>
            </div>
          </div>
        </div>

    </div>
  )
}

export default OrderConfirmation