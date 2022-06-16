import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>

<CurrencyFormat

renderText={(value) => (
<>
<p className='subtotal__amount'>
    
subtotal ({basket?.length} items): 
<strong>{` ${value}`}</strong>
</p>
<small className='subtotal__gift'>
<input type="checkbox"/> This order contains a gift

</small>
</>

)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}





/>
<button onClick={e => history.push('./address')}>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal