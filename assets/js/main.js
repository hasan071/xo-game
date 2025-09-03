


let buttons = document.querySelectorAll(".btn")
// console.log(buttons);
let reset = document.querySelector(".reset")
// console.log(reset);
let xOrO = document.querySelector(".xOrO")

let btn1 = document.querySelector(".one")
let btn2 = document.querySelector(".two")
let btn3 = document.querySelector(".three")
let btn4 = document.querySelector(".four")
let btn5 = document.querySelector(".five")
let btn6 = document.querySelector(".six")
let btn7 = document.querySelector(".seven")
let btn8 = document.querySelector(".eight")
let btn9 = document.querySelector(".nine")

let arr = [ btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]

let gameOver = false


buttons.forEach( el => {
    el.onclick = function() {
        if ( gameOver ) {
            return;
        }
        if ( el.innerHTML !== "" ) {
            return;
        }
        if ( xOrO.innerHTML == "X TURN" ){
            el.style.cssText = `color: rgba(205, 1, 1, 1);`
            el.innerHTML = "X"
            xOrO.innerHTML = "O TURN"
            if ( buttons[0].innerHTML==buttons[1].innerHTML && buttons[0].innerHTML==buttons[2].innerHTML && buttons[0].innerHTML!="" ){
                btn1.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn2.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn3.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[0].innerHTML==buttons[3].innerHTML && buttons[0].innerHTML==buttons[6].innerHTML && buttons[0].innerHTML!="" ){
                btn1.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn4.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn7.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[0].innerHTML==buttons[4].innerHTML && buttons[0].innerHTML==buttons[8].innerHTML && buttons[0].innerHTML!="" ){
                btn1.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn5.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn9.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[1].innerHTML==buttons[4].innerHTML && buttons[1].innerHTML==buttons[7].innerHTML && buttons[1].innerHTML!="" ){
                btn2.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn5.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn8.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[2].innerHTML==buttons[5].innerHTML && buttons[2].innerHTML==buttons[8].innerHTML && buttons[2].innerHTML!="" ){
                btn3.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn6.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn9.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[3].innerHTML==buttons[4].innerHTML && buttons[3].innerHTML==buttons[5].innerHTML && buttons[3].innerHTML!="" ){
                btn4.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn5.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn6.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[6].innerHTML==buttons[7].innerHTML && buttons[6].innerHTML==buttons[8].innerHTML && buttons[6].innerHTML!="" ){
                btn7.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn8.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn9.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[2].innerHTML==buttons[4].innerHTML && buttons[2].innerHTML==buttons[6].innerHTML && buttons[2].innerHTML!="" ){
                btn3.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn5.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                btn7.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: rgba(205, 1, 1, 1);`
                reset.style.cssText = `color: brown`
                gameOver = true
            }


        } else if ( xOrO.innerHTML == "O TURN" ) {
            el.style.cssText = `color: navy;`
            el.innerHTML = "O"
            xOrO.innerHTML = "X TURN"
            if ( buttons[0].innerHTML==buttons[1].innerHTML && buttons[0].innerHTML==buttons[2].innerHTML && buttons[0].innerHTML!="" ){
                btn1.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn2.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn3.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                reset.style.cssText = `color: brown`

                gameOver = true
            }
            else if ( buttons[0].innerHTML==buttons[3].innerHTML && buttons[0].innerHTML==buttons[6].innerHTML && buttons[0].innerHTML!="" ){
                btn1.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn4.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn7.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[0].innerHTML==buttons[4].innerHTML && buttons[0].innerHTML==buttons[8].innerHTML && buttons[0].innerHTML!="" ){
                btn1.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn5.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn9.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[1].innerHTML==buttons[4].innerHTML && buttons[1].innerHTML==buttons[7].innerHTML && buttons[1].innerHTML!="" ){
                btn2.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn5.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn8.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[2].innerHTML==buttons[5].innerHTML && buttons[2].innerHTML==buttons[8].innerHTML && buttons[2].innerHTML!="" ){
                btn3.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn6.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn9.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[3].innerHTML==buttons[4].innerHTML && buttons[3].innerHTML==buttons[5].innerHTML && buttons[3].innerHTML!="" ){
                btn4.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn5.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn6.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[6].innerHTML==buttons[7].innerHTML && buttons[6].innerHTML==buttons[8].innerHTML && buttons[6].innerHTML!="" ){
                btn7.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn8.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn9.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
            else if ( buttons[2].innerHTML==buttons[4].innerHTML && buttons[2].innerHTML==buttons[6].innerHTML && buttons[2].innerHTML!="" ){
                btn3.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn5.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                btn7.style.cssText = `background-color: chartreuse; color: black; border: 3px solid green; color: navy;`
                reset.style.cssText = `color: brown`
                gameOver = true
            }
        }    
    }
})


    reset.onclick = function(){
        for ( let i=0 ; i<buttons.length ; i++ ){
            buttons[i].innerHTML = ""
        }
        xOrO.innerHTML = "X TURN"
        for ( let j=0 ; j<arr.length ; j++ ){
            arr[j].style.cssText = ""
        }
        gameOver = false
        reset.style.cssText = `color: white`
    }