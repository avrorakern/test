import './indicators.css'

function Indicators() {
    function loadData() {
        fetch('http://dushnila.gooddelo.com/data')
            .then((data) => data.json())
            .then((data) => {
                let gradient1 = 'background: linear-gradient(126deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 255, 87, 0.60) 100%);'
                let gradient2 = 'background: linear-gradient(126deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 138, 122, 0.60) 100%);'
                let co21 = data.co2;
                let temp1 = data.temp;
                let co2 = document.querySelector('.indicators__press');
                let temp = document.querySelector('.indicators__temp');
                let indicators = document.querySelector('.indicators');
                co2.innerHTML = co21 + ' ppm';
                temp.innerHTML = temp1 + ' ℃';
                function checkCO2AndTemperature() {
                    let cap = document.querySelector('.dushnila__cap');
                    let text = document.querySelector('.dushnila__text');
                    let dushnila = document.querySelector('.dushnila');
                    if (co21 <= 800 && temp1 <= 27) {
                        cap.innerHTML = 'Душнила доволен вами';
                        text.innerHTML = 'Все показатели в норме';
                        indicators.style.cssText = gradient1;
                        dushnila.style.background = '#7AFFA7';
                    } else if (co21 > 800 && temp1 <= 27) {
                        cap.innerHTML = 'Душнила не доволен вами';
                        text.innerHTML = 'CO2 превышает норму';
                        indicators.style.cssText = gradient2;
                        dushnila.style.background = '#FF8A7A';
                    } else if (co21 <= 800 && temp1 > 27) {
                        cap.innerHTML = 'Душнила не доволен вами';
                        text.innerHTML = 'Температура превышает норму';
                        indicators.style.cssText = gradient2;
                        dushnila.style.background = '#FF8A7A';
                    } else if (co21 > 800 && temp1 > 27) {
                        cap.innerHTML = 'Душнила не доволен вами';
                        text.innerHTML = 'Температура и CO2 превышают норму';
                        indicators.style.cssText = gradient2;
                        dushnila.style.background = '#FF8A7A';
                    }
                };
                checkCO2AndTemperature();
                setInterval(checkCO2AndTemperature, 60000);
            })
    }
    loadData();
    setInterval(loadData, 60000);
    return (
        <div className="indicators">
            <div className='indicators_wrapper'>
                <p className='indicators__temp'>
                </p>
                <p className='indicators__text'>
                    Температура
                </p>
            </div>
            <div className='indicators_wrapper'>
                <p className='indicators__press'>
                </p>
                <p className='indicators__text'>
                    CO2
                </p>
            </div>
        </div>
    )
}

export default Indicators;