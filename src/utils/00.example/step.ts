const preComputed = [1, 1];

export function step(num) {
  if (preComputed[num]) {
    return preComputed[num];
  } else {
    return step(num - 1) + step(num - 2);
  }
}
