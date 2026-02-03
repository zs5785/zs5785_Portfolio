import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function PostDropDown({label, list}){
    const [show, setShow] = useState(false);

    return (
        <li className='pure-menu-item pure-menu-has-children pure-menu-allow-hover' onMouseLeave={()=>setShow(false)} >
            <a className='pure-menu-link' onClick={()=>setShow(!show)}>{label}</a>
            <ul className={'sub-menu pure-menu-children' + (show ? " sub-menu-visible" : "")}>
                {list.map((post)=>{
                    return (
                        <li className='pure-menu-item' key={nanoid()}>
                            <Link onClick={()=>setShow(false)} to={'/view/'+post.index} className='pure-menu-link'>{post.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}

function Navbar({list, groups}){
    const collapseMenuThreshold = 768;
    const [showMenu, setShowMenu] = useState(window.innerWidth >= collapseMenuThreshold);

    function toggleSubmenu(){
        setShowMenu(!showMenu);
    }

    return (
        <div className="nav-bar pure-menu pure-menu-horizontal">
            <Link to="/" className='pure-menu-heading pure-menu-link'>Home</Link>
            {
                showMenu &&
                <ul className='pure-menu-list'>
                    {groups.map((group)=><PostDropDown key={nanoid()} label={group} list={list.filter((ele)=>ele.group===group)} />)}
                    <li className='pure-menu-item'>
                        <Link className='pure-menu-link' to='/about'>About</Link>
                    </li>
                </ul>
            }
            <a className='pure-menu-link menu-btn' onClick={toggleSubmenu}><i className="fa-solid fa-bars"></i></a>
        </div>
    );
}

export default Navbar;