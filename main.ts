namespace SpriteKind {
    export const Weaponm = SpriteKind.create()
    export const WeaponG = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    GunMan.vy = -300
    jc += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.WeaponG, function (sprite, otherSprite) {
    otherSprite.destroy()
    WeaponNum = 2
    Weapon.setImage(img`
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        .........bbbbbbbbbbbbbbbbb
        eeeeeeebbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeff..............
        eeeee.....................
        ee........................
        ..........................
        ..........................
        ..........................
        ..........................
        `)
    pause(20000)
    WeaponNum = 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (WeaponNum == 1) {
        B = 1
        info.setScore(0)
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
        pause(200)
        if (info.score() > 1) {
            info.setScore(30)
        }
    }
    if (WeaponNum == 2) {
        B = 1
        info.setScore(8)
        B = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (B == 0) {
        if (WeaponNum == 1 && info.score() > 0) {
            info.changeScoreBy(-1)
            projectile = sprites.createProjectileFromSprite(img`
                5 5 5 5 5 5 4 
                `, GunMan, 550, 0)
            Shell = sprites.createProjectileFromSprite(img`
                5 5 5 5 b . . 
                `, GunMan, -65, -48)
            scene.cameraShake(2, 100)
            pause(200)
            Shell.ay = 800
        }
        if (WeaponNum == 2) {
            info.changeScoreBy(-1)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
let Shell: Sprite = null
let projectile: Sprite = null
let B = 0
let Weapon: Sprite = null
let WeaponNum = 0
let GunMan: Sprite = null
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
tiles.setTilemap(tilemap`level1`)
let jc = 0
let Zombie1 = sprites.create(img`
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
info.setScore(30)
let Shotgun = sprites.create(img`
    ..........................
    ..........................
    ..........................
    ..........................
    ..........................
    ..........................
    .........bbbbbbbbbbbbbbbbb
    eeeeeeebbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeff..............
    eeeee.....................
    ee........................
    ..........................
    ..........................
    ..........................
    ..........................
    `, SpriteKind.WeaponG)
Shotgun.setPosition(11, 200)
B = 0
forever(function () {
    GunMan.ay = 1150
    Zombie1.ay = 1150
})
forever(function () {
    Weapon.setPosition(GunMan.x + 3, GunMan.y + 0)
})
forever(function () {
    if (jc == 1) {
        pause(500)
        jc = 0
    }
})
forever(function () {
    if (true) {
    	
    }
})
