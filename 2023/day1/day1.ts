// deno-lint-ignore-file prefer-const
const currentPath = "./2023/day1/";
const partone = Deno.readTextFileSync(currentPath + "partone.txt");

function calculateTotal(list: Array<string>): number {
    let total = 0;
    list.map((item: string) => {
        total += Number(item);
    });
    return total;
}

const pattern = /\d+/g;

let results: Array<string> = [];

partone.split("\n").map((line) => {
    const matches = line.match(pattern);
    if (matches) {
        if (matches.length > 1) {
            const first = matches[0];
            const last = matches[matches.length - 1];
            results.push(first + last);
        } else {
            matches.push(...matches);
            const first = matches[0];
            const last = matches[matches.length - 1];
            results.push(first + last);
        }
    }
});

console.log(`Part 1 Results: ${JSON.stringify(results)}`);
console.log(`Part 1 Total: ${calculateTotal(results)}`);
// END OF PART 1

const words: Array<string> = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];
const conversionChart = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
};
let partTwoResult: Array<string> = [];

const parttwo = Deno.readTextFileSync(currentPath + "parttwo.txt");
parttwo.split("\n").map((line) => {
    let matches: Array<string> = []
    for (let i = 0; i < line.length; i++) {
        for (let j = 0; j < words.length; j++) {
            const check = line.substring(i, i + words[j].length);
            if (check === words[j]) {
                matches.push(check);
            }
        }
    }

    if (matches) {
        if (matches.length > 1) {
            const first = convertNumber(matches[0]);
            const last = convertNumber(matches[matches.length - 1]);
            partTwoResult.push(first + last);
        } else {
            matches.push(...matches);
            const first = convertNumber(matches[0]);
            const last = convertNumber(matches[matches.length - 1]);
            partTwoResult.push(first + last);
        }
    }
});

function convertNumber(item: string): string {
    const number = conversionChart[item];
    return number.toString();
}


console.log(`Part 2 Results: ${JSON.stringify(partTwoResult)}`);
console.log(`Part 2 Total: ${JSON.stringify(calculateTotal(partTwoResult))}`);
