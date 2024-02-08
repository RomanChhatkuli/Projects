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
