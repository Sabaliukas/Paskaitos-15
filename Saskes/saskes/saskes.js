"use strict" ;

function renderBoard ( size ) {
    let HTML = '';
    const DOMboard = document.querySelector('.board');

    // validacija

    // logika

    HTML = `
    <div class="row" style="height: 25%;">
        <div class="cell black" style="width: 25%;"></div>
        <div class="cell white" style="width: 25%;"></div>
        <div class="cell black" style="width: 25%;"></div>
        <div class="cell white" style="width: 25%;"></div>
    </div>
    <div class="row" style="height: 25%;">
        <div class="cell white" style="width: 25%;"></div>
        <div class="cell black" style="width: 25%;"></div>
        <div class="cell white" style="width: 25%;"></div>
        <div class="cell black" style="width: 25%;"></div>
    </div>
    <div class="row" style="height: 25%;">
        <div class="cell black" style="width: 25%;"></div>
        <div class="cell white" style="width: 25%;"></div>
        <div class="cell black" style="width: 25%;"></div>
        <div class="cell white" style="width: 25%;"></div>
    </div>
    <div class="row" style="height: 25%;">
        <div class="cell white" style="width: 25%;"></div>
        <div class="cell black" style="width: 25%;"></div>
        <div class="cell white" style="width: 25%;"></div>   
        <div class="cell black" style="width: 25%;"></div>
    </div> `;
    DOMboard.innerHTML = HTML;

    return;
}

renderBoard( 8 );