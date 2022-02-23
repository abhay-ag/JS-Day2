let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','<','>','/','?','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let sp1 = document.getElementById('sp1')
let sp2 = document.getElementById('sp2')
let sp3 = document.getElementById('sp3')
let sp4 = document.getElementById('sp4')
let length = 16;
let pass
function password(){
    pass = ""
    for(let i = 0; i< length; i++){
        let randChar =Math.floor(Math.random()*letters.length)
        pass += letters[randChar]
    }
    return pass
}

function generate(){
    sp1.textContent = password()
    sp2.textContent = password()
    sp3.textContent = password()
    sp4.textContent = password()
}
