
function getCalculatorElement() {
	return `
		<div id="calculator">
			<input id="number1">
			<input id="number2">
			<button id="add">+</button>
			<button id="substract">-</button>
			<span id="result"></span>
		</div>
	`
}

document.getElementById('app').innerHTML = getCalculatorElement()

function setResult(r) {
    document.getElementById('result').innerText = r;
}
function getValue(id) {
    let v = document.getElementById(id).value
    return Number(v)
}
function calculatorAdd(){
    let a = getValue('number1');
    let b = getValue('number2'); 
    let result = a + b;
    setResult(result);
	console.log('არიქა მუშაობს')
}

document.getElementById('add').onclick = calculatorAdd

function calculatorSubstract() {
    let a = getValue('number1');
    let b = getValue('number2');
    let result = a - b;
    setResult(result);
	console.log('არიქა მუშაობს')
}

document.getElementById('add').onclick = calculatorAdd;
document.getElementById('substract').onclick = calculatorSubstract;
