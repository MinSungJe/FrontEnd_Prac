import {age, name, HelloMessage} from "./data.js"

export default function Cart() {
  return (
    <div>
      <HelloMessage></HelloMessage>
      <h4 className="title">Cart</h4>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
    </div>
  )
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명 {age} {name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}