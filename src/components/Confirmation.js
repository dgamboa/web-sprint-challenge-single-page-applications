import React from 'react';

export default function Confirmation({ order }) {
  if (!order) {
    return <h3>Processing your order...</h3>
  }

  // const toppings = [];
  // for (const topping in order) {
  //   return order[topping] ? toppings.push() : null;
  // };
  
  return (
    <div className='order-confirmation'>
      <h3>Thank you for your order!</h3>
      <h4>Order Details:</h4>
      <ul>
        <li>Name: {order.name}</li>
        <li>Size: {order.size}</li>
        {
          // console.log(toppings)
        }
        {
          order.instructions
            ? <li>Instructions: {order.size}</li>
            : <li>No special instructions</li>
        }
        
      </ul>
    </div>
  )
}