const key = "b64O0o99kLQxUXorCdYksvrohh8O7gJM";


const getWeatherCondition = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/"

    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query);

    const data = await response.json();

    // console.log(data);

    return data[0];

}


const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";

    const query = `?apikey=${key}&q=${city}`

    const res = await fetch(base + query);
    
    const data = await res.json();

    // console.log(data);

    return data[0];
}

// getCity("Chennai")
// .then(data => {
//     return getWeatherCondition(data.Key)
// }).then(data =>{
//     console.log(data)
// })
// .catch(err => console.log(err))


// getWeatherCondition("186818")