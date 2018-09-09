require('./index.css');
const hello=require('./hello.js');
let ele=document.createElement('div');
ele.innerHTML=hello;
document.body.appendChild(ele);
