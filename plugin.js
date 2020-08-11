const myInputs = document.querySelectorAll('.controls input');


// creating a function to get us the value while changing
function getUpdate() {
    // empty string refers to spmething empty like color which has no pixels
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

// using forEach to loop in the nodelist , then calling the callback function
myInputs.forEach(input => input.addEventListener('change', getUpdate));

myInputs.forEach(input => input.addEventListener('mousemove', getUpdate));
