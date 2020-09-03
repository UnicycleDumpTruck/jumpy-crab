namespace SpriteKind {
    export const Immunity = SpriteKind.create()
    export const Badge = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sub.vy == 0) {
        sub.setVelocity(0, -100)
    }
})
function displayDialog (text: string) {
    game.setDialogFrame(img`
        ..eeeeeeeeeeeeeeeeeeee..
        .e44ee44ee44ee44ee44eee.
        eee44ee44ee44ee44ee44e4e
        ee4eeeeeeeeeeeeeeeeee44e
        e44eebbbbbbbbbbbbbbee4ee
        e4eebbbbbbbbbbbbbbbbeeee
        eeeebbbbbbbbbbbbbbbbee4e
        ee4ebbbbbbbbbbbbbbbbe44e
        e44ebbbbbbbbbbbbbbbbe4ee
        e4eebbbbbbbbbbbbbbbbeeee
        eeeebbbbbbbbbbbbbbbbee4e
        ee4ebbbbbbbbbbbbbbbbe44e
        e44ebbbbbbbbbbbbbbbbe4ee
        e4eebbbbbbbbbbbbbbbbeeee
        eeeebbbbbbbbbbbbbbbbee4e
        ee4ebbbbbbbbbbbbbbbbe44e
        e44ebbbbbbbbbbbbbbbbe4ee
        e4eebbbbbbbbbbbbbbbbeeee
        eeeebbbbbbbbbbbbbbbbee4e
        ee4eebbbbbbbbbbbbbbee44e
        e44eeeeeeeeeeeeeeeeee4ee
        e4e44ee44ee44ee44ee44eee
        .eee44ee44ee44ee44ee44e.
        ..eeeeeeeeeeeeeeeeeeee..
        `)
    game.showLongText(text, DialogLayout.Center)
}
function displayStartScreen () {
    scene.setBackgroundColor(4)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeee.............eeeeeeeeeeeeeeeeeeeeeeeeeeee........eeeeeeeeeeeeeeeeeeeeeee..................................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed............eeeeeeeeeeeeeeeeeeeeeeeeeeeed.......eeeeeeeeeeeeeeeeeeeeeeed.................................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed............eeeeeeeeeeeeeeeeeeeeeeeeeeeed.......eeeeeeeeeeeeeeeeeeeeeeed.................................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed............eeeeeeeeeeeeeeeeeeeeeeeeeeeed.......eeeeeeeeeeeeeeeeeeeeeeed.................................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed............eeeeeeeeeeeeeeeeeeeeeeeeeeeed.......eeeeeeeeeeeeeeeeeeeeeeed.................................
        ...........................eeeeeeeeedddddddddddddeeeeeeeeee.........ddddddddeeeeeeeeeedddddddddd...eeeeeeeeedddddddddddddeeeeeeeeee.............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeedddddd................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed.....................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed.....................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed.....................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeedddddddddddddeeeeeeeeee.................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeeeeeeed................eeeeeeeeeed............eeeeeeeeed............eeeeeeeeeed............................
        ...........................eeeeeeeeed............eeeeedddddd................eeeeeeeeeeeeeeeeeee....eeeeeeeeed............eeeeedddddd............................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed............eeeeeeeeeeeeeeeeeeeeeeeeeeeed....dddeeeeeeeeeeeeeeeeeeeeeeed.................................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed............eeeeeeeeeeeeeeeeeeeeeeeeeeeed.......eeeeeeeeeeeeeeeeeeeeeeed.................................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed............eeeeeeeeeeeeeeeeeeeeeeeeeeeed.......eeeeeeeeeeeeeeeeeeeeeeed.................................
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeed............eeeeeeeeeeeeeeeeeeeeeeeeeeeed.......eeeeeeeeeeeeeeeeeeeeeeed.................................
        ............................ddddddddddddddddddddddddddd.............dddddddddddddddddddddddddddd........ddddddddddddddddddddddd.................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ..........eeeee.......eeeeee....eeeeeeeeeeeeeeee..eeeee.......eeeeee....eeeeeeeeeeeeeeee.......eeeeeeeeee.....eeeeeeeeeeeeeee.......eeeeee....eeeeee............
        ..........eeeeed......eeeeeed...eeeeeeeeeeeeeeeed.eeeeed......eeeeeed...eeeeeeeeeeeeeeeed......eeeeeeeeeed....eeeeeeeeeeeeeeed......eeeeeed...eeeeeed...........
        ..........eeeeed......eeeeeed...eeeeeeeeeeeeeeeed.eeeeed......eeeeeed...eeeeeeeeeeeeeeeed......eeeeeeeeeed....eeeeeeeeeeeeeeed......eeeeeed...eeeeeed...........
        ..........eeeeeeee..eeeeeeeed....ddddeeeeeedddddd.eeeeeeee..eeeeeeeed....ddddeeeeeedddddd...eeeeeeddddeeeeee..eeeeedddddddeeeeee....eeeeeed...eeeeeed...........
        ..........eeeeeeeed.eeeeeeeed........eeeeeed......eeeeeeeed.eeeeeeeed........eeeeeed........eeeeeed...eeeeeed.eeeeed......eeeeeed...eeeeeed...eeeeeed...........
        ..........eeeeeeeed.eeeeeeeed........eeeeeed......eeeeeeeed.eeeeeeeed........eeeeeed........eeedddd...eeeeeed.eeeeed......eeeeeed...eeeeeed...eeeeeed...........
        ..........eeeeeeeeeeeeeeeeeed........eeeeeed......eeeeeeeeeeeeeeeeeed........eeeeeed......eeeeed.......dddddd.eeeeed......eeeeeed...eeeeeed...eeeeeed...........
        ..........eeeeeeeeeeeeeeeeeed........eeeeeed......eeeeeeeeeeeeeeeeeed........eeeeeed......eeeeed..............eeeeed......eeeeeed...eeeeeed...eeeeeed...........
        ..........eeeeeeeeeeeeeeeeeed........eeeeeed......eeeeeeeeeeeeeeeeeed........eeeeeed......eeeeed..............eeeeed....eeeeeeeed....ddeeeeeeeeeedddd...........
        ..........eeeeeeeeeeeeeeeeeed........eeeeeed......eeeeeeeeeeeeeeeeeed........eeeeeed......eeeeed..............eeeeed....eeeeeeeed......eeeeeeeeeed..............
        ..........eeeeeddeeeddeeeeeed........eeeeeed......eeeeeddeeeddeeeeeed........eeeeeed......eeeeed..............eeeeed....eeedddddd......eeeeeeeeddd..............
        ..........eeeeed.eeed.eeeeeed........eeeeeed......eeeeed.eeed.eeeeeed........eeeeeed......eeeeed..............eeeeeeeeeeeeed............deeeeeed................
        ..........eeeeed.eeed.eeeeeed........eeeeeed......eeeeed.eeed.eeeeeed........eeeeeed......eeeeed..............eeeeeeeeeeeeed.............eeeeeed................
        ..........eeeeed..ddd.eeeeeed........eeeeeed......eeeeed..ddd.eeeeeed........eeeeeed.......deeeeee....eeeeee..eeeeeddeeeeeeee............eeeeeed................
        ..........eeeeed......eeeeeed........eeeeeed......eeeeed......eeeeeed........eeeeeed........eeeeeed...eeeeeed.eeeeed.eeeeeeeed...........eeeeeed................
        ..........eeeeed......eeeeeed........eeeeeeeeeee..eeeeed......eeeeeed........eeeeeeeeeee....eeeeeed...eeedddd.eeeeed.eeeeeeeeeee.........eeeeeed................
        ..........eeeeed......eeeeeed...eeeeeeeeeeeeeeeed.eeeeed......eeeeeed...eeeeeeeeeeeeeeeed....ddeeeeeeeeeed....eeeeed..ddeeeeeeeed........eeeeeed................
        ..........eeeeed......eeeeeed...eeeeeeeeeeeeeeeed.eeeeed......eeeeeed...eeeeeeeeeeeeeeeed......eeeeeeeeeed....eeeeed....eeeeeeeed........eeeeeed................
        ...........ddddd.......dddddd....dddddddddddddddd..ddddd.......dddddd....dddddddddddddddd.......dddddddddd.....ddddd.....dddddddd.........dddddd................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    game.setDialogFrame(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . e e e e e e e e e e e e e . 
        e e 4 4 4 4 4 4 4 4 4 4 4 e e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        e 4 4 e e e e e e e e e 4 4 e 
        e 4 4 e e e e e e e e e 4 4 e 
        e 4 4 e e e e e e e e e 4 4 e 
        e 4 4 e e e e e e e e e 4 4 e 
        e 4 4 e e e e e e e e e 4 4 e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        e e 4 4 4 4 4 4 4 4 4 4 4 e e 
        . e e e e e e e e e e e e e . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `)
    game.showLongText("Venture into the sea, study the animals. Press \"A\" to start.", DialogLayout.Bottom)
}
function sharkEncountered (mySprite: Sprite) {
    game.over(false, effects.dissolve)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprites.readDataString(otherSprite, "species") == "Shark") {
        sharkEncountered(otherSprite)
    } else {
        nonSharkEncountered(otherSprite)
    }
})
function caughtTenOfSpecies (num: number) {
    music.magicWand.play()
    current_immunity = num
    sub.say(immunity_idea_list[num], 1000)
    new_badge = sprites.create(immunity_badge_list[current_immunity], SpriteKind.Badge)
    new_badge.setPosition(12 * current_immunity - 4, 8)
    info.changeScoreBy(300)
    current_immunity = -1
    level += 0.1
    music.changeTempoBy(25)
    badges_earned += 1
    if (badges_earned >= 8) {
        music.stopAllSounds()
        game.over(true, effects.bubbles)
    }
}
function nonSharkEncountered (mySprite: Sprite) {
    music.baDing.play()
    mySprite.destroy()
    // Faster animals are worth more points.
    info.changeScoreBy(animal_caught_species_id_number)
    sub.startEffect(effects.trail, 500)
    animal_caught_species_id_number = sprites.readDataNumber(mySprite, "animal_index")
    num_animals_caught = num_caught_list[animal_caught_species_id_number]
    if (num_animals_caught < animals_needed_to_learn_immunity - 1) {
        num_caught_list[animal_caught_species_id_number] = num_animals_caught + 1
        sub.say("" + sprites.readDataString(mySprite, "species") + " #" + (num_animals_caught + 1), 500)
    } else if (num_animals_caught == animals_needed_to_learn_immunity - 1) {
        num_caught_list[animal_caught_species_id_number] = animals_needed_to_learn_immunity
        sub.say("" + sprites.readDataString(mySprite, "species") + " #" + (num_animals_caught + 1), 500)
        caughtTenOfSpecies(animal_caught_species_id_number)
    } else {
        sub.say("" + sprites.readDataString(mySprite, "species"), 500)
    }
}
function fillAnimalArrays () {
    immunity_idea_list = [
    "10 Crabs!",
    "10 Turtles!",
    "10 Green Fish!",
    "10 Octopodes!",
    "10 Pink Fish!",
    "10 Narwhals",
    "10 Rays!",
    "10 Whales!",
    "10 Pufferfish!"
    ]
    immunity_badge_list = [
    img`
        . . 4 4 . 4 . . 
        . 4 4 . . . 4 . 
        . 4 . . . 4 4 . 
        . 4 4 . . . 4 . 
        . 4 . . . 4 4 . 
        . 4 4 . . . 4 . 
        . 4 4 4 4 4 4 . 
        . . 4 4 4 4 . . 
        `,
    img`
        . . . 9 9 . . . 
        . . 9 7 8 9 . . 
        . 9 7 8 7 8 9 . 
        . 9 8 7 8 7 9 . 
        . 9 7 8 7 8 9 . 
        . 9 8 7 8 7 9 . 
        . . 9 8 7 9 . . 
        . . . 9 9 . . . 
        `,
    img`
        . . 9 . . 9 . . 
        . . 9 . . 9 . . 
        . 9 . . . . 9 . 
        . 9 . 9 . . 9 . 
        . 9 . . 9 . 9 . 
        . . 9 . 9 . 9 9 
        . . 9 . 9 . . 9 
        . . 9 . 9 . . 9 
        `,
    img`
        . . . f f f . . 
        . . f f f f f f 
        . . f f f f f f 
        . f f f f f f f 
        f f f f f f f . 
        f f f f f f f . 
        . f f f f f . . 
        . . . . f f . . 
        `,
    img`
        . . . . . . . . 
        . 3 3 . 3 3 . 2 
        3 3 2 2 2 3 2 . 
        3 6 b 3 2 3 2 3 
        3 6 3 2 2 3 6 3 
        3 6 3 3 6 3 3 6 
        . 3 2 3 2 6 3 6 
        . 3 6 . 2 2 3 . 
        `,
    img`
        . . . . 6 . . . 
        . . . 6 6 . . . 
        . . . 6 5 . . . 
        . . . 5 6 . . . 
        . . . 6 6 . . . 
        . . . 6 5 . . . 
        . . . 5 6 . . . 
        . . . 6 6 . . . 
        `,
    img`
        . . . b b b b b 
        . . . b . . b b 
        . . . b . b . b 
        . . . b b . . b 
        . . . b b b b b 
        . . b . . . . . 
        . b . . . . . . 
        b . . . . . . . 
        `,
    img`
        . . b . b b . . 
        . b . b . b b . 
        b b b . b . b b 
        b . . b . . . b 
        b . . b b . . . 
        . . . b b . . b 
        b . . b b . . . 
        2 2 2 2 2 2 2 2 
        `,
    img`
        e . . e . . . e 
        . e . e . . e . 
        . . e e e e . . 
        e e e d d e e e 
        . . e d d e . . 
        . . e e e e . . 
        . e . . e . e . 
        e . . . e . . e 
        `
    ]
    animal_image_list = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . 4 4 . . . . . . . . . . . 
        . . 4 4 . . . . . . . 4 4 . . . 
        . . 4 4 . . 4 . . . . . 4 4 . . 
        . . 4 4 4 4 4 . . 4 . . 4 4 . . 
        . 4 4 4 4 4 . . . 4 4 4 4 4 . . 
        . 4 4 . . . . . . . 4 4 4 4 4 . 
        . 4 . . . . . . . . . . . . 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . 4 4 4 4 f 4 f 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 . 4 . . . . . . 4 . 4 4 . 
        . 4 . . 4 . . . . . . 4 . . 4 . 
        . . 4 . . 4 . . . . 4 . . 4 . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . 7 7 7 . . . . . . . . 
        . . . . 7 7 7 . . . . . . . . . 
        . . . . 7 7 . . . . . 7 7 7 7 . 
        . . . . 7 8 . . . . . 7 7 7 7 7 
        . . . . 7 8 8 9 9 8 8 7 7 8 . . 
        . . . . 8 9 9 8 8 7 7 9 8 . . . 
        . f 7 7 8 9 9 8 8 7 7 9 9 . . . 
        7 7 7 7 7 8 7 7 9 9 8 8 7 7 . . 
        7 7 7 7 7 8 7 7 9 9 8 8 7 7 . . 
        . f 7 7 8 9 9 8 8 7 7 9 9 . . . 
        . . . . 8 9 9 8 8 7 7 9 8 . . . 
        . . . . 7 8 8 9 9 8 8 7 7 8 . . 
        . . . . 7 8 . . . . . 7 7 7 7 7 
        . . . . 7 7 . . . . . . 7 7 7 . 
        . . . . 7 7 7 . . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 8 . . . . 
        . . . . . . . . . 9 8 8 . . . . 
        . . . . . . . 8 8 9 8 8 . . . 9 
        . . . . . 8 9 8 8 9 8 8 . . 9 9 
        . . . 8 8 8 9 8 8 9 8 8 . 9 9 9 
        . 8 8 f 8 f 9 8 8 9 8 8 9 9 9 9 
        9 8 8 8 8 8 9 8 8 9 8 8 9 9 9 9 
        . 8 8 8 8 8 9 8 8 9 8 8 9 9 9 9 
        . . . 8 8 8 9 8 8 9 8 8 . 9 9 9 
        . . . . . 8 9 8 8 9 8 8 . . 9 9 
        . . . . . . . 8 8 9 8 8 . . . 9 
        . . . . . . . . . 9 8 8 . . . . 
        . . . . . . . . . . . 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 4 4 4 4 5 . . . . . 
        . 4 . . 5 4 4 4 4 4 4 5 . . . . 
        . 4 . 5 4 4 f 4 f 4 4 4 5 . . 4 
        4 . . 5 4 4 4 4 4 4 4 4 5 . 4 . 
        4 . 4 5 4 4 4 4 4 4 4 4 5 . . 4 
        . 4 . 5 4 4 4 4 4 4 4 4 5 4 . 4 
        . . . 4 5 4 4 4 4 4 4 5 . 4 4 . 
        . . 4 4 . 5 4 4 4 4 5 4 4 . . . 
        . . 4 . . 4 5 5 5 5 4 . . 4 . . 
        . 4 . . 4 . . 4 . 4 . 4 . . 4 . 
        4 . . 4 . . 4 . . 4 . 4 . . 4 . 
        4 . 4 4 . 4 4 . 4 . . . 4 . . 4 
        4 . 4 . . 4 . . 4 . . . 4 . . 4 
        . . . 4 . . 4 . . 4 . . . 4 . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 1 1 2 2 . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 2 1 1 1 . . . 2 2 
        . . 1 1 1 1 2 1 1 1 2 1 . 2 2 2 
        . . 1 f 1 f 1 2 1 2 1 1 2 2 2 . 
        . 1 1 1 1 1 2 1 1 1 2 1 2 2 2 . 
        1 1 1 1 1 1 1 2 1 2 1 1 2 2 2 . 
        . 1 1 1 1 1 2 1 1 1 2 1 . 2 2 2 
        . . 1 1 1 1 1 2 1 1 1 . . . 2 2 
        . . . 1 1 1 1 1 1 2 . . . . . . 
        . . . . 1 1 1 2 2 2 2 . . . . . 
        . . . . . . . . . 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . 6 . . . . . . . . . 
        . . . . . . 6 . . . . . . . . . 
        . . . . . . 6 . . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . 5 f 5 f 5 5 . . 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 6 6 5 5 . . . . . . 
        . . 5 5 5 6 6 6 6 5 . . . . . . 
        . . 5 . 5 6 6 6 6 5 . 5 . . . . 
        . . . . 5 6 6 6 6 5 . 5 5 . . . 
        . . . . 5 6 6 6 6 5 . 5 5 5 . . 
        . . . . . 5 6 6 5 5 . 5 5 5 5 . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        `,
    img`
        b b b b b b b b b . . . . . . . 
        b b b f b c b b b . . . . . . . 
        b b b b b b c b b . . . . . . . 
        b f b b b b b c b . . . . . . . 
        b b b b b b b c b . . . . . . . 
        b c b b b b b b b b . . . . . . 
        b b c b b b b b b b b . . . . . 
        b b b c c b b b b . . . . . . . 
        b b b b b b b b b b . . . . . . 
        . . . . . b b . . b . . . . . . 
        . . . . . . b . . b b . . . . . 
        . . . . . . . . . . b b . . . . 
        . . . . . . . . . . . b b b b . 
        . . . . . . . . . . . . . . b b 
        . . . . . . . . . . . . . . . b 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . 2 2 2 . 
        . . . . . . . . . . . 2 2 2 . . 
        . . . . . . . . . . . 2 2 2 2 . 
        . . . . . . . . . . 2 2 . 2 2 2 
        . . . . . . . . . . . . . 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 f 2 f 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 
        2 2 3 3 3 3 3 3 3 3 3 2 2 3 3 . 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . 2 2 . 2 . . . . . . . . . 
        . . . 2 . . 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . e . e . e . . e . . . . . . . 
        . e d d e d d e d . e . . . . . 
        . d d d d d d d d e d . e . . . 
        d d d d d d d d d d d e . . . d 
        d d d d d d d d d d d d . d d d 
        d f d f d d d d d d d d d d d . 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d . 
        d d d e e e e e e d d d . d d d 
        . d e e e e e e e e d . . . . d 
        . . e e e e e e e e . . . . . . 
        . . . d e e e d e d . . . . . . 
        . . d . . d . d . . d . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        d d d d d d d d d d d d d . . . 
        d d f d f d d d d d d d d d d . 
        . e e e e e e e d d d d d d d d 
        . . e c c c e e e e e e e e d d 
        . . . e e e e e e e e e e e e d 
        . . . . . d d . d d . . . . e d 
        . . . . . d . . . d . . . . d d 
        . . . . . . . . . . . d d d d d 
        . . . . . . . . . . d d d d d . 
        . . . . . . . . . . . . . d d . 
        . . . . . . . . . . . . . d d . 
        . . . . . . . . . . . . . d . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    animal_names = [
    "Crab",
    "Turtle",
    "Green Fish",
    "Octopus",
    "Pink fish",
    "Narwhal",
    "Ray",
    "Whale",
    "Pufferfish",
    "Shark"
    ]
    animal_speed_list = [
    -15,
    -25,
    -35,
    -45,
    -55,
    -65,
    -75,
    -85,
    -95,
    -110
    ]
    num_caught_list = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
}
let animal_sprite: Sprite = null
let animal_speed = 0
let animal_choice = 0
let shark: Sprite = null
let animal_speed_list: number[] = []
let animal_names: string[] = []
let animal_image_list: Image[] = []
let num_caught_list: number[] = []
let num_animals_caught = 0
let animal_caught_species_id_number = 0
let immunity_badge_list: Image[] = []
let new_badge: Sprite = null
let immunity_idea_list: string[] = []
let badges_earned = 0
let current_immunity = 0
let animals_needed_to_learn_immunity = 0
let sub: Sprite = null
scene.setBackgroundImage(img`
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddaa
    ddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddd
    dddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddd
    ddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadd7777777777777dddddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa77777777777777777ddddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa77777777777777777777dddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa777777777777777777777dddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddaa777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7777777777777777777777dddddd
    dddddddaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddda7777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaa77777777777777777777777dddddd
    dddddddaaaaaaaaaaa7aaaaaaaaaaaaddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddd777777777aaaaaaaaaaaaaaaaaaaaaaaaaaa777777777777777777777777dddddd
    dddddddaaaaa77777777aaaaaaaaaaaddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaddaaaaaaaaadddddddddddddd7777777777aaaaaaaaadddaaaaaaaaaaaaaa777777777777777777777777dddddd
    dddddddaa77777777777aaaaaaaaaaadddddddddddddddaaaaaaaaaaaaaaaaaaaaaadddddddaaaaddddddddddddddd7777777777777aaaaaadddaaaaaaaaaaaaa7777777777777777777777777dddddd
    ddddddd7777777777777aaaaaaaaaaddddddddddddddddaaaaaaaaaaaaaaaaaaaaaddddddddddaaddddddddddddddd77777777777777777aaddddaaaaaaaaaaa77777777777777777777777777dddddd
    ddddddd7777777777777aaaaaaaaaaddddddddddddddddaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddd777777777777777777ddddddaaaaaaaaa777777777777777777777777777dddddd
    ddddddd77777777777777aaaaaaaaaddddddddddddddddaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddd777777777777777777dddddddaaaaaa77777777777777777777777777777dddddd
    ddddd7777777777777777aaaaaaaaaddddddddddddddddaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddd7777777777777777777ddddddddaa77777777777777777777777777777777dddddd
    dddd77777777777777777aaaaaadddddddddddddddddddaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddd777777777777777777ddddddddd7777777777777777777777777777777777dddddd
    dddd77777777777777777dddddddddddddddddddddddddaadddaaaaaaaaaaaaaaaddddddddddddddddddddddddddd777777777777777777ddddddddd7777777777777777777777777777777777dddddd
    ddd777777777777777777dddddddddddddddddddddddddaaddddaaaaaaaaaaaaaaddddddddddddddddddddddddddd777777777777777777dddddddddd777777777777777777777777777777777dddddd
    ddd777777777777777777ddddddddddddddddddddddddddddddddaaaaaaaaaaaaadddddddddddddddddddddddddd7777777777777777777dddddddddd7777777777777777777777777777777777ddddd
    dd7777777777777777777dddddddddddddddddddddddddddddddddaaaaaaaaaaaadddddddddddddddddddddddddd7777777777777777777ddddddddddd777777777777777777777777777777777ddddd
    dd7777777777777777777dddddddddddddddddddddddddddddddddaaaaaaaaaaaddddddddddddddddddddddddddd7777777777777777777dddddddddddd77777777777777777777777777777777ddddd
    d77777777777777777777dddddddddddddddddddddddddddddddddaaaaaaaaaaadddddddddddddddddddddddddd7777777777777777777ddddddddddddd7777777dddd777777777777777777777ddddd
    d77777777777777777777dddddddddddddddddddddddddddddddddaaaaaaaaaaaddddddddddddddddddddddddd77777777777777777777ddddddddddddd777777dddddd777777777777777777777dddd
    d77777777777777777777dddddddddddd77777ddddddddddddddddaaaaaaaaaaadddddddddddddddddddddddd777777777777777777777dddddddddddddd7ddddddddddd77777777777777777777dddd
    7777777777777777777777ddddddddddd7777777ddddddddddddddaaaaaaaaaaaddddddddddddddddddddddd7777777777777777777777ddddddddddddddddddddddddddd777777777777777777777dd
    7777777777777777777777dddddddddd77777777ddddddddddddddaaaaaaaaaadddddddddddddddd777777777777777777777777777777ddddddddddddddddddddddddddd7777777777777777777777d
    77777777777777777777777ddddddd77777777777ddddddddddddddddddddddadddddddddddddd7777777777777777777777777777777ddddddddddddddddddddddddddddd7777777777777777777777
    7777777777777777777777777dddd777777777777dddddddddddddddddddddddddddddddddddd7777777777777777777777777777777ddddddddddddddddddddddddddddddd777777777777777777777
    77777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddd7777777777777777777777777777777ddddddddddddddddddddddddddddddd777777777777777777777
    77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd7777777777777777777777777777777ddddddddddddddddddddddddddddddddd77777777777777777777
    77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd77777777777777777777777777777dddddddddddddddddddddddddddddddddddd7777777777777777777
    7777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd7777777777777777777777777777ddddddddddddddddddddddddddddddddddddd7777777777777777777
    77777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddd7777777777777777777777777777dddddddddddddddddddddddddddddddddddddd777777777777777777
    7777777777777777777777777777777777777777777777777dddddddddddddddddddddddddd7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddd77777777777777777
    777777777777777777777777777777777777777777777777777dddddddddddddddddddddddd7777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddd77777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddd7777777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddd77777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddd7777777777
    7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddd7777777777
    77777777777777777777777777777777777777777777777777777dddddddddddddddddddddd7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddd7777777777
    77777777777777777777777777777777777777777777777777777777dddddddddddddddddd7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddd777777777
    7777777777777777777777777777777777777777777777777777777777777777777dddddd7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777
    `)
sub = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 4 4 . . . . . . . . . . . 
    . . 4 4 . . . . . . . 4 4 . . . 
    . . 4 4 . . 4 . . . . . 4 4 . . 
    . . 4 4 4 4 4 . . 4 . . 4 4 . . 
    . 4 4 4 4 4 . . . 4 4 4 4 4 . . 
    . 4 4 . . . . . . . 4 4 4 4 4 . 
    . 4 . . . . . . . . . . . . 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . 4 4 4 4 f 4 f 4 4 4 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . 4 4 . 4 . . . . . . 4 . 4 4 . 
    . 4 . . 4 . . . . . . 4 . . 4 . 
    . . 4 . . 4 . . . . 4 . . 4 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
sub.setPosition(80, 106)
controller.moveSprite(sub, 100, 0)
sub.setFlag(SpriteFlag.StayInScreen, true)
let left_shark_image = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . d d d d . . . . . . . 
    d d d d d d d d d d d d d . . . 
    d d f d f d d d d d d d d d d . 
    . e e e e e e e d d d d d d d d 
    . . e c c c e e e e e e e e d d 
    . . . e e e e e e e e e e e e d 
    . . . . . d d . d d . . . . e d 
    . . . . . d . . . d . . . . d d 
    . . . . . . . . . . . d d d d d 
    . . . . . . . . . . d d d d d . 
    . . . . . . . . . . . . . d d . 
    . . . . . . . . . . . . . d d . 
    . . . . . . . . . . . . . d . . 
    . . . . . . . . . . . . . . . . 
    `.clone()
left_shark_image.flipX()
fillAnimalArrays()
animals_needed_to_learn_immunity = 5
current_immunity = -1
let level = 0.8
let morph_in_progress = false
let jumping = false
badges_earned = 0
game.onUpdate(function () {
    if (sub.y < 10) {
        sub.vy = 100
    }
    if (sub.y > 106) {
        sub.vy = 0
    }
})
game.onUpdateInterval(5000, function () {
    shark = sprites.createProjectileFromSide(left_shark_image, 0, level * 90)
    shark.x = randint(10, scene.screenWidth() - 10)
    sprites.setDataString(shark, "species", "Shark")
})
game.onUpdateInterval(9000, function () {
    if (level > 1.7) {
        shark = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . d d d d . . . . . . . 
            d d d d d d d d d d d d d . . . 
            d d f d f d d d d d d d d d d . 
            . e e e e e e e d d d d d d d d 
            . . e c c c e e e e e e e e d d 
            . . . e e e e e e e e e e e e d 
            . . . . . d d . d d . . . . e d 
            . . . . . d . . . d . . . . d d 
            . . . . . . . . . . . d d d d d 
            . . . . . . . . . . d d d d d . 
            . . . . . . . . . . . . . d d . 
            . . . . . . . . . . . . . d d . 
            . . . . . . . . . . . . . d . . 
            . . . . . . . . . . . . . . . . 
            `, level * -90, 0)
        shark.y = randint(10, scene.screenHeight() - 10)
        sprites.setDataString(shark, "species", "Shark")
    }
})
game.onUpdateInterval(1000, function () {
    animal_choice = randint(1, 8)
    animal_speed = animal_speed_list[animal_choice]
    animal_sprite = sprites.createProjectileFromSide(animal_image_list[animal_choice], animal_speed * level, 0)
    // Choose random height for animal.
    animal_sprite.y = randint(10, scene.screenHeight() - 10)
    sprites.setDataString(animal_sprite, "species", animal_names[animal_choice])
    sprites.setDataNumber(animal_sprite, "animal_index", animal_choice)
})
forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
})
