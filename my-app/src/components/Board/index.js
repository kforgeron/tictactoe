import React, { useState } from "react";
import { Wrapper, Row, Cell } from "./wrappers";

const Board = () => {
  const [turn, setTurn] = useState(0);
  const [moves, setMoves] = useState(new Array(9).fill(0));
  const onMove = (pos) => {
    setTurn(turn === 0 ? 1 : 0);
    const newMoves = [...moves];
    newMoves[pos] = turn === 0 ? "X" : "O";
    setMoves(newMoves);
  };

  return (
    <>
      It is currently {turn === 0 ? "X" : "O"}'s turn.
      <Wrapper>
        <tbody>
          <Row>
            {moves.splice(0,2).map((val, index) => (
              <Cell key={`cell${index}`} onClick={() => onMove(index)}>
                {!!moves[index] && moves[index]}
              </Cell>
            ))}
          </Row>
          <Row>
            {moves.splice(3,5).map((val, index) => (
              <Cell key={`cell${index+3}`} onClick={() => onMove(index+3)}>
                {!!moves[index+3] && moves[index+3]}
              </Cell>
            ))}
          </Row>
          <Row>
            {moves.splice(6,8).map((val, index) => (
              <Cell key={`cell${index+6}`} onClick={() => onMove(index+6)}>
                {!!moves[index+6] && moves[index+6]}
              </Cell>
            ))}
          </Row>
        </tbody>
      </Wrapper>
    </>
  );
};

export default Board;
