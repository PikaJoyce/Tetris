import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  // points for 1,2,3,4 rows cleared
  const linePoints = [40, 100, 300, 1200];


  const calcScore = useCallback(() => {
    // We have score
    if (rowsCleared > 0) {
      // This is the original tetris score is calculated
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared)
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score])

  return [score, setScore, rows, setRows, level, setLevel]
}