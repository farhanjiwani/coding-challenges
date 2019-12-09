(function() {
    // const startTime = Date.now();

    const rangeMin = 152085;
    const rangeMax = 670283;
    const strLen = 6;

    // Very specific function, not portable/scalable at all.
    function isMostlyLegit(testNum, testString) {
        // Rule 1 & 2 - 6-digit number within range
        if (testNum < rangeMin || testNum > rangeMax) {
            return false;
        }

        // Rule 3 - At least 2 adjacent digits are equal
        if (new Set(testString) === strLen) {
            // checked if no dupe ints
            return false;
        } else {
            let adjacent = false;
            for (let i = 1; i < strLen; i++) {
                if (testString[i] === testString[i - 1]) {
                    adjacent = true;
                    break;
                }
            }

            return adjacent;
        }
    }

    let num = rangeMin;
    let numString;
    let count = 0;

    while (num <= rangeMax) {
        numString = num.toString();

        // Rules 1 to 3
        if (!isMostlyLegit(num, numString)) {
            num++;
            continue;
        }

        // Rule 4 - Going LTR, digits never decrease
        let legit = true;
        for (let i = 1; i < strLen; i++) {
            if (numString[i] < numString[i - 1]) {
                // increment `num` to next legit number
                num = parseInt(
                    numString.substring(0, i).padEnd(strLen, numString[i - 1])
                );
                legit = false;
                break;
            }
        }

        if (legit) {
            count++;
            num++;
        }
    }
    console.log({ count });

    // console.log(`${Date.now() - startTime}ms`);
})();
