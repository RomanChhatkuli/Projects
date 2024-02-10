let input = document.getElementById("input");
let buttons=document.querySelectorAll("button")
let string = ""
let result
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click', (e)=>{ 
        if (e.target.innerHTML == "="){
            result = eval(string);
            input.value=result
            string=""
        }
        else if (e.target.innerHTML == "AC"){
            string = ""
            input.value=string
        }
        else if (e.target.innerHTML == "DEL"){
            let array=Array.from(string)
            string=array.join('').slice(0,array.length-1)
            input.value=string
        }
        else{
            string = string + e.target.innerHTML
            input.value=string;
        }
    })
});

document.addEventListener("keydown",(e)=>{
    let key=e.key
    arr.forEach(button => {
        button.style.background=''
        button.style.color= ''
        if(key===button.innerHTML){
         button.style.background = 'linear-gradient(to right, #4CAF50, #2196F3)'
         button.style.color= 'purple'
        }
    })
    if(!isNaN(key) || key==='+' || key==='-' || key==='/' || key==='*' || key==='%'){
        string=string+key
        input.value=string
    }
    else if(key==='Enter'){
        result=eval(string)
        input.value=result
        string=""
    }
    else if(key==='Backspace'){
        string = string.slice(0, -1);
        input.value = string;
    }
})
