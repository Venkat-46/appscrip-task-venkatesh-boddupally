import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./index.css";


const Header=()=>{
    return(
        <div className="main-header-container">
        <div className="header-container">
            <div className="menu-icon-container">
                <RxHamburgerMenu className="menu-icon icons"/>
                <img src="/Logo.png" alt="Logo" className="logo-img icons"/>
            </div>
            <h1 className="text-header">LOGO</h1>
            <div className="icons-container">
                <CiSearch className="search-icon icons"/>
                <IoHeartOutline className="heart-icon icons"/>
                <HiOutlineShoppingBag className="bag-icon icons"/>
                <i class="fa-regular fa-user user-icon"></i>
                <select className="select-ele">
                    <option>ENG</option>
                </select>
            </div>
           
        </div>
        <ul className="menu-list-container">
            <li className="menu-item">SHOP</li>
            <li className="menu-item">SKILLS</li>
            <li className="menu-item">STORIES</li>
            <li className="menu-item">ABOUT</li>
            <li className="menu-item">CONTACT US</li>
        </ul>
        <hr/>
        </div>
    )
}


export default Header;