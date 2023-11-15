function sortProducts() {
    var productList = document.getElementById('option');
    
    var sortOrder = document.getElementById('sortOrder').value;
  
    var productsArray = Array.from(productList.children);
  
    productsArray.sort(function(a, b) {
      var priceA = parseInt(a.getAttribute('data-price'));
      var priceB = parseInt(b.getAttribute('data-price'));
  
      if (sortOrder === 'desc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
  
    productList.innerHTML = '';
  
    productsArray.forEach(function(product) {
      productList.appendChild(product);
    });
  }
  
  sortProducts();