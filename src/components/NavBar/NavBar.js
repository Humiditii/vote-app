import React , { Component} from 'react';
import Aux from '../../hoc/Auxillary';
import NavUrl from './NavUrl/NavUrl';
import M from 'materialize-css';
import {NavLink} from 'react-router-dom'

class Navbar extends Component  {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
            return instances
          });
    }
    render(){
        return (
            <Aux>

            <nav>
                <div className="nav-wrapper  indigo lighten-1">
                    <NavLink to="0" className="brand-logo">VClique</NavLink>
                    <NavLink to="0" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
                        <ul className="right hide-on-med-and-down">
                            <NavUrl link='/' navname='Home'/>
                            <NavUrl link='/login' navname='Login'/>
                            <NavUrl link='/register' navname='Register'/>
                            <NavUrl link='/info' navname='About the App' />
                            <NavUrl  link='/contact' navname='Contact'/>
                        </ul>
                </div>
            </nav>

            <ul className="sidenav sidenav-close" id="mobile-demo">
                <NavUrl link='/' navname='Home'/>
                <NavUrl link='/login' navname='Login'/>
                <NavUrl link='/register' navname='Register'/>
                <NavUrl link='/info' navname='About the App' />
                <NavUrl  link='/contact' navname='Contact'/>
            </ul>  
            </Aux>
        );
    }
}

export default Navbar


