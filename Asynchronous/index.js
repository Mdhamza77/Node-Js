const final = (someInput, callBack) => {
    callBack(`${someInput} This is called using callback Function`)
}

const middleWare = (someInput , callBack) => {
   return final(`${someInput} middleWare output ` , callBack)
} 

const InitiateInput =  () => {
    const someInput = 'hello this is a function ';
    middleWare(someInput , function (res){
             console.log(res)
    })
}


InitiateInput()