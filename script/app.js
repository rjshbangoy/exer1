function displaySum() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);
  
  let total = firstNum + secondNum;
  let sum = document.getElementById("sum");
  sum.style.display = "block";
  sum.innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}`;
}

function displayProduct() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);

  let total = firstNum * secondNum;
  let product = document.getElementById("product");
  product.style.display = "block";
  product.innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}`;
}
