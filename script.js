// Sample data array
const newsData = [
  {
    category: "ABHIJIT CHOWDHURI",
    title: "Studies COMPUTER ENGINEERING  in JADAVPUR UNIVERSITY",
    frontImg: "img/abhijit_img.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-2.avif",
    link: "#"
  },
  {
    category: "EMPLOYEE EXPERIENCE",
    title: "Designing inclusive workplace environments",
    frontImg: "img/sushovon_img.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-1.avif",
    link: "#"
  },
  {
    category: "CUSTOMER EXPERIENCE",
    title: "Turning feedback into meaningful action",
    frontImg: "img/kaku.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-2.avif",
    link: "#"
  },
  {
    category: "LEADERSHIP",
    title: "Five habits of highly effective team leaders",
    frontImg: "img/abhijit_img.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-1.avif",
    link: "#"
  },
  {
    category: "PRODUCTIVITY",
    title: "Streamline collaboration across global teams",
    frontImg: "img/abhijit_img.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-2.avif",
    link: "#"
  },
  {
    category: "EMPLOYEE EXPERIENCE",
    title: "Create a culture that supports every employee",
    frontImg: "img/abhijit_img.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-1.avif",
    link: "#"
  }
];

// Reference to the container
const cardsContainer = document.getElementById('newsCards');

// Generate cards dynamically
newsData.forEach((item, index) => {
  const card = document.createElement('li');
  card.className = `card ${index % 2 !== 0 ? 'card-even' : ''}`;

  card.innerHTML = `
    <article class="article">
      <header class="card-header">
        <hgroup class="hgroup">
          <p class="category">${item.category}</p>
          <h3 class="title">${item.title}</h3>
        </hgroup>
        <a href="${item.link}" class="link">
          Know More
          <span class="icon">
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </span>
        </a>
      </header>
      <div class="visual">
        <img src="${item.frontImg}" alt="${item.title}" width="142" height="200.49" class="img"/>
        <img src="${item.backImg}" alt="Blog post preview" width="142" height="200.49" class="img img-2"/>
      </div>
    </article>
  `;

  cardsContainer.appendChild(card);
});
