// Projects data
const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my web development skills.",
      image: "images/portfolio.jpg",
      link: "https://yourportfolio.com"
    },
    {
      title: "Weather App",
      description: "A live weather forecasting app built with JavaScript and API data.",
      image: "images/weather.jpg",
      link: "https://yourweatherapp.com"
    },
    {
      title: "Game Project",
      description: "A fun browser-based game made using HTML, CSS, and JavaScript.",
      image: "images/game.jpg",
      link: "https://yourgameproject.com"
    }
  ];
  
  // Select container
  const container = document.getElementById("projectsContainer");
  
  // Dynamically create project cards
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
  
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
  
    container.appendChild(card);
  });
  