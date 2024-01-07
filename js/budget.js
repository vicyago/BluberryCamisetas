function openCart(product, imageUrl) {
  // Display the backdrop overlay
  document.getElementById("cart-overlay").style.display = "block";

  // Fade in animation
  cart.style.opacity = "0";
  cart.style.display = "block";
  setTimeout(() => {
    cart.style.opacity = "1";
  }, 100);

  // Populate customization options in the cart based on the selected product
  populateCustomizationOptions(product);

  // Add product information to the cart
  const productInfoContainer = document.getElementById("product-info");
  productInfoContainer.innerHTML = `
    <p>${product}</p>
    <img src="${imageUrl}" alt="${product}" style="max-width: 100px; height: auto; margin-bottom: 10px;">
  `;

  // Scroll to the cart
  document.getElementById("cart").scrollIntoView({
    behavior: "smooth",
  });
}

// Function to close the shopping cart
function closeCart() {
  // Hide the cart pop
  document.getElementById("cart").style.display = "none";
  // Hide the backdrop overlay
  document.getElementById("cart-overlay").style.display = "none";
  // Deselect checkbox
  onProductSelection();
}

function saveCustomization() {
  console.log("Save button clicked");

  // Get selected product and image
  const productInfoContainer = document.getElementById("product-info");
  const product = productInfoContainer.querySelector("p").innerText.trim();
  const imageUrl = productInfoContainer.querySelector("img").src;

  console.log("Selected Product:", product);

  // Get customization options
  const customizationOptions = document.getElementById("customization-options");
  const selectedOptions = [];

  for (const element of customizationOptions.children) {
    if (
      element.tagName === "DIV" &&
      element.classList.contains("customization-option")
    ) {
      const label = element.querySelector("label").innerText;
      const input = element.querySelector("select, input");
      const value = input ? input.value : null;

      console.log("Label:", label);
      console.log("Input:", input);
      console.log("Value:", value);

      selectedOptions.push({ label, value });
    }
  }

  console.log("Selected Options:", selectedOptions);

  // Create a list item to display saved options with the product image
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <div>
      <img src="${imageUrl}" alt="${product}" style="max-width: 50px; height: auto; margin-right: 10px;">
      <span>${selectedOptions
        .map((option) => `${option.label} - ${option.value}`)
        .join(", ")}</span>
      <button onclick="removeItem(this)">Remove</button>
    </div>
  `;

  // Append the list item to the basket
  document.getElementById("basket-list").appendChild(listItem);

  // Close the cart after saving
  closeCart();
}

// Function to remove an item from the basket
function removeItem(button) {
  // Get the parent li element of the button
  const listItem = button.closest("li");

  // Remove the entire li element from the basket
  listItem.remove();
}

// Function to clear customization options in the cart
function clearCustomization() {
  // Get the customization options container
  const customizationOptionsContainer = document.getElementById("customization-options");

  // Iterate over child elements and clear input values
  for (const element of customizationOptionsContainer.children) {
    if (
      element.tagName === "DIV" &&
      element.classList.contains("customization-option")
    ) {
      const input = element.querySelector("select, input");
      if (input) {
        input.value = "";
      }
    }
  }
}

// Function to populate customization options based on the selected item
function populateCustomizationOptions(item) {
  const customizationOptionsContainer = document.getElementById(
    "customization-options"
  );

  // Clear existing content
  customizationOptionsContainer.innerHTML = "";

  const customizationOptions = {
    camiseta: [
      { label: "Malha da Peça", values: ["Algodão", "Poliviscose"] },
      { label: "Cor da Peça", values: ["#fff", "#000", "#00f"] },
      { label: "Tamanho da Peça", values: ["PP", "P", "M", "G", "GG"] },
      { label: "Quantidade", inputType: "number", name: "quantidadecamiseta" },
    ],
    polo: [
      {
        label: "Material da Peça",
        values: [
          "Algodão Cardada",
          "Algodão Penteada",
          "Poliviscose - PV",
          "Piquet",
        ],
      },
      { label: "Cor da Peça", values: ["#000", "#888", "#c0c0c0"] },
      { label: "Tamanho da Peça", values: ["PP", "P", "M", "G", "GG"] },
      { label: "Quantidade", inputType: "number", name: "quantidadepolo" },
    ],
    agasalho: [
      { label: "Malha da Peça", values: ["Moleton Flanelado"] },
      { label: "Cor da Peça", values: ["#fff", "#808080", "#d3d3d3"] },
      { label: "Capuz", values: ["Com Capuz", "Sem Capuz"] },
      { label: "Bolso", values: ["Com Bolso", "Sem Bolso"] },
      { label: "Tamanho da Peça", values: ["PP", "P", "M", "G", "GG"] },
      { label: "Quantidade", inputType: "number", name: "quantidadeagasalho" },
    ],
    abada: [
      {
        label: "Malha da Peça",
        values: [
          "Algodão Cardada",
          "Algodão Penteada",
          "Poliviscose - PV",
          "Dry fit Poliéster",
          "Dry fit Poliamida",
        ],
      },
      { label: "Cor da Peça", values: ["#fff", "#000", "#00f"] },
      { label: "Abertura Lateral", values: ["Fechado", "Elastico"] },
      { label: "Tamanho da Peça", values: ["PP", "P", "M", "G", "GG"] },
      { label: "Quantidade", inputType: "number", name: "quantidadeabada" },
    ],
    ecobag: [
      { label: "Malha da Peça", values: ["Algodão Cru"] },
      { label: "Cor da Peça", values: ["#C7A975"] },
      { label: "Tipo de Alça", values: ["Algodao Trançado"] },
      { label: "Tamanho da Peça", values: ["Unico"] },
      { label: "Quantidade", inputType: "number", name: "quantidadeecobag" },
    ],
    mascara: [
      {
        label: "Malha da Peça",
        values: ["Algodão Cardada", "Algodão Penteada", "Poliviscose - PV"],
      },
      { label: "Cor da Peça", values: ["#fff", "#808080", "#d3d3d3"] },
      { label: "Tipo de Forma", values: ["Bico de Pato"] },
      { label: "Tamanho da Peça", values: ["Unico"] },
      { label: "Quantidade", inputType: "number", name: "quantidademascara" },
    ],
  };

  if (customizationOptions[item]) {
    customizationOptions[item].forEach((option) => {
      const { label, values, inputType } = option;

      const inputElement =
        inputType === "number"
          ? createNumberInput(item, label)
          : createSelectInput(item, label, values);

      const inputContainer = createInputContainer(label, inputElement);

      customizationOptionsContainer.appendChild(inputContainer);
    });
  }
}

function createNumberInput(item, label) {
  const numberInput = document.createElement("input");
  numberInput.type = "number";
  numberInput.name = `${item}_${label.toLowerCase().replace(/\s+/g, "_")}`;
  numberInput.className = "inputDetalhes required";

  // Set the minimum value to 30
  numberInput.min = 30;

  let isTyping = false; // Flag to track ongoing user input

  // Add event listener to allow only numbers and enforce minimum value
  numberInput.addEventListener("input", function () {
    // Allow only numbers
    this.value = this.value.replace(/[^0-9]/g, "");

    // Set the flag to true when the user starts typing
    isTyping = true;
  });

  // Add a blur event listener to enforce the minimum value when the user finishes typing
  numberInput.addEventListener("blur", function () {
    // Enforce minimum value (set to 30 if less than 30) only if the user has finished typing
    if (isTyping && parseInt(this.value) < 30) {
      this.value = "30";
    }

    // Reset the typing flag
    isTyping = false;
  });

  return numberInput;
}

function createSelectInput(item, label, values) {
  const selectElement = document.createElement("select");
  selectElement.name = `${item}_${label.toLowerCase().replace(/\s+/g, "_")}`;
  selectElement.className = "inputDetalhes required";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.selected = true;
  defaultOption.innerText = "▫️ Selecionar ▫️";
  selectElement.appendChild(defaultOption);

  values.forEach((value) => {
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.innerText = value;
    selectElement.appendChild(optionElement);
  });

  return selectElement;
}

function createInputContainer(label, inputElement) {
  const container = document.createElement("div");
  container.classList.add("customization-option");

  const labelElement = document.createElement("label");
  labelElement.innerText = label;
  container.appendChild(labelElement);

  container.appendChild(inputElement);

  return container;
}

// Function to submit the form (placeholder, actual implementation is commented)
function submitForm() {
  // Get the content of the basket
  const basketContent = document.getElementById("basket-list").innerHTML;

  // Log the basket content (you can implement logic to submit the form to the server here)
  console.log(basketContent);
  // Implement the logic to submit the form to the server (e.g., via AJAX or traditional form submission).
}

// Store all checboxes elements in an array
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);

// Add event listener to each checkbox
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    console.log("listener");
    onProductSelection(checkbox);
  });
});

// Iterate over each checkbox and mark them as unchecked, at the end check only the clicked checkbox
function onProductSelection(object) {
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
  // If no checkbox was clicked, function was called from the close button, otherwise we must select the checked box
  if (object) {
    object.checked = true;
  }
}

//  Script for form submission simulation
function simulateFormSubmission() {
  // Retrieve the basket content and set it in the hidden input
  const basketContent = document.getElementById("basket-list").innerHTML;
  document.getElementById("hiddenBasketContent").value = basketContent;

  // Retrieve user information
  const userName = document.getElementById("Nome").value;
  const userEmail = document.getElementById("Email").value;
  const userComments = document.getElementById("Comentario").value;

  // Create the content with Brazilian Portuguese labels
  const content = `
        <div style="border: 0.2rem solid #3f84c5; padding: 1rem; margin: 1rem 0; text-align: center;">
            <h2 style="margin-bottom: 1rem;">Conteúdo Salvo</h2>
            ${basketContent}
            <p style="margin-top: 1rem; margin-bottom: 1rem;">Informações do Usuário:</p>
            <ul style="justify-content: space-between; overflow: hidden;">
                <li style="margin-bottom: 1rem;">Nome: ${userName}</li>
                <li style="margin-bottom: 1rem;">Email: ${userEmail}</li>
                <li style="margin-bottom: 1rem;">Celular: ${
                  document.getElementById("DDD").value
                } ${document.getElementById("Telefone").value}</li>
                <li>Telefone: ${document.getElementById("DDD2").value} ${
    document.getElementById("Telefone2").value
  }</li>
            </ul>
            <ul style="overflow: hidden;" >
                <li>Comentários: ${userComments}</li>
            </ul>
        </div>
    `;

  // Display the saved content
  const savedContent = document.getElementById("saved-content");
  savedContent.innerHTML = content;

  // Show a thank you message
  const thankYouMessage = document.createElement("p");
  thankYouMessage.innerText =
    "Obrigado pelo seu pedido! Recebemos suas informações com sucesso.";
  thankYouMessage.style.color = "#3f84c5"; // You can adjust the styling as needed

  // Append the thank you message to a specific container
  const thanksContainer = document.getElementById("thanks-container");
  thanksContainer.innerHTML = ""; // Clear existing content in the container
  thanksContainer.appendChild(thankYouMessage);

  // Optionally, you can reset the form fields after submission
  document.getElementById("basket-form").reset();
}
