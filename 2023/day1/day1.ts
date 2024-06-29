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

