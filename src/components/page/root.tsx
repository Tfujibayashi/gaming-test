import React, { useEffect } from 'react';
import p5 from 'p5';

import { Circle } from '~/sketch';

export const Root: React.FC = () => {
  useEffect(() => {
    new p5(Circle);
  }, []);

  return <div></div>;
};
