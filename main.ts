radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        forward(100)
    } else if (receivedNumber == 11) {
        reverse(100)
    } else if (receivedNumber == 12) {
        spinLeft(100)
    } else if (receivedNumber == 13) {
        spinRight(100)
    } else if (receivedNumber == 14) {
        spinLeft(50)
        basic.pause(2000)
        wuKong.setAllMotor(0, -20)
    } else if (receivedNumber == 15) {
        spinRight(50)
        basic.pause(2000)
        wuKong.setAllMotor(-20, 0)
    } else {
        wuKong.stopAllMotor()
    }
})
input.onButtonPressed(Button.A, function () {
    forward(100)
    basic.pause(2000)
    reverse(100)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
function spinLeft (speed: number) {
    wuKong.setAllMotor(speed / 2, 0 - speed)
}
function reverse (speed: number) {
    wuKong.setAllMotor(0 - speed, 0 - speed)
}
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    spinLeft(100)
    basic.pause(2000)
    spinRight(100)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
function spinRight (speed: number) {
    wuKong.setAllMotor(0 - speed, speed / 2)
}
function forward (speed: number) {
    wuKong.setAllMotor(speed, speed)
}
wuKong.setLightMode(wuKong.LightMode.BREATH)
radio.setGroup(8)
basic.showIcon(IconNames.Happy)
