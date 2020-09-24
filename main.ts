let celsius = 0
input.onButtonPressed(Button.A, function () {
    if (celsius == 10) {
        basic.showNumber(celsius)
        basic.showString("Ski Time!")
    } else if (celsius == 20) {
        basic.showNumber(celsius)
        basic.showString("Picnic Time!")
    } else if (celsius == 30) {
        basic.showNumber(celsius)
        basic.showString("Beach Time!")
    } else if (celsius == 40) {
        basic.showNumber(celsius)
        basic.showString("It is better to stay at home")
    } else {
        basic.showNumber(celsius)
    }
})
basic.forever(function () {
    celsius = input.temperature()
})
