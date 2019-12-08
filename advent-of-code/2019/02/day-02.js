(function () {
    // Part 1
    const exampleIntcodes = [
        [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50],
        [1, 0, 0, 0, 99],
        [2, 3, 0, 3, 99],
        [2, 4, 4, 5, 99, 0],
        [1, 1, 1, 4, 99, 5, 6, 0, 99]
    ];

    const intCode = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 2, 19, 13, 23, 1, 23, 10, 27, 1, 13, 27, 31, 2, 31, 10, 35, 1, 35, 9, 39, 1, 39, 13, 43, 1, 13, 43, 47, 1, 47, 13, 51, 1, 13, 51, 55, 1, 5, 55, 59, 2, 10, 59, 63, 1, 9, 63, 67, 1, 6, 67, 71, 2, 71, 13, 75, 2, 75, 13, 79, 1, 79, 9, 83, 2, 83, 10, 87, 1, 9, 87, 91, 1, 6, 91, 95, 1, 95, 10, 99, 1, 99, 13, 103, 1, 13, 103, 107, 2, 13, 107, 111, 1, 111, 9, 115, 2, 115, 10, 119, 1, 119, 5, 123, 1, 123, 2, 127, 1, 127, 5, 0, 99, 2, 14, 0, 0];

    /**
     * This will run the intcode, **mutating the original**. This function only
     * runs intcodes with instructions which have three (3) parameters
     * (not including the opcode for halting/exiting: `99`). If instructions
     * with varying numbers of parameters were used in this challenge, a
     * different loop strategy would be used.
     *
     * @param {Array} intcode - Array of positive integers.
     *      **NOTE:** The intcode passed will most likely be mutated.
     */
    function runIntcode(intcode) {
        for (let i = 0; i < intcode.length; i += 4) {
            let posA = intcode[i + 1];
            let posB = intcode[i + 2];
            let posC = intcode[i + 3];

            if (intcode[i] === 1) { //add
                intcode[posC] = intcode[posA] + intcode[posB];
            }
            else if (intcode[i] === 2) { // multiply
                intcode[posC] = intcode[posA] * intcode[posB];
            }
            else if (intcode[i] === 99) { // exit
                break;
            }
            else { // just in case...
                console.error(`Unknown opcode ${intcode[i]} found at position ${i}: Exiting...`);
                break;
            }
        }
    }

    // Examples
    console.log(`Running EXAMPLES...`);
    exampleIntcodes.forEach(cur => {
        const intcode = [...cur]; // don't mutate the originals
        console.log(`Before: ${intcode}`);
        runIntcode(intcode);
        console.log(`After: ${intcode}`);
    });

    // Part 1 Answer
    const intCode1 = [...intCode];
    intCode1[1] = 12;
    intCode1[2] = 2;
    console.log(`Running PART 1...`);
    runIntcode(intCode1);
    console.log(`Result: ${intCode1}`);
    console.log(`Value at 0: ${intCode1[0]}`);

    // Part 2
    const target = 19690720;
    let found = false;
    let foundVerb;

    const calcAnswer = (noun, verb) => (100 * noun + verb);

    console.log(`Running PART 2...`);
    for (let noun = 0; noun <= 99; noun++) {
        console.log(`Testing for: noun = ${noun}`);

        for (let verb = 0; verb <= 99; verb++) {
            let memory = [...intCode]; // reset memory each test
            memory[1] = noun;
            memory[2] = verb;

            runIntcode(memory);

            if (memory[0] === target) {
                found = true;
                foundVerb = verb;
                break;
            }
        }

        if (found) {
            console.log(`Target acquired: noun = ${noun}, verb = ${foundVerb}`);
            console.log(`Answer: ${calcAnswer(noun, foundVerb)}`);
            break;
        }
        else if (noun === 99) {
            console.log(`Target \`noun + verb\` combination not found...`);
        }
    }
})();
