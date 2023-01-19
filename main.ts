servos.P1.setRange(0, 180)
servos.P2.setRange(0, 180)
basic.forever(function () {
    makerbit.connectUltrasonicDistanceSensor(DigitalPin.P8, DigitalPin.P10)
    basic.showNumber(makerbit.getUltrasonicDistance(DistanceUnit.CM))
    if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 200) {
        kitronik_servo_lite.forward()
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) < 100) {
        kitronik_servo_lite.stop()
    }
})
