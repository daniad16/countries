
const apiUrl='https://restcountries.com/v3.1/name/'
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');

async function getCountryDetails(country){
    const response = await fetch(apiUrl + country)
    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.country').style.display='none';
    }else{
        var data = await response.json();
        console.log(data);
        document.querySelector('.country-icon').src=data[0].flags.png;
        document.querySelector('.country-name').innerHTML=data[0].name.common;
        document.querySelector('.capital').innerHTML=data[0].capital;
        document.querySelector('.population').innerHTML=data[0].population +' person';
        document.querySelector('.area').innerHTML=data[0].area + ' km^2';
    
        document.querySelector('.country').style.display='block';
        document.querySelector('.error').style.display='none';
    }
   
}
searchBtn.addEventListener('click',()=>{
    getCountryDetails(searchBox.value);
})
