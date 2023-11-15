import React from 'react';

const SearchResults = ({ weatherData }) => {
  return (
    <div className='bg-gray-100 flex flex-col flex-grow justify-center items-center m-2 p-2 border-2 border-black rounded-lg'>
      {weatherData ? (
        <div className='flex flex-col items-center justify-center w-full'>
          <h2 className='text-black font-bold text-5xl underline tracking-wider'>{weatherData.city.name}</h2>
          <h2 className='text-black font-bold text-6xl my-4'>{weatherData.list[0].main.temp}&deg;F</h2>
          <h2 className='text-black text-base'>{weatherData.list[0].wind.speed} MPH Wind</h2>
          <h2 className='text-black text-base'>{weatherData.list[0].main.humidity}% Humidity</h2>
          <span className='text-black font-bold text-lg'>L:{weatherData.list[0].main.temp_min}&deg; | H:{weatherData.list[0].main.temp_max}&deg;</span>
          {/* 5 day forcast */}
          <div className='mt-8 flex flex-col w-full'>
            <h2 className='ml-4 text-black font-bold text-3xl underline tracking-wider'>5 Day Forcast:</h2>
            <div className='flex flex-wrap justify-evenly'>
              {Array.isArray(weatherData.list) &&
                weatherData.list.map((_, index) => {
                  if ((index + 1) % 8 === 0) {
                    const timestamp = new Date(weatherData.list[index].dt * 1000);
                    const timeString = timestamp.toLocaleTimeString(undefined, { hour12: true });
                    const timeWithoutSeconds = timeString.slice(0, 5) + timeString.slice(8, 11);

                    return (
                      <div key={index}
                      className='bg-gray-400 mx-4 my-2 border-2 border-black flex flex-col justify-center items-center p-2'>
                        <div className='flex flex-row flex-nowrap'>
                          <h2 className='font-bold text-base mr-4 text-gray-100'>
                            {timestamp.toLocaleDateString()}
                          </h2>
                          <h2 className='font-bold text-base ml-4 text-gray-100'>
                            {timeWithoutSeconds}
                          </h2>
                        </div>
                        <h2 className='font-bold text-xl'>{weatherData.list[index].main.temp}&deg;F</h2>
                        <h2 className='font-bold text-xl mt-1'>{weatherData.list[index].wind.speed} MPH Wind</h2>
                        <h2 className='font-bold text-xl mt-1'>{weatherData.list[index].main.humidity}% Humidity</h2>
                        <h2 className='font-bold text-xl mt-1'>L:{weatherData.list[index].main.temp_min} | H:{weatherData.list[index].main.temp_max}</h2>
                      </div>
                    );
                  }
                  return null; // Skip other indices
                })}
            </div>
          </div>
        </div>
      ) : (
        <h2 className='text-black font-bold text-4xl'>No weather Data</h2>
      )}
    </div>
  );
};

export default SearchResults;