function right (speed: number) {
    wuKong.setAllMotor(0 - speed, speed / 2)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        forward(100)
    } else if (receivedNumber == 11) {
        reverse(100)
    } else if (receivedNumber == 12) {
        left(100)
    } else if (receivedNumber == 13) {
        right(100)
    } else if (receivedNumber == 14) {
        left(50)
    } else if (receivedNumber == 15) {
        right(50)
    } else {
        wuKong.stopAllMotor()
    }
})
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
radio.setGroup(8)
basic.showIcon(IconNames.Happy)
