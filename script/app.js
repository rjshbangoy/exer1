function displaySum() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);
  
  let total = firstNum + secondNum;
  let sum = document.getElementById("sum");
  sum.innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}`;
  sum.style.display = "block";
}

function displayProduct() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);

  let total = firstNum * secondNum;
  let product = document.getElementById("product");
  product.innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}`;
  product.style.display = "block";
}
