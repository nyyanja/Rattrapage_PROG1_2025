
export function findOdd(nombreImpair = []) {
    let count = []
    for (let i = 0; i < nombreImpair.length; i++) {
        if (count[nombreImpair[i]] === undefined) {
            count[nombreImpair[i]] = 1;
        } else {
            count[nombreImpair[i]]++;

    }
    return count;
}

findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]);//4
findOdd([0]); //0