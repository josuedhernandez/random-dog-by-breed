function getDogImage(breed) {
    let endpoint = 'https://dog.ceo/api/breed/' + breed + '/images/random';
    fetch(endpoint)
      .then(response => response.json())
      // Check response
      .then(responseJson => responseJson.status == 'success' ? 
      displayResults(responseJson) : handlResponseError(responseJson.message))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
function handlResponseError(message) {
  // Handle error when API responds but not value found for query
  console.log(message);
  alert(`Error: ${message}`);
}

function creteHtmlImg(path) {
      // Create image element html string.
      return `<img src="${path}" class="results-img">`
}

  function displayResults(responseJson) {
    //replace the existing image with the new one
    let array_response = responseJson.message;
    console.log(array_response);
    let htmlString = creteHtmlImg(array_response);
    // Clear elements in case there was something there
    $('.pictures-results').empty();
    // Create one html string
    $('.pictures-results').append(htmlString);
    //display the results section
    $('.results').removeClass('hidden');
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let breed_name = $('#breed').val();
      getDogImage(breed_name);
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });