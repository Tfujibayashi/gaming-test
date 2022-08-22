import p5 from 'p5';

/** Types */
type Entity = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Player = Entity;

export const Game = (p: p5): void => {
  let player: Player;

  p.setup = (): void => {
    p.createCanvas(800, 600);
    p.rectMode('center');

    player = createPlayer();
  };

  p.draw = (): void => {
    // プレイヤーの位置を更新
    updatePosition(player);

    // プレイヤーに重力を適用
    applyGravity(player);

    // プレイヤーを描画
    p.background(0);
    drawPlayer(player);
  };

  p.mousePressed = (): void => {
    // プレイヤーをジャンプさせる
    applyJump(player);
  };

  const updatePosition = (entity: Entity): void => {
    entity.x += entity.vx;
    entity.y += entity.vy;
  };

  const createPlayer = (): Player => {
    return {
      x: 200,
      y: 300,
      vx: 0,
      vy: 0,
    };
  };

  const applyGravity = (entity: Entity): void => {
    entity.vy += 0.15;
  };

  const applyJump = (entity: Entity): void => {
    entity.vy = -5;
  };

  const drawPlayer = (entity: Entity): void => {
    p.square(entity.x, entity.y, 40);
  };
};
