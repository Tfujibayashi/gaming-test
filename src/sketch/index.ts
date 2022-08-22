import p5 from 'p5';

export const Circle = (p: p5): void => {
  p.setup = (): void => {
    //
  };
  p.draw = (): void => {
    p.ellipse(50, 50, 80, 80);
  };
};
