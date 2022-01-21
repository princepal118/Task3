// const arr = [40,100,1,5,25,10];

// const newArray =[];
// for(let i =0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let tmp;
//             tmp=arr[i];
//             arr[i]=arr[j];
//             arr[j] = tmp;
            
            
//         }
//         newArray.push(arr[j]);

//     }
// }
// console.log(newArray);

var dort = [40,100,1,5,25,10]

console.log(dort.sort(asc=(a,b)=>a-b));
console.log(dort.sort(dec=(a,b)=>b-a));


