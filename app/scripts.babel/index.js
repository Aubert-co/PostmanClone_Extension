'use strict';


const btnSend = document.querySelector('#send')
const select = document.querySelector('select')
const Url = document.querySelector('#url')
const newBtn = document.querySelector('#newBtn')

const names =[...document.querySelectorAll('.inp')]
const ke = [...document.querySelectorAll('.inp0')]

const body = JSON.stringify(InputsValues())

const headers = {'Content-Type':'application/json'}

btnSend.addEventListener('click',sendData)



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
