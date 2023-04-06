// let arr=[0, 2, 1, 2, 0]
// arr.sort()
// console.log(arr)

let arr = [-12, 11, 13, -5, 6, -7, 5, -3, 6];
console.log(arr);
// arr.sort(function(a,b){return b-a})
// console.log(arr);

let right = arr.length-1;
let left = 0;

while (left <= right) {
  if (arr[left] > 0 && arr[right] > 0) {
    right--;
  } else if (arr[left] < 0 && arr[right] < 0) {
    left++;
  } else if (arr[left] > 0 && arr[right] < 0) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  } else {
    left++;
    right--;
  }

}
console.log(arr);

