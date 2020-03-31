(function () {
    const apiKey = 'af588ac18f73c1ee8e2ddbd115f8ffe3';
    const location = 'Brasov,ro';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    let tempInC;
    let tempInF;

    fetch(url)
        .then((res) => res.json())
        .then(temp);


    function temp(data) {
        let temp;
        tempInC = Number(data.main.temp - 273.15).toFixed(1) + '\xB0 C';
        tempInF =  Number((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + '\xB0 F';

        if(localStorage) {
            temp = localStorage.getItem('temp');
        } else {
            document.cookie.split('=')[1];
        }

        const span = document.querySelector('[data-temp]');
        span.innerHTML = temp === 'celsius' ? tempInC : tempInF
    }

    document.addEventListener('change', handleUnitChange);

    function handleUnitChange(e) {
        if(e.target.name === 'temp') {
            console.log(e.target.value);
            const span = document.querySelector('[data-temp]');
            span.innerHTML = e.target.value === 'celsius' ? tempInC : tempInF

            if(localStorage) {
                localStorage.setItem('temp', e.target.value);
            } else {
                document.cookie = 'temp=' + e.target.value;
            }
        }
    }

})();


(function() {
    let temp;
    if(localStorage) {
        temp = localStorage.getItem('temp');
    } else {
        document.cookie.split('=')[1];
    }

    if(temp) { 
        console.log(temp);
        document.querySelector('#' + temp).setAttribute('checked', true);
        
    }
})();


