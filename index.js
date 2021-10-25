console.log("This is my index js file");

// Initialize the news api parameters 
let source = 'bbc-news';
let apiKey = 'ae86c5f23dfc4ceab7b36fbfcabfcdf5'

// grabs the news container
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index){            
            let news = ` <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
               <b>Breaking News ${index+1}: </b> 
                ${element["title"]}
              </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse " aria-labelledby="flush-heading${index}" data-bs-parent="newsAccordion">
              <div class="accordion-body"> ${element["description"]}. <a href="${element["url"]}" target="_blank">Read more here </a></div>
            </div>
          </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();


