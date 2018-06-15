document.addEventListener('touchmove', function (event) {
    event.preventDefault()
})
var canvas = document.getElementsByTagName('canvas')[0],
    canvasContext = canvas.getContext('2d'),
    pixelRatio = window.devicePixelRatio || 1,
    window_width = window.innerWidth,
    window_height = window.innerHeight,
    f = 90,
    q,
    // m = Math,
    r = 0
    // u = Math.PI*2
    // v = Math.cos
    // z = Math.random
canvas.width = window_width*pixelRatio
canvas.height = window_height*pixelRatio
canvasContext.scale(pixelRatio, pixelRatio)
canvasContext.globalAlpha = 0.6

function i(){
    canvasContext.clearRect(0,0,window_width,window_height)
    q=[
        {canvasContext:0, y:window_height*.7+f},
        {canvasContext:0, y:window_height*.7-f}
    ]
    while(q[1].canvasContext<window_width+f) d(q[0], q[1])
}

function d(i,j){   
    canvasContext.beginPath()
    canvasContext.moveTo(i.canvasContext, i.y)
    canvasContext.lineTo(j.canvasContext, j.y)
    var k = j.canvasContext + (Math.random()*2-0.25)*f,
        n = getNewY(j.y)
    canvasContext.lineTo(k, n)
    canvasContext.closePath()
    r-=(Math.PI*2)/-50
    canvasContext.fillStyle = '#'+(Math.cos(r)*127+128<<16 | Math.cos(r+(Math.PI*2)/3)*127+128<<8 | Math.cos(r+(Math.PI*2)/3*2)*127+128).toString(16)
    canvasContext.fill()
    q[0] = q[1]
    q[1] = {canvasContext:k,y:n}
}

function getNewY(p){
    var t = p + (Math.random()*2-1.1)*f
    return (t>window_height||t<0) ? getNewY(p) : t
}

document.onclick = i
document.ontouchstart = i
i()