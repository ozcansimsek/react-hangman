import React from "react";
import { Divider, Typography, Box } from "@material-ui/core";

export const EndGame = ({ gameStatus, currentWord }) => {
  return (
    <>
      <Typography variant="h5">
        {gameStatus === 1
          ? "You made it!"
          : gameStatus === 2
          ? "Maybe next time?"
          : ""}
      </Typography>
      <Divider />
      <Box>
        <Typography display="inline">The word was: </Typography>
        <Typography display="inline" style={{ fontWeight: "600" }}>
          {currentWord.toUpperCase()}.
        </Typography>
      </Box>
      {/* <Box>
        <Typography display="inline">{currentWord}: </Typography> */}
        {/* <Typography display="inline" style={{ fontStyle: "italic" }}>
          (p. {currentWord.pronunciation}){" "}
        </Typography>
        <Typography display="inline">{currentWord.definition}</Typography> */}
      {/* </Box> */}
    </>
  );
};
