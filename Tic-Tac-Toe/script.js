let turnO = true
let btn = document.querySelectorAll(".buttons button")
let reset = document.querySelector("#reset")
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

btn.forEach(e => {
    e.addEventListener("click", () => {
        console.log("Butoon is clicked.")
        if (turnO === true) {
            e.innerHTML = 'O'
            turnO = false
        }
        else {
            e.innerHTML = 'X'
            turnO = true
        }
        e.disabled = true
        Winner();
    })
});
reset.addEventListener('click', () => {
    btn.forEach(e => {
        e.innerHTML = ""
        e.disabled = false
    });
})
function Winner(){
    for (i=0;i<win.length;i++) {
        let x1 =btn[win[i][0]].innerHTML
        let x2 = btn[win[i][1]].innerHTML
        let x3 = btn[win[i][2]].innerHTML
        if(x1!="" && x2!="" && x3!=""){
            if(x1==x2 && x2==x3){
                alert(`${x1} is winner.`)
            }
        }
    }
}
