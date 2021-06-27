'use strict';




btnSend.addEventListener('click',sendData)

const body =JSON.stringify(InputsValues())

function InputsValues (){
 return names.reduce((key,{value},ind)=>{
    const valu = ke[ind].value
    const keyName = value
    if(valu === '')return key

    key[keyName] = valu
    return key 
  },{})
}

function sendData(e){

   
    if(Url.value === '')return e.preventDefault();
    const method = select.value
   
    if(method === "GET"){
      MethodGet()
      return 
    }
  
    
    MethodPost()
   // const contetnType = data.headers.get('Content-Type')

   
}








function GetDatas(resp,data){
    const {headers,ok,status,statusText,type,url} = resp
    
  return {data,status,statusText,type,url,headers}
}
