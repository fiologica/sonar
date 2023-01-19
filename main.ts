let sonar2 = sonar.ping(
DigitalPin.P8,
DigitalPin.P10,
PingUnit.Centimeters
) / 10
basic.showNumber(sonar2)
servos.P1.setRange(0, 180)
servos.P2.setRange(0, 180)
basic.forever(function () {
    sonar2 += sonar.ping(
    DigitalPin.P8,
    DigitalPin.P10,
    PingUnit.Centimeters
    ) / 10
    basic.showNumber(sonar2)
    if (sonar2 >= 5) {
        servos.P1.run(50)
        servos.P2.run(50)
    } else {
        servos.P1.stop()
        servos.P2.stop()
    }
})
