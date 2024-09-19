basic.forever(function () {
    record.startRecording(record.BlockingState.Blocking)
    music.setBuiltInSpeakerEnabled(false)
    record.playAudio(record.BlockingState.Blocking)
})
