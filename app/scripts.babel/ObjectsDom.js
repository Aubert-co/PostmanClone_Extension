export default{

 btnSend : document.querySelector('#send'),
 select : document.querySelector('select'),
 Url : document.querySelector('#url'),
 newBtn : document.querySelector('#newBtn'),

 names :[...document.querySelectorAll('.inp')],
 ke : [...document.querySelectorAll('.inp0')],


 headers : {'Content-Type':'application/json'}
}