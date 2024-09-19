basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        music.ringTone(784)
    } else {
        music.stopAllSounds()
    }
})
