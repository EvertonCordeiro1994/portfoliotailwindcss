const $nome_usuario = $('#nome_usuario')
const $input_nome = $('#input_nome')
const $btn_form = $('#btn_form')

$nome_usuario.text(localStorage.getItem('nomeUsuario') || '')
localStorage.getItem('nomeUsuario')
