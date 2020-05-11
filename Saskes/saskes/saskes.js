"use strict"

function renderSaskes ( size ) {
    let HTML = '';
    const DOMsaskes = document.querySelector('.board');
    
    // validacija

    // logika
    HTML = `
        <div class="row" style="height: 12.5%;">
            <div class="cell black" style="width: 12.5%;"></div>
            <div class="cell white" style="width: 12.5%;"></div>
            <div class="cell black" style="width: 12.5%;"></div>
            <div class="cell white" style="width: 12.5%;"></div>
        </div>
        <div class="row" style="height: 12.5%;">
            <div class="cell white" style="width: 12.5%;"></div>
            <div class="cell black" style="width: 12.5%;"></div>
            <div class="cell white" style="width: 12.5%;"></div>
            <div class="cell black" style="width: 12.5%;"></div>
        </div>
        <div class="row" style="height: 12.5%;">
            <div class="cell black" style="width: 12.5%;"></div>
            <div class="cell white" style="width: 12.5%;"></div>
            <div class="cell black" style="width: 12.5%;"></div>
            <div class="cell white" style="width: 12.5%;"></div>
        </div>   
        <div class="row" style="height: 12.5%;">
            <div class="cell white" style="width: 12.5%;"></div>
            <div class="cell black" style="width: 12.5%;"></div>
            <div class="cell white" style="width: 12.5%;"></div>
            <div class="cell black" style="width: 12.5%;"></div>
            </div>`;
    ;
    DOMsaskes.innerHTML = HTML


    return;
}

renderSaskes( 8 );