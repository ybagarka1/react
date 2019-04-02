import React from 'react';
import ReactDOM from 'react-dom';
import  {ButtonToolbar, Button} from 'react-bootstrap';
import axios from 'axios';

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

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://52.151.79.89:80/api/v1/users/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}


export default Login ;