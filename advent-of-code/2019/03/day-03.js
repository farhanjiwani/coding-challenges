import { data, exampleData } from "/data.js";

(function(data, exampleData) {
    const startTime = Date.now();
    /**
     * Returns Manhattan distance of an object's {x, y} coordinates based
     * off a {0, 0} origin
     *
     * @param {Object} pos - Object whose `x` and `y` properties are numbers
     */
    const getManhattanDistance = pos => Math.abs(pos.x) + Math.abs(pos.y);

    /**
     * Returns an array of coordinate objects (a path, if you will) based on
     * the `wirePath` instructions.
     *
     *      eg: `[ { x: -4, y: 40 }, { x: -4, y: 39 }... ]`
     *
     * @param {Array} wirePath - Array of instructions in the format of a letter
     *      (U, D, L or R -> direction) followed by an integer (distance)
     *
     *      eg: ["R8", "U5", "L5", "D3"], where `R8` means
     *          8 spaces to the right.
     */
    function traceWire(wirePath) {
        const path = [];

        const currentLocation = {
            x: 0,
            y: 0
        };

        wirePath.forEach(step => {
            let direction = step[0];
            let distance = parseInt(step.slice(1));

            let vector = "x";
            if (direction === "U" || direction === "D") {
                vector = "y";
            }

            for (let i = 1; i <= distance; i++) {
                if (direction === "U" || direction === "L") {
                    currentLocation[vector]--;
                } else {
                    currentLocation[vector]++;
                }

                path.push({
                    x: currentLocation.x,
                    y: currentLocation.y
                });
            }
        });

        return path;
    }

    /**
     * Returns object with properties of `manhattanDistance` and `minSteps`
     * based on points of intersections between the `wires` input.
     * `manhattanDistance` is the shortest distance from origian to an
     * intersection while `minSteps` is the minium steps it takes to get to the
     * first intersection.
     *
     * See `traceWire()'s` `wirePath` param for more information.
     *
     * @param {Object} wires - Object containing the path of two (2) wires.
     * @param {Array} wires.wire1 - Array representing the wire's path
     * @param {Array} wires.wire2 - Array representing the other wire's path
     */
    function getMinDistanceAndMidSteps(wires) {
        const pathA = traceWire(wires.wire1);
        const pathB = traceWire(wires.wire2);
        const intersections = [];
        let manhattanDistance = 0;
        let minSteps = 0;

        // Used to calculate shortest Manhattan distance in intersection array
        const reducer = (acc, position) => {
            const distance = getManhattanDistance(position);

            if (acc === 0 || distance < acc) {
                acc = distance;
            }
            return acc;
        };

        pathA.forEach((a_coord, aStep) => {
            pathB.forEach((b_coord, bStep) => {
                if (a_coord.x === b_coord.x && a_coord.y === b_coord.y) {
                    let steps = aStep + bStep + 2; // add 2 for 0 indicies

                    console.log(
                        `Intersects at ${b_coord.x}, ${b_coord.y} in ${steps} steps`
                    );

                    intersections.push(b_coord);

                    if (minSteps === 0 || steps < minSteps) {
                        minSteps = steps;
                    }
                }
            });
        });

        manhattanDistance = intersections.reduce(reducer, 0);
        if (manhattanDistance === 0) {
            console.warn(`No intersections found!`);
        }
        return { manhattanDistance, minSteps };
    }

    // Example Output
    exampleData.forEach((setOfWires, i) => {
        let { manhattanDistance, minSteps } = getMinDistanceAndMidSteps(
            setOfWires
        );

        console.log(
            `Manhattan distance (Example ${i +
                1}): ${manhattanDistance}. Minimum Steps to an intersection: ${minSteps}`
        );
    });

    // Part 1 and 2 Output
    const { manhattanDistance, minSteps } = getMinDistanceAndMidSteps(data);
    console.log(
        `Manhattan distance: ${manhattanDistance}. Minimum Steps to an intersection: ${minSteps}`
    );

    console.log(`${Date.now() - startTime} ms`);
})(data, exampleData);
