function setup(){
    createCanvas(400,300)
    strokeWeight(1)
}

function draw(){
    // 背景の四角
    stroke(0)
    fill(255)
    rect(0,0,400,300)

    //枠線の消去
    noStroke()

    // 青い四角
    fill(0,0,255)
    rect(200,150,200,150)

    // 緑の四角
    fill(0,255,0)
    rect(100,75,200,150)

    // 赤い四角
    fill(255,0,0)
    rect(0,0,200,150)

    // 斜めの線
    stroke(0)
    line(0,height,width,0)

    // 被せの緑の四角
    noStroke()
    fill(0,255,0)
    rect(200,75,100,75)
}