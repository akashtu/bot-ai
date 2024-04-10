import React, { useEffect, useState } from "react";
import "./HomePage1.css";
import Grid from "@mui/material/Grid";
import ResponsiveDrawer from "../Side/Side";
// import Image from "../../Assets/image 29.png";
import BoyImage from "../../Assets/Group 1000011096.png";
import CircleImage from "../../Assets/Group 1000011097.png";
import { data } from "../../Assets/Data/Data";
import { PiThumbsUpThin } from "react-icons/pi";
import { PiThumbsDownThin } from "react-icons/pi";
export const HomePage1 = () => {
  const [change, setChange] = useState("");
  const [datastore, setDataStore] = useState([]);

  const functionConversation = (change) => {
    const filteredValue = data.filter((value) => value.question === change);
    setDataStore((prev) => [...prev, ...filteredValue]);
  };

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
          <Grid container spacing={2}>
            {datastore.map((value) => {
              return (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
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
                          <PiThumbsUpThin style={{ marginRight: "10px" }} />
                          <PiThumbsDownThin />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid container>
            <Grid item xs={12}>
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
                  <input
                    type="text"
                    placeholder="Chat with AI"
                    value={change}
                    onChange={(e) => setChange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2} md={1}>
                  <button
                    className="button1"
                    onClick={() => functionConversation(change)}
                  >
                    Ask
                  </button>
                </Grid>
                <Grid item xs={2} md={1}>
                  <button className="button1">Save</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};
