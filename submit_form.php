<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Include the function for sanitizing input
    require_once("sanitize_input.php");

    // Retrieve form data
    $nome = sanitize_input($_POST["Nome"]);
    $email = filter_var($_POST["Email"], FILTER_VALIDATE_EMAIL);
    $dddCel = sanitize_input($_POST["dddCel"]);
    $telefone = sanitize_input($_POST["Telefone"]);
    $dddTelefone = sanitize_input($_POST["dddTelefone"]);
    $telefone2 = sanitize_input($_POST["Telefone2"]);
    $comentario = sanitize_input($_POST["Comentario"]);
    $basketContent = sanitize_input($_POST["basketContent"]);

    // Validate email
    if (!$email) {
        echo "Endereço de e-mail inválido.";
        exit();
    }

    // Parâmetros do e-mail
    $to = "victoryagoc@gmail.com";
    $subject = "Novo Pedido da BlueBerryCamisetas";

    // Compor a mensagem de e-mail
    $message = "Detalhes do novo pedido:\n\n";
    $message .= "Nome: $nome\n";
    $message .= "E-mail: $email\n";
    $message .= "Telefone: +$dddCel $telefone\n";
    $message .= "Telefone Secundário: +$dddTelefone $telefone2\n";
    $message .= "Comentários: $comentario\n\n";
    $message .= "Detalhes do Pedido:\n$basketContent";

    // Cabeçalhos adicionais
    $headers = "De: admin@blueberrycamisetas.com";

    // Definir o tipo de conteúdo como texto simples
    $headers .= "\r\nContent-Type: text/plain; charset=UTF-8";

    // Definir o cabeçalho de Política de Segurança de Conteúdo (CSP)
    header("Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline';");

    // Enviar o e-mail
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "E-mail enviado com sucesso.";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
} else {
    // Redirecionar para a página do formulário se acessada diretamente sem submissão
    header("Location: sua_pagina_de_formulario.html");
    exit();
}
