function right (speed: number) {
    wuKong.setAllMotor(0 - speed, speed / 2)
}
function left (speed: number) {
    wuKong.setAllMotor(speed / 2, 0 - speed)
}
input.onButtonPressed(Button.A, function () {
    forward(100)
    basic.pause(2000)
    reverse(100)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
function reverse (speed: number) {
    wuKong.setAllMotor(0 - speed, 0 - speed)
}
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    left(100)
    basic.pause(2000)
    right(100)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
function forward (speed: number) {
    wuKong.setAllMotor(speed, speed)
}
wuKong.setLightMode(wuKong.LightMode.BREATH)
basic.showIcon(IconNames.Happy)
