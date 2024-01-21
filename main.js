let apiKey;

function queryKey() {
  const userKey = document.getElementById('apiKey').value;
  apiKey = userKey;
  if (apiKey.trim() !== '') {
    // Hide APIKey Form
    var apiForm = document.getElementById('APIForm');
    apiForm.style.display = 'none';
    
    // Reveal ID Form
    var idForm = document.getElementById('IDForm');
    idForm.style.display = 'block';
  } else {
    // Empty key checking
    alert('Please enter your API key.');
  }
}

function queryID() {
  const id = document.getElementById('ID').value;
  if (id.trim() !== '') {
    console.log(id);
  } else {
    alert('Please enter your API key.');
    return;
  }

  var url = `http://localhost:3000/superhero/${apiKey}/${id}`;
  console.log(`id is ${id}`);
  fetch(url, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network did not respond!');
      }
      return response.json();  // Parse the response as JSON
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error in fetch operation:', error.message);
    });
}