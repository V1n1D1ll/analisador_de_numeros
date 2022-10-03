var num = document.getElementById('fnum')
var list = document.getElementById('flist')
var res = document.getElementById('res')
var valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var tot = valores.length

        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior.toFixed(2)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor.toFixed(2)}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma.toFixed(2)}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}.</p>`
    }
}