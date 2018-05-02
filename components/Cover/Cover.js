import React, { Component } from 'react';
import Aux from 'react-aux';
import Link from 'next/link';

class Cover extends Component {
    render() {
        return (
            <Aux>
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>Hi there random person! I'm Mtu!</h1>
                        </header>
                        <div className="content">
                            <p>A responsive site template designed by HTML5 UP<br />
                            and released under the Creative Commons.</p>
                            <ul className="actions">
                                <li><Link prefetch href="/about"><a href="#one" className="button next scrolly">Get Started</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Aux>
        );
    }
}

export default Cover;