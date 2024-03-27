let arr1 = [1,2,3,4,5];
function duplicateArr(){
    arr1.forEach((item)=>{
        arr1.push(item)
    })
}
duplicateArr()
console.log(arr1)

                                               /// ----or

 // console.log(arr1.concat(arr1))                                           
