import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({list, groups}){
    const collapseMenuThreshold = 568;
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
                    {groups.map((group)=>{
                        return (
                            <li className='pure-menu-item pure-menu-has-children pure-menu-allow-hover' key={nanoid()} >
                                <a className='pure-menu-link'>{group}</a>
                                <ul className='sub-menu pure-menu-children'>
                                    {list.filter((ele)=>ele.group===group).map((post)=>{
                                        return (
                                            <li className='pure-menu-item' key={nanoid()}>
                                                <Link to={'/view/'+post.index} className='pure-menu-link'>{post.name}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                    <li className='pure-menu-item'>
                        <Link className='pure-menu-link' to='/about'>About</Link>
                    </li>
                </ul>
            }
            <a className='pure-menu-link menu-btn' onClick={toggleSubmenu}><i class="fa-solid fa-bars"></i></a>
        </div>
    );
}

export default Navbar;