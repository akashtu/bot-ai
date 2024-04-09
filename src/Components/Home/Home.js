import React from "react";
import "./Home.css";
import Grid from "@mui/material/Grid";
import ResponsiveDrawer from "../Side/Side";
import Image from "../../Assets/image 29.png";
export const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className="home-top">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Grid>
      <div className="home-component">
        <Grid item md={2}>
          <ResponsiveDrawer />
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          <Grid container>
            <Grid item xs={12}>
              <div className="bot-text">Bot AI</div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <div className="center-text">
                <p>How Can I Help You Today?</p>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <div className="image">
                <img src={Image} alt="" />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="box-container">
            {/* <div className="box-component"> */}
            <Grid item xs={12} md={6}>
              <div className="box">
                <p className="bold-text">Hi, what is the weather</p>
                <p>Get immediate AI generated response</p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="box">
                <p className="bold-text">Hi, what is my location</p>
                <p>Get immediate AI generated response</p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="box">
                <p className="bold-text">Hi, what is the temperature</p>
                <p>Get immediate AI generated response</p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="box">
                <p className="bold-text">Hi, how are you</p>
                <p>Get immediate AI generated response</p>
              </div>
            </Grid>
            {/* </div> */}
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              {/* <div className="type-area">
                <div>
                  <input type="text" placeholder="Chat with AI" />
                </div>
                <div>
                  <button>Ask</button>
                </div>
                <div>
                  <button>Save</button>
                </div>
              </div> */}

              <Grid
                container
                spacing={2}
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={6}>
                  <input type="text" placeholder="Chat with AI" />
                </Grid>
                <Grid item xs={2} md={1}>
                  <button>Ask</button>
                </Grid>
                <Grid item xs={2} md={1}>
                  <button>Save</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};
