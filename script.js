let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '<', '>', '/', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let sp1 = document.getElementById('sp1')
let sp2 = document.getElementById('sp2')
let sp3 = document.getElementById('sp3')
let sp4 = document.getElementById('sp4')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let length = document.querySelector('.length')
let passLength = parseInt(length.value)
let redCol = "red"
let greenCol = "green"
// let greenCol = "rgb(48, 175, 107)"
let orangeCol = "orange"
let box1 = document.querySelector('.circle1')
let box2 = document.querySelector('.circle2')
let box3 = document.querySelector('.circle3')
let passStrength = document.querySelector('.strength')
let alertCopy = document.querySelector('.alert')


function increase() {
    if (passLength < 18) {
        passLength++
        length.value = passLength
    }
}
function decrease() {
    if (passLength > 8) {
        passLength--
        length.value = passLength
    }
}

function colorIt() {
    if (passLength >= 8 && passLength <= 11) {
        box1.style.backgroundColor = redCol
        box2.style.backgroundColor = "White"
        box3.style.backgroundColor = "White"
        length.style.color = redCol
        passStrength.style.color = redCol
        passStrength.textContent = "Weak!"
    } else if (passLength >= 12 && passLength <= 15) {
        box1.style.backgroundColor = orangeCol
        box2.style.backgroundColor = orangeCol
        box3.style.backgroundColor = "White"
        length.style.color = orangeCol
        passStrength.style.color = orangeCol
        passStrength.textContent = "Strong!"
    } else {
        box1.style.backgroundColor = greenCol
        box2.style.backgroundColor = greenCol
        box3.style.backgroundColor = greenCol
        length.style.color = greenCol
        passStrength.style.color = greenCol
        passStrength.textContent = "Very Strong!"
    }
}

plus.addEventListener('click', function () {
    increase()
    colorIt()
})

minus.addEventListener('click', () => {
    decrease()
    colorIt()
})
let pass
function password() {
    pass = ""
    for (let i = 0; i < passLength; i++) {
        let randChar = Math.floor(Math.random() * letters.length)
        pass += letters[randChar]
    }
    return pass
}

function generate() {
    sp1.textContent = password()
    sp2.textContent = password()
    sp3.textContent = password()
    sp4.textContent = password()
}
function copyText(event) {
    if (event === 1 && sp1.textContent !== "") {
        navigator.clipboard.writeText(sp1.textContent).then(() => {
            alertCopy.style.cssText = 'top: 0;'
            setTimeout(() => {
                alertCopy.style.cssText = 'top: -5rem;'
            }, 700);
        })
    } else if (event === 2 && sp2.textContent !== "") {
        navigator.clipboard.writeText(sp2.textContent).then(() => {
            alertCopy.style.cssText = 'top: 0;'
            setTimeout(() => {
                alertCopy.style.cssText = 'top: -5rem;'
            }, 700);
        })
    } else if (event === 3 && sp3.textContent !== "") {
        navigator.clipboard.writeText(sp3.textContent).then(() => {
            alertCopy.style.cssText = 'top: 0;'
            setTimeout(() => {
                alertCopy.style.cssText = 'top: -5rem;'
            }, 700);
        })
    } else if (event === 4 && sp4.textContent !== "") {
        navigator.clipboard.writeText(sp4.textContent).then(() => {
            alertCopy.style.cssText = 'top: 0;'
            setTimeout(() => {
                alertCopy.style.cssText = 'top: -5rem;'
            }, 700);
        })
    }
}