// ===================================================
//      P I Z Z I T A   H O T  ·  T H E   G A M E
// ===================================================

const LOGO = img`
...................................................bbd.b...........................
...............................................bd111e2dbd..........................
............................................b111111ee22b1..........................
........................................bd111111ee2222221b.........................
.....................................b1111111ee222222222e1.........................
.................................bd1111111ee222222222222e1.........................
..............................b111111eee2222222222222222e1b........................
.............................d111eee22222222222222222222211........................
............................b1e2222222222222222222222222211........................
............................11222222222222222222222222222e1d.......................
...........................b1e222222222222222222222222222e111db....................
...........................1e222222222222222222222222222221111111db................
..........................b12222222222222222222222222222222ee1111111db.............
..........................1e2222222222222222222222222222222222ee1111111d...........
.........................b1222222222222222222222222222222222222222e1111111b........
.........................d4222222222222222222222222222222222222222222e111111db.....
.........................b222222222222222222222222222222222222222222222ee111111b...
.........................4222222222222222222222222222222222222222222222222ee11111b.
......................b112222222222222222222222222222222222222222222222222222e11111
....................b11e22222222222222222222222222222222222222222eeeee111e22224.b11
..................b11e222222222222222222222222222222222222eeee111111111111122222...
................b111e22222222222222222222222222222eeeee1111111111111111111122224...
...............111e222222222222222222222222eeee111111111111111111111111111e244d....
.............d111e2222222222222222222eeee11111111111111111111111111111dddb.........
...........b111e2222222222222222eee11111111111111111111111ddbbbb...................
..........d11e22222222222222eee11111111111111111ddbb..........d1b..................
........b111e22222222222ee111111111111111ddb..................111.......b..........
.......d111e2222222eee1111111111111dbb.......................d11d.....d11..........
......111e22222eee111111111111db.........................1d..111...d111d...........
....b111e222ee11111111111db............................b11b.d111d11111.............
...d11e22ee111111111db................................b111..11111111b.....bdd1b....
..1111ee11111111db....................................111bb1111111d....b1111111....
.11111111111db...........666..........................1111111111d....b11111111d....
11111111dbbbdddd.......7666...........................111111111.....b11111d111b....
11111d...d1111111d....6666d.................bd111d.....1111111d....d1111b.d111.....
.bb....b11111111111..66666...............d11111111........d111b...b1111...1111.....
......b111111111111b.6666......d111b.b111111111111.....1b.1111b...1111...d1111db...
......b1111d..b11111d666d..bd1111111.d11111111111b....b1d.1111...d111d.d111111111b.
.......b.11d....1111.666d11111111111..1111dbb111d.....11d.1111...111111111111111d..
........b11d....b111...111111111111b........1111.....d11d.111d...11111111d..bdb....
........111b....b111...b11111bb1111........1111b.....111b.111b...1111111b..........
........111b....d11b..1d.b....1111........1111d.....b111..111b....1111b............
.......d111b....111...11.....1111b.......11111......d111..111......................
.......1111....111...111....1111d.......d1111.......111d..111......................
.......1111..b111...b111...d1111.......d11111dddd111111...11d......................
......b1111.111d....d11d..d1111.......b111111111111d.11...11d......................
......b111dd1b......111b.d1111dbbbbd11111111111111b..bd...d1b......................
......d111b........b111.b111111111111111111111dd...........d.......................
......1111b........b111.111111111111db11db...................11....................
......1111.........b11bb111111111db.........................d11b...................
......1111..........11.b111dbb.......d.....................b111b.......b...........
......111d..........b1..b...b.......11b....................1111....bd111...........
......111d.................11......b11b...................b111d.d11111b............
......111b................d11......111b...................1111111111b..............
......111.................111......111..................bd11111111b................
......111................d111.....d111..............d11111111111b..................
......11d................111d.....1111..............1111111111b....................
......11b...............d111b.....1111.......d11111bd1111111d......................
.......b................1111b....b111111..b111111111d.bb1111b......................
.......................b1111.....d11111b.d11111111111...1111.......................
.......................d1111....b11111..11111dbb11111b.b1111.......................
.......................1111b.d1111111b.1111d.....1111b.d111d.......................
......................b11111111111111..1111......1111b.1111b.......................
......................111111111111111.d111d......1111..1111........................
..................bd11111111111bd1111.1111b......1111..1111........................
.................111111111111b..11111.1111b.....d111b..111d........................
.................1111111111b....1111d.1111d....d111d...111b..........1ddd55........
..................dd111111......1111b.d11111dd1111d....111....1dd555555555d........
.....................11111......1111...1111111111b.....1111d55555555555d...........
....................b11111......111d...b111111db.......11e5555555555d..............
....................d1111d......b1d................1d551145555555d.................
....................11111b......................dd55555ee55555d....................
....................11111.....................d555555555555d.......................
....................11111..................d555555555555d..........................
....................11111...............1d55555555555d1............................
....................1111b.............d555555555555d...............................
....................b11d...........1d55555555555d1.................................
.....................b...........d555555555555d....................................
...............................d5555555555551......................................
............................d555555555555d.........................................
..........................d555555555555d...........................................
.......................1d555555555555d.............................................
......................d55555555555d................................................
......................5555555555d..................................................
......................55555555d....................................................
......................d555551......................................................
`
const WORDGAME = img`
5555555555..55......55..5555555555................555555......555555....55......55..5555555555..
5555555555..55......55..5555555555................555555......555555....55......55..5555555555..
..ee55eeeeee55ee....55ee55eeeeeeeeee............55..eeee55..55..eeee55..5555..5555ee55eeeeeeeeee
..ee55eeeeee55ee....55ee55eeeeeeeeee............55..eeee55..55..eeee55..5555..5555ee55eeeeeeeeee
....55ee....55ee....55ee55ee....................55ee......ee55ee....55ee55ee55..55ee55ee........
....55ee....55ee....55ee55ee....................55ee......ee55ee....55ee55ee55..55ee55ee........
....55ee....5555555555ee55555555................55ee555555..5555555555ee55ee55ee55ee55555555....
....55ee....5555555555ee55555555................55ee555555..5555555555ee55ee55ee55ee55555555....
....55ee....55eeeeee55ee55eeeeeeee..............55ee..ee55ee55eeeeee55ee55ee..ee55ee55eeeeeeee..
....55ee....55eeeeee55ee55eeeeeeee..............55ee..ee55ee55eeeeee55ee55ee..ee55ee55eeeeeeee..
....55ee....55ee....55ee55ee....................55ee....55ee55ee....55ee55ee....55ee55ee........
....55ee....55ee....55ee55ee....................55ee....55ee55ee....55ee55ee....55ee55ee........
....55ee....55ee....55ee5555555555................555555..ee55ee....55ee55ee....55ee5555555555..
....55ee....55ee....55ee5555555555................555555..ee55ee....55ee55ee....55ee5555555555..
......ee......ee......ee..eeeeeeeeee................eeeeee....ee......ee..ee......ee..eeeeeeeeee
......ee......ee......ee..eeeeeeeeee................eeeeee....ee......ee..ee......ee..eeeeeeeeee
`
const PAZ = img`
..............
...ffffffff...
..febbbbbbef..
.feeeeeeeeeef.
.feeddddddeef.
.feedfddfdeef.
.feeddddddeef.
.feeed33deeef.
..feeddddeef..
...fddddddf...
..fbbbbbbbbf..
.fbbbbbbbbbbf.
.fbbbbbbbbbbf.
..ffffffffff..
..fddf..fddf..
..ffff..ffff..
`
const CALU = img`
................
...ff....ff.....
..ffff..ffff....
..ffffffffff....
.ffffffffffff...
.ff11111111ff...
.f1155115511f...
.f1111111111f...
.f1111331111f...
.f1111111111f...
.f1111111111f...
..f11111111f.ff.
..f11111111ffff.
..f11111111fff..
..f11111111f....
...ff....ff.....
`
const LUCA = img`
................
...ff....ff.....
..f44f..f44f....
..f44444444f....
.f4444444444f...
.f4e444444e4f...
.f4455445544f...
.f4441111444f...
.f4411331144f...
.f4441111444f...
.f4411111144f...
..f41111114f.ff.
..f44111144f44f.
..f44444444f4f..
..f11444411f....
...ff....ff.....
`
const ZOOMCALL = img`
fffffffffffffffffff
f88888888888888888f
f8f11f8888888888f2f
f88888888888888888f
fffffffffffffffffff
f11111111f11111111f
f11ffff11f11ffff11f
f11fddf11f11fddf11f
f1fddddf1f1fddddf1f
f1fdfdfd1f1fdfdfd1f
fffffffffffffffffff
f11111111f11111111f
f11ffff11f11ffff11f
f11fddf11f11fddf11f
f1fddddf1f1fddddf1f
f1fdfdfd1f1fdfdfd1f
fffffffffffffffffff
`
const CUBO = img`
................
..ffffffffffff..
..f7777777777f..
..f7667766776f..
..f7ff7777ff7f..
..f7ff7777ff7f..
..f7777777777f..
..f77ffffff77f..
..f77f7777f77f..
..f77ffffff77f..
..f7777777777f..
..ffffffffffff..
..f77f....f77f..
..f77f....f77f..
..ffff....ffff..
................
`
const ZOMBI = img`
................
..ffffffffffff..
..f6666666666f..
..f6ff666ff66f..
..f6ff666ff66f..
..f6666666666f..
..f66ffffff66f..
..ffffffffffff..
.ff6f666666f6ff.
.f66f666666f66f.
.f66f666666f66f.
.ff6ffffffff6ff.
..f8888ff8888f..
..f8888ff8888f..
..ff88f..f88ff..
..ffff...ffff...
`
const ESQ = img`
................
..ffffffffffff..
..f1111111111f..
..f1ff1111ff1f..
..f1ff1111ff1f..
..f1111111111f..
..f11ffffff11f..
..ffffffffffff..
.ff1f111111f1ff.
.f11f111111f11f.
.f11f111111f11f.
.ff1ffffffff1ff.
..f1111ff1111f..
..f1111ff1111f..
..ff11f..f11ff..
..ffff...ffff...
`
const FLECHA = img`
..ff..
.f11f.
f1111f
f1111f
.f11f.
..ff..
`
const MASA = img`
................
.......55.......
.....ffffff.....
...ffddddddff...
..fdd111ddddf...
.fdd111ddddddf..
.fd111ddddddddf.
.fdd1dddddddddf.
.fddddddddddddf.
.fddddddddddddf.
..fddddddddddf..
...ffddddddff...
.....ffffff.....
................
................
................
`
const BLOQUE = img`
ffffffffffffffff
f77777777777777f
f77777777777777f
f7e77e7ee77e7e7f
fee5eeeeeeeeeeef
feeeeeeee5eeeeef
feeeeeeeeeeeeeef
feee5eeeeeeeeeef
feeeeeeeeeee5eef
feeeeeeeeeeeeeef
fee5eeeeeeeeeeef
feeeeeee5eeeeeef
feeeeeeeeeeeeeef
feee5eeeeeeeeeef
feeeeeeeeeeeeeef
ffffffffffffffff
`
const BLOQUE2 = img`
ffffffffffffffff
f77777777777777f
f77777777777777f
f7e77e7ee77e7e7f
fee5eeefeeeeeeef
feeeeeefe5eeeeef
feeeeefeeeeeeeef
feee5eefeeeeeeef
feeeeeeefeee5eef
feeeeeefeeeeeeef
fee5eeeefeeeeeef
feeeeeee5eeeeeef
feeeeeeeeeeeeeef
feee5eeeeeeeeeef
feeeeeeeeeeeeeef
ffffffffffffffff
`
const BLOQUE3 = img`
ffffffffffffffff
f77777777777777f
f77777777777777f
f7e77e7ee77e7e7f
fee5eeefeeeeeeef
feefeeefe5eeeeef
feeefefeeeefeeef
feef5eefeeeefeef
feeeeeeefeef5eef
feeeeeefeeeeeeef
fee5eeeefeeeeeef
feeeefee5efeeeef
feeeeefeefeeeeef
feee5eefeeeeeeef
feeeeeeeeeeeeeef
ffffffffffffffff
`
const PICO = img`
........
..fffff.
.fbbbbbf
fbb1bbf.
.fbef...
..fef...
...fef..
....ff..
`
const ALE = img`
..............
...ffffffff...
..fccccccccf..
..fccccccccf..
..fcddddddcf..
..fddfddfddf..
..fddddddddf..
..fddd33dddf..
...fddddddf...
..ffffffffff..
..feeeeeeeef..
.feeeeeeeeeef.
.feeeeeeeeeef.
..ffffffffff..
..fccf..fccf..
..ffff..ffff..
`
const GENTE1 = img`
............
...ffffff...
..fccccccf..
..fcddddcf..
..fdfddfdf..
..fddddddf..
...fddddf...
..f222222f..
.f22222222f.
.f22222222f.
..f222222f..
..ffffffff..
..fcf..fcf..
..fff..fff..
`
const GENTE2 = img`
............
...ffffff...
..fccccccf..
..fcddddcf..
..fdfddfdf..
..fddddddf..
...fddddf...
..f555555f..
.f55555555f.
.f55555555f.
..f555555f..
..ffffffff..
..fcf..fcf..
..fff..fff..
`
const GENTE3 = img`
............
...ffffff...
..fccccccf..
..fcddddcf..
..fdfddfdf..
..fddddddf..
...fddddf...
..f666666f..
.f66666666f.
.f66666666f.
..f666666f..
..ffffffff..
..fcf..fcf..
..fff..fff..
`
const CARRO1 = img`
..ffffffffffff..
..f2222222222f..
..f2111111112f..
..f2111111112f..
.ff2222222222ff.
.f222222222222f.
.f222222222222f.
.ff2222222222ff.
..f2111111112f..
..f2111111112f..
..f2222222222f..
..ffffffffffff..
`
const CARRO2 = img`
..ffffffffffff..
..f1111111111f..
..f1111111111f..
..f1111111111f..
.ff1111111111ff.
.f111111111111f.
.f111111111111f.
.ff1111111111ff.
..f1111111111f..
..f1111111111f..
..f1111111111f..
..ffffffffffff..
`
const DUENDE = img`
..............
..ffffffffff..
..f79777777f..
..f79777977f..
..f69666666fff
..f69666666f1f
..f69666666f1f
..f69666666f1f
..f89888888f1f
..f89888888fff
..f89888988f..
..f89888888f..
..f89888888f..
..ff888888ff..
...ffffffff...
..............
`
const IMPE = img`
...ffffffff...
...f111111f...
..ffffffffff..
..f55555555f..
..f55555555f..
..f5ffffff5f..
..f5f5555f5f..
..f5f5ff5f5f..
..f5f5555f5f..
..f5ffffff5f..
..f55555555f..
..f22222222f..
..f21111112f..
..f22222222f..
..f55555555f..
..f5ffffff5f..
..f55555555f..
..f55555555f..
..f55555555f..
..f55555555f..
..f55555555f..
..ffffffffff..
`
const IMPE_ULTRA = img`
...ffffffff...
...f111111f...
..ffffffffff..
..f11111111f..
..f11111111f..
..f1bbbbbb1f..
..f1b1111b1f..
..f1b1bb1b1f..
..f1b1111b1f..
..f1bbbbbb1f..
..f11111111f..
..f99999999f..
..f91111119f..
..f99999999f..
..f11111111f..
..f1bbbbbb1f..
..f11111111f..
..f11111111f..
..f11111111f..
..f11111111f..
..f11111111f..
..ffffffffff..
`
const IMPE_DARK = img`
...ffffffff...
...f111111f...
..ffffffffff..
..fccccccccf..
..fccccccccf..
..fc555555cf..
..fc5cccc5cf..
..fc5c55c5cf..
..fc5cccc5cf..
..fc555555cf..
..fccccccccf..
..f55555555f..
..f5cccccc5f..
..f55555555f..
..fccccccccf..
..fc555555cf..
..fccccccccf..
..fccccccccf..
..fccccccccf..
..fccccccccf..
..fccccccccf..
..ffffffffff..
`
const FL_ROJA = img`
...ffffffff...
...f111111f...
..ffffffffff..
..ffffffffff..
..ffffffffff..
..f22ffff22f..
..f22222222f..
..f22111122f..
..f21111112f..
..f211ff112f..
..f21111112f..
..f22111122f..
..f21111112f..
..f211ff112f..
..f21111112f..
..f22111122f..
..f22222222f..
..f22ffff22f..
..f22222222f..
..f11111111f..
..f22222222f..
..ffffffffff..
`
const FL_GOLD = img`
...ffffffff...
...f111111f...
..ffffffffff..
..ffffffffff..
..ffffffffff..
..f55ffff55f..
..f55555555f..
..f55111155f..
..f51111115f..
..f511ff115f..
..f51111115f..
..f55111155f..
..f51111115f..
..f511ff115f..
..f51111115f..
..f55111155f..
..f55555555f..
..f55ffff55f..
..f55555555f..
..f11111111f..
..f55555555f..
..ffffffffff..
`
const FL_AZUL = img`
...ffffffff...
...f111111f...
..ffffffffff..
..ffffffffff..
..ffffffffff..
..f88ffff88f..
..f88888888f..
..f88111188f..
..f81111118f..
..f811ff118f..
..f81111118f..
..f88111188f..
..f81111118f..
..f811ff118f..
..f81111118f..
..f88111188f..
..f88888888f..
..f88ffff88f..
..f88888888f..
..f11111111f..
..f88888888f..
..ffffffffff..
`
const FL_VERDE = img`
...ffffffff...
...f111111f...
..ffffffffff..
..ffffffffff..
..ffffffffff..
..f77ffff77f..
..f77777777f..
..f77111177f..
..f71111117f..
..f711ff117f..
..f71111117f..
..f77111177f..
..f71111117f..
..f711ff117f..
..f71111117f..
..f77111177f..
..f77777777f..
..f77ffff77f..
..f77777777f..
..f11111111f..
..f77777777f..
..ffffffffff..
`
const SM_ROSA = img`
...ffffffff...
...f111111f...
..ffffffffff..
..f11111111f..
..f33333333f..
..f33333333f..
..f11111111f..
..f11111111f..
..f11111133f..
..f11111331f..
..f11113311f..
..f11133111f..
..f11331111f..
..f13311111f..
..f33111111f..
..f11111111f..
..f33333333f..
..f13333331f..
..f11111111f..
..f11111111f..
..f11111111f..
..ffffffffff..
`
const SM_ROJA = img`
...ffffffff...
...f111111f...
..ffffffffff..
..f11111111f..
..f22222222f..
..f22222222f..
..f11111111f..
..f11111111f..
..f11111122f..
..f11111221f..
..f11112211f..
..f11122111f..
..f11221111f..
..f12211111f..
..f22111111f..
..f11111111f..
..f22222222f..
..f12222221f..
..f11111111f..
..f11111111f..
..f11111111f..
..ffffffffff..
`
const SM_VERDE = img`
...ffffffff...
...f111111f...
..ffffffffff..
..f11111111f..
..f77777777f..
..f77777777f..
..f11111111f..
..f11111111f..
..f11111177f..
..f11111771f..
..f11117711f..
..f11177111f..
..f11771111f..
..f17711111f..
..f77111111f..
..f11111111f..
..f77777777f..
..f17777771f..
..f11111111f..
..f11111111f..
..f11111111f..
..ffffffffff..
`
const SM_NEGRA = img`
...ffffffff...
...f111111f...
..ffffffffff..
..f11111111f..
..ffffffffff..
..ffffffffff..
..f11111111f..
..f11111111f..
..f111111fff..
..f11111ff1f..
..f1111ff11f..
..f111ff111f..
..f11ff1111f..
..f1ff11111f..
..fff111111f..
..f11111111f..
..ffffffffff..
..f1ffffff1f..
..f11111111f..
..f11111111f..
..f11111111f..
..ffffffffff..
`
const PUERTA_AMPM = img`
ffffffffffffffff
f88888888888888f
f85555555555558f
f85555555555558f
f85555555555558f
f82222222222228f
f88888888888888f
ffffffffffffffff
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999995f599999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
f99999999f99999f
ffffffffffffffff
`
const PUERTA_MONSTER = img`
ffffffffffffffff
f33333333333333f
f33333333333333f
f88888888888888f
f88888888888888f
ffffffffffffffff
f11111111f11111f
f11111111f11111f
f19999991f19991f
f19999991f19991f
f19999991f19991f
f19999991f19991f
f19999991f19991f
f19999991f19991f
f19999991f19991f
f19999995f19991f
f19999991f19991f
f19999991f19991f
f19999991f19991f
f19999991f19991f
f19999991f19991f
f11111111f11111f
f11111111f11111f
f11111111f11111f
f11111111f11111f
ffffffffffffffff
`
const CORAZON = img`
........
.ff..ff.
f22ff22f
f222222f
.f2222f.
..f22f..
...ff...
........
`

