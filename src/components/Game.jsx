import React, { useEffect, useState } from "react";
import { Button, Box, Typography, Container } from "@material-ui/core";
import { Word } from "./Word";
import { EndGame } from "./EndGame";
import { HangmanSvg } from "./HangmanSvg";
import ReplayIcon from "@material-ui/icons/Replay";

const Game = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const [clickedLetters, setClickedLetters] = useState(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWordLettersArray, setCurrentWordLettersArray] = useState([]);
  const [currentWord, setCurrentWord] = useState();
  const [failCount, setFailCount] = useState(0);
  const [gameStatus, setGameStatus] = useState(0); // 0 -> Game in progress, 1 -> Game won, 2 -> Game lost
  const [replayCount, setReplayCount] = useState(0);

  const letterClicked = (letter) => {
    setClickedLetters(new Set([...clickedLetters, letter]));
    if (!currentWordLettersArray.includes(letter)) {
      setFailCount(failCount + 1);
    }
  };

  const replayGame = () => {
    setClickedLetters(new Set());
    setIsLoaded(false);
    setCurrentWordLettersArray([]);
    setFailCount(0);
    setGameStatus(0);
    setReplayCount(replayCount + 1);
  };

  const checkWholeWord = currentWordLettersArray.every((letter) =>
    Array.from(clickedLetters).includes(letter)
  );

  useEffect(() => {
    fetch("https://random-words-api.vercel.app/word")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setCurrentWordLettersArray(Array.from(result[0].word.toUpperCase()));
        setCurrentWord(result[0]);
      });
  }, [replayCount]);

  useEffect(() => {
    if (failCount < 7 && !!clickedLetters.size && checkWholeWord) {
      setGameStatus(1);
    }
    if (failCount >= 7) {
      setGameStatus(2);
    }
  }, [checkWholeWord, clickedLetters, failCount]);

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box width="40%">
          <HangmanSvg failCount={failCount} />
        </Box>
        <Box width="60%">
          {gameStatus === 0 && (
            <>
              <Typography align="left">{7 - failCount} Lives left</Typography>
              <Word
                clickedLetters={clickedLetters}
                isLoaded={isLoaded}
                currentWordLettersArray={currentWordLettersArray}
              />
            </>
          )}
          {gameStatus !== 0 && (
            <>
              <EndGame gameStatus={gameStatus} currentWord={currentWord} />
              <Button color="primary" variant="contained" onClick={replayGame}>
                <ReplayIcon />
              </Button>
            </>
          )}
        </Box>
      </Box>

      <Box
        display="flex"
        width="100%"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        {alphabet.map((letter, index) => {
          return (
            <Box m={1} key={"alphabetBox" + index}>
              <Button
                key={"alphabet" + index}
                onClick={() => letterClicked(letter)}
                disabled={clickedLetters.has(letter) || gameStatus !== 0}
                variant="contained"
                color="primary"
              >
                {letter}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Game;
