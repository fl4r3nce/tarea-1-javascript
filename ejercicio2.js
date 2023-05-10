function elementosComunes(arr1, arr2) {
  let comunes = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        comunes.push(arr1[i]);
        break;
      }
    }
  }

  return comunes;
}

