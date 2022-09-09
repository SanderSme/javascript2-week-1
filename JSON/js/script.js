const myCountry = {
  country: "Norway",
  city: "Oslo",
  currency: "Krone",
};

//convert object(JS) to JSON:
const myCountryJSON = JSON.stringify(myCountry);
console.log("myCountry JSON format: ", myCountryJSON);

//Convert back to object(JS):
const myCountryJS = JSON.parse(myCountryJSON);
console.log("myCountry JS format: ", myCountryJS);

const userInfoJSON = '{"name":"Sander","age":27,"isStudent":true }';
console.log("userInfo JSON format: ", userInfoJSON);
const userInfoJS = JSON.parse(userInfoJSON);
console.log("userInfo JS format: ", userInfoJS);
