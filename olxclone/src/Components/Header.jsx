import React , {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "../Stylesheet/Header.css"
import Logo from '../images/logo.png'
import Fuse from 'fuse.js'
import { Link } from 'react-router-dom';

const Header = () => {
    const [search, setsearchTerm] = useState("")
    console.log(search);
    const products = JSON.parse(localStorage.getItem("data"))
    const fuse = new Fuse(products, {
        keys: ["name"],
    })
    const showSearchResult = () => {
        console.log(fuse.search(search));
    }
    return (
        <div className='Header_container'>
            <div className='Headerleft'>
                <img src={Logo} alt="Olx-logo" className='logo' />
            </div>
            <div className='Headermid'>
                <input type="text" placeholder="Search" className='search' onChange={(e) => setsearchTerm(e.target.value)} />
                {/* <input type="text" placeholder="Search" className='search' /> */}
                <SearchIcon className='searchicon' onClick={showSearchResult} />
                {/* <SearchIcon className='searchicon' /> */}
            </div>
            <div className='Headerright'>
                <Link to="/user-signup" className='loginT btn btn-primary'>Login</Link>
                <Link to="/sell-product" className='sellB btn btn-primary'>Sell</Link>
            </div>


        </div>
    )
}

export default Header