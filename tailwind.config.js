/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            'hero': "url('/src/assets/hero-min.jpg')",
            'bankruptcy': "url('/src/assets/bankruptcy-min.jpg')",
            'client': "url('/src/assets/client-min.jpg')",
            'criminal': "url('/src/assets/criminal-min.jpg')",
            'divorce': "url('/src/assets/divorce-min.jpg')",
            'footer': "url('/src/assets/footer-min.jpg')",
            'immigration': "url('/src/assets/immigration-min.jpg')",
            'mission': "url('/src/assets/mission-min.jpg')",
            'story': "url('/src/assets/story-min.jpg')",
            'team': "url('/src/assets/team-min.jpg')",
          }
      },
    },
    plugins: [],
  }