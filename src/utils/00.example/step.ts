const preComputed = [1, 1];

export function step(n) {
  if (preComputed[n]) {
    return preComputed[n];
  } else {
    return step(n - 1) + step(n - 2);
  }
}
