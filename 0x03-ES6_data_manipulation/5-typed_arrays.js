export default function createInt8TypedArray(length, position, value) i{
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(length);
  const typedArray = new Int8Array(arrayBuffer);
  typedArray[position] = value;
  return arrayBuffer;
}
