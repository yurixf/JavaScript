function contar () {
    var nui = window.document.getElementById ('ini')
    var nuf = window.document.getElementById ('fim')
    var nup = window.document.getElementById ('pas')
    var res = window.document.getElementById ('res')


    /*
    if (nui.value.length == 0) {
        window.alert ('Valor inicial está VAZIO, foi considerado 0')
        ni = Number (0)
    } 
    if (nuf.value.length == 0) {
        window.alert ('Valor final esta VAZIO, foi considerado 10')
        nf = Number (10)
    }
    if (nup.value.length == "" || np == 0) {
        window.alert ('Valor do PASSE invalido, foi considerado 1')
        np = Number (1)
    }
   */
   if (nui.value.length == 0 || nuf.value.length == 0 || nup.value.length == 0) {
        res.innerHTML = 'Impossivel contar!!'   
       // window.alert ('[ERRO] Faltam dados') 
   } else {
        res.innerHTML = 'Contando: <br>' // <br> - Utilizado para quebrar linha
        var ni = Number (nui.value)
        var nf = Number (nuf.value)
        var np = Number (nup.value) 
        if (np <= 0) {
        window.alert ('Passo inválido! Foi considerado 1')
        np = 1
    }
    if (ni < nf) {
        // Contagem crescente
        for (let cont = ni; cont <= nf; cont += np) {
        res.innerHTML += `${cont} \u{1F595}`
      }
    } else {
        //Contagem regressiva
        for (let cont = ni; cont >= nf; cont -= np) {
        res.innerHTML += `${cont} \u{1F595}`
        }
    }
       res.innerHTML += `\u{1F4A9}`
   }

}