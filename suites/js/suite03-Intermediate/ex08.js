/*

    search Area

    We give you a map, in array like:

    [
        "xxxxxxxxxxx",
        "xxxx...x..x",
        "xxxx...x..x",
        "xxxx...xxxx",
        "xxxxxxx..xx",
        "xx..xxxxxxx",
        "xx..xxxx.xx",
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    You need to find the biggest square we can draw in the map, by replace '.' in strings.
    The square size and square map can be various, and will be random at correction.

    '.' is for a free space.
    'x' is for walls.
    'o' is for the square resolution/composition.

    We expect that array in return:

    [
        "xxxxxxxxxxx",
        "xxxxooox..x", // here is 
        "xxxxooox..x", // a square
        "xxxxoooxxxx", // with 3x3 dimension
        "xxxxxxx..xx",
        "xx..xxxxxxx", // here is 
        "xx..xxxx.xx", // a square dimension 2x2 but not the biggest
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    There is only one possibility in this exemple. If there is more than one, take the last.

    Tips:
    Test your own maps !

*/

// write your own code below this comment
