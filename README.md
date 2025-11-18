<!-- Readme for our project -->
Anipat Care - Pet Care Portal
Welcome to FurEver Care, a Single Page Application (SPA) web application built with ReactJS. The project aims to provide a centralized platform for pet owners, veterinarians, and animal shelters to manage pet care and access useful resources.

📜 Introduction
    In modern life, pet care can become complicated. FurEver Care was created to solve this problem by providing a comprehensive solution where users can easily manage their pet's health information, discover recommended products, and connect with the animal-loving community.

✨ Key Features
    The project is divided into three main user flows, each with distinct functions:
    🐾 For Pet Owners
        ● Pet Care: Access static pet profiles, feeding guides, grooming videos, and helpful health tips.
        ● Product Showcase: Explore a list of pet essentials such as food, toys, and grooming supplies. Data is dynamically loaded from a JSON file.
        ● Emergency Support: Find emergency contact information for veterinarians.

⛑️ For Veterinarians
    ● Specialist Profile: Display static information about your veterinarian including name, specialty, and contact information.
    ● Appointment Calendar: View available and booked time slots (display only).
    ● Case Studies: Check out sample pet medical records.
🏡 For Animal Shelters
    ● Adoption Gallery: Displays a list of pets looking for homes with full information such as pictures, names, ages, and short descriptions.
    ● Smart Filters: Allows filtering of pets by species (dogs, cats, etc.) using client-side JavaScript.
    ● Success Stories: Read heartwarming stories about successful adoptions.
    ● Events & Contact: Updates on upcoming events and shelter contact information, Google Map integration.
General Pages
    ● About Us: Static information about the development team and project goals.
    ● Contact Us: Team contact information and directions map.
    ● Feedback: Form for users to submit feedback (interface only, no submission functionality).
🛠️ Technologies used
    The project is built with modern web technologies:
        ● IDE: Visual Studio Code
        ● Frontend: ReactJS, HTML5, CSS3, Bootstrap (optional)
        ● Data repository: Data is managed via static JSON files.
🚀 Getting Started

To run this project on your local machine, follow these steps:
  1. Clone a repository
  git clone [https://your-repository-url.git](https://your-repository-url.git)
  cd your-project-directory

  1. Install dependencies
  npm install

  1. Run the application
  npm start

Open http://localhost:3000 to see the application in your browser.
📁 Folder Structure
The project follows the standard folder structure of a React application:
/
├── public/
│ ├── index.html
│ ├── data/
| |  ├── shelter.json // Example data file
│ │  └──... 
│ ├── img/
│ └── ... // Static images
├── src/
│ ├── components/ // Reusable components
│ ├── pages/ // Components for each page
│ │ ├── Home.jsx
│ │ ├── Shelter.jsx
│ │ ├── Contact.jsx
│ │ ├── Feedback.jsx
│ │ ├── About.jsx
│ │ └── ...
│ ├── routes/
│ │ └── Routes.jsx // Route configuration
│ ├── App.js
│ └── index.js
├── package.json
└── README.md

⚠️ Project Limitations
    ● This is a client-side application.
    ● The project has no backend and does not store information on the server.
    ● All data is read from pre-filled .json files in the public/data folder. There is no functionality to write data from the user interface to these files.