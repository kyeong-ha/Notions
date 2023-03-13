/* 가능한 모든 조합 구하기 */
function getCombinations(arr, N) {
    const results = [];
    if (N === 1) return arr.map((value) => [value]);
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, N - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      results.push(...attached);
    });
  
    return results;
}
/*
    1을 선택(고정)하고 -> 나머지 [2, 3, 4] 중에서 2개씩 조합을 구한다.
    [1, 2, 3] [1, 2, 4] [1, 3, 4]
    2를 선택(고정)하고 -> 나머지 [3, 4] 중에서 2개씩 조합을 구한다.
    [2, 3, 4]
    3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다. 
    [] 
    4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다.
    []
*/