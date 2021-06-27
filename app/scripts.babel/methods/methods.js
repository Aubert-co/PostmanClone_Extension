export default {
 MethodGet :async function (){
    try{
    const response = await fetch(Url.value,{
      method:'POST',
      body,
      headers
  })
  
  const data =await response.json()
  console.log(data)
  
  //console.log(GetDatas(response,data))
    }catch(err){
      throw err
    }
 },
 MethodPost:async function (){
  try{
  const response = await fetch(Url.value,{
    method:'POST',
    body,
    headers
})

const data =await response.json()
console.log(data)

//console.log(GetDatas(response,data))
  }catch(err){
    throw err
  }
}
}