import React, { Component } from 'react';
import Aux from 'react-aux';

class Header extends Component {
    render() {
        return (
            <Aux>
                <header id="header" className="alt">
                    <a href="index.html" className="logo"><strong>RANDOM</strong> <span>by mtu</span></a>
                    <nav>
                        <a href="#menu">Menu</a>
                    </nav>
				</header>
            </Aux>
        );
    }
}

export default Header;