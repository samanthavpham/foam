import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
const axios = require("axios");

function Classified({ classification }) {
  const [page, setPage] = useState(0);

  const handleNextClick = (event) => {
    setPage(page + 1);
    event.preventDefault();
  };

  const handleBackClick = (event) => {
    setPage(page - 1);
    event.preventDefault();
  };

  const [runs, setRuns] = useState([]);

  useEffect(() => {
    const limit = 5;
    const skip = page * limit;
    if (classification === "Foaming") {
      axios
        .get(`/api/runs?foam=true&skip=${skip}&limit=${limit}`)
        .then((res) => {
          setRuns(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(`/api/runs?foam=false&skip=${skip}&limit=${limit}`)
        .then((res) => {
          setRuns(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [classification, page]);

  useEffect(() => {
    setPage(0);
  }, [classification]);

  return (
    <div className="Classified">
      {runs ? (
        <Stack>
          {classification === "Foaming" ? (
            <h1>It's Foaming 🍺</h1>
          ) : (
            <h1>It's Not Foaming 🚰</h1>
          )}
          <ul>
            {runs.map((run) => (
              <li key={run._id}>
                <Stack>
                  <Image
                    src={run.url}
                    alt={`img for run id: ${run._id}`}
                    rounded
                  />
                  <span>{`ID: ${run._id}`}</span>
                  <span>{`Date Last Modified: ${run.lastModified}`}</span>
                </Stack>
              </li>
            ))}
          </ul>
          {runs.length > 0 ? <h6>{`Page ${page}`}</h6> : <h6></h6>}
          <ButtonGroup>
            {page === 0 ? (
              <Button variant="outline-dark" onClick={handleBackClick} disabled>
                Back
              </Button>
            ) : (
              <Button variant="outline-dark" onClick={handleBackClick}>
                Back
              </Button>
            )}
            {runs.length > 0 ? (
              <Button variant="outline-dark" onClick={handleNextClick}>
                Next
              </Button>
            ) : (
              <Button variant="outline-dark" onClick={handleNextClick} disabled>
                Next
              </Button>
            )}
          </ButtonGroup>
        </Stack>
      ) : (
        <span>No classified reactor runs.</span>
      )}
    </div>
  );
}

export default Classified;
