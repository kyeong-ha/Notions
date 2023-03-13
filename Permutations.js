/* 순열 구하기 */
/* 서로 다른 n개의 물건 중에서 r개를 택하여 한 줄로 배열하는 것 */
const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(rest, selectNumber - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}


/* 중복 순열 구하기 */
const getPermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        
        // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
        const permutations = getPermutations(origin, num - 1);

        // 기준값(fixed)에 순열(permutations)을 붙인다.
        const attached = permutations.map(v => [fixed, ...v]);

        // 붙인 값을 결과 값에 넣어준다.
        results.push(...attached);
    });

    return results;
}