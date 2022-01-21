//Using Third Variable.

const swapUsingThirdVariable =(a,b)=>{
    let tmp ;
    tmp = a;
    a = b;
    b = tmp;
    console.log("a after swap is = ",a );
    console.log("b after swap is = ",b );

}
swapUsingThirdVariable(38777,93748);