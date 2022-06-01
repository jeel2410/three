/* 

    Export Kit
    General React Utls 

    Date:          21.10.05

*/

function webFonts(){
    let specialChars = document.querySelectorAll("span.char"); 
    for(let c=0; c<specialChars.length; c++){ 
        specialChars[c].innerHTML = decodeURIComponent( specialChars[c].innerHTML ); 
    }
}

function dynamicHeightFix(){
    document.querySelector('.content-container').style.height = document.querySelector('.content-container > div:first-child > div:first-child').clientHeight + "px";
}

export { webFonts, dynamicHeightFix }