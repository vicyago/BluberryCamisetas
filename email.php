<?php
// Display errors for debugging purposes
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Sender and recipient email addresses
$from = "admin@blueberrycamisetas.com";
$to = "victoryagoc@gmail.com";

// Email subject
$subject = "Checking PHP mail";

// Initialize variables
$message = ":";
$newmessage = "";

// Dictionary to translate form field names into more user-friendly names
$input_dict = array(
    "Nome" => "Nome do Cliente",
    "Email" => "E-mail",
    "dddCel" => "DDD do Celular",
    "Telefone" => "Número do Celular",
    "dddTelefone" => "DDD do Telefone",
    "Telefone2" => "Número do telefone",
    "Material_da_peca_camiseta" => "Material da Camiseta",
    "Cor_da_peca_camiseta" => "Cor da Camiseta",
    "Tipo_de_gola_camiseta" => "Gola da Camiseta",
    "tamanho_da_peca_camiseta" => "Tamanho da Camiseta",
    "bordadoCamiseta" => "Bordado da Camiseta",
    "silkCamiseta" => "Silkscreen da Camiseta",
    "numeroPecasCamiseta" => "Número Peças Camiseta",
    "vectorCamiseta" => "Vetor da Camiseta",
    "Material_da_peca_polo" => "Material da Polo",
    "Cor_da_peca_polo" => "Cor da Polo",
    "Tipo_de_gola_polo" => "Gola da Polo",
    "tamanho_da_peca_polo" => "Tamanho da Polo",
    "bordadoPolo" => "Bordado da Polo",
    "silkPolo" => "Silkscreen da Polo",
    "numeroPecasPolo" => "Número Peças Polo",
    "vectorPolo" => "Vetor da Polo",
    "Material_da_peca_agasalho" => "Material da Agasalho",
    "Cor_da_peca_agasalho" => "Cor da Agasalho",
    "capuzAgasalho" => "Capuz do Agasalho",
    "bolsoAgasalho" => "Bolso do Agasalho",
    "tamanho_da_peca_agasalho" => "Tamanho da Agasalho",
    "bordadoAgasalho" => "Bordado do Agasalho",
    "silkAgasalho" => "Silkscreen do Agasalho",
    "numeroPecasAgasalho" => "Número Peças Agasalho",
    "vectorAgasalho" => "Vetor da Agasalho",
    "Material_da_peca_abada" => "Material da Abadá",
    "Cor_da_peca_abada" => "Cor da Abadá",
    "Tipo_de_abertura_abada" => "Abertura da Abadá",
    "tamanho_da_peca_abada" => "Tamanho da Abadá",
    "bordadoAbada" => "Bordado do Abadá",
    "silkAbada" => "Silkscreen do Abadá",
    "numeroPecasAbada" => "Número Peças Abadá",
    "vectorAbada" => "Vetor da Abadá",
    "Material_da_peca_ecobag" => "Material da Ecobag",
    "Cor_da_peca_ecobag" => "Cor da Ecobag",
    "Tipo_de_alça_ecobag" => "Alça da Ecobag",
    "tamanho_da_peca_ecobag" => "Tamanho da Ecobag",
    "bordadoEcobag" => "Bordado da Ecobag",
    "silkEcobag" => "Silkscreen da Ecobag",
    "numeroPecasEcobag" => "Número Peças Ecobag",
    "vectorEcobag" => "Vetor da Ecobag",
    "Material_da_pecaMask" => "Material da Máscara",
    "Cor_da_pecaMask" => "Cor da Máscara",
    "Tipo_de_formaMask" => "Formato da Máscara",
    "tamanho_da_peca_mascara" => "Tamanho da Máscara",
    "bordadoMascara" => "Bordado da Máscara",
    "silkMascara" => "Silkscreen da Máscara",
    "numeroPecasMask" => "Número de Peças Máscara",
    "vectorMascara" => "Vetor da Máscara",
    "Comentario" => "Observações e Comentários",
    "tituloMensagem" => "Formulário de Orçamento"
);

// HTML table for formatting the email content
$emailTable = "<table>";

// Loop through each form field in the POST data
foreach ($_POST as $key => $value) {
    // Skip empty values
    if (empty($value)) {
        continue;
    }

    // Check if the current value is a special marker ("produto")
    if ($value == "produto") {
        // If it is, add a table header for this section
        $tableHeader = "<th>" . $key . "</th>";
        $emailTable = $emailTable . $tableHeader;
        continue;
    }

    // Translate the form field name into a more user-friendly name
    $corretedInputName = $input_dict[$key];

    // Add a table row with the form field name and its value
    $tableRow = 
        "<tr>
        <td>" . $corretedInputName . "</td>
        <td>" . $value . "</td>
        </tr>";
    $emailTable = $emailTable . $tableRow;
}

// Close the HTML
