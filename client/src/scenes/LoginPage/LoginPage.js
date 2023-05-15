import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
// import foodie_logo from "../../images/FoodieLogo.png";
import fb from "../../assets/fb.png";
import Banner from "../../assets/Banner.jpg";
// import FoodBanner from "../../images/FoodBanner1.jpg";
import SignIN from "./SignIN";
import SignUp from "./SignUp";
import { Box, Typography } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import { DeleteSweep } from "@mui/icons-material";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <Typography variant="h6" textAlign="center">
                  <img
                    className="loginpage__Banner"
                    src={Banner}
                    width="354px"
                  />
                  <br></br>
                  Welcome to ReCycle Market, your ultimate destination for a
                  sustainable future! We are an innovative web application that
                  bridges the gap between recycling and transforming waste into
                  remarkable products. Join us on this exciting journey as we
                  explore the limitless possibilities of recycling and discover
                  the beauty in upcycled creations.
                  <br></br>
                  Are you ready to embark on a sustainable adventure with
                  ReCycle Market? Together, let's redefine the future by
                  breathing new life into discarded materials and creating a
                  world where waste becomes a valuable resource. Join us today
                  and be part of the revolution that transforms our planet one
                  recycled masterpiece at a time. Welcome to ReEarth, where
                  sustainability meets creativity!
                </Typography>
              </div>

              <div>
                <div className="loginpage_rightcomponent">
                  {/* <img className="loginpage__logo" src={foodie_logo} /> */}
                  <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween>
                      <Box display="flex" alignItems="center" gap="0.5rem">
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          color="#191F45"
                        >
                          ReCycle
                          <DeleteSweep /> Market
                        </Typography>
                      </Box>
                    </FlexBetween>
                  </Box>

                  <div className="loginPage__signin">
                    {this.state.isLogin ? <SignIN /> : <SignUp />}

                    <div className="login__ordiv">
                      <div className="login__dividor"></div>
                      <div className="login__or">OR</div>
                      <div className="login__dividor"></div>
                    </div>

                    <div className="login__fb">
                      <img
                        src={fb}
                        width="15px"
                        style={{ marginRight: "5px" }}
                      />
                      Log in with Facebook
                    </div>
                    <div className="login_forgt"> Forgot password?</div>
                  </div>
                </div>

                <div className="loginpage__signupoption">
                  {this.state.isLogin ? (
                    <div className="loginPage__signin">
                      Don't have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#191F45" }}
                      >
                        Sign up
                      </span>
                    </div>
                  ) : (
                    <div className="loginPage__signup">
                      Have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#191F45" }}
                      >
                        Sign in
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
