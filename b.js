/**
 * Advent of code 1.12.2022
By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

*/

var readline = require("readline");
var fs = require("fs");

var myInterface = readline.createInterface({
	input: fs.createReadStream("input.txt"),
});

let largest = [0];
let running = 0;

myInterface
	.on("line", function (line) {
		// console.log(line)
		if (line.length === 0) {
			if (running > largest[0]) {
				largest.unshift(running);
			} else if (running > largest[1]) {
				largest.splice(1, 0, running);
			} else if (running > largest[2]) {
				largest.splice(2, 0, running);
			}
			running = 0;
		} else {
			running += Number.parseInt(line);
		}
	})
	.on("close", () => {
		if (running > largest[0]) {
			largest.unshift(running);
		} else if (running > largest[1]) {
			largest.splice(1, 0, running);
		} else if (running > largest[2]) {
			largest.splice(2, 0, running);
		}
		console.log(largest)
		console.log(largest[0], largest[1], largest[2], largest[0] + largest[1] + largest[2]);
	});
