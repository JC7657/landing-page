import React from 'react';

const Navbar = (props) => {
    return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          
            <a href="." className="navbar-brand ml-5">{props.mainElem}</a>
                    
            <div className="navbar-collapse collapse justify-content-stretch" id="navbar7">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item active">
                        <a className="nav-link" href=".">{props.elem1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".">{props.elem2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".">{props.elem3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".">{props.elem4}</a>
                    </li>
                </ul>
                
            </div>
          
    </nav>
    )
}
//<Navbar mainElem="" elem1="" elem2="" elem3="" elem4="" />
export default Navbar;