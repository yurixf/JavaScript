v = []
function adicionar () {
    var num = window.document.getElementById ('txtn')
    var sel = window.document.getElementById ('seln')
    var n = Number(num.value)
    var pos = v.indexOf(n)
    if (num.value.length == 0 || n > 100 || n < 1) {
        window.alert ('Valor invalido, favor informar algum valor entre 1 e 100!!')
    } else if (pos == -1) {
        var item = document.createElement ('option')
        item.text = `Valor ${n} adicionado`
        item.value = `sel${n}`
        sel.appendChild (item)
        v.push(n) 
        res.innerHTML = 'Aguardando analise'
        //window.alert (`${v}`)
    } else {window.alert ('Valor já existente')    
    }
    num.value = ''
    num.focus ()
}

function analisar () {
    var res = window.document.getElementById ('res')
    //var nv = v.length - 1
    if (v.length == 0) {
        window.alert ('Adicione valores antes de finalizar')
    } else {
        let = maior = v[0]
        let = menor = v[0]
        let = soma = 0
        let = media = 0
        for (let pos in v) {
            soma += v[pos]
            if (v[pos] > maior)
                maior  = v[pos]
            if (v[pos] < menor)
                menor = v[pos]
        }
        media = soma/v.length
        v.sort ()
        res.innerHTML = `<p>${v}</p>`
        res.innerHTML += `<p>Existem ${v.length} numeros adicionados</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<P>A soma total dos valores é ${soma}</P>`
        res.innerHTML += `<P>A média dos valores é ${media}`
    }
    
}
function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}