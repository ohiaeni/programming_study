// ボールのx座標と速度を示す変数の定義
let x
let speed

function setup() {
    createCanvas(400, 300)

    // フレームレートの定義
    frameRate(60)

    // x座標と速度の初期値の定義
    x = 25
    speed = 1

}

function draw() {

    // 背景の四角を描画
    fill(255)
    rect(0, 0, 400, 300)

    // ボールの動きの処理
    move()

    //ボールの描画
    ellipse(x, height / 2, 50, 50)
}

// ボールの動きの処理
function move() {
    // 速度の更新
    x += speed

    // 壁に衝突した場合の処理
    if (x - 25 < 0) {
        speed = 1
        x = 25
    } else if (x + 25 > width) {
        speed = -1
        x = width - 25
    }
}