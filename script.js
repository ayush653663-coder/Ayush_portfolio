const icons = document.querySelectorAll(".skill-icons img")

icons.forEach(icon => {

icon.addEventListener("mouseover", () => {

icon.style.transform = "scale(1.3)"

})

icon.addEventListener("mouseleave", () => {

icon.style.transform = "scale(1)"

})

})