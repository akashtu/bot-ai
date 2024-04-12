import React from "react";
import "./ConvHistory.css";
import Grid from "@mui/material/Grid";
import ResponsiveDrawer from "../Side/Side";
import Image from "../../Assets/image 29.png";
import { Link } from "react-router-dom";
import { PiThumbsUpThin, PiThumbsDownThin } from "react-icons/pi";
import BoyImage from "../../Assets/Group 1000011096.png";
import CircleImage from "../../Assets/Group 1000011097.png";
import Rating from "@mui/material/Rating";
export const ConvHistory = () => {
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
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <h1>Conversation History</h1>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ padding: "20px" }}>
            {JSON.parse(localStorage.getItem("history")).map((value, index) => {
              return (
                <Grid item xs={12} key={index}>
                  <Grid container>
                    <Grid item xs={12}>
                      <div className="conversation-div">
                        <div>
                          <img src={BoyImage} alt="" />
                        </div>
                        <div>
                          <p>You</p>
                          <p>{value.question}</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="conversation-div">
                        <div>
                          <img src={CircleImage} alt="" />
                        </div>
                        <div>
                          <p>Soul AI</p>
                          <p>{value.response}</p>
                          {value.starvalue && (
                            <Rating
                              name="simple-controlled"
                              value={value.starvalue}
                              key={value.id}
                              readOnly
                            />
                          )}
                          {value.feedback && (
                            <h3>Feedback: {value.feedback}</h3>
                          )}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
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
              <Link to="/chat">
                <input type="text" placeholder="Chat with AI" />
              </Link>
            </Grid>
            <Grid item xs={2} md={1}>
              <button className="button1">Ask</button>
            </Grid>
            <Grid item xs={2} md={1}>
              <button className="button1">Save</button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};
