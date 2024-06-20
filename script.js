const typingtext= document.querySelector('.typingtext p')
const input= document.querySelector('wrapper .input-field')
const time= document.querySelector('.time span b')
const mistakes= document.querySelector('.mistake span')
const wpm= document.querySelector('.wpm span')
const cpm= document.querySelector('.cpm span')
const btn= document.querySelector('button')

//set value
let timer;
let maxtime=60;
let timeleft=maxtime;
let charindex=0;
let mistake=0;
let istyping=false;



function loadParagraph(){
    const paragraph=["qwe","rty","uio","pas","dfg","hjk","lzx","cvb"];
    const randomIndex=Math.floor(Math.random()
*paragraph.length);
    typingtext.innerHTML='';
for(const char of paragraph[randomIndex]){
    console.log(char);
    typingtext.innerHTML+=`<span>${char}</span>`;
}
typingtext.querySelectorAll('span')[0].classList.add('active');
}

//handle userinput
function initTyping(){
    const char=typingtext.querySelectorAll('span');
    const typingchar=input.ariaValueMax.charAt(charindex);
    if(charindex < char.length && timeleft>0){
        if(char[charindex].innerText===typingchar){
            char[charindex].classList.add('correct');
            console.log("correct");
        }
        else{
            char[charindex].classList.add('incorrect');
            console.log("incorrect");
        }
        charindex++
    }
    else{

    }
}
input.addEventListener("input",initTyping);
loadParagraph();