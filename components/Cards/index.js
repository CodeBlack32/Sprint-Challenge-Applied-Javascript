// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContain = document.querySelector('.cards-container');


function articleCard ({headline, authorPhoto, authorName}) {
  const card = document.createElement('div');
  const headlineEl = document.createElement('div');
  const authorEl = document.createElement('div');
  const imgDiv = document.createElement('div');
  const image = document.createElement('img');
  const authorsName = document.createElement('span');
 

  headlineEl.textContent = headline;
  image.src = authorPhoto;
  authorsName.textContent = authorName;
  


  //classlist
  card.classList.add('card');
  headlineEl.classList.add('headline');
  authorEl.classList.add('author');
  imgDiv.classList.add('img-container');

  //appends
  card.appendChild(headlineEl);
  card.appendChild(authorEl);
  authorEl.appendChild(imgDiv);
  imgDiv.appendChild(image);
  authorEl.appendChild(authorName);

  console.log(articleCard);
  
  return articleCard;
}



axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
   .then((res) => {
    const data = res.data.articles;
    data.forEach(function(article) {
        .get(article)
        .then()
    });
        console.log(data)
    });
