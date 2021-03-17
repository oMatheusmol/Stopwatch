function getTimeFromSec(sec){
    const data = new Date(sec*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour6:false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');
const pausar = document.querySelector('.pausar');
let sec = 0;
let timer;
function inciarRelogio(){
    timer = setInterval(function(){
        sec++;
        relogio.innerHTML = getTimeFromSec(sec) ;
    },1000);   
}



iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    inciarRelogio();

});

pausar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.classList.add('pausado')

});


zerar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    sec=0;
    
});


