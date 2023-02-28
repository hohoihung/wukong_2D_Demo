radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        reverse(40)
    } else if (receivedNumber == 11) {
        forward(40)
    } else if (receivedNumber == 12) {
        turnLeft(80)
    } else if (receivedNumber == 13) {
        turnRight(80)
    } else if (receivedNumber == 14) {
        wuKong.stopAllMotor()
    } else if (receivedNumber == 15) {
    	
    }
})
function turnLeft (speed: number) {
    wuKong.setAllMotor(speed / 3, speed)
}
input.onButtonPressed(Button.A, function () {
    forward(40)
})
function spinLeft (speed: number) {
    wuKong.setAllMotor(0, 0 - speed)
}
function reverse (speed: number) {
    wuKong.setAllMotor(speed, speed)
}
function turnRight (speed: number) {
    wuKong.setAllMotor(speed, speed / 3)
}
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    spinLeft(50)
    basic.pause(2000)
    spinRight(50)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
function spinRight (speed: number) {
    wuKong.setAllMotor(0 - speed, 0)
}
function forward (speed: number) {
    wuKong.setAllMotor(0 - speed, 0 - speed)
}
wuKong.setLightMode(wuKong.LightMode.BREATH)
radio.setGroup(8)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    serial.writeValue("lineRight", pins.digitalReadPin(DigitalPin.P14))
    serial.writeValue("lineLeft", pins.digitalReadPin(DigitalPin.P15))
    serial.writeValue("obstacleRight", pins.digitalReadPin(DigitalPin.P13))
    serial.writeValue("obstacleLeft", pins.digitalReadPin(DigitalPin.P12))
    basic.pause(5000)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 0 && pins.digitalReadPin(DigitalPin.P13) == 0) {
        spinRight(50)
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P12) != 0) {
        spinLeft(50)
    }
    if (pins.digitalReadPin(DigitalPin.P13) != 0 && pins.digitalReadPin(DigitalPin.P12) == 0) {
        spinRight(50)
    }
})