namespace SpriteKind {
    export const Zoom = SpriteKind.create()
    export const Gato = SpriteKind.create()
    export const Bloque = SpriteKind.create()
    export const Esqueleto = SpriteKind.create()
    export const Premio = SpriteKind.create()
    export const Bebida = SpriteKind.create()
}

let ingredientes: string[] = []
let desbloqueados = 1
let juegoTerminado = false
let capas: scene.Renderable[] = []
let spritesUI: Sprite[] = []
let parpadeo = true
let deriva = 0
let esperandoTarjeta = false
let introVista = false
let PANTALLA = 0
let seleccion = 0

const ANIOS = ["2020-2021", "2022", "2023", "2024", "2025", "BONUS"]
const NOMBRES = ["ZOOM UNIVERSITY", "LA AMARGURA", "APARTA 6",
    "CIENCIAS ECONOMICAS", "GRADUACION", "EL CONCIERTO"]

let s1fase = 0
let s1clases = 0
let s1bloques = 0
let s1vidas = 3
let s1congelado = false
let s1invulnerable = false
let s1calu = false
let s1luca = false
let jugador: Sprite = null
let gatoCalu: Sprite = null
let gatoLuca: Sprite = null
let bloques: Sprite[] = []
let danos: number[] = []
let objetivo: Sprite = null

const W5 = image.font5.charWidth
const W8 = image.font8.charWidth

function limpiarTodo() {
    s1fase = 0
    for (let c of capas) { c.destroy() }
    capas = []
    for (let s of spritesUI) { s.destroy() }
    spritesUI = []
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Zoom)
    sprites.destroyAllSpritesOfKind(SpriteKind.Gato)
    sprites.destroyAllSpritesOfKind(SpriteKind.Bloque)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Esqueleto)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Premio)
    sprites.destroyAllSpritesOfKind(SpriteKind.Bebida)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    s2acto = 0
    ale = null
    scene.setBackgroundImage(image.create(160, 120))
    jugador = null; gatoCalu = null; gatoLuca = null
    bloques = []; danos = []; objetivo = null
}

function centrado5(t: Image, s: string, y: number, c: number) {
    t.print(s, 80 - Math.idiv(s.length * W5, 2), y, c, image.font5)
}
function centrado8(t: Image, s: string, y: number, c: number) {
    t.print(s, 80 - Math.idiv(s.length * W8, 2), y, c, image.font8)
}
function pepperoni(t: Image, x: number, y: number) {
    t.fillRect(x + 1, y, 3, 5, 14)
    t.fillRect(x, y + 1, 5, 3, 14)
    t.fillRect(x + 1, y + 1, 3, 3, 2)
}
function jingle() {
    control.runInParallel(function () {
        music.playTone(392, 110); music.playTone(523, 110)
        music.playTone(659, 110); music.playTone(784, 240)
    })
}
function blip() { control.runInParallel(function () { music.playTone(880, 45) }) }
function ruidito(f: number) { control.runInParallel(function () { music.playTone(f, 60) }) }


// ---------- TARJETAS ----------

function tarjeta(titulo: string, l1: string, l2: string, l3: string, l4: string = null) {
    let faseAnterior = s1fase
    s1fase = 0
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Esqueleto)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    esperandoTarjeta = true
    let capa = scene.createRenderable(200, function (t: Image) {
        t.fillRect(7, 17, 152, 92, 15)
        t.fillRect(4, 14, 152, 92, 1)
        t.drawRect(4, 14, 152, 92, 15)
        t.drawRect(6, 16, 148, 88, 11)
        t.fillRect(5, 15, 150, 17, 2)
        t.fillRect(5, 31, 150, 1, 5)
        centrado5(t, titulo, 20, 1)
        if (l1 != "") { centrado8(t, l1, 40, 15) }
        if (l2 != "") { centrado8(t, l2, 52, 15) }
        if (l3 != "") { centrado8(t, l3, 64, 15) }
        if (l4) { centrado8(t, l4, 76, 12) }
        if (parpadeo) { centrado5(t, "PRESIONA A", 92, 2) }
    })
    pause(900)
    pauseUntil(function () { return !esperandoTarjeta })
    capa.destroy()
    pause(150)
    s1fase = faseAnterior
}


// ---------- LA PIZZA ----------

function anillo(f: Image, y: number, dy: number, r: number, c: number) {
    let v = r * r - dy * dy
    if (v <= 0) { return }
    let w = Math.floor(Math.sqrt(v))
    f.fillRect(36 - w, y, w * 2, 1, c)
}

function disco(f: Image, cx: number, cy: number, r: number, c: number) {
    for (let y = cy - r; y <= cy + r; y++) {
        let dy = y - cy
        let v = r * r - dy * dy
        if (v <= 0) { continue }
        let w = Math.floor(Math.sqrt(v))
        f.fillRect(cx - w, y, w * 2, 1, c)
    }
}

function imagenPizza(n: number) {
    let f = image.create(72, 72)
    for (let y = 0; y < 72; y++) {
        let dy = y - 36
        anillo(f, y, dy, 34, 15)
        anillo(f, y, dy, 32, 14)
        anillo(f, y, dy, 29, 4)
        if (n >= 1) { anillo(f, y, dy, 25, 13) }
        if (n >= 2) { anillo(f, y, dy, 22, 2) }
        if (n >= 3) { anillo(f, y, dy, 20, 5) }
    }
    if (n >= 4) {
        disco(f, 26, 26, 5, 2); disco(f, 47, 24, 5, 2)
        disco(f, 36, 42, 5, 2); disco(f, 22, 45, 4, 2)
        disco(f, 50, 45, 4, 2)
    }
    if (n >= 5) {
        disco(f, 36, 22, 3, 7); disco(f, 20, 34, 3, 7)
        disco(f, 52, 35, 3, 7); disco(f, 30, 52, 3, 7)
    }
    return f
}

