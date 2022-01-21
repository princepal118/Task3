var st = "Web Development Tutorial sdjkfhsidfdipsugha siughsdfu sghuhzuifdh dsiufguagsdufgoaseiufasuiogdiugfusdg"
var newA = st.split(" ");

local = (newA)=>{
    var result = newA[0];
    for(i=0;i<newA.length;i++){
        if(result.length < newA[i].length){
            result = newA[i];
        }       
    }    
    return result;
}
console.log(local(newA));




