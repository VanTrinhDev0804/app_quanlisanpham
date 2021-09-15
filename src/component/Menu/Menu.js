/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import  { Link,Route } from 'react-router-dom'

const menus =[
    {
        path: '/',
        name : 'Trang chủ',
        exact : true
    },
    {
        path: '/product-list',
        name : 'Sản Phẩm',
        exact : false
    }
];
const MenuLink =({label , to , onExact})=>{
    return (
        <Route 
        path= {to} 
        exact = {onExact} 
        children = {({match}) => {
            var active = match ? 'active' : '';
            return (
                <li className = { active }>
                    <Link to= {to} className="my link">{label}</Link>
                </li>
            )
        }}/>
    )

}
class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenuLink(menus)}
                </ul>
            </div>
        );
    }

    showMenuLink= (menus) =>{
        var result = null;
        if( menus.length > 0 ) {
            result = menus.map((menu , index) => {
                return (
                    <MenuLink
                        key = {index}
                        to = {menu.path}
                        label = {menu.name}
                        onExact = {menu.exact}
                    />
                )
            });
        }
        return result;
    }
}

export default Menu;