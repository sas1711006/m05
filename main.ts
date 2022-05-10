for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . # # . .
        `)
}
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1023
    )
})
