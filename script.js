const typingtext= document.querySelector('.typing text p')
const input= document.querySelector('wrapper .input-field')
const time= document.querySelector('.time span b')
const mistake= document.querySelector('.mistake span')
const wpm= document.querySelector('.wpm span')
const cpm= document.querySelector('.cpm span')
const btn= document.querySelector('button')

function loadParagraph(){
    const paragraph=["qwe","rty","uio","pas","dfg","hjk","lzx","cvb"];
    const randomIndex=Math.floor(Math.random()
*paragraph.length);
typingtext.innerHTML=" ";
for(const char of paragraph[randomIndex]){
    console.log(char);
    typingtext.innerHTML+=`<span>${char}</span>`;
}
typingtext.querySelectorAll('span')[0].classList.add('active');
}
loadParagraph();