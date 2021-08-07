let changeDataPlaces = (date) => date = date.split('-').reverse().join('.');

res = changeDataPlaces('2020-11-26');

console.log(res);

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const placeInfo = (dataName) => {
  const regexp = new RegExp(dataName, 'igm');

  return data.filter((dataInfo) =>{
    if(regexp.test(dataInfo.country + dataInfo.city + dataInfo.hotel)){
      return `country: ${dataInfo.country}, city: ${dataInfo.city}, hotel: ${dataInfo.hotel}` || 'no info';
    }
  }); 
}

console.log(placeInfo('Germany'));
console.log(placeInfo('Anapa'));