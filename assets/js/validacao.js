function validar () {
    var nome = form1.name.value;
    var email = form1.inputEmail.value;
    var tel = form1.inputTel.value;
    var msg = form1.mensagem.value;

    if (nome.length == '') {
        alert('Por favor, preencha o campo de nome.');
        form1.nome.focus;
        return false
    } else if (email.length == '') {
        alert('Por favor informe um endereço de email.')
        form1.email.focus;
        return false
    } else if (tel.length == '') {
        alert('Por favor, digite o númedo de telefone');
        form1.tel.focus;
        return false
    } else if (msg.length == '') {
        alert('Por favot, digite a mensagem');
        form1.msg.focus;
        return false
    } else {
        alert('Sua mensagem foi enviada, obrigado!')
    }
}