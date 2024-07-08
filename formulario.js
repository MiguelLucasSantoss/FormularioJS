function enviar() {
    let nomeUsuario = document.getElementById('nome').value
    let dataUsuario = document.getElementById('nascimento').value
    let generoUsiario = document.querySelector("input[name='genero']:checked").value
    let emailUsuario = document.getElementById('email').value
    let senhaUsuario = document.getElementById('senha').value
    let telefoneUsuario = document.getElementById('telefone').value

    alert('Seu nome é: ' + nomeUsuario + '\n'
        + 'Você nasceu: ' + dataUsuario + '\n'
        + 'Seu gênero é: ' + generoUsiario + '\n'
        + 'Seu email é: ' + emailUsuario + '\n'
        + 'Sua senha registrada: ' + senhaUsuario + '\n'
        + 'Seu telefone é: ' + telefoneUsuario)

        window.location.href='2index.html'

    }