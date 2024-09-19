basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.ringTone(988)
    } else {
        music.stopAllSounds()
    }
})
