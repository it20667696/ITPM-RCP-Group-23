import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userName: "",
      showSuccessAlert: false,
      showErrorAlert: false,
      errorMessage: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName, email, password } = this.state;
    const data = {
      username: userName,
      email: email,
      password: password,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/login/signup", data)
      .then((res) => {
        console.log(res);
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(res.data.token));
        this.setState({ showSuccessAlert: true });
        window.location.href = "/";
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
        <form onSubmit={this.handleSubmit}>
          <input
            className="logipage__text"
            onChange={(event) => {
              this.setState({
                email: event.currentTarget.value,
              });
            }}
            type="text"
            placeholder="Email Address"
          />
          <input
            className="logipage__text"
            onChange={(event) => {
              this.setState({
                userName: event.currentTarget.value,
              });
            }}
            type="text"
            placeholder="User Name"
          />
          <input
            className="logipage__text"
            onChange={(event) => {
              this.setState({
                password: event.currentTarget.value,
              });
            }}
            type="password"
            placeholder="Password"
          />
          <button
            className="login__button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Sign up
          </button>
        </form>
        <Snackbar
          open={this.state.showSuccessAlert}
          autoHideDuration={6000}
          onClose={this.handleSuccessAlertClose}
          message="Successfully signed up!"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
        <Snackbar
          open={this.state.showErrorAlert}
          autoHideDuration={6000}
          onClose={this.handleErrorAlertClose}
          message="Error occurred while signing up."
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      </div>
    );
  }
}

export default SignUp;
