const wordsTextarea=document.querySelector(".word-counter-container .words");
const countBtn=document.querySelector(".word-counter-container .count-btn");
const wordCount=document.querySelector(".word-counter-container .word-count span");

const countWords=()=>{
    let words=wordsTextarea.value;
    let wordsTrimmed=words.replace(/\s+/g," ").trim();
    let splitWords=wordsTrimmed.split(" ");
    let numOfWords=splitWords.length;
    
    if(splitWords[0]==""){
        numOfWords=0;
    }

    wordCount.innerHTML=numOfWords;
}

    countBtn.addEventListener("click",countWords);