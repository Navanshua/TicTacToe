let check = document.querySelectorAll(".checkbox");
let reset = document.querySelector("#reset");
let head = document.querySelector("h1");
let end = document.querySelector("#newGame");
let x = true;
let count = 0;
end.classList.add("hide");
end.addEventListener("click", ()=>
{
    window.location.reload();
}
);
reset.addEventListener("click", ()=>
{
    window.location.reload();
}
);
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const disablebtns = () => {
    for(btns of check){
        btns.disabled = "true";
    }
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        console.log(check[pattern[0]],check[pattern[1]],check[pattern[2]]);
        let btn0 = check[pattern[0]].innerText;
        let btn1 = check[pattern[1]].innerText;
        let btn2 = check[pattern[2]].innerText;
        if((btn0 === 'O' ) && (btn1 === 'O') && (btn2 === 'O')){
            head.innerText = "O wins";
            end.classList.remove("hide");
            disablebtns();
        }
        else if((btn0 === 'X' ) && (btn1 === 'X') && (btn2 === 'X')){
            head.innerText = "X wins";
            end.classList.remove("hide");
            disablebtns();
        }
        else if(count == 9){
            head.innerText = "Draw";
            end.classList.remove("hide");
        }
    }
}
check.forEach((checkbox) => {
    checkbox.addEventListener("click",() =>{
    if(x === true){
        x = false;
        checkbox.innerText ="X";
    } 
    else{
        x = true;
        checkbox.innerText ="O";
    }
    checkbox.disabled = "true";
    count++;
    checkWinner();
    });
});
