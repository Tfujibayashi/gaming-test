import React, { useEffect } from 'react';
import p5 from 'p5';

import { Game } from '~/sketch';

export const Battle: React.FC = () => {
  useEffect(() => {
    new p5(Game);
  }, []);

  return <div></div>;
};
