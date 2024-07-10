document.getElementById('search_btn').addEventListener('click', function() {
    const city = document.getElementById('input_city').value;
    const apiKey = '70d14786d6be4823855204812241007'; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found');
                return;
            }
            document.getElementById('city_name').innerText = data.location.name;
            document.getElementById('weather_description').innerText = data.current.condition.text;
            document.getElementById('weather_img').src = `https:${data.current.condition.icon}`;
            document.getElementById('temperature').innerText = `${data.current.temp_c}°C`;
            document.getElementById('min_temp').innerText = `Min: ${data.current.temp_c}°C`; 
            document.getElementById('max_temp').innerText = `Max: ${data.current.temp_c}°C`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
        document.getElementById('input_city').value = "";
});
