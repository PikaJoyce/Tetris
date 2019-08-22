import React from 'react'
import Cell from './Cell'
import { StyledStage } from './styles/StyledStage'

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {
      stage.map(row =>
        row.map((cell, x) =>
          <Cell key={x} cell={cell[0]} />
        )
      )
    }
  </StyledStage>
);

export default Stage;