import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

export const Word = ({ clickedLetters, isLoaded, currentWordLettersArray }) => {
  const renderLetter = (letter) => {
    if (clickedLetters.has(letter)) return letter;
  };

  if (!isLoaded) return <CircularProgress />;
  else
    return (
      <Box display="flex" flexWrap="wrap">
        {currentWordLettersArray.map((letter, index) => {
          return (
            <Box
              key={index}
              minWidth="2rem"
              minHeight="2rem"
              borderBottom={1}
              mr={1}
              fontSize="2rem"
            >
              {renderLetter(letter)}
            </Box>
          );
        })}
      </Box>
    );
};
