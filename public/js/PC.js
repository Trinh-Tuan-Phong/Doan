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

  
function filterProducts() {
  // Lấy giá trị của lựa chọn
  var selectedBrand = document.getElementById('brand').value; // Hãng
  var selectedCpu = document.getElementById('cpu').value; // CPU
  var selectedResol = document.getElementById('resol').value; // Độ phân giải
  var selectedCapacity = document.getElementById('capacity').value;// Dung lượng
  var selectedCurrent = document.getElementById('current').value;// Dòng VGA
  var selectedMinPrice = parseInt(document.getElementById('price-min').value); // Giá thấp nhất
  var selectedMaxPrice = parseInt(document.getElementById('price-max').value); // Giá cao nhất

  // Lấy danh sách tất cả sản phẩm
  var products = document.getElementsByClassName('product');

  // Lặp qua từng sản phẩm và ẩn hoặc hiển thị tùy thuộc vào lựa chọn
  for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var productBrand = product.getAttribute('data-brand');
      var productCpu = product.getAttribute('data-cpu');
      var productResol = product.getAttribute('data-resol');
      var productCapacity = product.getAttribute('data-capa');
      var productCurrent = product.getAttribute('data-curr');
      var productPrice = parseInt(product.getAttribute('data-price'));

      var brandMatch = selectedBrand === 'all' || selectedBrand === productBrand;
      var cpuMatch = selectedCpu=== 'all' || selectedCpu === productCpu;
      var resolMatch = selectedResol=== 'all' || selectedResol === productResol;
      var capaMatch = selectedCapacity=== 'all' || selectedCapacity === productCapacity;
      var currMatch = selectedCurrent=== 'all' || selectedCurrent === productCurrent;
      var priceMatch = (selectedMinPrice === 0 || productPrice >= selectedMinPrice) &&
                        (selectedMaxPrice === 99999 || productPrice <= selectedMaxPrice);

        if (brandMatch && cpuMatch && priceMatch && resolMatch && capaMatch && currMatch) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
  }
}

