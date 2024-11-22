const darkModeToggle = document.getElementById('darkModeToggle');
const sections = document.querySelectorAll('.tskills, .education, .projects');

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=faa2d50&s=Mary Magdalene';

function callAPI() {
    
    fetch(API_URL)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        document.querySelector("#movie_id").innerHTML = json.Search[0].imdbID || 'N/A';
        document.querySelector("#movie_title").innerHTML = json.Search[0].Title || 'N/A';
        document.querySelector("#movie_year").innerHTML = json.Search[0].Year || 'N/A';
        document.querySelector("#movie_poster").innerHTML = `<img src="${json.Search[0].Poster || 'N/A'}" />`;
      })
      .catch(error => console.error('Error fetching the API:', error));
  }
  
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    
    // Save preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Apply dark mode on page load if enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    sections.forEach(section => section.classList.add('dark-mode'));
}

/* Navigate to https://www.omdbapi.com/ and get your own api key*/
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=faa2d50&s=Mary Magdalene';

function callAPI() {
    
    fetch(API_URL)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        document.querySelector("#movie_id").innerHTML = json.Search[0].imdbID || 'N/A';
        document.querySelector("#movie_title").innerHTML = json.Search[0].Title || 'N/A';
        document.querySelector("#movie_year").innerHTML = json.Search[0].Year || 'N/A';
        document.querySelector("#movie_poster").innerHTML = `<img src="${json.Search[0].Poster || 'N/A'}" />`;
      })
      .catch(error => console.error('Error fetching the API:', error));
  }
