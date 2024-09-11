L = (n , L0 , L1 , add) => {
    if (n < 0) {
      return [];
  }

  const result = [L0, L1];

  for (let i = 2; i <= n-1; i++) {
      result.push(result[i - 1] + result[i - 2] + add);
  }

  return result;

}