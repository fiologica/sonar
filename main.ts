let sonar2 = 0
let distance = 0
loops.everyInterval(1, function () {
    sonar2 = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P10,
    PingUnit.MicroSeconds
    )
    distance = sonar2 * 0.034 / 10
    if (distance <= 20) {
        kitronik_servo_lite.stop()
    } else if (distance > 20) {
        kitronik_servo_lite.forward()
    }
})
basic.forever(function () {
    basic.showNumber(distance)
    serial.writeValue("Distance", distance)
})
