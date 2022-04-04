import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
const axios = require("axios");

function Unclassified() {
  const [unclassifiedRun, setUnclassifiedRun] = useState({});

  useEffect(() => {
    getUnclassifiedRun();
  }, []);

  useEffect(() => {
    const listener = (event) => {
      if (event.code == "ArrowRight") {
        updateClassification(true);
        event.preventDefault();
      }
      if (event.code == "ArrowLeft") {
        updateClassification(false);
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [unclassifiedRun]);

  const updateClassification = (classification) => {
    axios
      .put(`/api/runs/${unclassifiedRun._id}`, {
        foam: classification,
        lastModified: new Date(),
      })
      .then(() => {
        getUnclassifiedRun();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUnclassifiedRun = () => {
    setUnclassifiedRun({ ...unclassifiedRun, url: "" });
    axios
      .get("/api/runs?limit=1")
      .then((res) => {
        if (res.data.length === 0) {
          setUnclassifiedRun({});
        }
        setUnclassifiedRun(res.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Unclassified">
      {unclassifiedRun ? (
        <Stack>
          <h1>Is It Foaming 🍺🚰?</h1>
          <Image
            src={unclassifiedRun.url}
            alt={`img for foam id: ${unclassifiedRun._id}`}
            rounded
          />
          <span>{`ID: ${unclassifiedRun._id}`}</span>
          <span>{`Date Last Modified: ${unclassifiedRun.lastModified}`}</span>
          <span className="prompt">
            Press Right Arrow for Yes or Left Arrow for No
          </span>
        </Stack>
      ) : (
        <span>No unclassified reactor runs.</span>
      )}
    </div>
  );
}

export default Unclassified;
