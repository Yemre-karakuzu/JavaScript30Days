const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs[0].forEach(input => input.addEventListener('change', handleUpdate));
inputs[0].forEach(input => input.addEventListener('mousemove', handleUpdate));