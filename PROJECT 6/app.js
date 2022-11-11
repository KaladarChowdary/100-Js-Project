const search = function () {
  const searchWord = document.getElementById("search-item").value.toUpperCase();
  const productArray = Array.from(document.querySelectorAll(".product"));

  for (let product of productArray) {
    let productName =  product.getElementsByTagName("h2")[0].textContent;

    if(productName)
  }
};
