import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';
import NavUrl from '../NavUrl/NavUrl';

class Footer extends Component {

    render(){
        return (
            <Aux>
                <footer className="page-footer  indigo lighten-1">
                    <div className="container">
                        <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Header</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <NavUrl link='/home' navname='Home'/>
                                <NavUrl link='/detail' navname='Info' />
                                <NavUrl  link='/contact' navname='Contact'/>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </Aux>
        );
    }
}

export default Footer;
