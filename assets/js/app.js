function cryptoText (mode = "code", text) {

    mode = mode.toLowerCase().trim()
    text = text.toLowerCase().trim()

    switch(mode) {
        case "code":
            return code(text)
            break
        case "decode":
            return decode(text)
            break
        default:
            return console.log("ERRO")
            break
        }
}

function code(text) {
    text = text
    .replaceAll("a", "!")
    .replaceAll("b", "@")
    .replaceAll("c", "#")
    .replaceAll("d", "$")
    .replaceAll("e", "%")
    .replaceAll("f", "^")
    .replaceAll("g", "&")
    .replaceAll("h", "*")
    .replaceAll("i", "(")
    .replaceAll("j", ")")
    .replaceAll("k", "-")
    .replaceAll("l", "_")
    .replaceAll("m", "+")
    .replaceAll("n", "=")
    .replaceAll("o", "[")
    .replaceAll("p", "]")
    .replaceAll("q", "{")
    .replaceAll("r", "}")
    .replaceAll("s", "|")
    .replaceAll("t", "§")
    .replaceAll("u", ";")
    .replaceAll("v", ":")
    .replaceAll("w", "ª")
    .replaceAll("x", "º")
    .replaceAll("y", ",")
    .replaceAll("z", ".")
    return text
}
    
function decode(text) {
    text = text
    .replaceAll("!", "a")
    .replaceAll("@", "b")
    .replaceAll("#", "c")
    .replaceAll("$", "d")
    .replaceAll("%", "e")
    .replaceAll("^", "f")
    .replaceAll("&", "g")
    .replaceAll("*", "h")
    .replaceAll("(", "i")
    .replaceAll(")", "j")
    .replaceAll("-", "k")
    .replaceAll("_", "l")
    .replaceAll("+", "m")
    .replaceAll("=", "n")
    .replaceAll("[", "o")
    .replaceAll("]", "p")
    .replaceAll("{", "q")
    .replaceAll("}", "r")
    .replaceAll("|", "s")
    .replaceAll("§", "t")
    .replaceAll(";", "u")
    .replaceAll(":", "v")
    .replaceAll("ª", "w")
    .replaceAll('º', "x")
    .replaceAll(",", "y")
    .replaceAll(".", "z")
    return text
}
