input.onGesture(Gesture.Shake, function () {
    stappen += 1
})
let stappen = 0
basic.forever(function () {
    basic.showNumber(stappen)
})
