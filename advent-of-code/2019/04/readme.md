# [Advent of Code 2019](https://adventofcode.com/)

Created by: [Eric Wastl](http://was.tl/)

## Day 04: Secure Container

[https://adventofcode.com/2019/day/4](https://adventofcode.com/2019/day/4)

### Personal Notes

I had a quick n' dirty method for **Part 1** with a 266 ms loop but then I added a tad bit more code and got it down to **10 ms**. So I'm happy about that!

### The Situation

You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

However, they do remember a few key facts about the password:

* It is a six-digit number.
* The value is within the range given in your puzzle input.
* Two adjacent digits are the same (like 22 in `122345`).
* Going from left to right, the digits **never decrease**; they only ever increase or * stay the same (like `111123` or `135679`).

Other than the range rule, the following are true:

* `111111` meets these criteria (double 11, never decreases).
* `223450` does not meet these criteria (decreasing pair of digits 50).
* `123789` does not meet these criteria (no double).

**How many different passwords** within the range given in your puzzle input meet these criteria?

Your puzzle input is 152085-670283.


<details>
    <summary>Part 1 Answer:</summary>

    1764
</details>