function pantallaPizza() {
    limpiarTodo()
    PANTALLA = 2
    scene.setBackgroundColor(15)
    let p = sprites.create(imagenPizza(ingredientes.length), SpriteKind.Food)
    p.setPosition(80, 60)
    spritesUI.push(p)
    esperandoTarjeta = true
    let capa = scene.createRenderable(200, function (t: Image) {
        t.fillRect(0, 0, 160, 16, 2)
        t.fillRect(0, 15, 160, 1, 5)
        centrado5(t, "TU PIZZA VA ASI", 5, 1)
        t.fillRect(0, 100, 160, 20, 2)
        t.fillRect(0, 100, 160, 1, 5)
        centrado5(t, "+ " + ingredientes[ingredientes.length - 1], 105, 5)
        if (parpadeo) { centrado5(t, "PRESIONA A", 113, 1) }
    })
    capas.push(capa)
    pause(900)
    pauseUntil(function () { return !esperandoTarjeta })
    capa.destroy()
}


// ---------- MENU ----------

function mostrarMenu() {
    limpiarTodo()
    PANTALLA = 0
    scene.setBackgroundColor(15)
    let logo = sprites.create(LOGO, SpriteKind.Food)
    logo.setPosition(80, 45); logo.z = 10
    spritesUI.push(logo)
    let wg = sprites.create(WORDGAME, SpriteKind.Food)
    wg.setPosition(80, 98); wg.z = 10
    spritesUI.push(wg)
    let capa = scene.createRenderable(0, function (t: Image) {
        pepperoni(t, 6, 40 + (deriva % 34))
        pepperoni(t, 150, 70 - (deriva % 34))
        if (parpadeo) { centrado5(t, "PRESIONA A", 112, 1) }
    })
    capas.push(capa)
    jingle()
}

function abierto(i: number) {
    return (i < desbloqueados) || (i == 5 && juegoTerminado)
}

function mostrarSelector() {
    limpiarTodo()
    PANTALLA = 1
    scene.setBackgroundColor(15)
    let capa = scene.createRenderable(0, function (t: Image) {
        t.fillRect(0, 0, 160, 15, 2)
        t.fillRect(0, 14, 160, 1, 5)
        let s = "ESCOGE TU ANO"
        let x = 80 - Math.idiv(s.length * W5, 2)
        t.print(s, x, 5, 1, image.font5)
        let nx = x + 11 * W5
        t.fillRect(nx + 1, 3, 3, 1, 1)
        t.setPixel(nx + 1, 2, 1); t.setPixel(nx + 4, 2, 1)
        for (let i = 0; i < 6; i++) {
            let y = 23 + i * 12
            let color = abierto(i) ? 5 : 11
            if (i == seleccion) {
                t.fillRect(18, y - 2, 124, 11, 12)
                pepperoni(t, 23, y + 1)
                color = abierto(i) ? 1 : 11
            }
            t.print(abierto(i) ? ANIOS[i] : "? ? ?", 40, y, color, image.font5)
        }
        t.fillRect(0, 99, 160, 21, 2)
        t.fillRect(0, 99, 160, 1, 5)
        centrado5(t, abierto(seleccion) ? NOMBRES[seleccion] : "TODAVIA NO", 104, 1)
        centrado5(t, "A = JUGAR   B = ATRAS", 112, 3)
    })
    capas.push(capa)
}


// ---------- FONDOS ----------

function fondoCuarto() {
    let f = image.create(160, 120)
    f.fill(9)
    f.fillRect(0, 52, 160, 3, 1)
    f.fillRect(0, 55, 160, 65, 13)
    f.fillRect(0, 55, 1, 65, 11)
    f.fillRect(20, 55, 1, 65, 11)
    f.fillRect(40, 55, 1, 65, 11)
    f.fillRect(60, 55, 1, 65, 11)
    f.fillRect(80, 55, 1, 65, 11)
    f.fillRect(100, 55, 1, 65, 11)
    f.fillRect(120, 55, 1, 65, 11)
    f.fillRect(140, 55, 1, 65, 11)
    f.fillRect(160, 55, 1, 65, 11)
    f.fillRect(0, 55, 160, 1, 11)
    f.fillRect(0, 75, 160, 1, 11)
    f.fillRect(0, 95, 160, 1, 11)
    f.fillRect(0, 115, 160, 1, 11)
    f.fillRect(0, 16, 160, 1, 7)
    f.fillRect(4, 17, 2, 2, 5)
    f.fillRect(9, 18, 2, 2, 3)
    f.fillRect(14, 17, 2, 2, 5)
    f.fillRect(19, 18, 2, 2, 3)
    f.fillRect(24, 17, 2, 2, 5)
    f.fillRect(29, 18, 2, 2, 3)
    f.fillRect(34, 17, 2, 2, 5)
    f.fillRect(39, 18, 2, 2, 3)
    f.fillRect(44, 17, 2, 2, 5)
    f.fillRect(49, 18, 2, 2, 3)
    f.fillRect(54, 17, 2, 2, 5)
    f.fillRect(59, 18, 2, 2, 3)
    f.fillRect(64, 17, 2, 2, 5)
    f.fillRect(69, 18, 2, 2, 3)
    f.fillRect(74, 17, 2, 2, 5)
    f.fillRect(79, 18, 2, 2, 3)
    f.fillRect(84, 17, 2, 2, 5)
    f.fillRect(89, 18, 2, 2, 3)
    f.fillRect(94, 17, 2, 2, 5)
    f.fillRect(99, 18, 2, 2, 3)
    f.fillRect(104, 17, 2, 2, 5)
    f.fillRect(109, 18, 2, 2, 3)
    f.fillRect(114, 17, 2, 2, 5)
    f.fillRect(119, 18, 2, 2, 3)
    f.fillRect(124, 17, 2, 2, 5)
    f.fillRect(129, 18, 2, 2, 3)
    f.fillRect(134, 17, 2, 2, 5)
    f.fillRect(139, 18, 2, 2, 3)
    f.fillRect(144, 17, 2, 2, 5)
    f.fillRect(149, 18, 2, 2, 3)
    f.fillRect(154, 17, 2, 2, 5)
    f.fillRect(159, 18, 2, 2, 3)
    f.fillRect(12, 20, 66, 32, 15)
    f.fillRect(14, 22, 62, 28, 9)
    f.fillRect(14, 22, 62, 4, 6)
    f.fillRect(58, 25, 8, 5, 5)
    f.fillRect(60, 24, 4, 7, 5)
    f.fillRect(20, 29, 10, 3, 1)
    f.fillRect(23, 27, 6, 3, 1)
    f.fillRect(38, 26, 9, 3, 1)
    f.fillRect(41, 25, 5, 2, 1)
    f.fillRect(14, 36, 62, 6, 6)
    f.fillRect(14, 39, 62, 5, 7)
    f.fillRect(20, 36, 10, 4, 7)
    f.fillRect(44, 35, 12, 5, 7)
    f.fillRect(14, 44, 62, 6, 8)
    f.fillRect(16, 46, 10, 1, 9)
    f.fillRect(34, 48, 14, 1, 9)
    f.fillRect(24, 30, 1, 8, 1)
    f.fillRect(21, 30, 7, 1, 1)
    f.fillRect(24, 27, 1, 4, 1)
    f.fillRect(40, 30, 1, 8, 1)
    f.fillRect(37, 30, 7, 1, 1)
    f.fillRect(40, 27, 1, 4, 1)
    f.fillRect(56, 30, 1, 8, 1)
    f.fillRect(53, 30, 7, 1, 1)
    f.fillRect(56, 27, 1, 4, 1)
    f.fillRect(12, 20, 66, 2, 15)
    f.fillRect(12, 50, 66, 2, 15)
    f.fillRect(12, 20, 2, 32, 15)
    f.fillRect(76, 20, 2, 32, 15)
    f.fillRect(44, 20, 2, 32, 15)
    f.fillRect(12, 34, 66, 2, 15)
    f.fillRect(88, 22, 20, 24, 1)
    f.fillRect(88, 22, 20, 1, 15)
    f.fillRect(88, 45, 20, 1, 15)
    f.fillRect(88, 22, 1, 24, 15)
    f.fillRect(107, 22, 1, 24, 15)
    f.fillRect(90, 24, 16, 16, 9)
    f.fillRect(94, 30, 8, 5, 2)
    f.fillRect(97, 28, 4, 4, 2)
    f.fillRect(101, 29, 3, 2, 5)
    f.setPixel(99, 29, 15)
    f.fillRect(93, 35, 3, 4, 14)
    f.fillRect(90, 41, 16, 3, 7)
    f.fillRect(114, 44, 40, 3, 14)
    f.fillRect(114, 47, 40, 2, 12)
    f.fillRect(117, 32, 4, 12, 2)
    f.fillRect(117, 32, 4, 1, 15)
    f.fillRect(117, 43, 4, 1, 15)
    f.fillRect(117, 32, 1, 12, 15)
    f.fillRect(120, 32, 1, 12, 15)
    f.fillRect(122, 32, 4, 12, 5)
    f.fillRect(122, 32, 4, 1, 15)
    f.fillRect(122, 43, 4, 1, 15)
    f.fillRect(122, 32, 1, 12, 15)
    f.fillRect(125, 32, 1, 12, 15)
    f.fillRect(127, 32, 4, 12, 7)
    f.fillRect(127, 32, 4, 1, 15)
    f.fillRect(127, 43, 4, 1, 15)
    f.fillRect(127, 32, 1, 12, 15)
    f.fillRect(130, 32, 1, 12, 15)
    f.fillRect(132, 32, 4, 12, 10)
    f.fillRect(132, 32, 4, 1, 15)
    f.fillRect(132, 43, 4, 1, 15)
    f.fillRect(132, 32, 1, 12, 15)
    f.fillRect(135, 32, 1, 12, 15)
    f.fillRect(137, 32, 4, 12, 3)
    f.fillRect(137, 32, 4, 1, 15)
    f.fillRect(137, 43, 4, 1, 15)
    f.fillRect(137, 32, 1, 12, 15)
    f.fillRect(140, 32, 1, 12, 15)
    f.fillRect(142, 32, 4, 12, 8)
    f.fillRect(142, 32, 4, 1, 15)
    f.fillRect(142, 43, 4, 1, 15)
    f.fillRect(142, 32, 1, 12, 15)
    f.fillRect(145, 32, 1, 12, 15)
    f.fillRect(147, 32, 4, 12, 4)
    f.fillRect(147, 32, 4, 1, 15)
    f.fillRect(147, 43, 4, 1, 15)
    f.fillRect(147, 32, 1, 12, 15)
    f.fillRect(150, 32, 1, 12, 15)
    f.fillRect(140, 26, 14, 2, 14)
    f.fillRect(142, 20, 4, 6, 7)
    f.fillRect(141, 18, 6, 3, 7)
    f.fillRect(143, 26, 2, 3, 14)
    f.fillRect(100, 58, 54, 56, 15)
    f.fillRect(102, 60, 50, 52, 10)
    f.fillRect(104, 62, 46, 14, 1)
    f.fillRect(127, 62, 1, 14, 11)
    f.fillRect(104, 80, 46, 2, 12)
    f.fillRect(104, 88, 46, 2, 12)
    f.fillRect(104, 96, 46, 2, 12)
    f.fillRect(104, 104, 46, 2, 12)
    f.fillRect(100, 110, 54, 4, 14)
    f.fillRect(8, 78, 52, 30, 14)
    f.fillRect(8, 78, 52, 1, 15)
    f.fillRect(8, 107, 52, 1, 15)
    f.fillRect(8, 78, 1, 30, 15)
    f.fillRect(59, 78, 1, 30, 15)
    f.fillRect(8, 104, 52, 4, 12)
    f.fillRect(20, 82, 26, 18, 11)
    f.fillRect(20, 82, 26, 1, 15)
    f.fillRect(20, 99, 26, 1, 15)
    f.fillRect(20, 82, 1, 18, 15)
    f.fillRect(45, 82, 1, 18, 15)
    f.fillRect(22, 84, 22, 10, 8)
    f.fillRect(24, 86, 7, 3, 1)
    f.fillRect(34, 86, 7, 3, 1)
    f.fillRect(24, 91, 7, 3, 1)
    f.fillRect(34, 91, 7, 3, 1)
    f.fillRect(20, 100, 26, 2, 11)
    f.fillRect(50, 84, 7, 8, 2)
    f.fillRect(56, 86, 3, 4, 2)
    f.fillRect(50, 84, 7, 2, 1)
    f.fillRect(10, 84, 8, 10, 1)
    f.fillRect(11, 86, 6, 1, 11)
    f.fillRect(11, 89, 6, 1, 11)
    f.fillRect(64, 74, 32, 26, 3)
    f.fillRect(64, 74, 32, 1, 2)
    f.fillRect(64, 99, 32, 1, 2)
    f.fillRect(64, 74, 1, 26, 2)
    f.fillRect(95, 74, 1, 26, 2)
    f.fillRect(68, 78, 24, 1, 2)
    f.fillRect(68, 95, 24, 1, 2)
    f.fillRect(68, 78, 1, 18, 2)
    f.fillRect(91, 78, 1, 18, 2)
    f.fillRect(72, 82, 16, 1, 2)
    f.fillRect(72, 91, 16, 1, 2)
    f.fillRect(72, 82, 1, 10, 2)
    f.fillRect(87, 82, 1, 10, 2)
    f.fillRect(24, 108, 22, 4, 12)
    f.fillRect(24, 108, 22, 1, 15)
    f.fillRect(24, 111, 22, 1, 15)
    f.fillRect(24, 108, 1, 4, 15)
    f.fillRect(45, 108, 1, 4, 15)
    f.fillRect(24, 112, 22, 8, 14)
    f.fillRect(24, 112, 22, 1, 15)
    f.fillRect(24, 119, 22, 1, 15)
    f.fillRect(24, 112, 1, 8, 15)
    f.fillRect(45, 112, 1, 8, 15)
    f.fillRect(27, 114, 16, 1, 12)
    f.fillRect(27, 117, 16, 1, 12)
    return f
}

