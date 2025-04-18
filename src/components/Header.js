import React, {useState} from 'react'
import { FaShopify } from "react-icons/fa";
import Order from "./Order";


const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return(<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>)
}

const showNothing = () => {
    return(<div className='empty'>
        <h2>Товаров нет</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] =useState(false)


    return (
      <header>
          <div>
              <span className='logo'>House Staff</span>
              <ul className="nav">
                  <li>Про нас</li>
                  <li>Контакты</li>
                  <li>Кабинет</li>
              </ul>
              <FaShopify onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

              {cartOpen && (
                  <div className='shop-cart'>
                      {props.orders.length >0 ?
                      showOrders(props) :showNothing()}
                  </div>
              )}
              </div>
          <div className='presentation'></div>
      </header>
    )
}

