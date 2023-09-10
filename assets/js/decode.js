let decode = window.document.getElementById("decode")
decode.addEventListener("click", decoding)

function decoding() {
    let input = window.document.getElementById("input")
    let output = window.document.getElementById("output")

    let res = cryptoText("decode", input.value)
    output.innerText = res
}
