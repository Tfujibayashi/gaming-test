import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import p5 from 'p5';

import { Game } from '~/sketch/game';

export const BattleContent: React.FC = () => {
  const sketch = (p: p5): void => {
    const game = new Game(p);

    p.setup = (): void => {
      p.createCanvas(800, 600);
      p.rectMode('center');

      game.reset();
    };

    p.draw = (): void => {
      game.update();
      game.draw();
    };

    p.mousePressed = (): void => {
      game.onMousePress();
    };
  };

  return <ReactP5Wrapper sketch={sketch} />;
};
