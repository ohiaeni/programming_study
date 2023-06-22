let x

function setup() {
    createCanvas(400, 300)
    strokeWeight(1)

    // フレームレートの定義
    frameRate(60)

    // x座標の初期値の挿入
    x = 50
}

function draw() {
    fill(255)
    rect(0, 0, 400, 300)
    x += 1
    ellipse(x, height / 2, 100, 100)
}