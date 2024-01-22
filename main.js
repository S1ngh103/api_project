let apiKey;
const usedIDs = [];

const cardTemplate = (data) => `
  <img style='width:100px' src=${data.image.url}></img>
  <p>
  Hero ID: ${data.id}<br>
  Hero Name: ${data.name}<br>
  Alias: ${data.biography['full-name']}<br>
  Gender: ${data.appearance.gender}<br>
  Strength: ${data.powerstats.strength}<br>
  Alignment: ${data.biography.alignment}<br>
  Comic Debut: ${data.biography['first-appearance']}
  </p>
`;

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
    if(usedIDs.includes(id)){
      alert('That hero is already implemented');
      return;
    }else{
      usedIDs.push(id);
    }
  } else {
    alert('Please enter an ID.');
    return;
  }

  var url = `http://localhost:3000/superhero/${apiKey}/${id}`;
  fetch(url, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network did not respond!');
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);
      createCard(data, id);
    })
    .catch(error => {
      console.error('Error in fetch operation:', error.message);
    });  
}

function createCard(data, id){
  const container = document.getElementById('card-container');
  console.log('hi');
  console.log(data.name);

  var card = document.createElement("div");
  card.className = 'card';
  card.id = id;
  card.innerHTML = cardTemplate(data);
  container.append(card);
}