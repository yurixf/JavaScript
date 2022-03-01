function carregar () {

    var msg = window.document.getElementById ("msg")
    var img = window.document.getElementById ("imagem")
    var data = new Date ()
    var hora = data.getHours ()
    var minuto = data.getMinutes ()
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = '<P>BOM DIA</p>'
        img.src = 'fotomanha.png'
        document.body.style.background = '#fde6c7'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = '<P>BOA TARDE</P>'
        img.src = 'fototarde.png'
        document.body.style.background = '#a1cae0'
    } else {
        msg.innerHTML = '<p>BOA NOITE</p>'
        img.src = 'fotonoite.png'
        document.body.style.background = '#245066'
    }
  msg.innerHTML += `Agora são ${hora}: ${minuto}.`
}