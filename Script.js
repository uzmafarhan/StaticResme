var _a, _b, _c;

var educationData = [
       {
        diploma: "Cloud Applied Generative AI Engineer",
        institution: "Presidential Initiative For Artificial Intelligence and Computing",
        year: "2024",
    },
];

var educationData2 = [
    {
        bachelors: "D.H.M.S from Pakistan Central Homeoepathic College Karachi 2004-2007 ",
        intermediate: "Bord of Intermediate Education Karachi 2002-2004",
        metriculation: "Bord of Secondry Education Karachi 2002",
    },
    
];

var skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
];

var workExperienceData = [
    {
        position: "Frontend Developer",
        company: "Young Dev",
        years: "2023 - 2024",
        description: "Developed responsive web applications, enhanced user interfaces, and optimized performance.",
    },
];

function populateEducation() {

    var educationSection = document.getElementById("education-content")?.querySelector(".card-grid");
    
    if (educationSection) {
        educationData.forEach(function (edu) {
            var educationCard = document.createElement("div");
            educationCard.classList.add("card", "education-card");
            educationCard.innerHTML = `
                <h3 class="card-title">${edu.diploma}</h3>
                <p class="card-subtitle">${edu.institution}</p>
                <p class="card-details">${edu.year}</p>
            `;
            educationSection.appendChild(educationCard);
        });
    } else {
        console.error("Could not find education content section");
    }





    var educationSection = document.getElementById("education-content")?.querySelector(".card-grid");
    
    if (educationSection) {
        educationData2.forEach(function (edu) {
            var educationCard = document.createElement("div");
            educationCard.classList.add("card", "education-card");
            educationCard.innerHTML = `
                <h3 class="card-title">${edu.bachelors}</h3>
                <h3 class="card-subtitle">${edu.intermediate}</h3>
                <h3 class="card-details">${edu.metriculation}</h3>
            `;
            educationSection.appendChild(educationCard);
        });
    } else {
        console.error("Could not find education content section");
    }





}

function populateSkills() {
    var skillsSection = document.getElementById("skills-content")?.querySelector(".skill-list");
    if (skillsSection) {
        skillsData.forEach(function (skill) {
            var skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsSection.appendChild(skillItem);
        });
    } else {
        console.error("Could not find skills content section");
    }
}

function populateWorkExperience() {
    var workExperienceSection = document.getElementById("work-experience-content")?.querySelector(".card-grid");
    if (workExperienceSection) {
        workExperienceData.forEach(function (work) {
            var workCard = document.createElement("div");
            workCard.classList.add("card", "work-experience-card");
            workCard.innerHTML = `
                <h3 class="card-title">${work.position}</h3>
                <p class="card-subtitle">${work.company}</p>
                <p class="card-details">${work.years}</p>
                <p class="card-details">${work.description}</p>
            `;
            workExperienceSection.appendChild(workCard);
        });
    } else {
        console.error("Could not find work experience content section");
    }
}

function activateTab(tabId) {
    var sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) { 
        section.classList.remove("active"); 
    });
    var activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add("active");
    } else {
        console.error(`Tab with ID ${tabId} not found`);
    }
}

// Check if the tab elements are available and add event listeners
(_a = document.getElementById("education-tab"))?.addEventListener("click", function () { 
    activateTab("education-content"); 
});
(_b = document.getElementById("skills-tab"))?.addEventListener("click", function () { 
    activateTab("skills-content"); 
});
(_c = document.getElementById("experience-tab"))?.addEventListener("click", function () { 
    activateTab("work-experience-content"); 
});

// Initialize content
populateEducation();
populateSkills();
populateWorkExperience();