function airport(fuel) {
    let n = fuel.length;
    if (n === 0) return -1;
    if (n === 1) return 0;

    let maxReach = fuel[0];
    let steps = fuel[0];
    let planes = 1;

    for (let i = 1; i < n; i++) {
        if (i === n - 1) return planes;

        maxReach = Math.max(maxReach, i + fuel[i]);
        steps--;

        if (steps === 0) {
            planes++;
            if (i >= maxReach) return -1;
            steps = maxReach - i;
        }
    }

    return -1;
}

let array1 = [2, 1, 2, 3, 1];
let array2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];

console.log(airport(array1)); 
console.log(airport(array2)); 
