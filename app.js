 
    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';  // Interesting stuff
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); ///NB useful in the future
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  
