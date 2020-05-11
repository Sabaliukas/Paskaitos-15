"use strict";

function getDrinkByProfession(param){
    const tekstasMazosiomis = param.toLowerCase();
    let answer = '';

    switch ( tekstasMazosiomis ) {
        case 'jabroni':
            answer = 'Patron Tequila';
            break;
        case 'school counselor':
            answer = 'Anything with Alcohol';
            break;
        case 'programmer':
            answer = 'Hipster Craft Beer';
            break;
        case 'bike gang member':
            answer = 'Moonshine';
            break;
        case 'politician':
            answer = 'Your tax dollars';
            break;
        case 'rapper':
            answer = 'Cristal';
            break;
            
        default:
            answer = 'Beer';
            break;
    }
    return answer;
}

// function getDrinkByProfession(param){
//     const tekstasMazosiomis = param.toLowerCase();
//     let profesionIndex = -1;
//     const profesions = ['jabroni', 'school counselor', 'programmer', 'bike gang member', 'politician', 'rapper'];
//     const answersList = ['Patron Tequila', 'Anything with Alcohol', 'Hipster Craft Beer', 'Moonshine', 'Your tax dollars', 'Cristal'];

//     // for ( let i=0; i<profesions.length; i++ ) {
//     //     if ( profesions[i] === tekstasMazosiomis ) {
//     //         profesionIndex = i;
//     //     }
//     // }

//     profesionIndex = profesions.indexOf(tekstasMazosiomis);
    
//     if ( profesionIndex === -1 ) {
//         return 'Beer';
//     } else {
//         return answersList[profesionIndex];
//     }
// }


console.log( getDrinkByProfession("jabrOni"), "Patron Tequila" );
console.log( getDrinkByProfession("jabroni"), "Patron Tequila" );
console.log( getDrinkByProfession("JABRONI"), "Patron Tequila" );
console.log( getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol" );
console.log( getDrinkByProfession("prOgramMer"), "Hipster Craft Beer" );
console.log( getDrinkByProfession("bike ganG member"), "Moonshine" );
console.log( getDrinkByProfession("poLiTiCian"), "Your tax dollars" );
console.log( getDrinkByProfession("rapper"), "Cristal" );
console.log( getDrinkByProfession("pundit"), "Beer" );
console.log( getDrinkByProfession("Pug"), "Beer" );