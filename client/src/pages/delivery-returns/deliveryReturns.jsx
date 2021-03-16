import React from 'react';

import {DeliveryReturnsContainer, Title, MainText, MainTextTitle} from './deliveryReturns.styles';
import './_deliveryReturns.styles.scss'

const DeliveryReturnsPage = () => (
    
    <DeliveryReturnsContainer>
        <Title><b>DELIVERY INFORMATION</b></Title>
        <table>
          <tr>
            <th>Delivery Method</th>
            <th>Cost</th>
            <th>Delivery Time</th>
          </tr>
          <tr>
            <td>Standard UK</td>
            <td>£3.50</td>
            <td>1-2 business days</td>
          </tr>
        </table>
        <MainText>
          <MainTextTitle className='mt-5'>STANDARD UK</MainTextTitle>
          Standard delivery in the UK is £3.50 and is sent by Royal Mail First Class.
          This delivery type will require a signature upon delivery.
          The expected standard delivery time is 1 - 2 business days from when your order was placed.
          <MainTextTitle className='mt-5'>European Delivery</MainTextTitle>
          European delivery is currently unavailable. Please contant us if you live outside of the UK
          and would like to place an order.
        </MainText>
        <hr></hr>
        <Title className='title'><b>RETURNS</b></Title>
        <MainText>
        <MainTextTitle className='mt-5'>ABOUT RETURNS</MainTextTitle>
        If you are not 100% satisfied with your product we are happy to offer a full refund or exchange (where possible)
        provided the product is returned to us in a new, unworn condition with the original packaging within 28 days of your delivery date.
        Refunds will be issued within 7 business days upon receipt of the returned item into our returns department.
        If your item is faulty we will exchange for the exact same item where possible.
        In the event of the same item is not available we will issue a full refund.
        <MainTextTitle className='mt-5'>HOW TO RETURN</MainTextTitle>
        Your order will come with a returns form inside. If you wish to make a return,
        please complete the returns form and include it with the item(s) you wish to return.
        <MainTextTitle className='mt-5'>SEND RETURNS TO:</MainTextTitle>
        Flat 6 <br />
        The Square <br />
        Braunton <br />
        Devon <br />
        EX33 2JD
        </MainText>
    </DeliveryReturnsContainer>
);


export default DeliveryReturnsPage;