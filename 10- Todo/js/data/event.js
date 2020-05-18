"use strict";

/*
TIKSLAS: Jei norime stebeti paspaudimus ant elemento ir
reikia atspausdinti jo tekstini turini

1.Susirasti dominanti elementa
2.Inicijuoti ivykio stebejima
3.Nurodyti ka daryti, kai ivykis stebimas ivykis ant norimo
elemento

*/

//1.
const pirmas = document.querySelector('.btn.pirmas');



//2.
pirmas.addEventListener('click', console.log('Pirmasis buvo paspaustas'));

//3.

function pirmosiosVeiksmas() {
    return console.log('Pirmas buvo paspaustas');
}