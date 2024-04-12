import React, { useEffect, useState } from "react";
import "./HomePage1.css";
import Grid from "@mui/material/Grid";
import ResponsiveDrawer from "../Side/Side";
import BoyImage from "../../Assets/Group 1000011096.png";
import CircleImage from "../../Assets/Group 1000011097.png";
import { data } from "../../Assets/Data/Data";
import { PiThumbsUpThin, PiThumbsDownThin } from "react-icons/pi";
import BulbImage from "../../Assets/image 34.png";
import CrossImage from "../../Assets/X.png";
import Rating from "@mui/material/Rating";

const removeSpecialCharacters = (str) => {
  return str.replace(/[^\w\s]/gi, "");
};

export const HomePage1 = () => {
  const [change, setChange] = useState("");
  const [datastore, setDataStore] = useState([]);
  const [feedopen, setFeedOpen] = useState(false);
  const [feedvalue, setFeedValue] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [starvisible, setStarVisible] = useState(null);
  // const [newdata, setNewData] = useState([]);

  useEffect(() => {
    const localDataStorage = localStorage.getItem("history");
    if (localDataStorage) {
      setDataStore(JSON.parse(localDataStorage));
    }
  }, []);

  const functionStarValue = (id, newValue) => {
    const updatedDataStore = [...datastore];
    const questionIndex = updatedDataStore.findIndex((item) => item.id === id);
    if (questionIndex !== -1) {
      updatedDataStore[questionIndex].starvalue = newValue;
      setDataStore(updatedDataStore);
      localStorage.setItem("history", JSON.stringify(updatedDataStore));
    }
  };

  const functionFeedback = () => {
    setFeedOpen(!feedopen);
  };

  const functionConversation = (change) => {
    const filteredValue = data.filter(
      (value) =>
        removeSpecialCharacters(value.question.toLowerCase()) ===
        removeSpecialCharacters(change.toLowerCase())
    );
    const newDataStore = [...datastore, ...filteredValue];
    setDataStore(newDataStore);
    setCurrentQuestionIndex(newDataStore.length - 1);
    localStorage.setItem("history", JSON.stringify(newDataStore));
    setChange("");
  };

  const submitFeedback = () => {
    if (currentQuestionIndex !== null) {
      const updatedDataStore = [...datastore];

      updatedDataStore[currentQuestionIndex].feedback = feedvalue;

      setDataStore(updatedDataStore);

      setFeedOpen(false);
      localStorage.setItem("history", JSON.stringify(updatedDataStore));
    }
  };
  const refresh = () => {
    setDataStore([]);
    window.location.reload();
  };

  return (
    <div>
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
            <ResponsiveDrawer refresh={refresh} />
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <Grid container>
              <Grid item xs={12}>
                <div className="bot-text">Bot AI</div>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {datastore.map((value, index) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Grid container spacing={2} style={{ padding: "20px" }}>
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
                      <Grid item xs={12} style={{ position: "relative" }}>
                        <div className="conversation-div">
                          <div>
                            <img src={CircleImage} alt="" />
                          </div>
                          <div>
                            <p>Soul AI</p>
                            <p>{value.response}</p>
                            <PiThumbsUpThin
                              style={{ marginRight: "10px" }}
                              onClick={() => setStarVisible(value.id)}
                            />
                            <PiThumbsDownThin onClick={functionFeedback} />
                            {starvisible === value.id && (
                              <div>
                                <Rating
                                  name="simple-controlled"
                                  value={value.starvalue}
                                  onChange={(event, newValue) =>
                                    functionStarValue(value.id, newValue)
                                  }
                                  key={value.id}
                                />
                              </div>
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
            {feedopen && (
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "fixed",
                  top: "200px",
                }}
              >
                <Grid
                  item
                  style={{
                    padding: "10px",
                    backgroundColor: "#FAF7FF",
                  }}
                  md={4}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "30px",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <img src={BulbImage} alt="" />
                      </div>
                      <div>
                        <h3>Provide Additional Feedback</h3>
                      </div>
                    </div>
                    <div>
                      <img
                        src={CrossImage}
                        alt=""
                        onClick={() => setFeedOpen(false)}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="textarea"
                      style={{
                        height: "140px",
                        width: "100%",
                        borderRadius: "10px",
                        border: "1px solid black",
                        marginBottom: "10px",
                      }}
                      value={feedvalue}
                      onChange={(e) => setFeedValue(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: "50px",
                    }}
                  >
                    <button
                      style={{
                        width: "157px",
                        height: "50px",
                        backgroundColor: "#D7C7F4",
                        borderRadius: "5px",
                        border: "none",
                      }}
                      onClick={submitFeedback}
                    >
                      Submit
                    </button>
                  </div>
                </Grid>
              </Grid>
            )}
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
    </div>
  );
};

export default HomePage1;
