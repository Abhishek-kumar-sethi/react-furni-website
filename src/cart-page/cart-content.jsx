import './cart.css'
export default function Cartcontent1(){
    return(
        <div className="cart-content">
            <div className="cart-content-left">
                <div>
                    <button>Update Cart</button>
                    <button>Continue Shopping</button>
                </div>
                <div>
                    <div>
                    <h2>Coupon</h2>
                    <span>Enter your coupon code if you have one.</span>
                    <input type="text" placeholder="Coupon code"/>
                    </div>
                    <div><button>Apply Coupon</button></div>
                </div>
            </div>
            <div className="cart-content-right">
                <h1>CART TOTALS</h1>
                <div>
                    <div><span>Subtotal</span><span style={{fontWeight:"500"}}>$230.00</span></div>
                    <div><span>Total</span><span style={{fontWeight:"500"}}>$230.00</span></div>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}