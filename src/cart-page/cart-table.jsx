import './cart.css'
import { useState } from 'react'
import nordicchair from '../image/nordic-chair.png'
import kruzoaerochair from '../image/kruzo-aero-chair.png'
export default function CartTable(){
    const [count1, setCount1] = useState(1);
  
    const handleIncrement1 = () => {
      setCount1(count1 + 1);
    };
  
    const handleDecrement1 = () => {
      setCount1(count1 - 1);
    };
    const [count2, setCount2] = useState(1);
  
    const handleIncrement2 = () => {
      setCount2(count2 + 1);
    };
  
    const handleDecrement2 = () => {
      setCount2(count2 - 1);
    };
    return(
        <div className='cart-table'>
            <table>
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={nordicchair} alt="" className='product-image'/></td>
                        <td><span>Product1</span></td>
                        <td>$49.00</td>
                        <td><button onClick={handleIncrement1}>+</button><span className='box'>{count1}</span><button onClick={handleDecrement1}>-</button></td>
                        <td>$49.00</td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td><img src={kruzoaerochair} alt="" className='product-image'/></td>
                        <td><span>Product2</span></td>
                        <td>$49.00</td>
                        <td><button onClick={handleIncrement2}>+</button><span className='box'>{count2}</span><button onClick={handleDecrement2}>-</button></td>
                        <td>$49.00</td>
                        <td><button>X</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}