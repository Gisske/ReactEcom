import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/icon-dropdown.png'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItem}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
                <p>STYLE SHOPHUB</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{textDecoration: 'none'}} to='/'><p>หน้าสินค้า</p></Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link style={{textDecoration: 'none'}} to='/mens'><p>สินค้าผู้ชาย</p></Link>
                    {menu === "mens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link style={{textDecoration: 'none'}} to='/womens'><p>สินค้าผู้หญิง</p></Link>
                    {menu === "womens" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>ลงชื่อเข้าใช้</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    );
}
