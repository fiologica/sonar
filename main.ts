input.onButtonPressed(Button.A, function () {
    control.reset()
})
makerbit.onUltrasonicObjectDetected(100, DistanceUnit.CM, function () {
    if (makerbit.isUltrasonicDistanceLessThan(60, DistanceUnit.CM)) {
        kitronik_servo_lite.stop()
        basic.pause(100)
    } else {
        kitronik_servo_lite.driveBackwards(10)
        basic.pause(100)
    }
})
servos.P1.setRange(0, 180)
servos.P2.setRange(0, 180)
kitronik_servo_lite.setDistancePerSecond(10)
basic.forever(function () {
    makerbit.connectUltrasonicDistanceSensor(DigitalPin.P8, DigitalPin.P10)
    basic.showNumber(makerbit.getUltrasonicDistance(DistanceUnit.CM))
    if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 200) {
        kitronik_servo_lite.forward()
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 100) {
        kitronik_servo_lite.stop()
    }
})