function fondoNoche() {
    let f = image.create(160, 120)
    f.fill(15)
    f.fillRect(0, 14, 160, 22, 15)
    f.setPixel(9, 16, 1)
    f.setPixel(52, 33, 1)
    f.setPixel(95, 32, 1)
    f.setPixel(138, 31, 1)
    f.setPixel(21, 30, 1)
    f.setPixel(64, 29, 1)
    f.setPixel(107, 28, 1)
    f.setPixel(150, 27, 1)
    f.setPixel(33, 26, 1)
    f.setPixel(76, 25, 1)
    f.setPixel(119, 24, 1)
    f.setPixel(2, 23, 1)
    f.setPixel(45, 22, 1)
    f.setPixel(88, 21, 1)
    f.setPixel(131, 20, 1)
    f.setPixel(14, 19, 1)
    f.setPixel(57, 18, 1)
    f.setPixel(100, 17, 1)
    f.setPixel(143, 16, 1)
    f.setPixel(26, 33, 1)
    f.setPixel(69, 32, 1)
    f.setPixel(112, 31, 1)
    f.setPixel(155, 30, 1)
    f.setPixel(38, 29, 1)
    f.setPixel(81, 28, 1)
    f.setPixel(124, 27, 1)
    f.setPixel(7, 26, 1)
    f.setPixel(50, 25, 1)
    f.setPixel(93, 24, 1)
    f.setPixel(136, 23, 1)
    f.fillRect(21, 17, 2, 1, 1)
    f.fillRect(21, 16, 1, 3, 1)
    f.fillRect(78, 30, 2, 1, 1)
    f.fillRect(78, 29, 1, 3, 1)
    f.fillRect(135, 29, 2, 1, 1)
    f.fillRect(135, 28, 1, 3, 1)
    f.fillRect(36, 28, 2, 1, 1)
    f.fillRect(36, 27, 1, 3, 1)
    f.fillRect(93, 27, 2, 1, 1)
    f.fillRect(93, 26, 1, 3, 1)
    f.fillRect(150, 26, 2, 1, 1)
    f.fillRect(150, 25, 1, 3, 1)
    f.fillRect(136, 17, 12, 12, 1)
    f.fillRect(138, 19, 8, 8, 1)
    f.fillRect(139, 21, 3, 3, 11)
    f.fillRect(143, 24, 2, 2, 11)
    f.fillRect(0, 28, 34, 8, 12)
    f.fillRect(8, 25, 18, 5, 12)
    f.fillRect(14, 23, 7, 3, 12)
    f.fillRect(38, 28, 34, 8, 12)
    f.fillRect(46, 25, 18, 5, 12)
    f.fillRect(52, 23, 7, 3, 12)
    f.fillRect(80, 28, 34, 8, 12)
    f.fillRect(88, 25, 18, 5, 12)
    f.fillRect(94, 23, 7, 3, 12)
    f.fillRect(120, 28, 34, 8, 12)
    f.fillRect(128, 25, 18, 5, 12)
    f.fillRect(134, 23, 7, 3, 12)
    f.fillRect(10, 31, 2, 5, 14)
    f.fillRect(7, 28, 8, 4, 6)
    f.fillRect(8, 25, 6, 4, 6)
    f.fillRect(9, 22, 4, 4, 6)
    f.fillRect(32, 31, 2, 5, 14)
    f.fillRect(29, 28, 8, 4, 6)
    f.fillRect(30, 25, 6, 4, 6)
    f.fillRect(31, 22, 4, 4, 6)
    f.fillRect(60, 31, 2, 5, 14)
    f.fillRect(57, 28, 8, 4, 6)
    f.fillRect(58, 25, 6, 4, 6)
    f.fillRect(59, 22, 4, 4, 6)
    f.fillRect(90, 31, 2, 5, 14)
    f.fillRect(87, 28, 8, 4, 6)
    f.fillRect(88, 25, 6, 4, 6)
    f.fillRect(89, 22, 4, 4, 6)
    f.fillRect(114, 31, 2, 5, 14)
    f.fillRect(111, 28, 8, 4, 6)
    f.fillRect(112, 25, 6, 4, 6)
    f.fillRect(113, 22, 4, 4, 6)
    f.fillRect(144, 31, 2, 5, 14)
    f.fillRect(141, 28, 8, 4, 6)
    f.fillRect(142, 25, 6, 4, 6)
    f.fillRect(143, 22, 4, 4, 6)
    f.fillRect(0, 34, 160, 2, 7)
    f.fillRect(0, 36, 160, 84, 14)
    f.fillRect(0, 36, 1, 84, 15)
    f.fillRect(16, 36, 1, 84, 15)
    f.fillRect(32, 36, 1, 84, 15)
    f.fillRect(48, 36, 1, 84, 15)
    f.fillRect(64, 36, 1, 84, 15)
    f.fillRect(80, 36, 1, 84, 15)
    f.fillRect(96, 36, 1, 84, 15)
    f.fillRect(112, 36, 1, 84, 15)
    f.fillRect(128, 36, 1, 84, 15)
    f.fillRect(144, 36, 1, 84, 15)
    f.fillRect(160, 36, 1, 84, 15)
    f.fillRect(0, 36, 160, 1, 15)
    f.fillRect(0, 52, 160, 1, 15)
    f.fillRect(0, 68, 160, 1, 15)
    f.fillRect(0, 84, 160, 1, 15)
    f.fillRect(0, 100, 160, 1, 15)
    f.fillRect(0, 116, 160, 1, 15)
    f.fillRect(117, 109, 3, 2, 7)
    f.fillRect(121, 95, 3, 2, 7)
    f.fillRect(132, 113, 3, 2, 7)
    f.fillRect(50, 61, 3, 2, 7)
    f.fillRect(133, 98, 3, 2, 7)
    f.fillRect(49, 50, 3, 2, 7)
    f.fillRect(116, 76, 3, 2, 7)
    f.fillRect(38, 49, 3, 2, 7)
    f.fillRect(139, 43, 3, 2, 7)
    f.fillRect(154, 88, 3, 2, 7)
    f.fillRect(117, 58, 3, 2, 7)
    f.fillRect(5, 105, 3, 2, 7)
    f.fillRect(18, 45, 3, 2, 7)
    f.fillRect(11, 62, 3, 2, 7)
    f.fillRect(63, 114, 3, 2, 7)
    f.fillRect(9, 97, 3, 2, 7)
    f.fillRect(85, 94, 3, 2, 7)
    f.fillRect(153, 63, 3, 2, 7)
    f.fillRect(134, 67, 3, 2, 7)
    f.fillRect(77, 101, 3, 2, 7)
    f.fillRect(3, 48, 3, 2, 7)
    f.fillRect(119, 73, 3, 2, 7)
    f.fillRect(106, 108, 3, 2, 7)
    f.fillRect(23, 70, 3, 2, 7)
    f.fillRect(82, 67, 3, 2, 7)
    f.fillRect(133, 74, 3, 2, 7)
    f.fillRect(9, 46, 3, 2, 7)
    f.fillRect(146, 51, 3, 2, 7)
    f.fillRect(104, 51, 3, 2, 7)
    f.fillRect(76, 87, 3, 2, 7)
    f.fillRect(19, 40, 3, 2, 7)
    f.fillRect(2, 65, 3, 2, 7)
    f.fillRect(55, 44, 3, 2, 7)
    f.fillRect(122, 86, 3, 2, 7)
    f.fillRect(103, 91, 3, 2, 7)
    f.fillRect(20, 110, 3, 2, 7)
    f.fillRect(52, 72, 3, 2, 7)
    f.fillRect(88, 49, 3, 2, 7)
    f.fillRect(81, 80, 3, 2, 7)
    f.fillRect(5, 90, 3, 2, 7)
    f.fillRect(34, 57, 7, 6, 11)
    f.fillRect(34, 57, 7, 1, 15)
    f.fillRect(34, 62, 7, 1, 15)
    f.fillRect(34, 57, 1, 6, 15)
    f.fillRect(40, 57, 1, 6, 15)
    f.fillRect(67, 52, 7, 6, 11)
    f.fillRect(67, 52, 7, 1, 15)
    f.fillRect(67, 57, 7, 1, 15)
    f.fillRect(67, 52, 1, 6, 15)
    f.fillRect(73, 52, 1, 6, 15)
    f.fillRect(6, 47, 7, 6, 11)
    f.fillRect(6, 47, 7, 1, 15)
    f.fillRect(6, 52, 7, 1, 15)
    f.fillRect(6, 47, 1, 6, 15)
    f.fillRect(12, 47, 1, 6, 15)
    f.fillRect(123, 102, 7, 6, 11)
    f.fillRect(123, 102, 7, 1, 15)
    f.fillRect(123, 107, 7, 1, 15)
    f.fillRect(123, 102, 1, 6, 15)
    f.fillRect(129, 102, 1, 6, 15)
    f.fillRect(49, 111, 7, 6, 11)
    f.fillRect(49, 111, 7, 1, 15)
    f.fillRect(49, 116, 7, 1, 15)
    f.fillRect(49, 111, 1, 6, 15)
    f.fillRect(55, 111, 1, 6, 15)
    f.fillRect(52, 97, 7, 6, 11)
    f.fillRect(52, 97, 7, 1, 15)
    f.fillRect(52, 102, 7, 1, 15)
    f.fillRect(52, 97, 1, 6, 15)
    f.fillRect(58, 97, 1, 6, 15)
    f.fillRect(134, 64, 7, 6, 11)
    f.fillRect(134, 64, 7, 1, 15)
    f.fillRect(134, 69, 7, 1, 15)
    f.fillRect(134, 64, 1, 6, 15)
    f.fillRect(140, 64, 1, 6, 15)
    f.fillRect(37, 93, 7, 6, 11)
    f.fillRect(37, 93, 7, 1, 15)
    f.fillRect(37, 98, 7, 1, 15)
    f.fillRect(37, 93, 1, 6, 15)
    f.fillRect(43, 93, 1, 6, 15)
    f.fillRect(102, 54, 7, 6, 11)
    f.fillRect(102, 54, 7, 1, 15)
    f.fillRect(102, 59, 7, 1, 15)
    f.fillRect(102, 54, 1, 6, 15)
    f.fillRect(108, 54, 1, 6, 15)
    f.fillRect(105, 93, 7, 6, 11)
    f.fillRect(105, 93, 7, 1, 15)
    f.fillRect(105, 98, 7, 1, 15)
    f.fillRect(105, 93, 1, 6, 15)
    f.fillRect(111, 93, 1, 6, 15)
    f.fillRect(57, 40, 2, 2, 5)
    f.fillRect(72, 78, 2, 2, 15)
    f.fillRect(8, 66, 2, 2, 9)
    f.fillRect(50, 90, 2, 2, 5)
    f.fillRect(150, 52, 2, 2, 15)
    f.fillRect(13, 58, 2, 2, 9)
    f.fillRect(57, 96, 2, 2, 5)
    f.fillRect(69, 41, 2, 2, 15)
    f.fillRect(87, 77, 2, 2, 9)
    f.fillRect(101, 49, 2, 2, 5)
    f.fillRect(22, 51, 2, 2, 15)
    f.fillRect(56, 71, 2, 2, 9)
    f.fillRect(6, 87, 2, 2, 5)
    f.fillRect(98, 98, 2, 2, 15)
    f.fillRect(35, 101, 2, 2, 9)
    f.fillRect(150, 57, 2, 2, 5)
    f.fillRect(101, 63, 2, 2, 15)
    f.fillRect(42, 79, 2, 2, 9)
    f.fillRect(61, 71, 2, 2, 5)
    f.fillRect(51, 60, 2, 2, 15)
    f.fillRect(144, 65, 2, 2, 9)
    f.fillRect(102, 101, 2, 2, 5)
    f.fillRect(112, 84, 34, 24, 8)
    f.fillRect(112, 84, 34, 1, 15)
    f.fillRect(112, 107, 34, 1, 15)
    f.fillRect(112, 84, 1, 24, 15)
    f.fillRect(145, 84, 1, 24, 15)
    f.fillRect(116, 88, 10, 2, 9)
    f.fillRect(128, 98, 12, 2, 9)
    f.fillRect(16, 44, 2, 8, 14)
    f.fillRect(15, 40, 4, 5, 4)
    f.fillRect(16, 38, 2, 4, 5)
    f.fillRect(140, 44, 2, 8, 14)
    f.fillRect(139, 40, 4, 5, 4)
    f.fillRect(140, 38, 2, 4, 5)
    f.fillRect(20, 104, 2, 8, 14)
    f.fillRect(19, 100, 4, 5, 4)
    f.fillRect(20, 98, 2, 4, 5)
    return f
}


