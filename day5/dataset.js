const dataset = [
  "FBFBBBFRLL",
  "BFFFBFFRRR",
  "BBFBFFFLLR",
  "FBFFFBFLRR",
  "FBFFBFBLLR",
  "BFBBFBBRLL",
  "BFFFFFFRLR",
  "FBBBBFFLLR",
  "FFBBFFFLRL",
  "FFBFBBFLLR",
  "FBFFFBBRRR",
  "FBFFBFBLRR",
  "FBBFBFFRLR",
  "FBBBFBFRLL",
  "FFBFFBBRLR",
  "FBFBBBFRRL",
  "BFFBBBFRRR",
  "FBFBBBBLLR",
  "FFBFFBBLLL",
  "BFFBFBBLLR",
  "BFFBFBBRLR",
  "BFFBBBBLLL",
  "FBBBBFBLLR",
  "FFBFBBBLRR",
  "FFBFBBFLRR",
  "FFFBFBBRRL",
  "FFFFFBBRLL",
  "BFFFBFFLRR",
  "FFFBFBBRLR",
  "FBFFBBFLLR",
  "BFBFFBBRRR",
  "FBBFBBFLRL",
  "BFBBFBFRRR",
  "BFFFBBBLRL",
  "BBFFFBFLLR",
  "BFFFFBFLRR",
  "BFFBFFBLLL",
  "FFBBFBFRRR",
  "BFBFFFBLLL",
  "FBFBFFFRRR",
  "BFBFBBBLLL",
  "BFFFBBFLLL",
  "BFBFFFBLLR",
  "BFFBBBFRRL",
  "FFFBBFFLLR",
  "BFFBBBFLRR",
  "FBFFBBBRLR",
  "FBBFBBFLRR",
  "FBBFFBFRRR",
  "FBBFBBBRRL",
  "FFFBFFBRRL",
  "FBFBFFBRLL",
  "FBFFBBFRLL",
  "BFBFBFFRLL",
  "FBFBFFFRLR",
  "BFBFFBBRRL",
  "FFBBFFBRRR",
  "BFFBFBBLRL",
  "FFBFBFBLLL",
  "BBFFFBFRLL",
  "FBFBBBFRRR",
  "BFFBBFFLRR",
  "BFBBFFBLRL",
  "BFFFFFBLLL",
  "BBFFFFFRLR",
  "FBBFFBFRLL",
  "FFBFBFFRRR",
  "BFBBBBFLRR",
  "BFFBBFFRLL",
  "BFBBFFBLLL",
  "BFFFFFBRRR",
  "FBBFFFBLRL",
  "FFFBBBFRLR",
  "FFBBBFBRRL",
  "BFFFBBBRRL",
  "FFBFBFBRRR",
  "FBBBBBFRRR",
  "BBFBFFFRLL",
  "FBFFFBBLRR",
  "FBFBFFBRRR",
  "BFBFBFBRLR",
  "FBBBFFFRRL",
  "BFBFFFBRLL",
  "FBBBFFBLLL",
  "BFBFBFFRLR",
  "BBFFBFBLRL",
  "BBFFBFBRLR",
  "BBFBFFFRRR",
  "BFBBFFFRLL",
  "BFFBBBBRRL",
  "FFBFFBFRLL",
  "FBBBFBBLRR",
  "FBFFFFFRLR",
  "FBFFFBFLLR",
  "BBFFBFFRRR",
  "BFBFBFBRLL",
  "BFFBBBBLLR",
  "FBBBFBFLLL",
  "FFBBFBBRLR",
  "FFFFBBFRRR",
  "FFFBFFFRRL",
  "FFFFBBBLLL",
  "FBBBBFBLLL",
  "BFBBFBFRLL",
  "FFBFBFFRLR",
  "FBFBBBFLLL",
  "BFBBBFFLLL",
  "BBFFBFFRLL",
  "FBFFFFFLLR",
  "FBBBBFBLRR",
  "BFBFFFFRRR",
  "BFFBBBBLRL",
  "BFFBBFFLLL",
  "FBFFBBFLRR",
  "BBFFFFBLRR",
  "FBBBBFFRLL",
  "FBFBFFBRLR",
  "FFFFBBFRLR",
  "FBBFFBBLLR",
  "BFFFBBFLRL",
  "BFFFFFFLRR",
  "BFBFBFBRRL",
  "FFBBFBFLLR",
  "BFBBFBFLLR",
  "FFBBBFBLRR",
  "BBFFBFBRRL",
  "BFFBBBFLRL",
  "BFFBFFFRRR",
  "FFFFBBFLLL",
  "BBFFFBBRLR",
  "FFBBBBBRLR",
  "FFBFBBBRLR",
  "FFFFBFBLLR",
  "FBBBBBBLLR",
  "FBBBFFBLRL",
  "BFFFFFFLLL",
  "FBBFBBFLLL",
  "BFBBBBBLRR",
  "FBFBBFBLLL",
  "FBFFFBBLLL",
  "FBFFFBBRLR",
  "FFFBBBFRRL",
  "FBFFFFBLLL",
  "BBFFFFFRLL",
  "BFBFBBFLRL",
  "FBBBFFFLLL",
  "BFBBFBBRLR",
  "FFBFBBFRLL",
  "FFBFBFBLRL",
  "BFFBBBBRRR",
  "FFFFBBFLRL",
  "BBFFFFBLLR",
  "FFFBBBFLLR",
  "FFFBFFFLLR",
  "FFBBBFFLRL",
  "FBFBBBFLRL",
  "FBBFBBFLLR",
  "FBFBBFFLLR",
  "BBFFBBBRRL",
  "FBFBBFBLRR",
  "FBBBFFFLLR",
  "FBFBFFFRLL",
  "FFBBFFBLLL",
  "FBBBFBFRRR",
  "BFBFFFBRRR",
  "FBBBFFFRRR",
  "BBFFBBBLLL",
  "BFFBFFBRLR",
  "BFFFBFBLLR",
  "FBBBBBFLRR",
  "FBBFBBBLRL",
  "FFFBFFFLRR",
  "FFFFBBBRRR",
  "BBFFFBFLRL",
  "FBFBBFFRRL",
  "BBFBFFFRLR",
  "FBFBFBBRRL",
  "FFBFFBFLRL",
  "FBFFBFBRLR",
  "BFBFFFFLRL",
  "FBFFFBFRRR",
  "FFFFBFBRRR",
  "BBFFFFBRLR",
  "FBBBFFBRRL",
  "FBBFFBBRLR",
  "FFBBFBFLRL",
  "BFFFBBBLLR",
  "BFFFFFFRLL",
  "BFFBBBBLRR",
  "BFBFBBBRRL",
  "FBFBBBBLLL",
  "BBFFFBBLRR",
  "FFFFBBFLRR",
  "FFBBFBBLRR",
  "FFFBBBBLLL",
  "FFBBBBFLLL",
  "FBBFFFFLLR",
  "FFBFBBBRLL",
  "FFBBFBBRRR",
  "BFBFBBBLLR",
  "FBBBBBFLLL",
  "FFBBFFBRLL",
  "BFBFFBFRLR",
  "FBBFBFBRRL",
  "FFBBFFFLRR",
  "BFBFBFFLRL",
  "FBFFBFFRRR",
  "BBFFBFFRLR",
  "FFBBBBBRRL",
  "FBBBFBBLLR",
  "FFFBBBBLLR",
  "FFBBFBBLLR",
  "BBFBFFBLRL",
  "BFFFFFBLLR",
  "FFFBFFBRLL",
  "FFFFBFBRLR",
  "FFBFFBBRRR",
  "FBBBBFFLRR",
  "BFBFFFFRLR",
  "FFBBFFBLRL",
  "BFBBFBBLLR",
  "BBFBFFFLRR",
  "FBFFFBBLLR",
  "BFFBBBFLLR",
  "BFFBBFFLLR",
  "BFBBBBFRLR",
  "FBFFBBBLLR",
  "FFBFFFFLLR",
  "FBBBBFFRRL",
  "FBFBBFBRRL",
  "FFFFBFBLRR",
  "BBFFFFBRRR",
  "BFBBFBFRRL",
  "BFFBBFFRLR",
  "FBFBFBFLLR",
  "BBFFBFFLRL",
  "BBFFBBBLLR",
  "BFBBBFBLLL",
  "BFBBBBBLLR",
  "FBBBFFBRLL",
  "FBFFBFBRLL",
  "BFBFFBFLLR",
  "BFBFFFFLLL",
  "FBFFFFFRLL",
  "FFBBFFFLLR",
  "FFFBFFFRRR",
  "FBFFFBFRLR",
  "FFFBFBBLLL",
  "BBFFFBBLLL",
  "FFFBBFBLRL",
  "FBBBFBFRRL",
  "FFFBBFBRLR",
  "BFBBBFFLRR",
  "FFBBBFFLRR",
  "FFBFBBBLLR",
  "FBBFBFBLLR",
  "FFBFFBBRRL",
  "FFFBFBFLRR",
  "FBBFBFBRLL",
  "BBFFBBFLRL",
  "FBBFFBFRRL",
  "BFBFBFFRRR",
  "BFBBBFBRRR",
  "BFFFFBFLLR",
  "FBBFBFBRRR",
  "BFFFFBBLLL",
  "FFFBFFFRLR",
  "FBBFBFBRLR",
  "BFFFFBFRLL",
  "FFBFBBFRRR",
  "BBFFBFBRRR",
  "FFBBBFFRLR",
  "BFBFBFFRRL",
  "BFFFBFBLRR",
  "BFBBFBBRRR",
  "FFBFFBFRLR",
  "BFFFBFFRRL",
  "BFBFBBBLRR",
  "FFBBBBBRLL",
  "BFBBFFBRLR",
  "FBFFFFFLRL",
  "FFBBBBBRRR",
  "FFBFFFBLLL",
  "FFBBBBBLLR",
  "BBFFBFBRLL",
  "BFBFBBBLRL",
  "FBBFFFFLRR",
  "BBFFBFBLLR",
  "FFBBBFBLLR",
  "BFBFFFBRLR",
  "FBFBBBFLRR",
  "FBFBBBBRLL",
  "BFFFFBFLRL",
  "BFFFBFBRLR",
  "FBBFFFFLRL",
  "FFFBBBBRLL",
  "FFFBFFFRLL",
  "FFFFBBBLRL",
  "BFFFBFBRLL",
  "FBFBBBBLRR",
  "BFBBBFFLLR",
  "FFFBFFBRLR",
  "FBFFBFFLRR",
  "FFFFBFFLLL",
  "BFFBBBFLLL",
  "BFFFBBBRLL",
  "FBFFFFBLRL",
  "BBFFBBFRLL",
  "BFBBBFBLRL",
  "FBBFFBBRLL",
  "BFBBBBBLLL",
  "BFBFBFBLRL",
  "BFFBBFBLRL",
  "BFFBFFBRRR",
  "FFBBBBFLRR",
  "FBBBBFBRRR",
  "FBBBFBFLLR",
  "FFBFBBFLLL",
  "BBFFBBFLRR",
  "FFFBBFFRLR",
  "FBBBFFFRLL",
  "FBBBBFFRRR",
  "FFFBFBFLLL",
  "BBFBFFFLLL",
  "FBFFBFBRRR",
  "BFFFBFFLRL",
  "FFBBBFBLLL",
  "FBBBBFBRLR",
  "BFBFFBFLLL",
  "BFBFBBFLLL",
  "FBFBFFBLLL",
  "FBBBBFFRLR",
  "FBFFBFFRLR",
  "BFBFBBFLRR",
  "FBFBBBBLRL",
  "FFFFBBFRLL",
  "FFBFBBBRRR",
  "BFFBBFFRRL",
  "BBFFBBFRLR",
  "FBBFFBFLLR",
  "FBFFBFFLLL",
  "BBFFFBFRRL",
  "FBFFFFBRLL",
  "FBFBFBFRRL",
  "FFBFFFBLLR",
  "BFBFFBBLLL",
  "BFBFBFFLRR",
  "FBFFBFFRLL",
  "BFFBFBFLLR",
  "FBFBFFBLRL",
  "FFBFBFFRRL",
  "FBFBBBBRLR",
  "FFFFBBBRLL",
  "BFBBFBFLLL",
  "FBFFFFFLLL",
  "FFBBFBFLRR",
  "FFBFBFBRRL",
  "FBFFBFBRRL",
  "FBFBFBFRLR",
  "FFFBBBFLRL",
  "BFBBBBBRLR",
  "BBFFBBFLLL",
  "FBBFBBBLRR",
  "FFBBBFBRLL",
  "FBFFBBFRRR",
  "FFFFBFFLRL",
  "FFBFBBFRLR",
  "FBBFBFFLRR",
  "FFBBFBFLLL",
  "FFBFBBBLLL",
  "BFFFBBBLLL",
  "BFFBBBBRLR",
  "BFBBFBBLLL",
  "FFBBBFBLRL",
  "BFFBBFFRRR",
  "FFFBBFBRLL",
  "BFBFBFFLLL",
  "BFFBBBFRLR",
  "BFBFFBBLRR",
  "FBBFFFBRRR",
  "FBBFFFFRRR",
  "BFBFBFBLLR",
  "BBFFBBFRRL",
  "FFFFBBBRRL",
  "FFFBFBFLRL",
  "BFFFBFFLLR",
  "FFBBFFFRRL",
  "FFFBFBBRRR",
  "BFFFFBBRRL",
  "BFBBFFFLRR",
  "BFBFFFFRLL",
  "FFFFBBBRLR",
  "FFFBBFBLLR",
  "FBFBFBFRLL",
  "BFBBFBFLRL",
  "BFBBBBBRRR",
  "FBFFFFBRRL",
  "BFBFFFBLRL",
  "FBFBBBFRLR",
  "BFBFFBFLRR",
  "FFBFBFFLRR",
  "FFFBBBFRRR",
  "FFBBFFBRLR",
  "FFBFFFFLRR",
  "FBBBFFFLRL",
  "BFBBFFBLLR",
  "BFFBFBBLRR",
  "FBBFBFBLRL",
  "BFFFBFBLLL",
  "FFFBBFFLRR",
  "FBFFFFFRRR",
  "BFBFFBFLRL",
  "FFBFFFBRRR",
  "FBFBFBBLLR",
  "FFFFBBBLLR",
  "BFBFFFFRRL",
  "FFBBFFFRRR",
  "FBBBFBFLRL",
  "BFBBBFFRLL",
  "BFBFFBBLRL",
  "BBFFFFFLLR",
  "FFBBBFFLLL",
  "FFBFFFBRLL",
  "FFBBFFBLLR",
  "BBFFBFFLLL",
  "FBFBBFBRRR",
  "FBBBBBFLLR",
  "FFBFFFFLRL",
  "FBBBBFFLLL",
  "BFFBFBFRRR",
  "FBFFFFFLRR",
  "FFFFBBFLLR",
  "FFFBFBFRRL",
  "FBFBFBFLRR",
  "FBFBBFFRLR",
  "BFFFBBFRLR",
  "FFBFFBBLRR",
  "FFBBFFBRRL",
  "BFBFFBFRRL",
  "FFFBFFBLRR",
  "BFBBFFFRRR",
  "BFFBFBFLRL",
  "FFBFBBFRRL",
  "BFFFBFFLLL",
  "FBFFBFBLLL",
  "BFBBFFFLLR",
  "BFFFFBBLRR",
  "FFFBFFFLLL",
  "BBFFBBBRLL",
  "BFFBFBFLRR",
  "FBBFBFFRLL",
  "BFFBBBBRLL",
  "BFBFBBFLLR",
  "FBBBBBBRLR",
  "BFBBBBFRRR",
  "FFBFFBFLLL",
  "BFFFFFBRRL",
  "BFFFBFFRLL",
  "BFFFBFBLRL",
  "FFBBBBFRLR",
  "FBBBFFFLRR",
  "BFFBFBBRRL",
  "BBFFFFFRRR",
  "FBBBFBBLLL",
  "FFBFFFBLRR",
  "FFBBFBBRLL",
  "FBFBBFFLLL",
  "BFFFBFFRLR",
  "BFBBBBBLRL",
  "FFFBFFBRRR",
  "FFFBBFFLRL",
  "FBFBFBBRLL",
  "FFFBFBBRLL",
  "FFBFBFBRLL",
  "FBFFFBFRLL",
  "BFFBFBFRRL",
  "FBBFFFBRLR",
  "BFBBBFFRRR",
  "FBBBBBFLRL",
  "FFFFFBBRRL",
  "FBFFBBFLLL",
  "BFBBFBBLRL",
  "BFFBBFBLLL",
  "FFBFBFFLLL",
  "FFFBBBFLLL",
  "BFFBFBFLLL",
  "FBFFFFBRLR",
  "FBFBBFBLRL",
  "BBFFFBFRLR",
  "FFFBBFBLRR",
  "BFFBFFBRLL",
  "BFFBBFBRLL",
  "FBBFFFFRLR",
  "FBBFFFBLLL",
  "FFBFFFFRRL",
  "FFFFBFFLLR",
  "FFFBBFFRLL",
  "BFBBBFBRLR",
  "BFBFFFBLRR",
  "BFFFBBFLRR",
  "BFBFFBFRLL",
  "BFBBFFBRRL",
  "FFFFBBBLRR",
  "FBFFFBBLRL",
  "FFBBBFFRLL",
  "FBBBFBBRLR",
  "FFBFFBFRRR",
  "FBFBFFFRRL",
  "BFBBBFFRLR",
  "FFFBBBFLRR",
  "FFFFBBFRRL",
  "FFBFBFBLRR",
  "FFFBFFBLLL",
  "FBFFFBBRRL",
  "FFFFBFFRLR",
  "FFBBBBBLRR",
  "FFFFBFFRLL",
  "FBFFBBBRRL",
  "BFFFFBBLRL",
  "FBFFBBBRLL",
  "BBFFFFFLRL",
  "FBFBBFFLRR",
  "FBBBBFBRLL",
  "BFFBFFFLLL",
  "FBBBFFFRLR",
  "BFBBFFBLRR",
  "FFBBFBBLLL",
  "FBBFFBBRRL",
  "BFBFBFBLRR",
  "FFFBBFBRRL",
  "BBFFFBFLRR",
  "FBBBBBBLLL",
  "BFFFBFBRRR",
  "FBFBFFFLLL",
  "FFBBBBBLLL",
  "BFBFBFFLLR",
  "FBBFFBBLLL",
  "FBBBBBBLRL",
  "BBFFBBBRLR",
  "FBFFFBBRLL",
  "BFBFBBBRLL",
  "BBFBFFBLLR",
  "FFFBBFFRRR",
  "FBFBFBBRRR",
  "FBBFBFFRRR",
  "BFBBBFBRLL",
  "FBFBFFBLLR",
  "BBFFBFBLLL",
  "BFFFBBFRLL",
  "FBFBFFFLLR",
  "FBFFFFBRRR",
  "FFBFBBFLRL",
  "BBFFFBFLLL",
  "FBBFBBBLLL",
  "FBBBFBBRRL",
  "FBFBFBFLLL",
  "FFFFBFBLRL",
  "FFFFFBBRRR",
  "FFBFFBBLLR",
  "BBFFFFFRRL",
  "FBFBBBFLLR",
  "BFBBBFFRRL",
  "FBFBBFBRLR",
  "BFBBBFBLRR",
  "FFBFBFFLLR",
  "FBFBFFBRRL",
  "FFBFBFBRLR",
  "BFBFFBBRLL",
  "FFBFFFFRRR",
  "BFFBBFBRRR",
  "FFBBBBFRRL",
  "FFFBBBBLRL",
  "FFBBBFFRRL",
  "BFBBBBFRLL",
  "BFBFBFBLLL",
  "BFBBFFFRRL",
  "BFFBFFBLLR",
  "FFBBBFBRLR",
  "FFBBFBFRRL",
  "FBFFBBBLRR",
  "FBBFBBBLLR",
  "BFBFFBBLLR",
  "BFFFFBFLLL",
  "FFFBFBFLLR",
  "FBFFFFBLRR",
  "FBBFBFBLLL",
  "BFFFFBFRLR",
  "FBBBFBFRLR",
  "FFBBFBFRLR",
  "BFFFFFFLLR",
  "BFFFFBFRRL",
  "BBFFBBFRRR",
  "FBFFBFFLRL",
  "FBBBBBFRLR",
  "FBBBBFBLRL",
  "BFFFBBBRRR",
  "FFFFBFFRRL",
  "FFBFFFFLLL",
  "FFFBFBFRLL",
  "FFBFFBFLRR",
  "FBBFFBFLRL",
  "FBBFFBBLRR",
  "FFBFFBFRRL",
  "BFFFFFFRRR",
  "BFBFBBBRLR",
  "BFFBFBBRLL",
  "BBFFBFFRRL",
  "FBBFBBFRLL",
  "BFFFFFBRLR",
  "BFBBBBFLLL",
  "BFBBFFBRRR",
  "FFFFBFBLLL",
  "FFBBFFFRLR",
  "BFBBBFBRRL",
  "BFFFBBFRRR",
  "FBFFFFFRRL",
  "BFFBFFFRLL",
  "BFFFFBBRLR",
  "FFBBFFBLRR",
  "BBFFBBBLRR",
  "FBBFFFFRRL",
  "BFFFFBBRLL",
  "BFFFFFBRLL",
  "BFBFFFFLLR",
  "FBBBBBFRRL",
  "FBFBBBBRRR",
  "FBBFBBFRRL",
  "FBBBFBBRLL",
  "FBFFBFFLLR",
  "FFBFFFFRLR",
  "BFFFFFFRRL",
  "BFBBFFFRLR",
  "FFBBBBFLRL",
  "FFBFFBBRLL",
  "FFBBFBBLRL",
  "FBFBFFBLRR",
  "BFFBFBFRLR",
  "FBFFBBBRRR",
  "FBBBBFFLRL",
  "FBBFBFFRRL",
  "FFBFBFFLRL",
  "BFFBBFBRLR",
  "BBFFFFFLRR",
  "FBBFFFBRLL",
  "BFFFBFBRRL",
  "FFBFBFFRLL",
  "BBFFBBBRRR",
  "BBFFFFBLRL",
  "BBFFFBBRRR",
  "BBFFFFBRLL",
  "FBBFFBFLLL",
  "BFFFBBBLRR",
  "FFBFFBFLLR",
  "FBBFBFFLLR",
  "FBFBBFFLRL",
  "FBBBBFBRRL",
  "BFBBFBFLRR",
  "BBFFBFBLRR",
  "FFFBBBBLRR",
  "FBBBFFBRLR",
  "FBFBFBBLRR",
  "FBBBFBBRRR",
  "BFBBFFFLLL",
  "BFFFFBBLLR",
  "FBBBBBBRLL",
  "FBBBFBBLRL",
  "FBBBBBBRRR",
  "FFFBBBFRLL",
  "BBFFFFFLLL",
  "FBBFFBFRLR",
  "BFBBBBFLRL",
  "BFFFFBFRRR",
  "FBFFBBBLRL",
  "BFBBFBBRRL",
  "FBFFBFBLRL",
  "FFFBBFBRRR",
  "BFBFBBBRRR",
  "BFBBFFFLRL",
  "BBFFFBBRRL",
  "FFFBBBBRRL",
  "FBBBFFBLLR",
  "FBFBFFFLRR",
  "FBFBFBBRLR",
  "BFFFBBFRRL",
  "FBFBFBFRRR",
  "FBBFFFFLLL",
  "FBBFFBBLRL",
  "FBBBFBFLRR",
  "FFFBBFFLLL",
  "BFFBFFBRRL",
  "BFFFFBBRRR",
  "FFFFFBBRLR",
  "BBFFBBBLRL",
  "FBBFBBFRRR",
  "BFBBFBBLRR",
  "FFBFFFFRLL",
  "BFBFFFBRRL",
  "FBBFBBBRLL",
  "FBFBBFBRLL",
  "FBFFFBFRRL",
  "BFFBFFBLRR",
  "FBBFBFBLRR",
  "BFBBBBFLLR",
  "BFBBBFBLLR",
  "FFFFBFBRRL",
  "FFFBBBBRLR",
  "FFBFFFBRLR",
  "BFFBFFBLRL",
  "FBBFBFFLLL",
  "BFFBFBBLLL",
  "FBFBBFBLLR",
  "FBBFFBFLRR",
  "FFBBBBFLLR",
  "FBBFBFFLRL",
  "FFFBFBBLRL",
  "FBBFFFFRLL",
  "BFBFBBFRRR",
  "FBFFBBBLLL",
  "FFBFBBBLRL",
  "BBFFBBFLLR",
  "FBFFFBFLLL",
  "BFBFBFBRRR",
  "BFBBBBBRRL",
  "BBFBFFBLLL",
  "BFFFFFFLRL",
  "FBBFFFBRRL",
  "FFBBFBFRLL",
  "BBFFBFFLLR",
  "BBFBFFFRRL",
  "FFFBBFBLLL",
  "BFFBFFFRRL",
  "BFBBBBBRLL",
  "FFFBFBFRLR",
  "FBFFBBFRRL",
  "BFFBFFFLLR",
  "FFBBFFFLLL",
  "BFFBBBFRLL",
  "FFBBBBFRLL",
  "FFFFBFFLRR",
  "FFBBBBBLRL",
  "FBBBBBBLRR",
  "FBBFFFBLLR",
  "BBFFFBBRLL",
  "BFFBBFFLRL",
  "FFFBFBFRRR",
  "FBFBFBBLLL",
  "FBBBBBFRLL",
  "FBBBBBBRRL",
  "FBFBBBBRRL",
  "FBFFBFFRRL",
  "BFFFBBFLLR",
  "BFFBFFFLRR",
  "BFFBBFBLRR",
  "FFFFBFBRLL",
  "BFFBFFFLRL",
  "FFBFFFBLRL",
  "FBBFFFBLRR",
  "BFBBBFFLRL",
  "FBFFBBFLRL",
  "BFFFBBBRLR",
  "BFFBFBBRRR",
  "BFFFFFBLRL",
  "BBFBFFFLRL",
  "BFBFBBFRRL",
  "BBFFBFFLRR",
  "FBFBFBBLRL",
  "BFBFBBFRLR",
  "FFFBBBBRRR",
  "FBFFFFBLLR",
  "FBFBBFFRLL",
  "BFBFFBFRRR",
  "FFFBFFBLLR",
  "FBFBFBFLRL",
  "FBBFBBBRLR",
  "FFFBFBBLLR",
  "FFBBFFFRLL",
  "BFBFFBBRLR",
  "BBFFFFBLLL",
  "FFBBBFFRRR",
  "BFFBFFFRLR",
  "FFBFFBBLRL",
  "FBBBFFBRRR",
  "BFBFBBFRLL",
  "BFBBBBFRRL",
  "BFBBFFBRLL",
  "BBFFFBBLRL",
  "FFBBBBFRRR",
  "BBFFFBFRRR",
  "BFBFFFFLRR",
  "FFFBFBBLRR",
  "BFFBBFBRRL",
  "FBBFBBBRRR",
  "FBFBFFFLRL",
  "BFBBFBFRLR",
  "FFFBFFFLRL",
  "FFBBBFBRRR",
  "FBBFFBBRRR",
  "BBFFFBBLLR",
  "FFFBFFBLRL",
  "FFBFBBBRRL",
  "FFBBBFFLLR",
  "FBFFBBFRLR",
  "FBFFFBFLRL",
  "FFBBFBBRRL",
  "FFFBBFFRRL",
  "FBBFBBFRLR",
  "FBFBBFFRRR",
  "FFFFBFFRRR",
  "BFFFFFBLRR",
  "BBFFFFBRRL",
  "FBBBFFBLRR",
  "BFFBFBFRLL",
  "FFBFFFBRRL",
  "FFBFBFBLLR",
];

module.exports = {dataset};
