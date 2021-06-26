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

async function MethodGet(){
  try{
  
    const dataGet = await fetch(Url.value,{
      method:'GET',
      headers
    })
  console.log(GetDatas(dataGet))
}catch(err){
  if(err)throw err
}
}

async function MethodPost(){
  try{
  const response = await fetch(Url.value,{
    method:'POST',
    body,
    headers
})

const data =await response.json()
console.log(data)

console.log(GetDatas(response,data))
  }catch(err){
    throw err
  }
}



function GetDatas(resp,data){
    const {headers,ok,status,statusText,type,url} = resp
    
  return {data,status,statusText,type,url,headers}
}