// =====================================================
//   STAGE 1 · 2020-2021 · TILARAN
// =====================================================

function stage1FaseA() {
    limpiarTodo()
    PANTALLA = 2
    s1clases = 0; s1calu = false; s1luca = false; s1congelado = false
    scene.setBackgroundImage(fondoCuarto())

    let capa = scene.createRenderable(50, function (t: Image) {
        t.fillRect(0, 0, 160, 15, 12)
        t.fillRect(0, 14, 160, 1, 5)
        t.print("ZOOM " + s1clases + "/8", 4, 4, 5, image.font5)
        t.print("TILARAN", 112, 4, 1, image.font5)
        if (s1calu) { t.fillRect(92, 4, 6, 6, 1); t.drawRect(92, 4, 6, 6, 15) }
        if (s1luca) { t.fillRect(101, 4, 6, 6, 4); t.drawRect(101, 4, 6, 6, 15) }
    })
    capas.push(capa)

    jugador = sprites.create(PAZ, SpriteKind.Player)
    jugador.setPosition(78, 84)
    controller.moveSprite(jugador, 75, 75)
    jugador.setStayInScreen(true)

    gatoCalu = sprites.create(CALU, SpriteKind.Gato)
    gatoCalu.setPosition(124, 100)
    gatoLuca = sprites.create(LUCA, SpriteKind.Gato)
    gatoLuca.setPosition(40, 100)
    for (let g of [gatoCalu, gatoLuca]) {
        g.setBounceOnWall(true)
        g.setVelocity(randint(-22, 22), randint(-22, 22))
    }

    control.runInParallel(function () {
        tarjeta("MARZO 2020 - TILARAN",
            "la u se fue a zoom",
            "agarra 8 clases",
            "cuidado los gatos")
        s1fase = 1
    })
}

game.onUpdate(function () {
    if (s1fase == 1) {
        if (jugador && jugador.y < 62) { jugador.y = 62 }
        for (let g of sprites.allOfKind(SpriteKind.Gato)) {
            if (g.y < 62) { g.y = 62; g.vy = Math.abs(g.vy) }
        }
    } else if (s1fase == 2 || s1fase == 3) {
        if (jugador && jugador.y < 44) { jugador.y = 44 }
        objetivo = null
        if (jugador) {
            let md = 24
            for (let b of bloques) {
                let dx = b.x - jugador.x, dy = b.y - jugador.y
                let d = Math.sqrt(dx * dx + dy * dy)
                if (d < md) { md = d; objetivo = b }
            }
        }
    }
})

game.onUpdateInterval(2200, function () {
    if (s1fase != 1) { return }
    for (let g of sprites.allOfKind(SpriteKind.Gato)) {
        g.setVelocity(randint(-25, 25), randint(-25, 25))
    }
})

game.onUpdateInterval(1600, function () {
    if (s1fase != 1) { return }
    if (sprites.allOfKind(SpriteKind.Zoom).length >= 3) { return }
    let z = sprites.create(ZOOMCALL, SpriteKind.Zoom)
    z.setPosition(randint(18, 142), randint(66, 108))
    z.lifespan = 5200
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Zoom, function (p, z) {
    if (s1fase != 1) { return }
    z.destroy(effects.fountain, 200)
    s1clases += 1
    ruidito(700)
    if (s1clases >= 8) {
        s1fase = 0
        control.runInParallel(function () { stage1FaseB() })
    }
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Gato, function (p, g) {
    if (s1fase != 1 || s1congelado) { return }
    s1congelado = true
    if (g == gatoCalu) { s1calu = true } else { s1luca = true }
    let c = sprites.create(CORAZON, SpriteKind.Food)
    c.setPosition(g.x, g.y - 12); c.vy = -14; c.lifespan = 1100
    let vx = g.vx, vy = g.vy
    g.setVelocity(0, 0)
    controller.moveSprite(p, 0, 0)
    p.setVelocity(0, 0)
    ruidito(520)
    control.runInParallel(function () {
        pause(1200)
        controller.moveSprite(p, 75, 75)
        g.setVelocity(vx, vy)
        s1congelado = false
    })
})


// ---------- FASE B ----------

function stage1FaseB() {
    for (let s of sprites.allOfKind(SpriteKind.Zoom)) { s.destroy() }
    for (let s of sprites.allOfKind(SpriteKind.Gato)) { s.destroy() }
    for (let c of capas) { c.destroy() }
    capas = []
    if (jugador) { jugador.destroy() }
    gatoCalu = null; gatoLuca = null
    bloques = []; danos = []

    scene.setBackgroundImage(fondoNoche())
    s1bloques = 0; s1vidas = 3; s1invulnerable = false

    let capa = scene.createRenderable(50, function (t: Image) {
        if (objetivo) {
            t.drawRect(objetivo.left - 2, objetivo.top - 2,
                objetivo.width + 4, objetivo.height + 4, 5)
            t.drawRect(objetivo.left - 1, objetivo.top - 1,
                objetivo.width + 2, objetivo.height + 2, 1)
            if (parpadeo) {
                t.print("A", objetivo.x - 2, objetivo.top - 12, 5, image.font8)
            }
        }
        t.fillRect(0, 0, 160, 15, 8)
        t.fillRect(0, 14, 160, 1, 9)
        t.drawTransparentImage(PICO, 3, 3)
        t.print(s1bloques + "/10", 13, 4, 5, image.font5)
        for (let v = 0; v < s1vidas; v++) {
            t.drawTransparentImage(CORAZON, 128 + v * 10, 3)
        }
    })
    capas.push(capa)

    jugador = sprites.create(PAZ, SpriteKind.Player)
    jugador.setPosition(80, 78)
    controller.moveSprite(jugador, 80, 80)
    jugador.setStayInScreen(true)

    control.runInParallel(function () {
        tarjeta("SE ACABO LA CLASE",
            "ahora minecraft",
            "con los amigos",
            "A = picar bloques")
        s1fase = 2
        for (let i = 0; i < 4; i++) { nuevoBloque() }
        crearEnemigo(0)
    })
}

function nuevoBloque() {
    let b = sprites.create(BLOQUE, SpriteKind.Bloque)
    b.setPosition(randint(14, 146), randint(50, 112))
    bloques.push(b)
    danos.push(0)
}

function picar() {
    if (s1fase != 2 || !objetivo) { return }
    let i = bloques.indexOf(objetivo)
    if (i < 0) { return }
    danos[i] += 1
    objetivo.startEffect(effects.disintegrate, 120)
    ruidito(260 + danos[i] * 90)
    if (danos[i] == 1) { objetivo.setImage(BLOQUE2) }
    else if (danos[i] == 2) { objetivo.setImage(BLOQUE3) }
    else {
        let b = objetivo
        bloques.removeAt(i)
        danos.removeAt(i)
        objetivo = null
        b.destroy(effects.disintegrate, 250)
        s1bloques += 1
        ruidito(880)
        if (s1bloques >= 10) {
            s1fase = 3
            control.runInParallel(function () { aparecerMasa() })
        } else {
            nuevoBloque()
        }
    }
}

function crearEnemigo(tipo: number) {
    if (!jugador) { return }
    if (tipo == 2) {
        let e = sprites.create(ESQ, SpriteKind.Esqueleto)
        e.setPosition(randint(14, 146), randint(44, 62))
        e.follow(jugador, 13)
    } else if (tipo == 1) {
        let e = sprites.create(ZOMBI, SpriteKind.Enemy)
        e.setPosition(randint(14, 146), randint(44, 70))
        e.follow(jugador, 22)
    } else {
        let e = sprites.create(CUBO, SpriteKind.Enemy)
        e.setPosition(randint(14, 146), randint(44, 70))
        e.follow(jugador, 17)
    }
}

game.onUpdateInterval(5600, function () {
    if (s1fase != 2 && s1fase != 3) { return }
    let total = sprites.allOfKind(SpriteKind.Enemy).length +
        sprites.allOfKind(SpriteKind.Esqueleto).length
    if (total >= 3) { return }
    if (s1bloques >= 7) { crearEnemigo(2) }
    else if (s1bloques >= 4) { crearEnemigo(1) }
    else { crearEnemigo(0) }
})

game.onUpdateInterval(2800, function () {
    if ((s1fase != 2 && s1fase != 3) || !jugador) { return }
    for (let e of sprites.allOfKind(SpriteKind.Esqueleto)) {
        let dx = jugador.x - e.x
        let dy = jugador.y - e.y
        let d = Math.sqrt(dx * dx + dy * dy)
        if (d < 2) { continue }
        let p = sprites.createProjectileFromSprite(FLECHA, e,
            Math.round(dx / d * 48), Math.round(dy / d * 48))
        p.lifespan = 2400
    }
})

function golpe(p: Sprite, e: Sprite) {
    if (s1invulnerable || (s1fase != 2 && s1fase != 3)) { return }
    s1invulnerable = true
    s1vidas -= 1
    if (e) { e.destroy(effects.fire, 300) }
    ruidito(170)
    p.startEffect(effects.spray, 300)
    control.runInParallel(function () {
        pause(1700)
        s1invulnerable = false
    })
    if (s1vidas <= 0) {
        s1fase = 0
        control.runInParallel(function () { stage1Perdido() })
    }
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (p, e) { golpe(p, e) })
sprites.onOverlap(SpriteKind.Player, SpriteKind.Esqueleto, function (p, e) { golpe(p, e) })
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (p, e) {
    e.destroy(); golpe(p, null)
})

function aparecerMasa() {
    for (let s of sprites.allOfKind(SpriteKind.Bloque)) { s.destroy() }
    bloques = []; danos = []; objetivo = null
    tarjeta("APARECIO LA MASA",
        "picaste 10 bloques",
        "agarra la masa",
        "se acaba la noche")
    let m = sprites.create(MASA, SpriteKind.Premio)
    m.setPosition(80, 78)
    m.startEffect(effects.halo)
    crearEnemigo(1)
}

function stage1Ganado() {
    pause(400)
    ingredientes.push("LA MASA")
    if (desbloqueados < 2) { desbloqueados = 2 }
    let secreto = s1calu && s1luca
    limpiarTodo()
    scene.setBackgroundColor(9)
    jingle()
    tarjeta("AMANECIO EN TILARAN",
        "sobreviviste",
        "ganaste LA MASA",
        secreto ? "+ Calu y Luca" : "")
    pantallaPizza()
    mostrarSelector()
}

function stage1Perdido() {
    pause(400)
    limpiarTodo()
    scene.setBackgroundColor(15)
    tarjeta("TE GANO LA NOCHE",
        "sin corazones",
        "proba otra vez",
        "")
    mostrarSelector()
}


// ---------- ENTRADA ----------

function pantallaEnObra(nombre: string) {
    limpiarTodo()
    PANTALLA = 2
    scene.setBackgroundColor(12)
    let capa = scene.createRenderable(0, function (t: Image) {
        centrado5(t, nombre, 46, 5)
        centrado5(t, "en construccion", 58, 1)
        if (parpadeo) { centrado5(t, "MENU = VOLVER", 84, 6) }
    })
    capas.push(capa)
}

function intro() {
    tarjeta("PIZZITA HOT - THE GAME",
        "5 anos de la u",
        "cada ano te da un",
        "ingrediente",
        "al final: la pizza")
    introVista = true
}

function entrarAlStage(i: number) {
    if (i == 5) { pantallaEnObra("BONUS - EL CONCIERTO"); return }
    if (i > 1) { pantallaEnObra(NOMBRES[i]); return }
    control.runInParallel(function () {
        if (!introVista) { intro() }
        if (i == 0) { stage1FaseA() } else { stage2Calle() }
    })
}


// ---------- CONTROLES ----------

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (esperandoTarjeta) { esperandoTarjeta = false; blip(); return }
    if (PANTALLA == 0) { blip(); seleccion = 0; mostrarSelector() }
    else if (PANTALLA == 1 && abierto(seleccion)) { blip(); entrarAlStage(seleccion) }
    else if (PANTALLA == 2 && s1fase == 2) { picar() }
    else if (PANTALLA == 2 && (s2acto == 1 || s2acto == 4)) { saltar() }
    else if (PANTALLA == 2 && s2acto == 2) { comprar() }
    else if (PANTALLA == 2 && s2acto == 5) { pedirPizza() }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (esperandoTarjeta) { return }
    if (PANTALLA == 1) { blip(); mostrarMenu() }
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PANTALLA == 1 && !esperandoTarjeta) { seleccion = (seleccion + 5) % 6; blip() }
    else if (s2acto == 2) { moverSel(0, -1) }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (s2acto == 2) { moverSel(-1, 0) }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (s2acto == 2) { moverSel(1, 0) }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PANTALLA == 1 && !esperandoTarjeta) { seleccion = (seleccion + 1) % 6; blip() }
    else if (s2acto == 2) { moverSel(0, 1) }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PANTALLA != 0 && !esperandoTarjeta) { mostrarMenu() }
})

