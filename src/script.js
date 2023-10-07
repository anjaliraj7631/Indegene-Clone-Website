var count=1;
setInterval(function(){
    document.getElementById('r' + count).checked=true;
    count++;
    if(count>3){
        count=1;
    }
},1800);

let contact1=document.querySelector('#message');
let cont=document.querySelector('.feedback');
contact1.onclick=()=>{
    cont.classList.toggle('active');
    cart.classList.remove('active');
    log.classList.remove('active');
}


