@namespace
class SpriteKind:
    Immunity = SpriteKind.create()
def fillAnimalArrays():
    global immunity_text_list, immunity_image_list, animal_image_list, animal_names, animal_speed_list, num_caught_list
    immunity_text_list = ["By studying the turtle, you learned to harden your shell.",
        "By studying the crab, you learned to use pinchers.",
        "By studying the green fish, you learned to blend into the grass.",
        "By studying the octopus, you learn to change colors, and deploy ink.",
        "By studying the pink fish, you learn to blend into the coral.",
        "By studying the narwhal, you learn to use a horn defensively.",
        "By studying the ray, you learn to use a stinger, and blend into the bottom.",
        "By studying the whale, you learn to use your size to your advantage.",
        "By studying the pufferfish, you learn to discourage this shark from eating you."]
    immunity_image_list = [img("""
            . . . 9 9 . . . 
                    . . 9 7 8 9 . . 
                    . 9 7 8 7 8 9 . 
                    . 9 8 7 8 7 9 . 
                    . 9 7 8 7 8 9 . 
                    . 9 8 7 8 7 9 . 
                    . . 9 8 7 9 . . 
                    . . . 9 9 . . .
        """),
        img("""
            . . 4 4 . 4 . . 
                    . 4 4 . . . 4 . 
                    . 4 . . . 4 4 . 
                    . 4 4 . . . 4 . 
                    . 4 . . . 4 4 . 
                    . 4 4 . . . 4 . 
                    . 4 4 4 4 4 4 . 
                    . . 4 4 4 4 . .
        """),
        img("""
            . . 9 . . 9 . . 
                    . . 9 . . 9 . . 
                    . 9 . . . . 9 . 
                    . 9 . 9 . . 9 . 
                    . 9 . . 9 . 9 . 
                    . . 9 . 9 . 9 9 
                    . . 9 . 9 . . 9 
                    . . 9 . 9 . . 9
        """),
        img("""
            . . . f f f . . 
                    . . f f f f f f 
                    . . f f f f f f 
                    . f f f f f f f 
                    f f f f f f f . 
                    f f f f f f f . 
                    . f f f f f . . 
                    . . . . f f . .
        """),
        img("""
            . . . . . . . . 
                    . 3 3 . 3 3 . 2 
                    3 3 2 2 2 3 2 . 
                    3 6 b 3 2 3 2 3 
                    3 6 3 2 2 3 6 3 
                    3 6 3 3 6 3 3 6 
                    . 3 2 3 2 6 3 6 
                    . 3 6 . 2 2 3 .
        """),
        img("""
            . . . . 6 . . . 
                    . . . 6 6 . . . 
                    . . . 6 5 . . . 
                    . . . 5 6 . . . 
                    . . . 6 6 . . . 
                    . . . 6 5 . . . 
                    . . . 5 6 . . . 
                    . . . 6 6 . . .
        """),
        img("""
            . . . . . . . b 
                    . . . . . . b . 
                    . . . . . b . . 
                    . . . . b . . . 
                    . . . b . . . . 
                    . . b . . . . . 
                    . b . . . . . . 
                    b . . . . . . .
        """),
        img("""
            2 2 2 2 2 2 2 2 
                    2 2 6 2 6 2 6 2 
                    2 6 b b b b 2 2 
                    2 2 b a a b 2 2 
                    2 2 b a a b 2 2 
                    2 2 b b b b 2 2 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2
        """),
        img("""
            e . . e . . . e 
                    . e . e . . e . 
                    . . e e e e . . 
                    e e e d d e e e 
                    . . e d d e . . 
                    . . e e e e . . 
                    . e . . e . e . 
                    e . . . e . . e
        """),
        img("""
            b d e e e e f f 
                    . b d e e e f f 
                    . . b d e e e e 
                    . . . b d e e e 
                    . . . . d e e e 
                    . . . b d e e e 
                    . . b d e e e e 
                    . b d e e e e e
        """)]
    animal_image_list = [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)]
    animal_names = ["Turtle",
        "Crab",
        "Green Fish",
        "Octopus",
        "Pink fish",
        "Narwhal",
        "Ray",
        "Whale",
        "Pufferfish",
        "Shark"]
    animal_speed_list = [-15, -25, -35, -45, -55, -65, -75, -85, -95, -110]
    num_caught_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
def displayDialog(text: str):
    game.set_dialog_frame(img("""
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
    """))
    game.show_long_text(text, DialogLayout.CENTER)
def updateImmunityDisplay():
    global immunity_sprite_list, icon
    immunity_sprite_list = sprites.all_of_kind(SpriteKind.Immunity)
    for value in immunity_sprite_list:
        value.destroy()
    for index in range(10):
        if num_caught_list[index] == 10:
            icon = sprites.create(immunity_image_list[index], SpriteKind.Immunity)
            icon.set_position(4 + index * 10, 4)
