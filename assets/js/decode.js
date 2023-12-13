let decodeButton = window.document.getElementById("decode")
decodeButton.addEventListener("click", decoding)

function decoding() {
    let input = window.document.getElementById("input")
    let output = window.document.getElementById("output")

    let res = cryptoText("decode", input.value)
    output.innerText = res
}
