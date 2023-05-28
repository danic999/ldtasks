function getGeolocation() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const userIP = data.ip;
        const apiKey = 'fbfe1fef0361480562666ea3c2d6b6eb';
  
        fetch(`http://api.ipstack.com/${userIP}?access_key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            const country = data.country_name;
  
            sessionStorage.setItem('country', country);
              document.getElementById('countryName').textContent = country;
          })
          .catch(error => {
            console.log('Došlo je do pogreške pri dohvaćanju podataka o geolokaciji:', error);
          });
      })
      .catch(error => {
        console.log('Došlo je do pogreške pri dohvaćanju IP adrese:', error);
      });
  }
  window.addEventListener('load', getGeolocation);

  
