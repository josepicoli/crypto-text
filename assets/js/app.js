// C == code
// D == decode

function cryptoText (m = "code", text) {

    const key = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '?']

    m.toLowerCase().trim()

    switch(m) {

    }

    function code(text) {
        let text_result = text

        text_result = text
        .replaceAll("a", key[0])
        .replaceAll("b", key[1])
        .replaceAll("c", key[2])
        .replaceAll("d", key[3])
        .replaceAll("e", key[4])
        .replaceAll("f", key[5])
        .replaceAll("g", key[6])
        .replaceAll("h", key[7])
        .replaceAll("i", key[8])
        .replaceAll("j", key[9])
        .replaceAll("k", key[10])
        .replaceAll("l", key[11])
        .replaceAll("m", key[12])
        .replaceAll("n", key[13])
        .replaceAll("o", key[14])
        .replaceAll("p", key[15])
        .replaceAll("q", key[16])
        .replaceAll("r", key[17])
        .replaceAll("s", key[18])
        .replaceAll("t", key[19])
        .replaceAll("u", key[20])
        .replaceAll("v", key[21])
        .replaceAll("w", key[22])
        .replaceAll("x", key[23])
        .replaceAll("y", key[24])
        .replaceAll("z", key[25])
        .replaceAll(" ", key[26])
    
        return text_result
    }
    
    function decode(text) {

        let text_result = text
    
        text_result = text
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
        .replaceAll("\\", "t")
        .replaceAll(";", "u")
        .replaceAll(":", "v")
        .replaceAll("'", "w")
        .replaceAll('"', "x")
        .replaceAll(",", "y")
        .replaceAll(".", "z")
        .replaceAll("?", " ")
    
        return text_result
    }
}
