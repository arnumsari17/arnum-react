import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import{ Modal } from 'react-bootstrap';

export class Apps extends Component {
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

    render(){
        return(
            <div>
                {this.state.isLoggedIn === false? 
                <Button onClick={this.handleModal}>Login</Button>
                : <Button onClick={this.handleLogout}>Logout</Button>
                }
            
            <Modal show={this.state.show}>
                <Modal.Header>
                    Login Sistem
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label> UserName </label>
                        <input name="username"type="text" onChange={this.handleCharge} />
                    </div>
                    <div>
                        <label> Password </label>
                        <input name="password"type="text" onChange={this.handleCharge} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onclick={this.handleLogin}> Save </Button>
                    <Button onclick={this.handleModal}> Close </Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}
export default Apps;