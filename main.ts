let n = 0
while (!(input.buttonIsPressed(Button.B))) {
    if (true) {
    	
    }
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showString("T=")
        basic.showNumber(input.temperature())
        basic.showString("DEGRES")
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(25)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(45)
})
