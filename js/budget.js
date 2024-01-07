// Function to hide the footer
function hideFooter() {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.style.display = "none";
  }
}

// Function to show the footer
function showFooter() {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.style.display = "block";
  }
}

function openCart(product, imageUrl) {
  // Hide the footer
  hideFooter();

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
  // Show the footer after saving
  showFooter();
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
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img src="${imageUrl}" alt="${product}" style="max-width: 50px; height: auto; margin: 0;">
      <ul style="padding: 0; margin: 0 -2rem 0 0; text-align: center; list-style: none; 
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      "> 
        ${selectedOptions
          .map(
            (option) =>
              `<li style="border: none;">${option.label} - <span style="color: #3f84c5; font-weight: bold;">${option.value}</li>`
          )
          .join("")}
      </ul>
      <button style="margin: 0;" onclick="removeItem(this)">Remover</button>
    </div>
  `;

  // Append the list item to the basket
  document.getElementById("basket-list").appendChild(listItem);

  // Make the basket visible
  showBasket();

  // Close the cart after saving
  closeCart();

  // Show the footer after saving
  showFooter();
}

// New function to show the basket
function showBasket() {
  const basket = document.getElementById("basket");
  basket.style.display = "flex"; // Use "flex" to display as a flex container, or use "block" based on your styling
}

// Function to remove an item from the basket
function removeItem(button) {
  // Get the parent li element of the button
  const listItem = button.closest("li");

  // Remove the entire li element from the basket
  listItem.remove();

  // Check if the basket is empty after removal
  const basketList = document.getElementById("basket-list");
  if (basketList.children.length === 0) {
    // If the basket is empty, hide the basket
    hideBasket();
  }
}

// Function to hide the basket
function hideBasket() {
  const basket = document.getElementById("basket");
  basket.style.display = "none";
}

// Function to clear customization options in the cart
function clearCustomization() {
  // Get the customization options container
  const customizationOptionsContainer = document.getElementById(
    "customization-options"
  );

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
      { label: "Malha", values: ["Algodão", "Poliviscose"] },
      {
        label: "Cor",
        values: [
          "Preto",
          "Marrom",
          "Vermelho",
          "Laranja",
          "Amarelo",
          "Verde",
          "Azul",
          "Roxo",
          "Rosa",
          "Branco",
          "Cinza",
        ],
      },
      { label: "Gola", values: ["Redonda/Careca", "Gola V"] }, 
      { label: "Tamanho", values: ["PP", "P", "M", "G", "GG"] },
      { label: "Quantidade", inputType: "number", name: "quantidadecamiseta" },
    ],
    polo: [
      {
        label: "Material",
        values: [
          "Algodão Cardada",
          "Algodão Penteada",
          "Poliviscose - PV",
          "Piquet",
        ],
      },
      {
        label: "Cor",
        values: [
          "Preto",
          "Marrom",
          "Vermelho",
          "Laranja",
          "Amarelo",
          "Verde",
          "Azul",
          "Roxo",
          "Rosa",
          "Branco",
          "Cinza",
        ],
      },
      { label: "Gola", values: ["Polo"] },
      { label: "Tamanho", values: ["PP", "P", "M", "G", "GG"] },
      { label: "Quantidade", inputType: "number", name: "quantidadepolo" },
    ],
    agasalho: [
      { label: "Malhaa", values: ["Moleton Flanelado"] },
      
      {
        label: "Cor",
        values: [
          "Preto",
          "Marrom",
          "Vermelho",
          "Laranja",
          "Amarelo",
          "Verde",
          "Azul",
          "Roxo",
          "Rosa",
          "Branco",
          "Cinza",
        ],
      },
      { label: "Gola e Bolso", values: ["Com Capuz", "Sem Capuz", "Com Bolso", "Sem Bolso", "Com Bolso e Capuz"] },
      { label: "Tamanho", values: ["PP", "P", "M", "G", "GG"] },
      { label: "Quantidade", inputType: "number", name: "quantidadeagasalho" },
    ],
    abada: [
      {
        label: "Malha",
        values: [
          "Algodão Cardada",
          "Algodão Penteada",
          "Poliviscose - PV",
          "Dry fit Poliéster",
          "Dry fit Poliamida",
        ],
      },
      {
        label: "Cor",
        values: [
          "Preto",
          "Marrom",
          "Vermelho",
          "Laranja",
          "Amarelo",
          "Verde",
          "Azul",
          "Roxo",
          "Rosa",
          "Branco",
          "Cinza",
        ],
      },
      { label: "Abertura Lateral", values: ["Fechado", "Elástico"] },
      { label: "Gola", values: ["Única"] },
      { label: "Tamanho", values: ["PP", "P", "M", "G", "GG"] },
      { label: "Quantidade", inputType: "number", name: "quantidadeabada" },
    ],
    ecobag: [
      { label: "Malha", values: ["Algodão Cru"] },
      { label: "Cor", values: ["Algodão Cru"] },
      { label: "Tipo de Alça", values: ["Algodao Trançado"] },
      { label: "Tamanho", values: ["Unico"] },
      { label: "Quantidade", inputType: "number", name: "quantidadeecobag" },
    ],
    mascara: [
      {
        label: "Malha",
        values: ["Algodão Cardada", "Algodão Penteada", "Poliviscose - PV"],
      },
      {
        label: "Cor",
        values: [
          "Preto",
          "Marrom",
          "Vermelho",
          "Laranja",
          "Amarelo",
          "Verde",
          "Azul",
          "Roxo",
          "Rosa",
          "Branco",
          "Cinza",
        ],
      },
      { label: "Alça", values: ["Elástico"] },
      { label: "Tipo de Forma", values: ["Bico de Pato"] },
      { label: "Tamanho", values: ["Unico"] },
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
