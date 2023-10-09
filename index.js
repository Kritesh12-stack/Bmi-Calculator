const form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const results = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = "Enter Valid Value "
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = "Enter Valid Value "
    }else {
    const bmi = (weight/((height**2)/10000)).toFixed(2)

    results.innerHTML = `<span>${bmi}</span>`
        
    }
})