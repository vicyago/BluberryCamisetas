// Function to open the shopping cart with customization options for a selected product
function openCart(product, imageUrl) {
    // Display the shopping cart
    document.getElementById('cart').style.display = 'block';
  
    // Populate customization options in the cart
    document.getElementById('customization-options').innerHTML = `
      <p>Product: ${product}</p>
      <img src="${imageUrl}" alt="${product}" style="max-width: 100px; height: auto; margin-bottom: 10px;">
      <label>Malha da Peça:
        <input type="text" name="material">
      </label>
      <br>
      <label>Cor da Peça:
        <input type="text" name="color">
      </label>
      <br>
      <label>Tipo de Gola:
        <input type="text" name="collar">
      </label>
      <br>
      <label>Quantidade de Peças:
        <input type="number" name="quantity" value="1" min="1">
      </label>
      <br>
      <label>Tamanho da Peça (Max ${getMaxQuantity()}):
        <input type="text" name="size">
        <br>
        <label>Quantidade por Tamanho:
          <input type="number" name="sizeQuantity" value="1" min="1">
        </label>
      </label>
      <br>
      <label>Personalização (Bordado/Silkscreen):
        <select name="personalization">
          <option value="bordado">Bordado</option>
          <option value="silkscreen">Silkscreen</option>
        </select>
      </label>
      <br>
      <label>Anexar Arquivo:
        <input type="file" name="attachment">
      </label>
    `;
  }
  
  // Function to get the maximum quantity allowed for a product
  function getMaxQuantity() {
    // You can define the maximum quantity dynamically based on your requirements
    return 10;
  }
  
  // Function to close the shopping cart
  function closeCart() {
    document.getElementById('cart').style.display = 'none';
  }
  
  // Function to save customization options to the basket
  function saveCustomization() {
    // Get customization options from the cart
    const customizationOptions = document.getElementById('customization-options').innerHTML;
  
    // Create a list item to represent the customized product
    const listItem = document.createElement('li');
    listItem.innerHTML = customizationOptions;
  
    // Add the customized product to the basket list
    document.getElementById('basket-list').appendChild(listItem);
  
    // Close the shopping cart after saving customization
    closeCart();
  }
  
  // Function to clear customization options in the shopping cart
  function clearCustomization() {
    // Clear customization options
    document.getElementById('customization-options').innerHTML = '';
  
    // Close the shopping cart after clearing customization
    closeCart();
  }
  
  // Function to submit the form (placeholder, actual implementation is commented)
  function submitForm() {
    // Get the content of the basket
    const basketContent = document.getElementById('basket-list').innerHTML;
  
    // Log the basket content (you can implement logic to submit the form to the server here)
    console.log(basketContent);
    // Implement the logic to submit the form to the server (e.g., via AJAX or traditional form submission).
  }