import React , { Component} from 'react';
import Aux from '../../hoc/Auxillary';
import NavUrl from './NavUrl/NavUrl';
import M from 'materialize-css'

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
                    <a href="0" className="brand-logo">VClique</a>
                    <a href="0" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <NavUrl link='/home' navname='Home'/>
                            <NavUrl link='/login' navname='Login'/>
                            <NavUrl link='/register' navname='Register'/>
                            <NavUrl link='/info' navname='About the App' />
                            <NavUrl  link='/contact' navname='Contact'/>
                        </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <NavUrl link='/home' navname='Home'/>
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


