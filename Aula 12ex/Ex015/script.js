function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById ('txtano')
    var res = window.document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] O ano informado esta invalido')
    } else {
        var fsex = window.document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img') // adicionar imagem pelo JS
        img.setAttribute ('id', 'foto') // definir atributos (nome)
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) { 
                // CRIANÇA
                img.setAttribute('src', 'crianca_h.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem_h.png')
            } else if (idade < 65) {
                // ADULTO
                img.setAttribute('src', 'adulto_h.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso_h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) { 
                // CRIANÇA
                img.setAttribute('src', 'crianca_m.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade < 65) {
                // ADULTO
                img.setAttribute('src', 'adulto_m.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso_m.png')
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Voce é ${genero} e tem ${idade} anos.`
        res.appendChild (img)
    }
} 