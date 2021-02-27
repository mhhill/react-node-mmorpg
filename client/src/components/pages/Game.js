import React, { useEffect } from 'react';
import { start } from '../../logic/game.js';

export default function Game() {
  // Start game loop
  useEffect(() => {
    start();
  }, []);

  return (
    <>
      <div id='game-wrapper'>
        <div id='game-board'></div>
      </div>
    </>
  );
}
