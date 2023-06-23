
function setup() {
    createCanvas(400, 300)
}

function draw() {
    // 背景の四角を描画
    rect(0, 0, 400, 300)

    // 縦線の描画
    for (let i = 0; i < width; i += 50) {
        line(i, 0, i, height)
    }

    // 横線の描画
    for (let i = 0; i < height; i += 50) {
        line(0, i, width, i)
    }
}