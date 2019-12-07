# [Advent of Code 2019](https://adventofcode.com/)

Created by: [Eric Wastl](http://was.tl/)

## Day 01: The Tyranny of the Rocket Equation

[https://adventofcode.com/2019/day/1](https://adventofcode.com/2019/day/1)

### The Situation

Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from *fifty stars*.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants *one star*. Good luck!

### Part 1

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given **module** is based on its **mass**. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

* For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
* For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
* For a mass of 1969, the fuel required is 654.
* For a mass of 100756, the fuel required is 33583.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

**What is the sum of the fuel requirements** for all of the modules on your spacecraft?

<details>
    <summary>Puzzle Input (Part 1 & 2):</summary>

    141107
    119016
    145241
    72264
    116665
    81420
    88513
    128809
    145471
    81570
    124798
    75370
    84988
    71634
    135275
    96992
    53376
    62414
    148277
    135418
    82475
    137707
    105051
    83450
    102673
    88390
    100849
    94528
    135709
    63945
    126413
    70107
    84734
    119176
    85769
    115276
    137511
    61806
    92892
    121640
    93726
    146526
    95812
    132556
    103885
    78776
    55826
    120257
    61131
    79179
    130698
    97153
    121985
    61159
    103585
    148674
    84067
    110085
    138473
    105495
    112393
    144411
    73328
    125955
    58075
    136147
    124106
    81185
    138847
    69814
    127104
    86090
    67666
    102333
    99546
    98280
    99062
    129433
    125353
    77609
    71240
    71791
    146046
    113685
    121381
    122715
    147789
    53981
    140926
    81528
    121789
    106627
    73745
    67509
    144140
    119238
    82417
    129215
    75663
    106842
</details>

<details>
    <summary>Part 1 Answer:</summary>

    3454026
</details>

### Part Two

During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel **also** requires fuel, and **that** fuel requires fuel, and so on. Any mass that would require **negative fuel** should instead be treated as if it requires **zero fuel**; the remaining mass, if any, is instead handled by **wishing really hard**, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

* A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
* At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
* The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

**What is the sum of the fuel requirements** for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

<details>
    <summary>Part 2 Answer:</summary>

    5178170
</details>