def displayStartScreen():
    scene.set_background_color(4)
    ScienceSubTitle = image.of_buffer(hex("""
        e4a07800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeee0e00000000ee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee000000e0eeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee0e0000eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeee00e0eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeee0ee0eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeee0ee0eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeee00eeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeee00e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0ee0eeeeee0000eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e00eeeeee0e00eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e00eeeeee0e00eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee00e0eeee0e00eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0ee0eeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0ee0eeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e00eeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0000eeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeee0000e0eeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ee0e0000e0eeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0ee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee0e0000eeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e00000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e000000e0eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee000000e0eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee000000e0eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee00000000eeeeee0000000000000000e0ee0e00000000e0ee0000000000000000000000000000000000000000000000000000000000000000e0eeee0e00000000e0eeee00000000000000e0eeeeee0e000000eeee0e0000000000000000000000000000000000000000000000000000000000000000eeee0000000000e0ee0e00000000000000eeeeeeeeee0000e0eeeeee0000000000000000000000000000000000000000000000000000000000000000e00e0000000000000000000000000000e0eeeeeeeeee0e00e0eeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeee00eeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeee00eeeeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000eeeeeeeeeeeeee0ee0eeeeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeee0e00eeeeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeee00eeeeee0e00e0eeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeee00e0eeeeee00e0eeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeee00e0eeeeee00e0eeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeee0e00eeeeee00e0eeeeee0000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000eeeeeeee00eeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee00eeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee00e0eeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee00e0eeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeee0e0000eeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e000000000000e0ee000000eeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000e0eeeeeeee00000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000000000000000000000ee0e0000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000000000000000000000e0eeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e00000000000000000000000000e0eeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000eeeeee0e0000000000000000000000000000000000000000000000000000000000eeeeee000000000000eeeeee0e00000000000000000000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeee00000000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeee000000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeee0e0000000000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeee0e00000000000000e0eeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeee00000000000000e0eeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeee000000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e0000000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0000000000e0eeee0e00eeeeee0000eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeee0e00eeeeee0000eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeee0e00eeeeee0000eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeee0e00eeeeee0000eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeee0ee0eeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e00000000e0eeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee000000000000000000e0eeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeee000000000000000000eeeeee0e00eeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeee0000000000000000e0eeee000000eeeeee00000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee0e0000eeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e00000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee0e0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000e0eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0000000000eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee0e000000e0eeeeeeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeeeee000000e0eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeee00000000eeeeee0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeeeee00000000eeeeee00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeee0e00000000e0eeee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeee0000000000e0ee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee00e0eeeeee00eeeeee0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeee000000000000eeeeee0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    """))
    scene.set_background_image(ScienceSubTitle)
    game.set_dialog_frame(img("""
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
    """))
    game.show_long_text("Venture into the sea, study the animals. Press \"A\" to start.",
        DialogLayout.BOTTOM)

def on_on_overlap(sprite, otherSprite):
    global immune, caught
    if sprites.read_data_string(otherSprite, "species") == "Shark":
        immune = 0
        for index2 in range(10):
            if num_caught_list[index2] == 10:
                immune = index2 + 1
        if immune > 0:
            displayDialog("" + immunity_text_list[immune - 1] + " You caught this shark!")
            num_caught_list[immune - 1] = 0
            num_caught_list[9] = num_caught_list[9] + 1
            info.change_score_by(50)
            updateImmunityDisplay()
            if num_caught_list[9] == 9:
                music.stop_all_sounds()
                game.over(True, effects.bubbles)
            otherSprite.destroy()
        else:
            sub.say("Ack, teeth!", 2000)
            game.over(False)
    else:
        sub.say(sprites.read_data_string(otherSprite, "species"), 500)
        music.ba_ding.play()
        info.change_score_by(1)
        sprite.start_effect(effects.trail, 500)
        caught = num_caught_list[sprites.read_data_number(otherSprite, "animal_index")]
        if caught < 9:
            num_caught_list[sprites.read_data_number(otherSprite, "animal_index")] = caught + 1
        elif caught == 9:
            num_caught_list[sprites.read_data_number(otherSprite, "animal_index")] = 10
            updateImmunityDisplay()
        otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

animal_sprite: Sprite = None
animal_speed = 0
animal_choice = 0
shark: Sprite = None
caught = 0
immune = 0
icon: Sprite = None
immunity_sprite_list: List[Sprite] = []
num_caught_list: List[number] = []
animal_speed_list: List[number] = []
animal_names: List[str] = []
animal_image_list: List[Image] = []
immunity_image_list: List[Image] = []
immunity_text_list: List[str] = []
sub: Sprite = None
displayStartScreen()
scene.set_background_image(img("""
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
"""))
sub = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(sub)
sub.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
left_shark_image = img("""
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
""").clone()
left_shark_image.flip_x()
fillAnimalArrays()

def on_update_interval():
    global shark
    shark = sprites.create_projectile_from_side(left_shark_image, 90, 0)
    shark.y = randint(10, scene.screen_height() - 10)
    sprites.set_data_string(shark, "species", "Shark")
game.on_update_interval(5000, on_update_interval)

def on_update_interval2():
    global animal_choice, animal_speed, animal_sprite
    animal_choice = randint(0, 8)
    animal_speed = animal_speed_list[animal_choice]
    animal_sprite = sprites.create_projectile_from_side(animal_image_list[animal_choice], animal_speed, 0)
    # Choose random height for animal.
    animal_sprite.y = randint(10, scene.screen_height() - 10)
    sprites.set_data_string(animal_sprite, "species", animal_names[animal_choice])
    sprites.set_data_number(animal_sprite, "animal_index", animal_choice)
game.on_update_interval(1000, on_update_interval2)

def on_forever():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.play_tone(349, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.HALF))
    music.play_tone(392, music.beat(BeatFraction.HALF))
    music.play_tone(349, music.beat(BeatFraction.HALF))
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    music.play_tone(294, music.beat(BeatFraction.WHOLE))
forever(on_forever)
