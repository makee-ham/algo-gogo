function solution(n, lost, reserve) {
  // 1. 여벌 있고 잃어버린 애는 양쪽 배열에서 제거
  const realLost = lost.filter(l => !reserve.includes(l));
  let realReserve = reserve.filter(r => !lost.includes(r));

  let canGoClass = n - realLost.length;

  // 2. 여벌을 앞뒤 번호에게 줄 수 있는지 확인
  realLost.sort((a, b) => a - b);

  for (let i = 0; i < realLost.length; i++) {
    const l = realLost[i];

    if (realReserve.includes(l - 1)) {
      canGoClass++;
      realReserve = realReserve.filter(r => r !== l - 1);
    } else if (realReserve.includes(l + 1)) {
      canGoClass++;
      realReserve = realReserve.filter(r => r !== l + 1);
    }
  }

  return canGoClass;
}
