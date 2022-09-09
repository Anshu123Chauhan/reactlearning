import React from "react";
import Logo from './Images/logos.png';
import Button from '@material-ui/core/Button'; 
import AddIcon from '@material-ui/icons/Add';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header=()=>
{
    return(
    <>
    <div className="container">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Button className="btn selling-button">Start Selling</Button>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><PermIdentityIcon/> <br/>Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><ShoppingBasketIcon/> <br/>Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </>);
}
export default Header;