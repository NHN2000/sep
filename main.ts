namespace SpriteKind {
    export const spand = SpriteKind.create()
    export const tekstilaffald = SpriteKind.create()
    export const door = SpriteKind.create()
    export const maskine = SpriteKind.create()
    export const foodTwo = SpriteKind.create()
    export const foodThree = SpriteKind.create()
    export const door2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.tekstilaffald, function (sprite, otherSprite) {
    sprites.destroy(tshirtProjektil)
    info.changeScoreBy(1)
})
function levelThree () {
    game.splash("Undgaa CO2 og kast T-shirten")
    sprites.destroy(door1)
    info.setLife(3)
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffff
        fffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888ffffffffffffff
        88888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888fffffffff
        88888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888
        88888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888
        888888866b9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888
        99999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888
        99996666688ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888
        888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888
        8888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888
        88888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888
        8888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888
        8888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888
        88888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888
        88888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888888
        888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888888
        888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888
        8888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888
        88888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888888888
        888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888
        88888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888888888888
        88888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888888888888
        888888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888888888888888
        88888888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888888888888888
        88888888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888888888888888888
        888888888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888
        88888888888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888888888888888888888
        888888888888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888888886866666666666b9999888
        88888888888888888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888886999999999999999999999999999999999999999999888
        888888888888888888888888888888888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888889999999999999999999999966666666666666688888888
        8888888888888888888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888888888888888888888888888888888888888
        `)
    mySprite.setPosition(73, 14)
    maskine = sprites.create(img`
        f c c c c c c c c c c c c c c f 
        c f c c c c c c c c c c c c f c 
        c c f c c c c c c c c c c f c c 
        c c c f c c c c c c c c f c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        c c c c f c c c c c c f c c c c 
        `, SpriteKind.maskine)
    maskine.setPosition(72, 93)
    bolde = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . 1 1 . . . 1 1 1 . . . . . . 
        . . 1 1 . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bolde.setPosition(20, 23)
    bolde.setVelocity(25, 0)
    bolde.setBounceOnWall(true)
    boldTwo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . 1 1 . . . 1 1 1 . . . . . . 
        . . 1 1 . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    boldTwo.setVelocity(25, 0)
    boldTwo.setPosition(57, 52)
    boldTwo.setBounceOnWall(true)
    boldThree = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . 1 1 . . . 1 1 1 . . . . . . 
        . . 1 1 . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    boldThree.setPosition(53, 76)
    boldThree.setVelocity(25, 0)
    boldThree.setBounceOnWall(true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tshirtProjektil = sprites.createProjectileFromSprite(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........5....5.............
        ..........552..255............
        .........5555225555...........
        .........2255555522...........
        ...........555555.............
        ...........555555.............
        ...........555555.............
        ...........555555.............
        ...........222222.............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, mySprite, 0, 100)
})
function levelOne () {
    info.setScore(0)
    mySprite = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 e f . . . . 
        . . . f 1 e e e e e 1 e f . . . 
        . . . f e e f f f f e 1 f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d 3 d d 3 d f e f . . 
        . . f e e f d d d d f e e f . . 
        . f e e f 3 f f f f 3 f e e f . 
        . . f f 3 3 5 3 3 5 3 d f f . . 
        . . . f d f 3 5 5 3 f f d f . . 
        . . . f d f 3 3 3 3 3 f f . . . 
        . . . f f 3 5 3 3 5 3 3 f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(78, 17)
    Tshirt = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........5....5.............
        ..........552..255............
        .........5555225555...........
        .........2255555522...........
        ...........555555.............
        ...........555555.............
        ...........555555.............
        ...........555555.............
        ...........222222.............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.tekstilaffald)
    Tshirt.setBounceOnWall(true)
    Tshirt.setPosition(30, 98)
    Tshirt.setVelocity(50, 0)
    metal = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............dd..............
        ............dd................
        ..........dd..................
        .........dd...................
        .........d....................
        .........ddddddddd............
        .........ddddddddd............
        .........deeeeeedd............
        .........ddddddddd............
        .........deeeeeedd............
        .........ddddddddd............
        .........deeeeeedd............
        .........ddddddddd............
        ..........ddddddd.............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.spand)
    metal.setPosition(60, 98)
    metal.setVelocity(50, 0)
    metal.setBounceOnWall(true)
    plastik = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..........6996................
        .........9....9...............
        ........9......9..............
        ........9......9..............
        ........9......9..............
        ......996999999699............
        ......999999999999............
        ......999999999999............
        ......999999999999............
        .......9999999999.............
        .......9999999999.............
        .......9999999999.............
        ........99999999..............
        ........99999999..............
        ........69999996..............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.spand)
    plastik.setPosition(100, 98)
    plastik.setVelocity(50, 0)
    plastik.setBounceOnWall(true)
    mad = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........77.................
        ...........777...777..........
        ...........777..777777........
        .............7777777..........
        ...........22277222...........
        ..........2222222222..........
        .........222222222222.........
        ...........22222222...........
        ............222222............
        ............222222............
        ............222222............
        ...........22222222...........
        .........222222222222.........
        .........222222222222.........
        ..........2222222222..........
        ............222222............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.spand)
    mad.setPosition(135, 102)
    mad.setVelocity(50, 0)
    mad.setBounceOnWall(true)
    controller.moveSprite(mySprite)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.maskine, function (sprite, otherSprite) {
    sprites.destroy(tshirtProjektil)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(garnOne)
    info.changeScoreBy(1)
})
info.onScore(-2, function () {
    game.gameOver(false)
    levelOne()
})
info.onScore(2, function () {
    levelTwo()
})
sprites.onOverlap(SpriteKind.foodThree, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(garnThree)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    levelThree()
})
sprites.onOverlap(SpriteKind.foodTwo, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(garnTwo)
    info.changeScoreBy(1)
})
function levelFive () {
    game.splash("Gaa ind i genbrugsbutikken")
    sprites.destroy(tshirtProjektil)
    sprites.destroy(garnOne)
    sprites.destroy(garnTwo)
    sprites.destroy(garnThree)
    sprites.destroy(spirteLevelFour)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbb3333333333333333
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddb333333333333333333333
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1dddddddd3333333333333333333333
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddd33333333333777333333333
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbdd333333333337333737333333
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbd3333333333373333377333333
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbb33333333333333333333333333
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbb33333333333333333333333333
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbb333333333333377333337333333
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbb3333333333333373733373333333
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbb33333333333333333377733333333
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddc333333333333333333333333333333
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdd3333333333333333333333333333333333333
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbb3333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbb3333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbb3333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbb33333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbb3333333333fff33f33f33fffff33f33f3f3333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbb3333333333f3f33f33f3333f3333f33f3f3333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbb33333333333fff33f33f3333f3333f33ff33333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbb33333333333f3f33f33f3333f3333f33f3f3333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb33333333333fff333ff33333f3333f33f3f3333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbb333333333333333333333333333333333333333333
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bb333333333333333333333333333333333333333333
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b333333333333dd333333333333dd33333333333333
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7773333333333333d3333333333333d33333333333333
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333333335dddd5333333332dddd2333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555777777333333333552332553333332253352233333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555777777333333335555225555333322225522223333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555577777333333332255555522333355222222553333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555777333333333355555533333333222222333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555577333333333355555533333333222222333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555557333333333355555533333333222222333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333355555533333333222222333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333322222233333333555555333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775ff5555555333333333333333333333333333333333333333333
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755f5555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555333333333333333333333333333333333333333333
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555333333333333333333333333333333333333333333
        `)
    spirteLEvelFive = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f e 5 2 5 e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d 3 d d 3 d f e f . . 
        . . f e e f d d d d f e e f . . 
        . f e e f 3 f f f f 3 f e e f . 
        . . f f 3 3 5 3 3 5 3 d f f . . 
        . . . f d f 3 5 5 3 f f d f . . 
        . . . f d f 3 3 3 3 3 f f . . . 
        . . . f f 3 5 3 3 5 3 3 f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(spirteLEvelFive)
    door2 = sprites.create(img`
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.door2)
    door2.setPosition(109, 91)
}
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.spand, function (sprite, otherSprite) {
    sprites.destroy(tshirtProjektil)
    scene.cameraShake(4, 500)
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door2, function (sprite, otherSprite) {
    levelSix()
})
function levelFour () {
    game.splash("Grib garnnoeglerne")
    sprites.destroy(bolde)
    sprites.destroy(boldTwo)
    sprites.destroy(boldThree)
    sprites.destroy(mySprite)
    sprites.destroy(maskine)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff88ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff8888888fffffffffff88ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccc88888888888888888888888888888
        888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888fffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9999888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        9999888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    spirteLevelFour = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f e 5 2 5 e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d 3 d d 3 d f e f . . 
        . . f e e f d d d d f e e f . . 
        . f b b b b b b b b b b b b f . 
        . . f b b b b b b b b b b b . . 
        . . . b b b b b b b b b b f . . 
        . . . f b b b b b b b b b . . . 
        . . . f f b b b b b b b f . . . 
        . . . . f f b b b b b f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    spirteLevelFour.setPosition(76, 98)
    controller.moveSprite(spirteLevelFour)
    garnOne = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    garnOne.setVelocity(0, 50)
    garnOne.setPosition(30, 15)
    garnOne.setBounceOnWall(true)
    garnTwo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.foodTwo)
    garnTwo.setVelocity(0, 50)
    garnTwo.setPosition(62, 17)
    garnTwo.setBounceOnWall(true)
    garnThree = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.foodThree)
    garnThree.setVelocity(0, 50)
    garnThree.setPosition(109, 18)
    garnThree.setBounceOnWall(true)
}
function levelSix () {
    game.splash("TILLYKKE du har hjulpet miljoet")
    game.gameOver(true)
}
info.onScore(5, function () {
    levelFour()
})
info.onScore(8, function () {
    levelFive()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprites.destroy(tshirtProjektil)
    info.changeLifeBy(-1)
})
function levelTwo () {
    game.splash("Gaa ind i fabrikken")
    sprites.destroy(metal)
    sprites.destroy(mad)
    sprites.destroy(plastik)
    sprites.destroy(Tshirt)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f9999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff9999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f99999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999f99999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999ff9999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999ff9999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999f99999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999f99999
        999999999999999911111111111111111119999999999999999999999999999999999999999999999999999999999999991111111111111111111999999999999999999999999999999999999f999999
        999999999999999911111111111111111111999999999999999999999999999999999999999999999999999999999999991111111111111111111199999999999999999999999999999999999f999999
        999999999999999991111111111111111111999119999999999999999999999999999999999999999999999999999999999111111111111111111199911999999999999999999999999999999f999999
        999999999999911119111111111111111111991111199999999999999999999999999999999999999999999999999991111911111111111111111199111119999999999999999999999999999fff9999
        999999999999111111911111111111111119991111199999999999999999999999999999999999999999999999999911111191111111111111111999111119999999999999999999999999999fff9999
        999999999999111111111111111111111191111111119999999999999999999999999999999999999999999999999911111111111111111111119111111111999999999999999999999999999ff99999
        999999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999911111111111111111111111111111111999999999999999999999999999f999999
        999999999999911111111111111111111111111111119999999999999999999999999999999999999999999999999991111111111111111111111111111111999999999999999999999999999f999999
        991119999111191111111111111111111111111111199119999999999999111199999999999999999999111999911119111111111111111111111111111119911999999999999911119999999f999999
        911111991111111111111111111111111111111111191111999999999991111119999999999999999991111199111111111111111111111111111111111119111199999999999111111999999f999999
        911111911111111111111111111111111111111111191111999999999991111119111999999999999991111191111111111111111111111111111111111119111199999999999111111911199fff9999
        991111111111111111111111111111111111111111111111999999999999911111111199999999999999111111111111111111111111111111111111111111111199999999999991111111119fff9999
        911111111111111111111111111111111111111111111119999999991111911111111199999999999991111111111111111111111111111111111111111111111999999999111191111111119f999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd111111111111111111111111111111111111199999991111111111111199f999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd11111111111111111111111111111111111119111991111111111111111f199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd1111111111111111111111111111111111111111111111111111111111f1119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd111111111111111111111111111111111111111111111111111111111fff19999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd11111fff11111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd11111ff111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd111111f111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd111111ff11111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1dddddccdd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dccccd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1ddddccccd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1ddddccccd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dccccd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddccccd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bccccd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbccccd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbccccdddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbccccdddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbcccccccccccccccc
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbcccccccccccccccccc
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddcccccccccccccccccccccc
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1dddddddccccccccccccccccccccccc
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddcccccccccccccccccccccccc
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbdccccccccccccccccccccccccc
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbccccccccccccccccccccccccc
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbcccccccccccccccccccccccccc
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbccccccccccccccccccccccccccc
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbcccccccccccccccccccccccccccc
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbccccccccccccccccccccccccccccc
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbddccccccccccccccccccccccccccccccccccccc
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccfffcccffcccfffccfffccfccfcfccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccfccccfccfccfcfccfcfccfccfcfccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccffcccffffccfffccfffccfccffcccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccfccccfccfccfcfccffcccfccfcfccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccfccccfccfccfffccfcfccfccfcfccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbcccccccccccccccccccccccccccccccccccccccccc
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbcccccccccccccccccccccccccccccccccccccccccc
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77bcccccccccccccccccccccccccccccccccccccccccc
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b777cccccccccccccccccccccccc777ccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccccccccccccccccccc7ccc7c7cccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555777777cccccccccccccccccccccc7ccccc77cccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555777777cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555577777cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555777cccccccccccccccccccccc77ccccc7cccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555577cccccccccccccccccccccc7c7ccc7ccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555557ccccccccccccccccccccccccc777cccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775ff5555555cccccccccccccccccccccccccccccccccccccccccc
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755f5555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555cccccccccccccccccccccccccccccccccccccccccc
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755555555555ccccccccccccccccccccccccccccccccccccccccc
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555ccccccccccccccccccccccccccccccccccccccccc
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555555ccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555cccccccccccccccccccccccccccccccccccccccccc
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555cccccccccccccccccccccccccccccccccccccccccc
        `)
    door1 = sprites.create(img`
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.door)
    door1.setPosition(109, 91)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprites.destroy(tshirtProjektil)
    info.changeLifeBy(-1)
    pause(2000)
})
let door2: Sprite = null
let spirteLEvelFive: Sprite = null
let spirteLevelFour: Sprite = null
let garnTwo: Sprite = null
let garnThree: Sprite = null
let garnOne: Sprite = null
let mad: Sprite = null
let plastik: Sprite = null
let metal: Sprite = null
let Tshirt: Sprite = null
let boldThree: Sprite = null
let boldTwo: Sprite = null
let bolde: Sprite = null
let maskine: Sprite = null
let mySprite: Sprite = null
let door1: Sprite = null
let tshirtProjektil: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999dddddddddd99
    dd999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddd999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    dddddd99999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd999999999999999999999999999999999999999999999999ddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    ddddddd999999999999999999999999999999999ddd9999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999dd7777777777777dddddddd
    ddddddd999999999999999999999999999999ddddddd999999999999999999999999999999999999999dddddddddd999999999999999999999999999999999999999977777777777777777777ddddddd
    ddddddd9999999999999999999999999999ddddddddd999999999999999999999999999999999999999dddddddddd9999999999999999999999999999999999999777777777777777777777777dddddd
    ddddddd99999999999999999999999999dddddddddddd99999999999999999999999999999999999999ddddddddddd999999999999977777777777777777777777777777777777777777777777dddddd
    ddddddd9999999999999999999999999ddddddddddddd9999999999999999999999999999999999999dddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd999999999999999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd999999999997999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd999997777777799999999999dddddddddddddd999999999999999999999999dd999999999dddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd997777777777799999999999ddddddddddddddd9999999999999999999999ddddddd9999ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd77777777777779999999999dddddddddddddddd999999999999999999999dddddddddd99ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd77777777777779999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddddd77777777777777999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
    ddddd7777777777777777999999999dddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
    dddd77777777777777777999999ddddddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
    dddd77777777777777777ddddddddddddddddddddddddd99ddd999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
    ddd777777777777777777ddddddddddddddddddddddddd99dddd99999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
    ddd777777777777777777dddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
    dd7777777777777777777ddddddddddddddddddddddddddddddddd999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
    dd7777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
    d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777ddddd
    d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddd
    d77777777777777777777dddddddddddd77777dddddddddddddddd99999999999dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777dddd
    7777777777777777777777ddddddddddd7777777dddddddddddddd99999999999ddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777dddddddddd77777777dddddddddddddd9999999999dddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777ddddddd77777777777dddddddddddddddddddddd9dddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777dddd777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777dddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777dddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.splash("Kast T-shirten")
levelOne()
