import React, { Component } from 'react';
import styles from "./Login.module.css";
import { loginUserSuccess } from "../../Redux/actions";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const { loginUserSuccess } = this.props;
        const { email, password } = this.state;
        loginUserSuccess({ email: email, password: password })
    }
    render() {
        const { email, password } = this.state;
        const { isAuth } = this.props;
        if (isAuth) {
            return (
                <Redirect to="/Dashboard" />
            )
        }
        return (
            <div className={styles.container}>
                <div className={styles.mainImageConatiner}>
                    <img className={styles.cubicom} src="/CCR1.png" alt="cubicom" />
                </div>
                <div className={styles.login}>
                    <div className={styles.content}>
                        <span className={styles.welcomeFont}>Welcome to </span><img src="/logo.svg" alt="cubicom" />
                    </div>
                    <div className={styles.subContentContainer}>
                        <div className={styles.subContent}>
                            We make easy for everyone to manage<br /> logistics operations.
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div>
                            <div className={styles.marginTop}>
                                <label >Email</label><br />
                                <input name="email" value={email} onChange={this.handleChange} className={styles.input} type="email" placeholder="Enter email" /><br />
                            </div>
                            <div className={styles.marginTop}>
                                <label>Password</label><br />
                                <input password="password" value={password} onChange={this.handleChange} className={styles.input} type="password" placeholder="Enter password" /><br />
                            </div>
                            <div className={styles.dGrid}>
                                <div>
                                    <input className={styles.checkbox} type="checkbox" /><span className={styles.rememberMe}>Remember me</span>
                                </div>
                                <div className={styles.textRight}>
                                    <div>Forgot password?</div>
                                </div>
                            </div>
                            <button onClick={this.handleSubmit} className={styles.loginButton}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.isAuth
})

const mapDispatchToProps = dispatch => ({
    loginUserSuccess: payload => dispatch(loginUserSuccess(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);