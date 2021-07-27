import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.handleModal = this.handleModal.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleCharge = this.handleChange.bind(this)
        this.state= {
            show : false,
            isLoggedIn : "",
            firstname : "",
            lastname: "",
            emailAddress:"",
            username : "",
            password : "",
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


    handleSignUp(){
        this.setState({
            
        })
    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}