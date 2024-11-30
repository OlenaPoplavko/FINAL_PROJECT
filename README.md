# Weather Cat App

## 📖 Description
**Weather Cat App** is a web application that allows users to check the current weather in any city. Depending on the weather conditions, the app displays a corresponding cat image, making the experience more friendly and fun.

The project was designed as part of a learning program to practice web development skills, focusing on JavaScript, CSS, and API integration.

---

## 💡 Why This Project?
I chose this project because it combines technical learning with creativity. It allowed me to:
1. Practice working with APIs to fetch real-time data.
2. Improve my JavaScript and CSS skills by building interactive and responsive components.
3. Add a fun, personal touch with dynamic cat images, making the app both functional and enjoyable for users.

This project also felt manageable for my current skill level while still providing room for growth and learning.

---

## 🚀 Key Features
1. Users enter the name of a city.
2. The app sends a request to the OpenWeather API and retrieves:
   - The current temperature.
   - A description of the weather conditions.
3. The app displays:
   - Weather information.
   - A cat image matching the weather description.

---

## 🛠️ Technologies Used
### **CSS**
- Styling for the application, including responsive design.
- Font integration using Google Fonts.

### **JavaScript**
- Application logic:
  - Fetching data from the OpenWeather API using `async/await`.
  - DOM manipulation to dynamically display weather data.
  - Dynamic selection of cat images based on weather conditions.

---

## 🔗 Data, Image, and Information Sources
### **Weather Data**
1. **OpenWeather API**:
   - Used to retrieve current weather data.
   - [OpenWeather API Documentation](https://openweathermap.org/api)

### **Cat Images**
- [animals.pibig.info](https://animals.pibig.info)
- [cojo.ru](https://cojo.ru)
- [koshka.top](https://koshka.top)
- [i.pinimg.com](https://i.pinimg.com)

### **Learning Resources**
1. **Documentation and Tutorials**:
   - [MDN Web Docs](https://developer.mozilla.org): Comprehensive documentation on HTML, CSS, and JavaScript.
   - [W3Schools](https://www.w3schools.com/): Tutorials for learning web development basics.
   - [freeCodeCamp](https://www.freecodecamp.org/): Interactive coding lessons and projects.
   - [Khan Academy](https://www.khanacademy.org/): Free coding lessons and exercises.
   - [JavaScript.info](https://javascript.info): Detailed tutorials on JavaScript.

2. **REDI School Presentations**:
   - HTML/CSS basics, including structured content and styling techniques.
   - **Responsive Design:** Focused on creating adaptable layouts for various screen sizes and devices.
   - JavaScript fundamentals, including DOM manipulation and best practices for interactivity.
   - API integration and practical examples of working with external data.

3. **YouTube Channels**:
   - **English**:
     - [The Net Ninja](https://www.youtube.com/c/TheNetNinja): Comprehensive tutorials on JavaScript and web development.
     - [Traversy Media](https://www.youtube.com/c/TraversyMedia): Tips, tricks, and full-stack tutorials.
     - [Programming with Mosh](https://www.youtube.com/c/programmingwithmosh): Beginner-friendly guides for JavaScript and other languages.
     - [freeCodeCamp](https://www.youtube.com/freecodecamp): Coding tutorials on various topics.

   - **Ukrainian and Russian**:
     - [ITVDN](https://www.youtube.com/c/ITVDN): Tutorials on programming, including JavaScript and web development.
     - [Хауди Хо™](https://www.youtube.com/c/HowdyhoNet): Entertaining and educational programming videos.
     - [Фрилансер по жизни](https://www.youtube.com/c/freelancerlifestyle): Guides for beginners in web development.
     - [АйТи Борода](https://www.youtube.com/c/itbeard): Insights into IT careers and coding tutorials.
     - [Simple Code](https://www.youtube.com/c/SimpleCodeMedia): Practical web development tutorials.

---

## ✨ AI Assistance
This project was partially developed with assistance from ChatGPT. Specifically:
- **Debugging**: ChatGPT helped identify and resolve issues in JavaScript and CSS.
- **Brainstorming**: AI suggested improvements for structure and logic flow.
- **Learning**: Used as a resource for understanding best practices and code optimization.

### README File Creation
This README file was created and formatted with the assistance of ChatGPT to ensure clarity, proper structure, and compliance with project requirements.

---

## 📋 Development Stages

### **1. First Version: Static Data with Alerts**
- Weather data was hardcoded.
- Results were displayed using `alert` for simplicity.
- **Limitations**: Data was static, and the user interface was minimal.

### **2. Second Version: User Input with `prompt`**
- A `prompt` was added to allow the user to enter the name of a city through a popup input field.
- The app compared the input city name with a pre-defined list of cities in the code and returned weather data using `alert`.
- **Limitations**: 
  - The data was still static and limited to a small set of cities.
  - The user interface remained minimal with no dynamic content on the page.

### **3. Third Version: API Integration**
- Real-time weather data is dynamically fetched using the OpenWeather API.
- Results are displayed on the web page through DOM manipulation.
- Cat images corresponding to weather descriptions were added.
- **Advantages**: Real-time data, dynamic content, and improved user experience.

---

## 📝 Ideas for Future Improvements
1. Add a weather forecast for several days.
2. Expand the list of weather descriptions for more cat image variety.
3. Allow users to select a favorite weather condition and see a corresponding cat image.
4. Add basic animations for better user experience (e.g., fading in images or sliding transitions).

---

## 📋 Project Structure
```plaintext
/
├── index.html         # Main HTML file
├── style.css          # Styling
├── script.js          # JavaScript logic
├── README.md          # Project description

📧 Contact
If you have any questions or suggestions, feel free to contact me:

Email: alonaforce@gmail.com
GitHub: https://github.com/OlenaPoplavko

🌟 Acknowledgments
Special thanks to:

- REDI School for guidance and support during the learning process.
- To all the teachers at REDI School for their time, dedication, and incredible motivation. Your passion for teaching has made learning not only engaging but also inspiring. Thank you for fostering a positive, supportive, and dynamic environment that encouraged me to explore my creativity and build this project.
