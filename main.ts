radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        reverse(40)
        serial.writeValue("key A", receivedNumber)
    } else if (receivedNumber == 11) {
        forward(40)
        serial.writeValue("key B", receivedNumber)
    } else if (receivedNumber == 12) {
        turnLeft(80)
        serial.writeValue("key C", receivedNumber)
    } else if (receivedNumber == 13) {
        stop()
        serial.writeValue("key D", receivedNumber)
    } else if (receivedNumber == 14) {
        stop()
        serial.writeValue("key E", receivedNumber)
    } else if (receivedNumber == 15) {
    	
    }
})
function turnLeft (speed: number) {
    wuKong.setAllMotor(30, 40)
    inMotion = 1
}
function stop () {
    wuKong.stopAllMotor()
    inMotion = 0
}
input.onButtonPressed(Button.A, function () {
    forward(40)
})
function spinLeft (speed: number) {
    wuKong.setAllMotor(0, 0 - speed)
    inMotion = 1
}
function reverse (speed: number) {
    wuKong.setAllMotor(0 - speed, 0 - speed)
    inMotion = 1
}
function turnRight (speed: number) {
    wuKong.setAllMotor(40, 30)
    inMotion = 1
}
input.onButtonPressed(Button.AB, function () {
    stop()
})
input.onButtonPressed(Button.B, function () {
    spinRight(50)
    basic.pause(2000)
    stop()
})
function spinRight (speed: number) {
    wuKong.setAllMotor(0 - speed, 0)
    inMotion = 1
}
function forward (speed: number) {
    wuKong.setAllMotor(speed, speed)
    inMotion = 1
}
let inMotion = 0
wuKong.setLightMode(wuKong.LightMode.BREATH)
radio.setGroup(8)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
inMotion = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    serial.writeValue("lineRight", pins.digitalReadPin(DigitalPin.P14))
    serial.writeValue("lineLeft", pins.digitalReadPin(DigitalPin.P15))
    serial.writeValue("obstacleRight", pins.digitalReadPin(DigitalPin.P13))
    serial.writeValue("obstacleLeft", pins.digitalReadPin(DigitalPin.P12))
})
basic.forever(function () {
    if (inMotion == 1) {
        if (pins.digitalReadPin(DigitalPin.P12) == 0 && pins.digitalReadPin(DigitalPin.P13) == 0) {
            reverse(50)
            spinRight(50)
            forward(40)
        }
        if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P12) != 0) {
            spinLeft(50)
            basic.pause(500)
            forward(40)
        }
        if (pins.digitalReadPin(DigitalPin.P13) != 0 && pins.digitalReadPin(DigitalPin.P12) == 0) {
            reverse(50)
            spinRight(50)
            basic.pause(1000)
            forward(40)
        }
    }
})
