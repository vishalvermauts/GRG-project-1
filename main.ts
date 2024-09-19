basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.ringTone(784)
    } else {
        music.stopAllSounds()
    }
})
