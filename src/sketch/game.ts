import p5 from 'p5';

import { Block, BlockList, Coordinate } from '~/models';
import { PlayerSketch } from '~/models/entities/player-sketch';

type GameState = 'PLAY' | 'GAME_OVER';

export class Game {
  _p5!: p5;
  player!: PlayerSketch;
  blockList!: BlockList;

  gameState!: GameState;

  constructor(p: p5) {
    this._p5 = p;
  }

  private addBlockPair = (): void => {
    const p = this._p5;

    const y = p.random(-100, 100);

    const topBlock = new Block({
      x: new Coordinate(900),
      y: new Coordinate(y),
      vx: new Coordinate(-2),
      vy: new Coordinate(0),
    });

    const bottomBlock = new Block({
      x: new Coordinate(900),
      y: new Coordinate(y + 600),
      vx: new Coordinate(-2),
      vy: new Coordinate(0),
    });

    this.blockList.push(topBlock);
    this.blockList.push(bottomBlock);
  };

  private isColliding = (): boolean | undefined => {
    const p = this._p5;

    for (const block of this.blockList.value) {
      const currentXDistance = p.abs(this.player.x.value - block.x.value);
      if (20 + 40 <= currentXDistance) return false;

      const currentYDistance = p.abs(this.player.y.value - block.y.value);
      // console.log(currentYDistance);
      if (20 + 200 <= currentYDistance) return false;

      return true;
    }
  };

  private drawGameOverScreen = (): void => {
    const p = this._p5;

    p.background(0, 192); // 透明度 192 の黒
    p.fill(255);
    p.textSize(64);
    p.textAlign(p.CENTER, p.CENTER); // 横に中央揃え ＆ 縦にも中央揃え
    p.text('GAME OVER', p.width / 2, p.height / 2); // 画面中央にテキスト表示
  };

  // preload = (): void => {};

  reset = (): void => {
    this.gameState = 'PLAY';

    const player = new PlayerSketch({
      x: new Coordinate(200),
      y: new Coordinate(300),
      vx: new Coordinate(0),
      vy: new Coordinate(0),
    });

    this.player = player;
    this.blockList = BlockList.empty();
  };

  update = (): void => {
    const p = this._p5;

    if (this.gameState === 'GAME_OVER') return;

    // ブロックの追加
    if (p.frameCount % 120 === 1) {
      this.addBlockPair();
    }

    // 生きているブロックだけ残す
    this.blockList = this.blockList.filterByX(new Coordinate(-100));

    // プレイヤーに重力を適用
    this.player.applyGravity(new Coordinate(0.15));

    // 更新
    this.player.updatePosition();
    this.blockList.updatePosition();

    if (!this.player.isAlive) {
      this.gameState = 'GAME_OVER';
    }

    // 衝突判定
    if (this.isColliding()) {
      this.gameState = 'GAME_OVER';
    }
  };

  draw = (): void => {
    const p = this._p5;

    p.background(0);
    this.player.draw(p);
    this.blockList.draw(p);

    if (this.gameState === 'GAME_OVER') this.drawGameOverScreen();
  };

  onMousePress = (): void => {
    switch (this.gameState) {
      case 'PLAY':
        // プレイ中の状態ならプレイヤーをジャンプさせる
        this.player.applyJump(-5);
        break;
      case 'GAME_OVER':
        // ゲームオーバー状態ならリセット
        this.reset();
        break;
    }
  };
}
