// Sample data array
const newsData = [
  {
    category: "ABHIJIT CHOWDHURI & SUSHOVON PALIT",
    title: "Studies COMPUTER ENGINEERING  in GOVT. COLLEGES",
    frontImg: "img/logo.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-2.avif",
    link: "#"
  },
  {
    category: "SUMIT KR. MONDAL & CHOWDHURI FARUK AHAMED",
    title: "EXCELLENT SCHOLER & M. Sc. in CHEMISTRY",
    frontImg: "img/logo.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-1.avif",
    link: "#"
  },
  {
    category: "MANOJ DAS & SOURISH CHATTERJEE",
    title: "EXCELLENT SCHOLER PLACED IN GOVT. COLLEGES",
    frontImg: "img/logo.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-2.avif",
    link: "#"
  },
  {
    category: "UJJWAL GHOSH & ROJIYARA KHATUN",
    title: "Achieved 461/500 in WBCHSE EXAM",
    frontImg: "img/logo.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-1.avif",
    link: "#"
  },
  {
    category: "SK JAMIRUL & AMINUL ISLAM",
    title: "ALUMANIES PLACED IN WORKING SECTORS",
    frontImg: "img/logo.jpg",
    backImg: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-carousel/images/back-2.avif",
    link: "#"
  },
  {
    category: "SAMADRITA HIMAKTAR",
    title: "COMPUTER ENGINEERING student & DEVELOPER of this WEBSITE",
    frontImg: "img/logo.jpg",
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

   // Placeholder for "icon" SVGs used in the original component
        const ClockIcon = `<svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
        const TrendingUpIcon = `<svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`;
        const DollarSignIcon = `<svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.114 0 2 .597 2 1.333a1.432 1.432 0 01-1.424 1.333H11.424A1.432 1.432 0 0110 9.333C10 8.597 10.886 8 12 8zm0 8c-1.114 0-2-.597-2-1.333a1.432 1.432 0 011.424-1.334h.152A1.432 1.432 0 0114 14.667c0 .736-.886 1.333-2 1.333z"></path></svg>`;

        // The data array, derived from the second part of your request
        const courses = [
            {
                title: "SCIENCE STREAM",
                description: "Comprehensive coverage of all Science subjects for the Higher Secondary curriculum.",
                image: "img/science_img.jpg",
                duration: "2 years (4 Semesters)",
                level: "GOVT. SCHOOL", 
                price: "Enquire for Fees",
                info: "Approved by: GOVT. SCHOOL",
                know_more_link: "know_more.html",
                apply_now_link: "https://docs.google.com/forms/d/e/1FAIpQLScRCChpDDyyWDhfD04yGJUAKwvgpVtlwE-_h_b8ZNIUkzYdWg/viewform?usp=dialog"
            },
            {
                title: "ENTRANCE PREPARATION",
                description: "Targeted coaching for competitive exams like JEE, NEET, Paramedicals, and all other major entrance tests.",
                image: "img/entrance_img.jpg",
                duration: "Flexible",
                level: "JEE/NEET", 
                price: "Variable",
                info: "JEE/NEET/PARAMEDICALS & all other exams are considered",
                know_more_link: "know_more.html",
                apply_now_link: "https://docs.google.com/forms/d/e/1FAIpQLScRCChpDDyyWDhfD04yGJUAKwvgpVtlwE-_h_b8ZNIUkzYdWg/viewform?usp=dialog"
            },
            {
                title: "ARTS STREAM",
                description: "In-depth studies for various subjects within the Arts/Humanities stream for Higher Secondary.",
                image: "img/arts_img.jpg",
                duration: "2 years (4 Semesters)",
                level: "GOVT. SCHOOL", 
                price: "Enquire for Fees",
                info: "Approved by: GOVT. SCHOOL",
                know_more_link: "know_more.html",
                apply_now_link: "https://docs.google.com/forms/d/e/1FAIpQLScRCChpDDyyWDhfD04yGJUAKwvgpVtlwE-_h_b8ZNIUkzYdWg/viewform?usp=dialog"
            }
        ];

        // Function to generate the HTML for a single course card
        const createCourseCard = (course) => {
            return `
                <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                    <div class="relative h-48 overflow-hidden">
                        <img
                            src="${course.image}"
                            alt="${course.title}"
                            class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div class="absolute top-4 right-4">
                            <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                ${course.level}
                            </span>
                        </div>
                    </div>

                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">
                            ${course.title}
                        </h3>
                        <p class="text-slate-600 mb-4 leading-relaxed">
                            ${course.description}
                        </p>

                        <div class="space-y-2 mb-4">
                            <div class="flex items-center text-slate-600">
                                ${ClockIcon}
                                <span class="text-sm">${course.duration}</span>
                            </div>
                            <div class="flex items-center text-slate-600">
                                ${TrendingUpIcon}
                                <span class="text-sm">${course.info}</span>
                            </div>
                            <div class="flex items-center text-slate-600">
                                ${DollarSignIcon}
                                <span class="text-sm font-semibold">${course.price}</span>
                            </div>
                        </div>

                        <div class="flex space-x-4">
                            <a href="${course.know_more_link}" class="flex-1">
                                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                    Know More
                                </button>
                            </a>
                            <a href="${course.apply_now_link}" class="flex-1">
                                <button class="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-semibold transition-colors duration-300">
                                    Apply Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        };

        // Function to render the entire section
        const renderCoursesSection = () => {
            const courseCardsHtml = courses.map(createCourseCard).join('');

            const sectionHtml = `
                <section id="courses" class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h1 class="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2">
                                HIGHER SECONDARY(10+2) & JEE/NEET
                            </h1>
                            <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                Our Courses
                            </h2>
                            <div class="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
                                Discover our comprehensive range of programs designed to prepare you for success in the modern world
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${courseCardsHtml}
                        </div>
                    </div>
                </section>
            `;

            // Inject the generated HTML into the root element
            document.getElementById('courses-root').innerHTML = sectionHtml;
        };

        // Execute the render function when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', renderCoursesSection);