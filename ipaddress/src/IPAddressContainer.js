import React, {Component} from "react";
import IPAddress from "./IPAddress";

let xhr

class IPAddressContainer extends Component {
 constructor(props) {
  super(props);

  this.state = {
   ip_address: 'Loading...'
  }

  this.processRequest = this.processRequest.bind(this)
 }

 async componentDidMount() {
  xhr = await fetch('http://ip-api.com/json/')
   .then(response => response.json())
   this.processRequest()
 }

 processRequest() {
  if (xhr.status === 'success') {
   this.setState({
    ip_address: xhr.query
   })
  }
 }

 render() {
  return (
  <IPAddress ip={this.state.ip_address}/>
  )
 }
}

export default IPAddressContainer



