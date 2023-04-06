// let a=[1,2,3,4,5,6,6]
// let key = 4
// let n= a.length
// let arr=[-1,-1]
//        for(let i =0; i<n; i++){
//            if(a[i]==key)
//             arr[0]=i
//             break;
//        }
       
//        for(let i=n; i<=0; i++){
//            if(a[i]==key)
//             arr[1]=i
//             break;
//        }
       
//     if(arr[0]>=-1)
//       console.log(arr);
//       else
//       console.log("-1");

let arr = [1, 2, 3, 4, 5] 
let n=5

let temp;
for(let i=0;i<n-1;i++){
  temp =arr[i]
  arr[i]=arr[n-1]
  arr[n-1]=temp
}
console.log(arr)
