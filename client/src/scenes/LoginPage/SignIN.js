import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
import { Link } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import axios from "axios";

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showSuccessAlert: false,
      showErrorAlert: false,
      errorMessage: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/login/login", data)
      .then((res) => {
        console.log(res);
        if (res.data.token) {
          localStorage.clear();
          localStorage.setItem("token", JSON.stringify(res.data.token));
          this.setState({ showSuccessAlert: true });
          window.location.href = "/layout";
        } else {
          this.setState({ showErrorAlert: true });
        }
      })

      .catch((err) => {
        console.log(err);
        this.setState({ showErrorAlert: true });
      });
  };

  handleSuccessAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      showSuccessAlert: false,
    });
  };

  handleErrorAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      showErrorAlert: false,
    });
  };

  render() {
    return (
      <div>
        <input
          className="logipage__text"
          onChange={(event) => {
            this.state.email = event.currentTarget.value;
          }}
          type="text"
          placeholder="email address"
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.state.password = event.currentTarget.value;
          }}
          type="password"
          placeholder="Password"
        />
        <Link to="/layout">
          <button className="login__button" onClick={this.handleSubmit}>
            Log In
          </button>
        </Link>
        <Snackbar
          open={this.state.showSuccessAlert}
          autoHideDuration={6000}
          onClose={this.handleSuccessAlertClose}
          message="Successfully signed in!"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
        <Snackbar
          open={this.state.showErrorAlert}
          autoHideDuration={6000}
          onClose={this.handleErrorAlertClose}
          message="Error occurred while sign in."
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      </div>
    );
  }
}

export default SignIN;
