import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.handleModal = this.handleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleCharge = this.handleChange.bind(this)
        this.handleLogout = this. handleLogout.bind(this)
        this.state= {
            show : false,
            isLoggedIn : "",
            username : "",
            user : {
                username : "arnum",
                password : "arnum"
            },
        }
    }

    handleModal(){
        this.setState({
            show: !this.state.show
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }


    handleLogin(){
        let{user, username, password}= this.state
        if (user.username === username && user.password === password){
            this.setState({
                show : false,
                isLoggedIn: true
            })
        }
        else{
            alert("username atau password salah")
        }
    }

    handleLogout(){
        this.setState({
            isLoggedIn: false,

        })
    }
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter username" onChange={this.handleCharge}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleCharge}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                {this.state.isLoggedIn === false? 
                
                <Button onClick={this.handleLogout}>Logout</Button> :
                 <Button onClick={this.handleModal}>Login</Button>
                }
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}