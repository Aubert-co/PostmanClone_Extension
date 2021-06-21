import statusCode from './statusCode.js'

const btnSend = document.querySelector('#send')
const select = document.querySelector('select')
const Url = document.querySelector('#url')
const newBtn = document.querySelector('#newBtn')


btnSend.addEventListener('click',sendData)




async function sendData(e){

    const method =select.value

    if(Url.value === '')return e.preventDefault();
    
   const data = await fetch(Url.value,{
        method,
        
    })
    
    const {status} = data
    const StatusCode = statusCode[status]
    const body = await data.json()
    
    const contetnType = data.headers.get('Content-Type')

   
}