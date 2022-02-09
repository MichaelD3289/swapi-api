const resBtn = document.querySelector('button');

const baseUrl = 'https://swapi.dev/api/';
const div = document.querySelector('div');

const buttonClicked = () => {
  
  console.log('button clicked');

  axios
  .get(`${baseUrl}planets?search=alder`)
  .then((res) => res.data.results[0].residents.forEach(elem => {
    console.log(String(elem))
    axios
    .get(String(elem))
    .then(res => {
      const newh2 = document.createElement('h2');
      
      newh2.textContent = res.data.name;
      console.log(newh2, res.data.name);
      div.appendChild(newh2);
    })
  }
  )
  )
};

resBtn.addEventListener('click', buttonClicked);