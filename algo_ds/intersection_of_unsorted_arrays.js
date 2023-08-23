const getIntersection = (arr1, arr2) => {
    let seen = {

    }
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        seen[element] = (seen[element] || 0) + 1
    }
    for (let i = 0; i < arr1.length; i++) {
        const element = arr2[i];
        if(seen[element]>0) {
            result.push(element)
            seen[element]--
        }
    }
    return result
}
// getIntersection([2, 3, 1, 6], [6, -1, 2, 2])