game.onUpdateInterval(400, function () { parpadeo = !parpadeo })
game.onUpdateInterval(120, function () { deriva += 1 })

mostrarMenu()


// =====================================================
//   STAGE 2 · 2022 · LA CALLE DE LA AMARGURA   (v2)
// =====================================================
// Reemplaza desde la linea que dice
//   //   STAGE 2 · 2022 · LA CALLE DE LA AMARGURA
// hasta el FINAL del archivo.

let s2acto = 0
let s2duendes = 0
let s2vidas = 3
let s2golpe = false
let s2sel = 0
let s2bebida = ""
let ale: Sprite = null


// ---------- LATAS DE LA REFRI (16x22) ----------

const C_IMPE = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f555555555555f.
.f555555555555f.
.f5555ffff5555f.
.f555ff11ff555f.
.f55ff1111ff55f.
.f55f111111f55f.
.f55ff1111ff55f.
.f555ff11ff555f.
.f5555ffff5555f.
.f111111111111f.
.f122222222221f.
.f122222222221f.
.f111111111111f.
.f555555555555f.
.f5555ffff5555f.
.f555555555555f.
.f555555555555f.
.f555555555555f.
.ffffffffffffff.
`
const C_ULTRA = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f111111111111f.
.f111111111111f.
.f1111bbbb1111f.
.f111bb11bb111f.
.f11bb1111bb11f.
.f11b111111b11f.
.f11bb1111bb11f.
.f111bb11bb111f.
.f1111bbbb1111f.
.f999999999999f.
.f911111111119f.
.f911111111119f.
.f999999999999f.
.f111111111111f.
.f1111bbbb1111f.
.f111111111111f.
.f111111111111f.
.f111111111111f.
.ffffffffffffff.
`
const C_NEGRA = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.fccccccccccccf.
.fccccccccccccf.
.fcccc5555ccccf.
.fccc55cc55cccf.
.fcc55cccc55ccf.
.fcc5cccccc5ccf.
.fcc55cccc55ccf.
.fccc55cc55cccf.
.fcccc5555ccccf.
.f555555555555f.
.f5cccccccccc5f.
.f5cccccccccc5f.
.f555555555555f.
.fccccccccccccf.
.fcccc5555ccccf.
.fccccccccccccf.
.fccccccccccccf.
.fccccccccccccf.
.ffffffffffffff.
`
const C_FLR = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f22ee2222ee22f.
.f2ee22222ee222f
.f22222ee22222f.
.f221111111222f.
.f221eeeee1222f.
.f221eeeeeee2ef.
.f221111111222f.
.f221eeeeeeee2f.
.f221eeeee2222f.
.f221eeeeeeee2f.
.f2222222ee222f.
.fee222222222ef.
.f2222ee2222222f
.f22222222ee22f.
.f111111111111f.
.f122222222221f.
.f111111111111f.
.f222222222222f.
.ffffffffffffff.
`
const C_FLG = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f5544555544555f
.f544555554455f.
.f555554455555f.
.f551111111555f.
.f551444441555f.
.f5514444444545f
.f551111111555f.
.f551444444445f.
.f551444445555f.
.f551444444445f.
.f5555555445555f
.f445555555554f.
.f555544555555f.
.f5555555544555f
.f111111111111f.
.f155555555551f.
.f111111111111f.
.f555555555555f.
.ffffffffffffff.
`
const C_FLA = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f8899888899888f
.f899888889988f.
.f888889988888f.
.f881111111888f.
.f881999991888f.
.f8819999999898f
.f881111111888f.
.f881999999998f.
.f881999998888f.
.f881999999998f.
.f8888888998888f
.f998888888889f.
.f888899888888f.
.f8888888899888f
.f111111111111f.
.f188888888881f.
.f111111111111f.
.f888888888888f.
.ffffffffffffff.
`
const C_FLV = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f7733777733777f
.f733777773377f.
.f777773377777f.
.f771111111777f.
.f771333331777f.
.f7713333333737f
.f771111111777f.
.f771333333337f.
.f771333337777f.
.f771333333337f.
.f7777777337777f
.f337777777773f.
.f777733777777f.
.f7777777733777f
.f111111111111f.
.f177777777771f.
.f111111111111f.
.f777777777777f.
.ffffffffffffff.
`
const C_SMR = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f111111111111f.
.f333333333333f.
.f333333333333f.
.f133333333331f.
.f111111111111f.
.f111111111133f.
.f111111111331f.
.f111111113311f.
.f111111133111f.
.f111111331111f.
.f111113311111f.
.f111133111111f.
.f111331111111f.
.f113311111111f.
.f111111111111f.
.f333333333333f.
.f133333333331f.
.f111111111111f.
.ffffffffffffff.
`
const C_SMG = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f111111111111f.
.f222222222222f.
.fccccccccccccf.
.f1cccccccccc1f.
.f111111111111f.
.f111111111122f.
.f111111111221f.
.f111111112211f.
.f111111122111f.
.f111111221111f.
.f111112211111f.
.f111122111111f.
.f111221111111f.
.f112211111111f.
.f111111111111f.
.fccccccccccccf.
.f122222222221f.
.f111111111111f.
.ffffffffffffff.
`
const C_SMM = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f111111111111f.
.f777777777777f.
.f777777777777f.
.f177777777771f.
.f111111111111f.
.f111111111177f.
.f111111111771f.
.f111111117711f.
.f111111177111f.
.f111111771111f.
.f111117711111f.
.f111177111111f.
.f111771111111f.
.f117711111111f.
.f111111111111f.
.f777777777777f.
.f177777777771f.
.f111111111111f.
.ffffffffffffff.
`
const C_SMN = img`
..ffffffffffff..
..f1111111111f..
.ffffffffffffff.
.f111111111111f.
.ffffffffffffff.
.ffffffffffffff.
.f1ffffffffff1f.
.f111111111111f.
.f1111111111fff.
.f111111111ff1f.
.f11111111ff11f.
.f1111111ff111f.
.f111111ff1111f.
.f11111ff11111f.
.f1111ff111111f.
.f111ff1111111f.
.f11ff11111111f.
.f111111111111f.
.ffffffffffffff.
.f1ffffffffff1f.
.f111111111111f.
.ffffffffffffff.
`

const LATAS_IMG = [C_IMPE, C_IMPE, C_ULTRA, C_NEGRA,
    C_FLR, C_FLG, C_FLA, C_FLV,
    C_SMR, C_SMG, C_SMM, C_SMN]
const LATAS_NOM = ["IMPERIAL", "IMPERIAL", "IMPERIAL ULTRA", "IMPERIAL NEGRA",
    "FURLOCO ROJA", "FURLOCO GOLD", "FURLOCO AZUL", "FURLOCO VERDE",
    "SMIRNOFF FRAMBUESA", "SMIRNOFF GUARANA", "SMIRNOFF MANZANA", "SMIRNOFF BLACK"]


// ---------- PUERTAS QUE APARECEN EN LA CALLE ----------

const P_AMPM = img`
ffffffffffffffff
f2222222222222f.
f2ffffffffff22f.
f2f88888888f22f.
f2f85555558f22f.
f2f85115115f22f.
f2f85555558f22f.
f2f88888888f22f.
f2ffffffffff22f.
f22222222222f2f.
ffffffffffffffff
f11999999991111f
f11999999991111f
f11999999991111f
f11999995991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
ffffffffffffffff
f5555555555555ff
f5555555555555ff
ffffffffffffffff
`
const P_MONSTER = img`
ffffffffffffffff
f33333333888888f
f33333333888888f
f33333333811118f
f33333333888888f
ffffffffffffffff
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999995991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
f11999999991111f
ffffffffffffffff
fddddddddddddddf
fddddddddddddddf
ffffffffffffffff
`


// ---------- HERRAMIENTAS DE DIBUJO ----------

function cortina(t: Image, x: number, y: number, w: number, h: number, c: number) {
    t.fillRect(x, y, w, h, c)
    for (let i = y + 2; i < y + h; i += 3) { t.fillRect(x, i, w, 1, 15) }
    t.drawRect(x, y, w, h, 15)
}

function banderines(t: Image, x: number, y: number, w: number) {
    t.fillRect(x, y, w, 1, 12)
    for (let i = 0; i < w - 4; i += 6) {
        t.fillRect(x + i + 1, y + 1, 3, 1, 4)
        t.fillRect(x + i + 2, y + 2, 1, 2, 5)
    }
}

function arco(t: Image, cx: number, base: number, r: number, h: number, c: number) {
    for (let dx = -r; dx <= r; dx++) {
        let v = 1 - (dx * dx) / (r * r)
        if (v < 0) { v = 0 }
        let alto = Math.round(Math.sqrt(v) * h)
        if (alto < 1) { continue }
        t.fillRect(cx + dx, base - alto, 1, alto, c)
    }
}


// ---------- LAS FACHADAS ----------
// cada local ocupa 60px de ancho: bx+2 hasta bx+61

function facEinstein(t: Image, bx: number) {
    t.fillRect(bx + 2, 18, 60, 22, 15)
    t.fillRect(bx + 2, 18, 60, 1, 12)
    t.fillRect(bx + 8, 21, 46, 14, 12)
    for (let i = 0; i < 5; i++) {
        t.fillRect(bx + 10 + i * 9, 22, 7, 12, 9)
        t.fillRect(bx + 10 + i * 9, 27, 7, 1, 12)
    }
    t.fillRect(bx + 2, 37, 60, 3, 11)
    t.fillRect(bx + 2, 40, 60, 12, 15)
    t.drawRect(bx + 2, 40, 60, 12, 12)
    disco(t, bx + 8, 46, 4, 1)
    disco(t, bx + 8, 46, 2, 15)
    t.fillRect(bx + 3, 45, 11, 1, 1)
    t.fillRect(bx + 7, 41, 1, 10, 1)
    t.print("EINSTEIN", bx + 13, 42, 1, image.font5)
    banderines(t, bx + 2, 52, 60)
    cortina(t, bx + 2, 57, 28, 29, 7)
    t.fillRect(bx + 4, 71, 24, 13, 8)
    t.drawRect(bx + 4, 71, 24, 13, 15)
    t.fillRect(bx + 32, 55, 30, 31, 15)
    t.fillRect(bx + 34, 59, 26, 27, 10)
    t.fillRect(bx + 36, 63, 22, 23, 8)
    for (let i = 0; i < 3; i++) {
        t.fillRect(bx + 38 + i * 7, 72, 4, 14, 15)
        disco(t, bx + 40 + i * 7, 69, 2, 15)
    }
}

function facPretil(t: Image, bx: number) {
    t.fillRect(bx + 2, 16, 60, 24, 15)
    t.fillRect(bx + 2, 16, 60, 3, 12)
    t.fillRect(bx + 6, 21, 52, 13, 12)
    for (let i = 0; i < 6; i++) {
        t.fillRect(bx + 9 + i * 9, 20, 1, 4, 11)
        t.fillRect(bx + 8 + i * 9, 24, 3, 2, 5)
    }
    t.fillRect(bx + 6, 34, 52, 3, 14)
    t.fillRect(bx + 2, 40, 60, 12, 15)
    t.drawRect(bx + 2, 40, 60, 12, 12)
    disco(t, bx + 8, 46, 4, 1)
    disco(t, bx + 8, 46, 2, 15)
    disco(t, bx + 56, 46, 4, 1)
    disco(t, bx + 56, 46, 2, 15)
    t.print("PRETIL", bx + 15, 42, 5, image.font5)
    cortina(t, bx + 2, 54, 44, 32, 12)
    t.fillRect(bx + 48, 54, 13, 32, 5)
    t.drawRect(bx + 48, 54, 13, 32, 15)
    for (let i = 57; i < 86; i += 4) { t.fillRect(bx + 48, i, 13, 1, 4) }
}

function facXcape(t: Image, bx: number) {
    arco(t, bx + 20, 40, 17, 22, 11)
    arco(t, bx + 46, 40, 15, 26, 11)
    for (let i = 0; i < 7; i++) {
        t.fillRect(bx + 6 + i * 5, 22, 1, 18, 15)
        t.fillRect(bx + 34 + i * 4, 18, 1, 22, 15)
    }
    t.fillRect(bx + 2, 40, 60, 12, 12)
    t.drawRect(bx + 2, 40, 60, 12, 15)
    t.fillRect(bx + 4, 41, 18, 10, 5)
    t.drawRect(bx + 4, 41, 18, 10, 4)
    disco(t, bx + 9, 46, 3, 15)
    t.fillRect(bx + 13, 44, 8, 3, 1)
    for (let i = 0; i < 5; i++) {
        t.fillRect(bx + 24 + i, 41 + i * 2, 2, 2, 1)
        t.fillRect(bx + 32 - i, 41 + i * 2, 2, 2, 1)
    }
    t.print("XCAPE", bx + 34, 42, 1, image.font5)
    banderines(t, bx + 2, 52, 60)
    cortina(t, bx + 2, 56, 59, 30, 11)
    t.fillRect(bx + 16, 56, 2, 30, 12)
    t.fillRect(bx + 34, 56, 2, 30, 12)
    t.fillRect(bx + 50, 56, 2, 30, 12)
}

