namespace SpriteKind {
    export const Weaponm = SpriteKind.create()
    export const WeaponG = SpriteKind.create()
    export const CutScene = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jc == 0) {
        GunMan.vy = -250
        jc += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.WeaponG, function (sprite, otherSprite) {
    otherSprite.destroy()
    WeaponNum = 2
    info.setScore(8)
    Weapon.setImage(img`
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        .........bbbbbbbbbbbbbbbbb
        eeeeeeebbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeff...eeeeeeee...
        eeeee.....................
        ee........................
        ..........................
        ..........................
        ..........................
        ..........................
        `)
    pause(20000)
    WeaponNum = 1
    Weapon.setImage(img`
        .......................
        .......................
        .......................
        .......................
        ........ff........f....
        ....eebbbbbbbbeeeeff...
        eeeeeebbbbbbbbefeefff..
        eeeeeebbbbbbbbeeee.....
        eee..eeff.ccc..........
        ....eee...ccc..........
        ....ee.....ccc.........
        ...........ccc.........
        ............ccc........
        ............ccc........
        .......................
        `)
    info.setScore(31)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (WeaponNum == 1) {
        B = 1
        RifleAnim()
        pause(200)
        if (info.score() >= 1) {
            info.setScore(31)
        } else {
            info.setScore(30)
        }
        B = 0
    }
    if (WeaponNum == 2) {
        B = 1
        Weapon.setImage(img`
            ..........................
            ..........................
            ..........................
            ..........................
            ..........................
            ..........................
            .........bbbbbbbbbbbbbbbbb
            eeeeeeebbbbbbbbbbbbbbbbbbb
            eeeeeeeeeeff....eeeeeee...
            eeeee.....................
            ee........................
            ..........................
            ..........................
            ..........................
            ..........................
            `)
        while (info.score() < 8) {
            ShotGunAnim()
        }
        pause(100)
        B = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    CutScene.setImage(img`
        fffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666
        ffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666666666666666666666666666666666666666666
        ffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666666666666666666666666666666666666666666666666
        ffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666666666
        fffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996666666666666666666666666666666666666666666666666666666666
        fffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666666666666666666666666666666666666666666666666666666666666
        fffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666666666666666666666
        ffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666
        ffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999966666666666666666666666666666666666666666666666666666666666666666666666666
        ffffffffff999999999999999999999999999999999999999999999999999999999999999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666
        fffffffffff9999999999b999999999999999999999999999999999999999999999999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666
        fffffffffff999999bbbbbb99999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        fffffffffff9bbbbbbbbbbbb9999999999999999999999999999999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        ffffffffbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        fffbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbb99999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbb999999966666666666666666666666666666666666666666666666666666666666ffff6666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbbb9966666666666666666666666666666666666666666666666666666666666ffffccccf666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666ffffccccccccf666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666ffffccccccccccccf666666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666fffffcccccccccccccccccf66666666666666666666666666666666666666666666666666666666666666
        bbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666ffffccccccccccccccccccccccf66666666666666666666666666666666666666666666666666666666666666
        bbbbbbb666666666666666666666666666666666666666666666666666666666666ffffccccccccccccccccccccccccccf66666666666666666666666666666666666666666666666666666666666666
        bbb666666666666666666666666666666666666666666666666666666666666ffffcccccccccccccccccccccccccccccccf6666666666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666ffffcccccccccccccccccccccccccccccccccccf6666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666fffffcccccccccccccccccccccccccccccccccccccccf6666666666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666ffffccccccccccccccccccccccccccccccccccccccccccccf6666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666ffffcccccccccccccccccccccccccccccccccccccccccccccccccf666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666ffffccccccccccccccccccccccccccccccccccccccccaaaccccccccccf666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666fffffcccccccccccccccccccccccccccccccccccccccaaaaaaaaccccccccccf666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666ffffcccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccccccccccf66666666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666ffffcccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccf66666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666ffffccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccf66666666666666666666666666666666666666666666666666666666666
        666666666666666666666ffffcccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccf6666666666666666666666666666666666666666666666666666666666
        666666666666666666fffccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccf6666666666666666666666666666666666666666666666666666666666
        6666666666666666666fccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccf6666666666666666666666666666666666666666666666666666666666
        6666666666666666666fcccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccf666666666666666666666666666666666666666666666666666666666
        6666666666666666666fccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccf666666666666666666666666666666666666666666666666666666666
        6666666666666666666fcccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccf666666666666666666666666666666666666666666666666666666666
        6666666666666666666fcccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccf66666666666666666666666666666666666666666666666666666666
        66666666666666666666fccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccf66666666666666666666666666666666666666666666666666666666
        66666666666666666666fccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccf66666666666666666666666666666666666666666666666666666666
        66666666666666666666fccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccf6666666666666666666666666666666666666666666666666666666
        66666666666666666666fccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccf6666666666666666666666666666666666666666666666666666666
        66666666666666666666fccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccf6666666666666666666666666666666666666666666666666666666
        666666666666666666666fcccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccf6666666666666666666666666666666666666666666666666666669
        666666666666666666666fccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccf666666666666666666666666666666666666666666666666666699
        666666666666666666666fccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccf666666666666666666666666666666666666666666666666666999
        666666666666666666666fccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccf666666666666666666666666666666666666666666666666669999
        6666666666666666666666fcccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccf66666666666666666666666666666666666666666666666669999
        6666666666666666666666fcccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccf66666666666666666666666666666666666666666666666699999
        6666666666666666666666fcccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccf66666666666666666666666666666666666666666666666999999
        6666666666666666666666fcccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccf6666666666666666666666666666666666666666666669999999
        6666666666666666666666fcccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccf6666666666666666666666666666666666666666666699999999
        66666666666666666666666fcccccccccccccffffcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccf6666666666666666666666666666666666666666666999999999
        66666666666666666666666fccccccccccccffffbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf666666666666666666666666666666666666666669999999999
        66666666666666666666666fcccccccccccfffbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf666666666666666666666666666666666666666669999999999
        66666666666666666666666fccccccccccbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf666666666666666666666666666666666666666699999999999
        66666666666666666666666fccccccbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf66666666666666666666666666666666666666999999999999
        666666666666666666666666fccbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf66666666666666666666666666666666666669999999999999
        66666666666666666666666eebbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf66666666666666666666666666666666666699999999999999
        66666666666666666666eeeeeebbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf66666666666666666666666666666666666999999999999999
        66666666666666666eeeeeeeeebbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccf6666666666666666666666666666666666999999999999999
        666666666666666eeeeeeeeeeebbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf6666666666666666666666666666666669999999999999999
        666666666666666eeeeeeeeeeeebbbbbbbbbbbbbbbceaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccf6666666666666666666666666666666699999999999999999
        666666f66666666eeeeeeeeeeeeebbbbbbbbbbbfccceaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccf666666666666666666666666666666999999999999999999
        666666ff6666666eeeeeeeeeeeeebbbbbbbbfffffcceaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccf666666666666666666666666666669999999999999999999
        666666fff666666eeeeeeeeeeeeebbbbbbfffffffcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccffff666666666666666666666666666699999999999999999999
        666666ffff66bbbeeeeeeeeeeeeebbbfffffffffffccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccffff6666666666666666666666666666666999999999999999999999
        666666fffbbbbbbeeeeeeeeeeeeecccfffffffffffccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccffff66666666666666666666666666666666666999999999999999999999
        6666666bbbbbbbbbeeeeeeeeee6fcccfffffffffffccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff666666666666666666666666666666666666669999999999999999999999
        6666666bbbbbbbbbbeeeeee6666fccccffffffffffccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff6666666666666666666666666666666666666666699999999999999999999999
        6666666bbbbbbbbbbb666666666fccccffffffffffcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff66666666666666666666666666666666666666666666999999999999999999999999
        6666666bbbbbbbbb66666666666fccccffffffffffcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff666666666666666666666666666666666666666666666669999999999999999999999999
        66666666bbbb6666666666666666fcccffffffffffcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff6666666666666666666666666666666666666666666666666699999999999999999999999999
        6666666666666666666666666666fcccffffffffffcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff66666666666666666666666666666666666666666666666666666699999999999999999999999999
        6666666666666666666666666666fcccfffffffffccccaaaaaaaaaaaaaaaaaaaaaaaaaafffff666666666666666666666666666666666666666666666666666666666999999999999999999999999999
        66666666666666666666666666666fccfffffffffccccaaaaaaaaaaaaaaaaaaaaaaffff66666666666666666666666666666666666666666666666666666666666669999999999999999999999999999
        66666666666666666666666666666fccfffffffffccccaaaaaaaaaaaaaaaaaaffff666666666666666666666666666666666666666666666cc6666666666666666699999999999999999999999999999
        66666666666666666666666666666fcffffffffffccccaaaaaaaaaaaaaaffff6666666666666666666666666666666666666666666666cccccc666666666666666999999999999999999999999999999
        66666666666666666666666666666fcfffffffffcccccaaaaaaaaaaffff66666666666666666666666666666666666666666666666cccccccccc66666666666669999999999999999999999999999999
        666666666666666666666666666666ffffffffffcccccaaaaaaffff666666666666666666666666666666666666666666666666cccccccccccccc66666666666999999999999999999999999999999bb
        66666666666666666666666666666ffffffffffccccccaaffff66666666666666666666666666666666666666666666666666666cccccccccccccc6666666666999999999999999999999999999bbbbb
        6666666666666666666666666666fffffffffffccccffff666666666666666666666666666666666666666666666666666666666ccccccccccccccc66666666999999999999999999999999bbbbbbbbb
        6666666666666666666666666666ffffffffffcffff66666666666666666666666666666666666666666666666666666666666666ccccccccccccccc6666669999999999999999999999bbbbbbbbbbbb
        6666666666666666666666666666fffffffffff6666666666666666666666666666666666666666666666666666666666666666666cccccccccccccc6666699999999999999999999bbbbbbbbbbbbbbb
        66666666666666666666666666666ffffffff6666666666666666666666666666666666666666666666666666666666666666666666cccccccccccccc66999999999999999999bbbbbbbbbbbbbbbbbbb
        66666666666666666666666666666fffffff66666666666666666666666666666666666666666666666666666666666666666666666ccccccccccccccc9999999999999999bbbbbbbbbbbbbbbbbbb999
        66666666666666666666666666666fffff66666666666666666666666666666666666666666666666666666666666666666666666666ccccccccccccccc999999999999bbbbbbbbbbbbbbbbbb9999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ccccccccccccccc9999999bbbbbbbbbbbbbbbbbbb9999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699ccccccccccccccc999bbbbbbbbbbbbbbbbbbb9999999999999
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999ccccccccccccccbbbbbbbbbbbbbbbbbb99999999999999999
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999ccccccccccbbbbbbbbbbbbbbbbbbb99999999999999999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999ccccccbbbbbbbbbbbbbbbbbb999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999ccbbbbbbbbbbbbbbbbbb999999999999999999999999999
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999bbbbbbbbbbbbbbbbbb9999999999999999999999999999999
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999bbbbbbbbbbbbbbbbbb9999999999999999999999999999999999
        666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999bbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999
        666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999bbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999bbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999bbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999bbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999
        6666666666666666666666666666666666666666666666666666666666666666669999999999999999999999bbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999
        6666666666666666666666666666666666666666666666666666666666666699999999999999999999999bbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999
        6666666666666666666666666666666666666666666666666666666666999999999999999999999999bbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999
        666666666666666666666666666666666666666666666666666666699999999999999999999999bbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999
        666666666666666666666666666666666666666666666666666999999999999999999999999bbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999
        666666666666666666666666666666666666666666666666999999999999999999999999bbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666999999999999999999999999bbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999
        66666666666666666666666666666666666666666999999999999999999999999bbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999
        66666666666666666666666666666666666669999999999999999999999999bbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999
        6666666666666666666666666666666669999999999999999999999999bbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        6666666666666666666666666666669999999999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        66666666666666666666666666999999999999999999999999bbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        66666666666666666666666699999999999999999999999bbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    CutsceneVar = 1
    for (let index = 0; index < 4; index++) {
        Zombie1.destroy()
    }
    CutScene.setStayInScreen(true)
    GunMan.setFlag(SpriteFlag.Invisible, true)
    Zombie1.setFlag(SpriteFlag.Invisible, true)
    Weapon.setFlag(SpriteFlag.Invisible, true)
    Shotgun.setFlag(SpriteFlag.Invisible, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (B == 0) {
        if (WeaponNum == 1 && info.score() > 0) {
            info.changeScoreBy(-1)
            music.pewPew.play()
            projectile = sprites.createProjectileFromSprite(img`
                5 5 5 5 5 5 4 
                `, GunMan, 550, 0)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            Shell = sprites.createProjectileFromSprite(img`
                5 5 5 5 b . . 
                `, GunMan, -65, -48)
            scene.cameraShake(2, 100)
            pause(200)
            Shell.ay = 800
        }
        if (WeaponNum == 2 && info.score() > 0) {
            info.changeScoreBy(-1)
            music.sonar.play()
            projectile = sprites.createProjectileFromSprite(img`
                5 4 
                `, GunMan, 325, 125)
            projectile = sprites.createProjectileFromSprite(img`
                5 4 
                `, GunMan, 375, 55)
            projectile = sprites.createProjectileFromSprite(img`
                5 4 
                `, GunMan, 400, 0)
            projectile = sprites.createProjectileFromSprite(img`
                5 4 
                `, GunMan, 375, -55)
            projectile = sprites.createProjectileFromSprite(img`
                5 4 
                `, GunMan, 325, -125)
            scene.cameraShake(2, 200)
            Shell = sprites.createProjectileFromSprite(img`
                4 2 2 2 b . . 
                `, GunMan, -65, -48)
            Shell.ay = 800
            pause(500)
        }
    }
})
function ShotGunAnim () {
    Weapon.setImage(img`
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        .........bbbbbbbbbbbbbbbbb
        eeeeeeebbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeff....eeeeeee...
        eeeee.....................
        ee......522...............
        ..........................
        ..........................
        ..........................
        ..........................
        `)
    pause(100)
    Weapon.setImage(img`
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        .........bbbbbbbbbbbbbbbbb
        eeeeeeebbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeff....eeeeeee...
        eeeee......522............
        ee........................
        ..........................
        ..........................
        ..........................
        ..........................
        `)
    pause(100)
    Weapon.setImage(img`
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        .........bbbbbbbbbbbbbbbbb
        eeeeeeebbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeff522.eeeeeee...
        eeeee.....................
        ee........................
        ..........................
        ..........................
        ..........................
        ..........................
        `)
    pause(100)
    Weapon.setImage(img`
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        .........bbbbbbbbbbbbbbbbb
        eeeeeeebbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeff....eeeeeee...
        eeeee.....................
        ee........................
        ..........................
        ..........................
        ..........................
        ..........................
        `)
    info.changeScoreBy(1)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
	
})
function RifleAnim () {
    Weapon.setImage(img`
        .......................
        .......................
        .......................
        .......................
        ........ff........f....
        ....eebbbbbbbbeeeeff...
        eeeeeebbbbbbbbefeefff..
        eeeeeebbbbbbbbeeee.....
        eee..eeff..............
        ....eee........ccc.....
        ....ee.........ccc.....
        ................ccc....
        ................ccc....
        .................ccc...
        .................ccc...
        `)
    pause(500)
    Weapon.setImage(img`
        .......................
        .......................
        .......................
        .......................
        ........ff........f....
        ....eebbbbbbbbeeeeff...
        eeeeeebbbbbbbbefeefff..
        eeeeeebbbbbbbbeeee.....
        eee..eeff..............
        ....eee................
        ....ee.................
        .......................
        .......................
        .......................
        .......................
        `)
    pause(500)
    Weapon.setImage(img`
        .......................
        .......................
        .......................
        .......................
        ........ff........f....
        ....eebbbbbbbbeeeeff...
        eeeeeebbbbbbbbefeefff..
        eeeeeebbbbbbbbeeee.....
        eee..eeff..............
        ....eee........ccc.....
        ....ee.........ccc.....
        ................ccc....
        ................ccc....
        .................ccc...
        .................ccc...
        `)
    pause(150)
    Weapon.setImage(img`
        .......................
        .......................
        .......................
        .......................
        ........ff........f....
        ....eebbbbbbbbeeeeff...
        eeeeeebbbbbbbbefeefff..
        eeeeeebbbbbbbbeeee.....
        eee..eeff..............
        ....eee......ccc.......
        ....ee.......ccc.......
        ..............ccc......
        ..............ccc......
        ...............ccc.....
        ...............ccc.....
        `)
    pause(150)
    Weapon.setImage(img`
        .......................
        .......................
        .......................
        .......................
        ........ff........f....
        ....eebbbbbbbbeeeeff...
        eeeeeebbbbbbbbefeefff..
        eeeeeebbbbbbbbeeee.....
        eee..eeff..............
        ....eee....ccc.........
        ....ee.....ccc.........
        ............ccc........
        ............ccc........
        .............ccc.......
        .............ccc.......
        `)
    pause(100)
    Weapon.setImage(img`
        .......................
        .......................
        .......................
        .......................
        ........ff........f....
        ....eebbbbbbbbeeeeff...
        eeeeeebbbbbbbbefeefff..
        eeeeeebbbbbbbbeeee.....
        eee..eeff.ccc..........
        ....eee...ccc..........
        ....ee.....ccc.........
        ...........ccc.........
        ............ccc........
        ............ccc........
        .......................
        `)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    GunMan.setImage(img`
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        `)
    pause(500)
    GunMan.setImage(img`
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a 
        `)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    if (WeaponNum == 1) {
        Zombie1Health.value += -35
        ZombieHealthVar += -35
    }
    if (WeaponNum == 2) {
        Zombie1Health.value += -25
        ZombieHealthVar += -25
    }
    if (ZombieHealthVar <= 0) {
        otherSprite.destroy()
    }
})
let Shell: Sprite = null
let projectile: Sprite = null
let CutsceneVar = 0
let ZombieHealthVar = 0
let Zombie1Health: StatusBarSprite = null
let B = 0
let Shotgun: Sprite = null
let Weapon: Sprite = null
let Zombie1: Sprite = null
let jc = 0
let WeaponNum = 0
let GunMan: Sprite = null
let CutScene: Sprite = null
CutScene = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.CutScene)
GunMan = sprites.create(img`
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
WeaponNum = 1
controller.moveSprite(GunMan, 100, 0)
info.setLife(100)
tiles.setTilemap(tilemap`level1`)
jc = 0
Zombie1 = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 f f f f 7 7 7 
    2 2 2 2 2 7 7 7 7 7 7 7 7 7 7 7 
    1 2 1 1 2 2 2 7 7 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 7 7 7 7 7 7 7 7 7 
    2 2 2 2 2 2 7 7 7 7 7 7 7 7 7 7 
    2 2 2 2 7 7 7 7 7 7 7 7 7 7 7 6 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 
    7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 
    7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Enemy)
Zombie1.setPosition(144, 31)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbddddddddddddddddddddddddddddddddddd
    ddddddddddddddbbdddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddbdddddddddddddddddddddddddddddddddbbbbbbddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbbbbbbbbbbdddddddddddddddddddddddddddbbdddddddddddddddddddddddddbbdddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddbbbddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddbbbbbbdddddddddddddddddddddddddbbbbbbddbbdddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbdddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbbbdddddddddddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddbbdddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddbbdddddddddddddddddddddddddddddddddbbddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddbbddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddbbbbbbdddddddddddddbbbbbbbddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddbbdddbbbbdddddddddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddbbbdddddddddbbbbbdddddddddddddddddddddddddddddddddddddddbbbdddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddbbdddddddddddddddddbbbbbbddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddbbbbdddddddddddddddddddddddddbbbbbddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddbbbddddbbbbdddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddbddddddddddddddddddddddddddddddddddbbdddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddbbddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddbbdddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddbbbbdddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddbbbbbdddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddbbbbbbdddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbdddddddddddddddbbbbbbbbdddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
scene.cameraFollowSprite(GunMan)
Weapon = sprites.create(img`
    .......................
    .......................
    .......................
    .......................
    ........ff........f....
    ....eebbbbbbbbeeeeff...
    eeeeeebbbbbbbbefeefff..
    eeeeeebbbbbbbbeeee.....
    eee..eeff.ccc..........
    ....eee...ccc..........
    ....ee.....ccc.........
    ...........ccc.........
    ............ccc........
    ............ccc........
    .......................
    `, SpriteKind.Weaponm)
info.setScore(31)
Shotgun = sprites.create(img`
    ..........................
    ..........................
    ..........................
    ..........................
    ..........................
    ..........................
    .........bbbbbbbbbbbbbbbbb
    eeeeeeebbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeff....eeeeeeee..
    eeeee.....................
    ee........................
    ..........................
    ..........................
    ..........................
    ..........................
    `, SpriteKind.WeaponG)
Shotgun.setPosition(11, 200)
B = 0
Zombie1Health = statusbars.create(20, 4, StatusBarKind.Health)
Zombie1Health.value = 100
Zombie1Health.attachToSprite(Zombie1)
Zombie1Health.setOffsetPadding(0, 2)
ZombieHealthVar = 100
Zombie1.setFlag(SpriteFlag.GhostThroughSprites, false)
forever(function () {
    if (CutsceneVar == 0) {
        pause(5000)
        Zombie1 = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 f f f f 7 7 7 
            2 2 2 2 2 7 7 7 7 7 7 7 7 7 7 7 
            1 2 1 1 2 2 2 7 7 7 7 7 7 7 7 7 
            2 2 2 2 2 2 2 7 7 7 7 7 7 7 7 7 
            2 2 2 2 2 2 7 7 7 7 7 7 7 7 7 7 
            2 2 2 2 7 7 7 7 7 7 7 7 7 7 7 6 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 
            7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 
            7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Enemy)
        Zombie1.setPosition(GunMan.x + 100, 31)
        Zombie1Health = statusbars.create(20, 4, StatusBarKind.Health)
        Zombie1Health.value = 100
        Zombie1Health.attachToSprite(Zombie1)
        Zombie1Health.setOffsetPadding(0, 2)
        ZombieHealthVar = 100
        Zombie1.follow(GunMan, 50)
        Zombie1.setFlag(SpriteFlag.GhostThroughSprites, false)
    }
})
forever(function () {
    GunMan.ay = 1150
    Zombie1.ay = 1150
})
forever(function () {
    if (jc == 1) {
        pause(500)
        jc = 0
    }
})
forever(function () {
    Weapon.setPosition(GunMan.x + 3, GunMan.y + 0)
})
