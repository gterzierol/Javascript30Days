const inputs = document.querySelectorAll("div input")

function updateHandler(){
    const addtoend = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value+addtoend);
    console.log(this.value)
    console.log(this.sizing)
}

inputs.forEach(input => input.addEventListener("change", updateHandler))
inputs.forEach(input => input.addEventListener("mousemove", updateHandler))


console.log(inputs);