function facDraft(t: Image, bx: number) {
    t.fillRect(bx + 2, 18, 60, 22, 13)
    for (let i = 0; i < 12; i++) { t.fillRect(bx + 4 + i * 5, 18, 1, 22, 11) }
    t.fillRect(bx + 2, 38, 60, 2, 15)
    t.fillRect(bx + 2, 40, 60, 12, 15)
    t.fillRect(bx + 3, 41, 40, 10, 13)
    t.print("DRAFT", bx + 5, 42, 2, image.font5)
    for (let i = 0; i < 3; i++) {
        t.fillRect(bx + 36 + i * 3, 42, 2, 4, i == 1 ? 6 : 2)
        t.fillRect(bx + 36 + i * 3, 46, 2, 4, i == 1 ? 6 : 2)
    }
    disco(t, bx + 52, 46, 4, 1)
    disco(t, bx + 52, 46, 2, 15)
    cortina(t, bx + 2, 56, 38, 30, 11)
    let gx = bx + 20, gy = 68
    disco(t, gx, gy, 8, 15)
    disco(t, gx, gy, 6, 11)
    t.fillRect(gx - 7, gy, 15, 13, 15)
    t.fillRect(gx - 5, gy, 11, 11, 11)
    disco(t, gx - 3, gy - 2, 2, 15)
    disco(t, gx + 3, gy - 2, 2, 15)
    disco(t, gx, gy + 4, 2, 15)
    t.fillRect(bx + 42, 56, 9, 30, 15)
    for (let i = 58; i < 84; i += 4) { t.fillRect(bx + 43, i, 7, 1, 11) }
    t.fillRect(bx + 53, 56, 8, 30, 6)
    t.drawRect(bx + 53, 56, 8, 30, 15)
}

function facMonster(t: Image, bx: number) {
    t.fillRect(bx + 2, 16, 60, 4, 12)
    for (let i = 0; i < 6; i++) { t.fillRect(bx + 6 + i * 10, 20, 2, 20, 12) }
    t.fillRect(bx + 2, 22, 60, 16, 11)
    for (let i = 0; i < 4; i++) { t.fillRect(bx + 5 + i * 14, 24, 12, 12, 12) }
    t.fillRect(bx + 2, 40, 60, 13, 3)
    t.fillRect(bx + 34, 40, 28, 13, 8)
    for (let i = 0; i < 6; i++) { t.fillRect(bx + 32 + i, 40 + i * 2, 3, 2, 8) }
    t.drawRect(bx + 2, 40, 60, 13, 15)
    t.print("MONSTER", bx + 4, 43, 1, image.font5)
    disco(t, bx + 48, 46, 5, 1)
    t.fillRect(bx + 43, 42, 11, 3, 2)
    t.fillRect(bx + 43, 48, 11, 3, 8)
    cortina(t, bx + 20, 56, 41, 24, 11)
    t.fillRect(bx + 2, 56, 16, 24, 3)
    for (let i = 58; i < 80; i += 4) { t.fillRect(bx + 3, i, 14, 1, 2) }
    t.fillRect(bx + 2, 80, 59, 6, 13)
    for (let i = 0; i < 7; i++) { t.fillRect(bx + 2 + i * 9, 80, 1, 6, 14) }
    t.fillRect(bx + 2, 83, 59, 1, 14)
}


// ---------- FONDO: EL AM PM POR FUERA ----------

function fondoAmpm() {
    let f = image.create(160, 120)
    f.fill(15)
    for (let i = 0; i < 26; i++) {
        f.setPixel((i * 47 + 5) % 160, (i * 7) % 14, 1)
    }
    f.fillRect(30, 4, 2, 14, 12)
    f.fillRect(32, 5, 8, 6, 2)
    f.fillRect(96, 8, 46, 10, 7)
    for (let i = 0; i < 8; i++) { f.fillRect(98 + i * 6, 8, 1, 10, 6) }
    f.fillRect(96, 8, 46, 1, 6)
    f.fillRect(0, 18, 160, 12, 13)
    f.fillRect(0, 28, 160, 2, 14)
    f.fillRect(0, 30, 160, 20, 2)
    f.fillRect(0, 30, 160, 1, 4)
    f.fillRect(0, 49, 160, 1, 14)
    f.fillRect(50, 31, 60, 18, 5)
    f.fillRect(52, 33, 56, 14, 8)
    f.print("am", 58, 35, 5, image.font8)
    f.print("pm", 78, 35, 1, image.font8)
    f.fillRect(52, 44, 56, 3, 2)
    f.fillRect(0, 50, 160, 46, 1)
    f.fillRect(0, 50, 160, 2, 11)
    f.fillRect(0, 92, 160, 4, 11)
    f.fillRect(0, 50, 26, 46, 12)
    for (let i = 54; i < 92; i += 3) { f.fillRect(2, i, 22, 1, 15) }
    f.drawRect(0, 50, 26, 46, 15)
    f.fillRect(30, 56, 34, 34, 11)
    f.drawRect(30, 56, 34, 34, 15)
    f.fillRect(33, 59, 12, 16, 8)
    f.fillRect(35, 62, 8, 4, 5)
    f.fillRect(35, 68, 8, 4, 2)
    f.fillRect(49, 59, 12, 16, 1)
    f.fillRect(51, 62, 8, 6, 4)
    f.fillRect(51, 70, 8, 3, 5)
    f.fillRect(33, 79, 28, 7, 5)
    f.fillRect(35, 81, 24, 3, 15)
    f.fillRect(70, 52, 24, 44, 12)
    f.drawRect(70, 52, 24, 44, 15)
    f.fillRect(98, 52, 56, 44, 15)
    f.fillRect(100, 54, 52, 40, 9)
    f.fillRect(100, 54, 52, 8, 5)
    f.fillRect(124, 54, 2, 40, 15)
    f.fillRect(103, 66, 16, 26, 6)
    f.fillRect(105, 68, 12, 4, 1)
    f.fillRect(105, 74, 12, 4, 1)
    f.fillRect(132, 70, 14, 22, 2)
    f.drawRect(132, 70, 14, 22, 15)
    f.fillRect(134, 73, 10, 3, 1)
    f.fillRect(134, 79, 10, 3, 1)
    f.fillRect(121, 88, 8, 6, 5)
    f.fillRect(0, 96, 160, 24, 12)
    f.fillRect(0, 96, 160, 1, 11)
    f.fillRect(98, 96, 56, 10, 14)
    f.fillRect(104, 96, 44, 6, 4)
    for (let x = 4; x < 90; x += 28) { f.fillRect(x, 108, 20, 2, 1) }
    f.fillRect(0, 116, 160, 4, 15)
    return f
}

function fondoCalle() { return fondoAmpm() }


// ---------- FONDO: LA REFRI POR DENTRO ----------

function fondoRefri() {
    let f = image.create(160, 120)
    f.fill(12)
    f.fillRect(0, 0, 160, 16, 15)
    f.fillRect(4, 12, 152, 106, 15)
    f.fillRect(8, 16, 144, 100, 11)
    f.fillRect(10, 18, 140, 96, 9)
    f.fillRect(10, 18, 140, 96, 9)
    for (let i = 0; i < 3; i++) {
        let sy = 49 + i * 24
        f.fillRect(10, sy, 140, 4, 11)
        f.fillRect(10, sy, 140, 1, 1)
        f.fillRect(10, sy + 3, 140, 1, 15)
        for (let j = 0; j < 4; j++) {
            f.fillRect(20 + j * 32, sy + 1, 10, 2, 1)
            f.fillRect(21 + j * 32, sy + 1, 8, 1, 2)
        }
    }
    for (let i = 0; i < 5; i++) {
        f.fillRect(24 + i * 6, 20, 3, 92, 1)
    }
    f.fillRect(78, 16, 4, 100, 15)
    f.fillRect(4, 12, 152, 5, 2)
    f.fillRect(4, 113, 152, 5, 2)
    f.fillRect(4, 12, 5, 106, 2)
    f.fillRect(151, 12, 5, 106, 2)
    f.fillRect(146, 46, 5, 36, 1)
    f.drawRect(146, 46, 5, 36, 15)
    f.fillRect(9, 46, 5, 36, 1)
    f.drawRect(9, 46, 5, 36, 15)
    return f
}


// ---------- FONDO: MONSTERPIZZA POR DENTRO ----------

function fondoMonster() {
    let f = image.create(160, 120)
    f.fill(13)
    for (let x = 0; x <= 160; x += 16) { f.fillRect(x, 15, 1, 105, 11) }
    for (let y = 15; y <= 120; y += 16) { f.fillRect(0, y, 160, 1, 11) }
    f.fillRect(0, 15, 160, 26, 12)
    f.fillRect(0, 39, 160, 2, 15)
    f.fillRect(8, 26, 20, 12, 11)
    f.drawRect(8, 26, 20, 12, 15)
    f.fillRect(11, 29, 14, 6, 2)
    f.fillRect(62, 17, 40, 12, 3)
    f.fillRect(102, 17, 36, 12, 8)
    for (let i = 0; i < 6; i++) { f.fillRect(100 + i, 17 + i * 2, 3, 2, 8) }
    f.drawRect(62, 17, 76, 12, 15)
    f.print("MONSTER", 66, 20, 1, image.font5)
    disco(f, 122, 23, 5, 1)
    f.fillRect(117, 19, 11, 3, 2)
    f.fillRect(117, 25, 11, 3, 8)
    f.fillRect(62, 31, 76, 6, 15)
    f.fillRect(64, 33, 72, 2, 3)
    f.fillRect(14, 44, 74, 12, 3)
    f.fillRect(14, 44, 74, 3, 8)
    f.drawRect(14, 44, 74, 12, 15)
    f.fillRect(48, 46, 18, 8, 1)
    f.drawRect(48, 46, 18, 8, 15)
    f.fillRect(51, 48, 12, 3, 15)
    f.fillRect(94, 42, 58, 16, 9)
    f.fillRect(94, 42, 58, 3, 1)
    f.drawRect(94, 42, 58, 16, 15)
    for (let i = 0; i < 4; i++) {
        let px = 106 + i * 14
        disco(f, px, 51, 5, 4)
        disco(f, px, 51, 4, 5)
        f.setPixel(px - 2, 50, 2)
        f.setPixel(px + 2, 52, 2)
        f.setPixel(px, 53, 2)
    }
    f.fillRect(30, 58, 52, 62, 3)
    f.fillRect(30, 58, 2, 62, 8)
    f.fillRect(80, 58, 2, 62, 8)
    for (let i = 0; i < 4; i++) { f.fillRect(32, 66 + i * 16, 48, 2, 8) }
    for (let i = 0; i < 2; i++) {
        let by = 66 + i * 28
        f.fillRect(100, by, 12, 22, 3)
        f.drawRect(100, by, 12, 22, 15)
        f.fillRect(140, by, 12, 22, 3)
        f.drawRect(140, by, 12, 22, 15)
        f.fillRect(114, by + 4, 24, 14, 1)
        f.drawRect(114, by + 4, 24, 14, 15)
        f.fillRect(122, by + 8, 8, 6, 11)
    }
    f.fillRect(4, 62, 20, 28, 9)
    f.drawRect(4, 62, 20, 28, 15)
    f.fillRect(6, 66, 16, 2, 8)
    f.fillRect(6, 74, 16, 2, 8)
    f.fillRect(6, 82, 16, 2, 8)
    f.fillRect(6, 100, 16, 16, 11)
    f.drawRect(6, 100, 16, 16, 15)
    f.fillRect(44, 116, 40, 4, 8)
    f.fillRect(46, 117, 16, 2, 9)
    f.fillRect(66, 117, 16, 2, 9)
    return f
}


// ---------- ACTO 1: LA CALLE ----------

const SUELO = 100
let scrollX = 0
let enSuelo = true
let s2dir = 1

function dibujarCalleLateral(t: Image) {
    t.fillRect(0, 15, 160, 79, 15)
    for (let i = 0; i < 22; i++) {
        t.setPixel((i * 53 + 7) % 160, 16 + ((i * 23) % 11), 1)
    }
    let off = ((scrollX % 64) + 64) % 64
    for (let i = -1; i < 4; i++) {
        let bx = i * 64 - off
        let idx = ((Math.idiv(scrollX, 64) + i) % 5 + 5) % 5
        if (idx == 0) { facEinstein(t, bx) }
        else if (idx == 1) { facPretil(t, bx) }
        else if (idx == 2) { facXcape(t, bx) }
        else if (idx == 3) { facDraft(t, bx) }
        else { facMonster(t, bx) }
        t.fillRect(bx + 62, 26, 2, 60, 12)
        t.fillRect(bx + 58, 24, 10, 3, 11)
        t.fillRect(bx + 59, 27, 8, 2, 5)
    }
    t.fillRect(0, 86, 160, 8, 11)
    t.fillRect(0, 85, 160, 1, 12)
    t.fillRect(0, 94, 160, 26, 12)
    let d = ((scrollX * 2 % 24) + 24) % 24
    for (let x = -24; x < 176; x += 24) { t.fillRect(x + 24 - d, 112, 12, 3, 5) }
}

