import React, { Component } from 'react';
import Aux from 'react-aux';

class SectionOne extends Component {
    render() {
        return (
            <Aux>
                <section id="one" className="tiles">
                    <article>
                        <span className="image">
                            <img src="images/pic01.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Aliquam</a></h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic02.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Tempus</a></h3>
                            <p>feugiat amet tempus</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic03.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Magna</a></h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic04.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Ipsum</a></h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic05.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Consequat</a></h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic06.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Etiam</a></h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                    </article>
                </section>
            </Aux>
        );
    }
}

export default SectionOne;