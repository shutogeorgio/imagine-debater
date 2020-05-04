const randomly = () => {
  return 0.5 - Math.random();
}

export default function randomExtract(array) {
  array.sort(randomly);
  return array;
}