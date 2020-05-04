export default function randomExtract(array) {
  const randomly = () => {
    return 0.5 - Math.random();
  }
  array.sort(randomly);
  return array;
}