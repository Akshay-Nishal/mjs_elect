if(localStorage.getItem('cart-count')){
    var cartnum = parseInt(localStorage.getItem('cart-count'));
}
else{
    var cartnum = 0;
    localStorage.setItem('cart-count',0)
}
var cc = document.getElementById('cart-count')

function setcartcount(){
    cc.innerHTML=cartnum
}
setcartcount()
console.log('cart : ',cartnum);

var addcount = document.getElementsByClassName('addtocart');
var inp_value = document.getElementsByClassName('inp-count');

addcount[0].addEventListener('click',()=>{
    // console.log(inp_value[0]);
    addtocartnum(0);
})
addcount[1].addEventListener('click',()=>{
    // console.log(inp_value[1]);
    addtocartnum(1);
})

function addtocartnum (i){
    if(inp_value[i].value>=1){
        console.log('done');
        let x = cartnum
        x = x + parseInt(inp_value[i].value)
        console.log(x);
        cartnum=x;
        setcartcount()
        localStorage.setItem('cart-count',cartnum)
    }
}

var div = document.getElementById('atc-sticky')

$(window).scroll(function() {

    if ($(this).scrollTop()>535)
    {
        div.style.display='flex'
    }
    else
    {
        div.style.display='none'
    }
 });