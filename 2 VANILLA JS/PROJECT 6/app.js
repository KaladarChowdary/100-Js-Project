const search = function () {
  const searchWord = document.getElementById("search-item").value.toUpperCase();
  const productArray = Array.from(document.querySelectorAll(".product"));

  for (let product of productArray) {
    let productName = product.getElementsByTagName("h2")[0].textContent;

    if (productName.toUpperCase().indexOf(searchWord) === -1) {
      product.style.display = `none`;
    } else {
      product.style.display = "flex";
    }
  }
};
