//----------------------------- FUNCTION QUI AFFICHE LE NOMBRE SÉLECTIONNER -----------------------------
function getNumber(numberInput) {
    if (document.getElementById('i1').value == 0) {
        document.getElementById('i1').value = numberInput
    } else {
        document.getElementById('i1').value += numberInput
    }
}

//----------------------------- FUNCTION QUI TRAITE LE CALCULE -----------------------------
function calculate() {
    if (document.getElementById('i1').value.includes('+')) {
        const input = document.getElementById('i1').value;
        let numbree = input.split('+')
        document.getElementById('i1').value = parseFloat(numbree[0]) + parseFloat(numbree[1])

    } else if (document.getElementById('i1').value.includes('-')) {
        const input = document.getElementById('i1').value;
        let numbree = input.split('-')
        document.getElementById('i1').value = parseFloat(numbree[0]) - parseFloat(numbree[1])

    } else if (document.getElementById('i1').value.includes('*')) {
        const input = document.getElementById('i1').value;
        let numbree = input.split('*')
        document.getElementById('i1').value = parseFloat(numbree[0]) * parseFloat(numbree[1])
    } else if (document.getElementById('i1').value.includes('/')) {
        const input = document.getElementById('i1').value;
        let numbree = input.split('/')
        document.getElementById('i1').value = parseFloat(numbree[0]) / parseFloat(numbree[1])
    }
}

//----------------------------- FUNCTION QUI CHANGE LE SIGNE -----------------------------
function signeInput() {
    document.getElementById('i1').value = (document.getElementById('i1').value * (-1))
}

//----------------------------- FUNCTION QUI INITIALISE EN 0 -----------------------------
function resetInput() {
    document.getElementById('i1').value = 0
}

//----------------------------- FUNCTION QUI EFFACE LE DERNIER NOMBRE OU CARACTÈRE AFFICHER -----------------------------
function deleteInput() {
    if (document.getElementById('i1').value.length == 1) {
        document.getElementById('i1').value = 0
    } else {
        let i = document.getElementById('i1').value
        document.getElementById('i1').value = i.slice(0, i.length - 1)
    }
}