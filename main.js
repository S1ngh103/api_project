function queryKey() {
  const apiKey = document.getElementById('apiKey').value;

  if (apiKey.trim() !== '') {
    console.log('API Key:', apiKey);

    // hide the form and go to next page

  } else {
    // Inform the user that the API key is required
    alert('Please enter your API key.');
  }
}

// Next page
// Format super heros