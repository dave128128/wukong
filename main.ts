input.onButtonPressed(Button.A, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, 160)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, -140)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 180)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, 100)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, -140)
})
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, -180)
basic.pause(500)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 180)
basic.showString("DAVID")
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
})
