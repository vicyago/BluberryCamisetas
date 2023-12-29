// Function to open the shopping cart with customization options for a selected product
function openCart(product, imageUrl) {
  // Display the shopping cart
  document.getElementById("cart").style.display = "block";

  // Populate customization options in the cart based on the selected product
  populateCustomizationOptions(product);

  // Add product information to the cart
  const productInfoContainer = document.getElementById("product-info");
  productInfoContainer.innerHTML = `
    <p>${product}</p>
    <img src="${imageUrl}" alt="${product}" style="max-width: 100px; height: auto; margin-bottom: 10px;">
  `;
}

// Function to close the shopping cart
function closeCart() {
  document.getElementById("cart").style.display = "none";
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
    </div>
  `;

  // Append the list item to the basket
  document.getElementById("basket-list").appendChild(listItem);

  // Close the cart after saving
  closeCart();
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

  // Add event listener to validate input (allow only numbers)
  numberInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
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