function hudCalle(t: Image) {
    t.fillRect(0, 0, 160, 15, 15)
    t.fillRect(0, 14, 160, 1, 12)
    if (s2dir > 0) {
        t.drawTransparentImage(DUENDE, 0, 0)
        t.print(s2duendes + "/3", 15, 4, 5, image.font5)
        t.print(s2duendes >= 3 ? "AL AM PM" : "A = SALTAR", 46, 4, 1, image.font5)
    } else {
        t.print("A MONSTERPIZZA", 4, 4, 3, image.font5)
    }
    for (let v = 0; v < s2vidas; v++) {
        t.drawTransparentImage(CORAZON, 128 + v * 10, 3)
    }
}

function armarCorredor() {
    scrollX = 0
    s2vidas = 3
    s2golpe = false
    enSuelo = true
    scene.setBackgroundColor(15)
    let capa = scene.createRenderable(-5, function (t: Image) { dibujarCalleLateral(t) })
    capas.push(capa)
    let hud = scene.createRenderable(50, function (t: Image) { hudCalle(t) })
    capas.push(hud)
    jugador = sprites.create(PAZ, SpriteKind.Player)
    jugador.setPosition(s2dir > 0 ? 34 : 126, SUELO)
    jugador.ay = 430
}

function stage2Calle() {
    limpiarTodo()
    PANTALLA = 2
    s2duendes = 0; s2bebida = ""; s2dir = 1
    armarCorredor()
    control.runInParallel(function () {
        tarjeta("SETIEMBRE 2022",
            "volvimos a clases",
            "y volvimos a la calle",
            "einstein, pretil, xcape")
        tarjeta("COMO SE JUEGA",
            "A = saltar",
            "brinca los carros",
            "y agarra 3 duendes")
        s2acto = 1
    })
}

function stage2Vuelta() {
    limpiarTodo()
    PANTALLA = 2
    s2dir = -1
    armarCorredor()
    ale = sprites.create(ALE, SpriteKind.Food)
    ale.setPosition(150, SUELO)
    control.runInParallel(function () {
        tarjeta("DE VUELTA POR LA CALLE",
            "monsterpizza queda",
            "al otro lado",
            "aguanta hasta el final")
        s2acto = 4
    })
}

function saltar() {
    if ((s2acto != 1 && s2acto != 4) || !enSuelo || !jugador) { return }
    jugador.vy = -178
    enSuelo = false
    ruidito(560)
}

function lanzar(im: Image, kind: number, y: number) {
    let s = sprites.create(im, kind)
    s.setPosition(s2dir > 0 ? 178 : -18, y)
    s.vx = s2dir > 0 ? -74 : 74
    s.lifespan = 5000
    return s
}

game.onUpdate(function () {
    if (s2acto == 1 || s2acto == 4) {
        scrollX += s2dir
        if (jugador) {
            jugador.x = s2dir > 0 ? 34 : 126
            if (jugador.y >= SUELO) {
                jugador.y = SUELO
                jugador.vy = 0
                enSuelo = true
            } else {
                enSuelo = false
            }
        }
        if (s2acto == 4 && ale && jugador) {
            ale.setPosition(jugador.x + 20, jugador.y)
        }
    }
    if (s2acto == 5 && jugador && jugador.y < 64) { jugador.y = 64 }
})

game.onUpdateInterval(2600, function () {
    if (s2acto != 1 && s2acto != 4) { return }
    if (randint(0, 2) == 0) { return }
    lanzar(randint(0, 1) == 0 ? CARRO1 : CARRO2, SpriteKind.Esqueleto, SUELO)
})

game.onUpdateInterval(3400, function () {
    if (s2acto != 1 && s2acto != 4) { return }
    lanzar(randint(0, 1) == 0 ? GENTE1 : GENTE3, SpriteKind.Enemy, SUELO)
})

game.onUpdateInterval(6500, function () {
    if (s2acto != 1 || s2duendes >= 3) { return }
    lanzar(DUENDE, SpriteKind.Bebida, 74)
})

game.onUpdateInterval(1000, function () {
    if (s2acto == 1 && s2duendes >= 3 &&
        sprites.allOfKind(SpriteKind.Premio).length == 0) {
        let p = lanzar(P_AMPM, SpriteKind.Premio, SUELO - 12)
        p.lifespan = 9000
    }
    if (s2acto == 4 && scrollX < -900 &&
        sprites.allOfKind(SpriteKind.Premio).length == 0) {
        let p = lanzar(P_MONSTER, SpriteKind.Premio, SUELO - 10)
        p.lifespan = 9000
    }
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Bebida, function (p, d) {
    if (s2acto != 1) { return }
    d.destroy(effects.fountain, 220)
    s2duendes += 1
    ruidito(760)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio, function (p, d) {
    if (s1fase == 3 && s2acto == 0) {
        s1fase = 0
        d.destroy(effects.fountain, 300)
        control.runInParallel(function () { stage1Ganado() })
        return
    }
    if (s2acto == 1) {
        s2acto = 0
        d.destroy(effects.fountain, 220)
        control.runInParallel(function () { stage2AmpmFuera() })
    } else if (s2acto == 4) {
        s2acto = 0
        d.destroy(effects.fountain, 220)
        control.runInParallel(function () { stage2Monster() })
    }
})

function golpeCalle(p: Sprite) {
    if ((s2acto != 1 && s2acto != 4) || s2golpe) { return }
    s2golpe = true
    s2vidas -= 1
    ruidito(170)
    p.startEffect(effects.spray, 250)
    control.runInParallel(function () { pause(1500); s2golpe = false })
    if (s2vidas <= 0) {
        s2acto = 0
        control.runInParallel(function () {
            pause(300)
            limpiarTodo()
            scene.setBackgroundColor(15)
            tarjeta("TE GANO LA CALLE", "se acabaron", "los corazones", "proba otra vez")
            mostrarSelector()
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (p, e) { golpeCalle(p) })
sprites.onOverlap(SpriteKind.Player, SpriteKind.Esqueleto, function (p, e) { golpeCalle(p) })


// ---------- EL AM PM POR FUERA ----------

function stage2AmpmFuera() {
    limpiarTodo()
    PANTALLA = 2
    scene.setBackgroundImage(fondoAmpm())
    jugador = sprites.create(PAZ, SpriteKind.Player)
    jugador.setPosition(60, 108)
    esperandoTarjeta = true
    let capa = scene.createRenderable(200, function (t: Image) {
        if (parpadeo) { centrado5(t, "A = ENTRAR", 112, 5) }
    })
    pause(1600)
    control.runInParallel(function () {
        while (esperandoTarjeta) {
            if (jugador && jugador.x < 118) { jugador.x += 1 }
            pause(40)
        }
    })
    pauseUntil(function () { return !esperandoTarjeta })
    capa.destroy()
    stage2Refri()
}


// ---------- ACTO 2: LA REFRI ----------

function stage2Refri() {
    limpiarTodo()
    PANTALLA = 2
    s2sel = 4
    scene.setBackgroundImage(fondoRefri())
    for (let i = 0; i < 12; i++) {
        let l = sprites.create(LATAS_IMG[i], SpriteKind.Bebida)
        l.setPosition(33 + (i % 4) * 32, 37 + Math.idiv(i, 4) * 24)
    }
    let capa = scene.createRenderable(60, function (t: Image) {
        let cx = 33 + (s2sel % 4) * 32
        let cy = 37 + Math.idiv(s2sel, 4) * 24
        t.drawRect(cx - 10, cy - 13, 20, 26, 5)
        t.drawRect(cx - 9, cy - 12, 18, 24, 2)
        t.fillRect(0, 0, 160, 14, 2)
        t.fillRect(0, 13, 160, 1, 15)
        t.fillRect(4, 1, 30, 11, 5)
        t.fillRect(6, 3, 26, 7, 8)
        t.print("am", 8, 4, 5, image.font5)
        t.print("pm", 20, 4, 1, image.font5)
        t.print("ESCOGE ALGO", 54, 4, 1, image.font5)
        t.fillRect(0, 104, 160, 16, 15)
        t.fillRect(0, 104, 160, 1, 2)
        centrado5(t, LATAS_NOM[s2sel], 106, 5)
        if (parpadeo) { centrado5(t, "A = LLEVAR", 114, 1) }
    })
    capas.push(capa)
    s2acto = 2
}

function moverSel(dx: number, dy: number) {
    if (s2acto != 2) { return }
    let cx = s2sel % 4, cy = Math.idiv(s2sel, 4)
    cx = Math.max(0, Math.min(3, cx + dx))
    cy = Math.max(0, Math.min(2, cy + dy))
    s2sel = cy * 4 + cx
    blip()
}

function comprar() {
    if (s2acto != 2) { return }
    s2acto = 0
    s2bebida = LATAS_NOM[s2sel]
    ruidito(880)
    control.runInParallel(function () {
        tarjeta("LLEVASTE", s2bebida, "y saliste del am pm", "")
        stage2Esquina()
    })
}


// ---------- ACTO 3: LA ESQUINA ----------

function dialogo(quien: string, texto: string, colorNombre: number) {
    esperandoTarjeta = true
    let capa = scene.createRenderable(200, function (t: Image) {
        t.fillRect(6, 80, 150, 36, 15)
        t.fillRect(4, 78, 150, 36, 1)
        t.drawRect(4, 78, 150, 36, 15)
        t.fillRect(5, 79, 148, 12, colorNombre)
        t.print(quien, 9, 82, 1, image.font5)
        t.print(texto, 9, 97, 15, image.font8)
        if (parpadeo) { t.print("A", 142, 97, 2, image.font8) }
    })
    pause(450)
    pauseUntil(function () { return !esperandoTarjeta })
    capa.destroy()
    pause(140)
}

function stage2Esquina() {
    limpiarTodo()
    PANTALLA = 2
    s2acto = 3
    scene.setBackgroundImage(fondoAmpm())
    jugador = sprites.create(PAZ, SpriteKind.Player)
    jugador.setPosition(56, 106)
    ale = sprites.create(ALE, SpriteKind.Food)
    ale.setPosition(100, 106)
    let capa = scene.createRenderable(40, function (t: Image) {
        t.fillRect(0, 0, 160, 12, 15)
        centrado5(t, "LA ESQUINA DEL AM PM", 3, 5)
    })
    capas.push(capa)
    esperandoTarjeta = true
    let capaHey = scene.createRenderable(200, function (t: Image) {
        if (parpadeo) { centrado8(t, "A = HEY!", 88, 5) }
    })
    pause(900)
    pauseUntil(function () { return !esperandoTarjeta })
    capaHey.destroy()
    dialogo("PAZ", "hey! no way", 10)
    dialogo("ALE", "que? no way", 8)
    dialogo("PAZ", "que locura", 10)
    dialogo("ALE", "ando con amigos", 8)
    dialogo("PAZ", "yo con unas amigas", 10)
    dialogo("PAZ", "sos mi primer", 10)
    dialogo("PAZ", "amigo de la U", 10)
    dialogo("ALE", "que bueno, mae", 8)
    tarjeta("Y TE LE PEGASTE",
        "ahora van juntos",
        "hasta monsterpizza",
        "queda al fondo <-")
    stage2Vuelta()
}


// ---------- ACTO 5: MONSTERPIZZA ----------

function stage2Monster() {
    limpiarTodo()
    PANTALLA = 2
    scene.setBackgroundImage(fondoMonster())
    jugador = sprites.create(PAZ, SpriteKind.Player)
    jugador.setPosition(48, 106)
    controller.moveSprite(jugador, 70, 70)
    jugador.setStayInScreen(true)
    ale = sprites.create(ALE, SpriteKind.Food)
    ale.setPosition(68, 110)
    let capa = scene.createRenderable(50, function (t: Image) {
        t.fillRect(0, 0, 160, 14, 3)
        t.fillRect(0, 13, 160, 1, 8)
        centrado5(t, "ANDA A LA CAJA Y APRETA A", 4, 1)
    })
    capas.push(capa)
    let m = sprites.create(MASA, SpriteKind.Food)
    m.setPosition(51, 68)
    m.setScale(0.5)
    m.startEffect(effects.halo)
    s2acto = 5
}

function pedirPizza() {
    if (s2acto != 5 || !jugador) { return }
    if (jugador.y > 82 || jugador.x < 16 || jugador.x > 92) { return }
    s2acto = 0
    ruidito(880)
    control.runInParallel(function () {
        dialogo("ALE", "una de peperoni?", 8)
        dialogo("PAZ", "obvio", 10)
        if (ingredientes.indexOf("LA SALSA") < 0) { ingredientes.push("LA SALSA") }
        if (desbloqueados < 3) { desbloqueados = 3 }
        limpiarTodo()
        scene.setBackgroundColor(15)
        jingle()
        tarjeta("CERRARON LA CALLE",
            "pizza a las 3am",
            "ganaste LA SALSA",
            s2bebida == "" ? "" : "llevabas " + s2bebida)
        pantallaPizza()
        mostrarSelector()
    })
}