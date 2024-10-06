# Animal Kingdom SPA

## Overview

**Animal Kingdom** is a Single-Page Application (SPA) built using **Vue.js**, **Vue Router**, and **Bootstrap**. It showcases various animals with descriptions and images, dynamically fetched from **API Ninjas** (for descriptions) and **Unsplash** (for images). The app provides users with a seamless experience to explore different animals, learn more about them, and navigate through various sections like Home, About Us, Animals, and Contact Us.

### Features

- **Home Page**: Features a carousel of animal images.
- **Animals List**: Displays a list of animals with descriptions and images. Clicking on "Learn More" navigates to an individual animal's detail page.
- **Individual Animal Pages**: Each animal has its own dedicated page with more detailed information.
- **About Us**: Provides information about the project and its goals.
- **Contact Us**: A simple contact form.

## Project Structure

animal-kingdom/
├── public/
│ ├── index.html # Main HTML file
│ └── assets/
│ └── css/
│ └── styles.css # Global styles
├── src/
│ ├── assets/
│ │ └── images/ # Placeholder for images (if any)
│ ├── components/
│ │ ├── AnimalList.vue # Animal List component (with links to detail pages)
│ │ ├── AnimalDetail.vue # Individual Animal Detail component
│ │ ├── Carousel.vue # Carousel component (for homepage)
│ │ ├── About.vue # About Us page
│ │ └── Contact.vue # Contact Us page (optional)
│ ├── router/
│ │ └── index.js # Vue Router configuration (routes for the app)
│ ├── App.vue # Main Vue component (layout)
│ ├── main.js # Main entry file for the Vue app
├── package.json # Dependencies (includes Bootstrap and Vue Router)
└── README.md # Project documentation

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/animal-kingdom-spa.git

   ```

2. Navigate into the project directory:

   ```bash
   cd animal-kingdom-spa
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run serve
   ```

5. Open your browser and go to `http://localhost:8080` to view the app.

## API Integration

### API Ninjas

- **Description API**: This app fetches animal descriptions from [API Ninjas](https://api-ninjas.com/api/animals).
- To use this API, get an API key from API Ninjas and replace `'YOUR_API_NINJAS_KEY'` in the `AnimalList.vue` and `AnimalDetail.vue` files.

### Unsplash API

- **Image API**: Animal images are fetched from [Unsplash](https://unsplash.com/developers).
- To use this API, get an API key from Unsplash and replace `'YOUR_UNSPLASH_ACCESS_KEY'` in the `AnimalList.vue` and `AnimalDetail.vue` files.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit pull requests.

---

Enjoy exploring the Animal Kingdom! 🦁🐅🐘
