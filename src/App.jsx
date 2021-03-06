import React from 'react';
import ReactDOM from 'react-dom';
import  {ButtonToolbar, Button} from 'react-bootstrap';
import axios from 'axios';

var cors = require('cors')

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {email: ''};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  

  }

  async onLogin() {
    const { email, password, username } = this.state;
    try {
      const response = await axios.post('http://52.151.79.89:80/api/v1/users/', { email, password, username });
      console.log(response);
    }
    catch (err) 
    {

    }

  }

  handleChangeName(event) {
    this.setState({username: event.target.username});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.email}); 
  }

  handleChangePassword(event) {
    this.setState({password: event.target.password}); 
  }

  handleSubmit(event) {
    alert('A form is submitted: ' + this.state.value + this.state.email + this.state.password);
    event.preventDefault();
  }
  

render()
{
return(
<form onSubmit={this.handleSubmit}>
  <label>username:
    <input type="text" value={this.state.usernmae} onChange={this.handleChangeName} />
  </label>
  <label>email:
    <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
  </label>
  <label>password:
    <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
  </label>
  <input type="submit" value="Submit" />
</form>

);
}
}

class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };
      var headers = {
        'Access-Control-Allow-Credentials' : 'true',
        "Access-Control-Allow-Origin" : "*",
    
        
      }
    axios.post("http://52.151.79.89:80/api/v1/users/", { user }, {headers: headers})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}


export default PersonList  ;