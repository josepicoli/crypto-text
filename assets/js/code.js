let codeButton = window.document.getElementById("code")
codeButton.addEventListener("click", codification)

function codification() {
    let input = window.document.getElementById("input")
    let output = window.document.getElementById("output")

    let res = cryptoText("code", input.value)
    output.innerText = res
}
