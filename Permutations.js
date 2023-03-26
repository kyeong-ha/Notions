/** 순열 : 서로 다른 n개의 물건 중에서 r개를 택하여 한 줄로 배열하는 것 */
const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
      
      const permutations = getPermutations(rest, selectNumber - 1); 

      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results; 
}


/** 중복순열 */
const getRedundantPermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        const permutations = getRedundantPermutations(origin, num - 1); // origin을 slice하지 않는다는 것이 특징

        const attached = permutations.map(el => [fixed, ...el]);
        results.push(...attached);
    });

    return results;
}