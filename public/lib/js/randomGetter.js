const randomly = () => {
  return 0.5 - Math.random();
}

export default function randomExtract(array) {
  var jsonObj = [];
  for (var l=1;l<array.length;l++) { 
    jsonObj.push({label: l, values: array[l]}); 
  }
  array.sort(randomly);
  return array;
}