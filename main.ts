basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(300)
})
