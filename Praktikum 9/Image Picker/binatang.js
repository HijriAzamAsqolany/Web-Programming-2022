const hs = document.getElementById("hasil")
const binatang = document.getElementById("binatang")
function imageBinatang() {
    if (binatang.value == "k") {
        return hs.src = "kucing.png"
    } else if (binatang.value == "g") {
        return hs.src = "gorila.png"
    } else if (binatang.value == "a") {
        return hs.src = "kelinci.png"
    } else if (binatang.value == "e") {
        return hs.src = "kambing.png"
    } else {
        return hs.src = "rusa.png"
    }
}
function imageConfirmation() {
    alert(hs.src)
}