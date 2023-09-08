function displaySum() {
  let firstNum = Number(document.getElementById('num1').innerHTML)
  let secondNum = Number(document.getElementById('num2').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("sum").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

function displayProduct() {
  let firstNum = Number(document.getElementById('num1').innerHTML)
  let secondNum = Number(document.getElementById('num2').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("product").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}
