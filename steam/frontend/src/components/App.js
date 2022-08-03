import React, { Component } from 'react';
import { render } from "react-dom";
import {csrfToken} from "./csrfToken";

const CSRFTOKEN = () => {
  return (
      <input name="csrfmiddlewaretoken" value={csrfToken} type="hidden" />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/steam_site")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <>
      <form action='/' method='POST' style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="fullName">Full name</label><input type="text" name='fullName' required/>
        <label htmlFor="userName">Usename</label><input type="text" name='userName' required/>
        <label htmlFor="email">E-mail</label><input type="text" name='email' required/>
        <CSRFTOKEN />
        <input style={{marginTop: "20px"}} type="submit" value="Post data" />
      </form>
      <ul>
        {this.state.data.map(data => {
          return (
            <li key={data.id}>
              {data.name} - {data.email}
            </li>
          );
        })}
      </ul>
      </>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);