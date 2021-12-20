import React, { Component } from 'react';
import './NeumorphicLogin.css';


class NeumorphicLogin extends Component {
    render() {
        return (
            <div>
                <section className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="login">
                            <img src="../images/premier-league-logo.jpg" width="325px" />
                            <form>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-medium is-rounded" type="email" placeholder="hello@example.com" autocomplete="username" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
                                    </div>
                                </div>
                                <br />
                                <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
                                    Login
                                </button>
                            </form>
                            <br/>
                                <nav className="level">
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <a href="#">Create an Account</a>
                                        </div>
                                    </div>
                                </nav>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default NeumorphicLogin;