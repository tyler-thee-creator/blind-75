import twoSum from './twoSum';
import { pickRandomIndex } from '../utils';

describe('Two sum', () => {
  it('Should return the index of two numbers that make up the sum with the indexes in the middle of the array', () => {
    const result = twoSum([0, 2, 7, 11, 15], 9);

    expect(result).toEqual(expect.arrayContaining([1]));
    expect(result).toEqual(expect.arrayContaining([2]));
  });

  it('Should return the index of two numbers that make up the sum when one of the indexes is at the beginning of the array', () => {
    const result = twoSum([12, 9, 4, 11, 2, 6], 14);

    expect(result).toEqual(expect.arrayContaining([0]));
    expect(result).toEqual(expect.arrayContaining([4]));
  });

  it('Should return the index of two numbers that make up the sum when one of the indexes is at the end of the array', () => {
    const result = twoSum([10, 15, 2, 3, 12, 8, 6], 8);

    expect(result).toEqual(expect.arrayContaining([2]));
    expect(result).toEqual(expect.arrayContaining([6]));
  });

  it('Should return the index of two numbers that make up the sum from a large array', () => {
    const arr = new Array(100000).fill(0);

    const index1 = pickRandomIndex(arr.length);
    let index2 = pickRandomIndex(arr.length);

    while (index1 === index2) index2 = pickRandomIndex(arr.length);

    arr[index1] = 15;
    arr[index2] = 16;

    const result = twoSum(arr, 31);

    expect(result).toEqual(expect.arrayContaining([index1]));
    expect(result).toEqual(expect.arrayContaining([index2]));
  });
});
