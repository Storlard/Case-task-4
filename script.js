function getNumber() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    
    const a = Number(num1);
    const b = Number(num2);

    if (num1.trim() === "" || num2.trim() === "" || isNaN(a) || isNaN(b)) {
        return { error: "Ошибка: введите корретные числа"};
    }

    return { a, b };
}

function showResult(value) {
    document.getElementById("result").innerText = value;
}

function sum() {
    const data = getNumber();
    if (data.error) return showResult(data.error);

    showResult(data.a + data.b);
}

function subtract() {
    const data = getNumber();
    if (data.error) return showResult(data.error);

    showResult(data.a - data.b);
}

function multiply() {
    const data = getNumber();
    if (data.error) return showResult(data.error);

    showResult(data.a * data.b);
}

function divide() {
    const data = getNumber();
    if (data.error) return showResult(data.error);

    if (data.b === 0) {
        return showResult("Ошибка: деление на ноль");
    }

    showResult(data.a / data.b);
}