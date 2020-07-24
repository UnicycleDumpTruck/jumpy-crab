namespace SpriteKind {
    export const Immunity = SpriteKind.create()
}
function displayDialog (text: string) {
    game.setDialogFrame(img`
        . . e e e e e e e e e e e e e e e e e e e e . . 
        . e 4 4 e e 4 4 e e 4 4 e e 4 4 e e 4 4 e e e . 
        e e e 4 4 e e 4 4 e e 4 4 e e 4 4 e e 4 4 e 4 e 
        e e 4 e e e e e e e e e e e e e e e e e e 4 4 e 
        e 4 4 e e b b b b b b b b b b b b b b e e 4 e e 
        e 4 e e b b b b b b b b b b b b b b b b e e e e 
        e e e e b b b b b b b b b b b b b b b b e e 4 e 
        e e 4 e b b b b b b b b b b b b b b b b e 4 4 e 
        e 4 4 e b b b b b b b b b b b b b b b b e 4 e e 
        e 4 e e b b b b b b b b b b b b b b b b e e e e 
        e e e e b b b b b b b b b b b b b b b b e e 4 e 
        e e 4 e b b b b b b b b b b b b b b b b e 4 4 e 
        e 4 4 e b b b b b b b b b b b b b b b b e 4 e e 
        e 4 e e b b b b b b b b b b b b b b b b e e e e 
        e e e e b b b b b b b b b b b b b b b b e e 4 e 
        e e 4 e b b b b b b b b b b b b b b b b e 4 4 e 
        e 4 4 e b b b b b b b b b b b b b b b b e 4 e e 
        e 4 e e b b b b b b b b b b b b b b b b e e e e 
        e e e e b b b b b b b b b b b b b b b b e e 4 e 
        e e 4 e e b b b b b b b b b b b b b b e e 4 4 e 
        e 4 4 e e e e e e e e e e e e e e e e e e 4 e e 
        e 4 e 4 4 e e 4 4 e e 4 4 e e 4 4 e e 4 4 e e e 
        . e e e 4 4 e e 4 4 e e 4 4 e e 4 4 e e 4 4 e . 
        . . e e e e e e e e e e e e e e e e e e e e . . 
        `)
    game.showLongText(text, DialogLayout.Center)
}
function updateImmunityDisplay () {
    immunity_sprite_list = sprites.allOfKind(SpriteKind.Immunity)
    for (let value of immunity_sprite_list) {
        value.destroy()
    }
    for (let index = 0; index <= 9; index++) {
        if (num_caught_list[index] == 10) {
            icon = sprites.create(immunity_image_list[index], SpriteKind.Immunity)
            icon.setPosition(4 + index * 10, 4)
        }
    }
}
function displayStartScreen () {
    scene.setBackgroundColor(4)
    let ScienceSubTitle = image.ofBuffer(hex`
        e4a07800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeee0e00000000ee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee000000e0eeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee0e0000eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeee00e0eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeee0ee0eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeee0ee0eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeee00eeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeee00e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0ee0eeeeee0000eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e00eeeeee0e00eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e00eeeeee0e00eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee00e0eeee0e00eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0ee0eeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0ee0eeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e00eeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0000eeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeee0000e0eeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ee0e0000e0eeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0ee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee0e0000eeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e00000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e000000e0eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee000000e0eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee000000e0eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee00000000eeeeee0000000000000000e0ee0e00000000e0ee0000000000000000000000000000000000000000000000000000000000000000e0eeee0e00000000e0eeee00000000000000e0eeeeee0e000000eeee0e0000000000000000000000000000000000000000000000000000000000000000eeee0000000000e0ee0e00000000000000eeeeeeeeee0000e0eeeeee0000000000000000000000000000000000000000000000000000000000000000e00e0000000000000000000000000000e0eeeeeeeeee0e00e0eeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeee00eeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeee00eeeeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000eeeeeeeeeeeeee0ee0eeeeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeee0e00eeeeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeee00eeeeee0e00e0eeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeee00e0eeeeee00e0eeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeee00e0eeeeee00e0eeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeee0e00eeeeee00e0eeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000eeeeeeee00eeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee00eeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee00e0eeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee00e0eeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeee0e0000eeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e000000000000e0ee000000eeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000e0eeeeeeee00000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000000000000000000000ee0e0000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000000000000000000000e0eeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000000000000000000000e0eeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000eeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeee000000000000eeeeee0e00000000000000000000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeee00000000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeee000000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeee0e0000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeee0e00000000000000e0eeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeee00000000000000e0eeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeee000000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e0000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0000000000e0eeee0e00eeeeee0000eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeee0e00eeeeee0000eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeee0e00eeeeee0000eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeee0e00eeeeee0000eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeee0ee0eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee000000000000000000e0eeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeee000000000000000000eeeeee0e00eeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeee0000000000000000e0eeee000000eeeeee00000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee0e0000eeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e00000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e000000e0eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee000000e0eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee00000000eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee00000000eeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeee0e00000000e0eeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeee0000000000e0ee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee000000000000eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    `)
scene.setBackgroundImage(ScienceSubTitle)
    game.setDialogFrame(img`
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 e e e e e e e e e 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        `)
    game.showLongText("Venture into the sea, study the animals. Press \"A\" to start.", DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprites.readDataString(otherSprite, "species") == "Shark") {
        immune = 0
        for (let index2 = 0; index2 <= 9; index2++) {
            if (num_caught_list[index2] == 10) {
                immune = index2 + 1
            }
        }
        if (immune > 0) {
            displayDialog("" + immunity_text_list[immune - 1] + " You caught this shark!")
            num_caught_list[immune - 1] = 0
            num_caught_list[9] = num_caught_list[9] + 1
            info.changeScoreBy(50)
            updateImmunityDisplay()
            if (num_caught_list[9] == 9) {
                music.stopAllSounds()
                game.over(true, effects.bubbles)
            }
            otherSprite.destroy()
        } else {
            sub.say("Ack, teeth!", 2000)
            game.over(false)
        }
    } else {
        sub.say(sprites.readDataString(otherSprite, "species"), 500)
        music.baDing.play()
        info.changeScoreBy(1)
        sprite.startEffect(effects.trail, 500)
        caught = num_caught_list[sprites.readDataNumber(otherSprite, "animal_index")]
        if (caught < 9) {
            num_caught_list[sprites.readDataNumber(otherSprite, "animal_index")] = caught + 1
        } else if (caught == 9) {
            num_caught_list[sprites.readDataNumber(otherSprite, "animal_index")] = 10
            updateImmunityDisplay()
        }
        otherSprite.destroy()
    }
})
function fillAnimalArrays () {
    immunity_text_list = [
    "By studying the turtle, you learned to harden your shell.",
    "By studying the crab, you learned to use pinchers.",
    "By studying the green fish, you learned to blend into the grass.",
    "By studying the octopus, you learn to change colors, and deploy ink.",
    "By studying the pink fish, you learn to blend into the coral.",
    "By studying the narwhal, you learn to use a horn defensively.",
    "By studying the ray, you learn to use a stinger, and blend into the bottom.",
    "By studying the whale, you learn to use your size to your advantage.",
    "By studying the pufferfish, you learn to discourage this shark from eating you."
    ]
    immunity_image_list = [
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
        . . . . . . . b 
        . . . . . . b . 
        . . . . . b . . 
        . . . . b . . . 
        . . . b . . . . 
        . . b . . . . . 
        . b . . . . . . 
        b . . . . . . . 
        `,
    img`
        2 2 2 2 2 2 2 2 
        2 2 6 2 6 2 6 2 
        2 6 b b b b 2 2 
        2 2 b a a b 2 2 
        2 2 b a a b 2 2 
        2 2 b b b b 2 2 
        2 2 2 2 2 2 2 2 
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
        `,
    img`
        b d e e e e f f 
        . b d e e e f f 
        . . b d e e e e 
        . . . b d e e e 
        . . . . d e e e 
        . . . b d e e e 
        . . b d e e e e 
        . b d e e e e e 
        `
    ]
    animal_image_list = [
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
    "Turtle",
    "Crab",
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
let caught = 0
let immunity_text_list: string[] = []
let immune = 0
let immunity_image_list: Image[] = []
let icon: Sprite = null
let num_caught_list: number[] = []
let immunity_sprite_list: Sprite[] = []
let sub: Sprite = null
displayStartScreen()
scene.setBackgroundImage(img`
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d a a 
    d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d 
    d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d 
    d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d a a 7 7 7 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d a 7 7 7 7 7 7 7 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d a a a a a a a a a a a 7 a a a a a a a a a a a a d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 a a a a a a a a a a a a a a a a a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d a a a a a 7 7 7 7 7 7 7 7 a a a a a a a a a a a d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a d d a a a a a a a a a d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 a a a a a a a a a d d d a a a a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d a a 7 7 7 7 7 7 7 7 7 7 7 a a a a a a a a a a a d d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a d d d d d d d a a a a d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 a a a a a a d d d a a a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 a a a a a a a a a a d d d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d a a d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 a a d d d d a a a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 a a a a a a a a a a d d d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d a a a a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 a a a a a a a a a d d d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d a a a a a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 a a a a a a a a a d d d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d a a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 a a a a a a d d d d d d d d d d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d a a d d d a a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d a a d d d d a a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 
    d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d a a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d 
    d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d a a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d 
    d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d 
    d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d 7 7 7 7 7 7 7 d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d 
    d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d 7 7 7 7 7 7 d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d 
    d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d 7 7 7 7 7 d d d d d d d d d d d d d d d d a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d 7 d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d 7 7 7 7 7 7 7 d d d d d d d d d d d d d d a a a a a a a a a a a d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d a a a a a a a a a a d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d a d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 
    `)
sub = sprites.create(img`
    . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . 
    . . . . . . . . . . f d e d e e e f . . . . . . . . . . . . . . 
    . . . . . . . . . . f d d e e e e f . . . . . . . . . . . . . . 
    . . . . . . . . . . f d e d e e e f . . . . . . . . . . . . . . 
    . . . . . . . . . . f d d e e e e f . . . . . . . . . . . . . . 
    . . f f f f f f f f d d e d e e e e f f f f f f f f f f f f . . 
    . f f c f d e d e e e e e e e e e e e e e e e e d e d f c f f . 
    f f c b f e d e e d d e e e e e e e e e e d d e e d e f b c f f 
    f c b b f d e e d c b d e e e e e e e e d c b d e e d f b b c f 
    f b b b f e e d c b b b d e e e e e e d c b b b d e e f b b b f 
    f f f f f e e d b b b b d e e e e e e d b b b b d e e f f f f f 
    f b b b f e e e d b b d e e e e e e e e d b b d e e e f b b b f 
    f b b b f e d e d d d e d e d e d e d e d d d e d e d f b b b f 
    f f b b f d e d e d e d e d e d e d e d e d e d e d e f b b f f 
    . f f b f d d d d d d d d d d d d d d d d d d d d d d f b f f . 
    . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(sub)
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
game.onUpdateInterval(5000, function () {
    shark = sprites.createProjectileFromSide(left_shark_image, 90, 0)
    shark.y = randint(10, scene.screenHeight() - 10)
    sprites.setDataString(shark, "species", "Shark")
})
game.onUpdateInterval(1000, function () {
    animal_choice = randint(0, 8)
    animal_speed = animal_speed_list[animal_choice]
    animal_sprite = sprites.createProjectileFromSide(animal_image_list[animal_choice], animal_speed, 0)
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
