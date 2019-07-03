import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {

constructor() {
    super()
    this.state = {
        first_name: '',
        last_name: '',
        email: ''
    }
}
componentWillMount(){
    this.state.first_name = jwt_decode(localStorage.usertoken).first_name
    this.state.last_name = jwt_decode(localStorage.usertoken).last_name
    this.state.email = jwt_decode(localStorage.usertoken).email
}

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <strong><td className="h3">First Name</td></strong>
                                <td className="h3 text-pink">{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <strong><td className="h3">Last Name</td></strong>
                                <td className="h3 text-pink">{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <strong><td className="h3">Email Address</td></strong>
                                <td className="h3 text-pink">{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile