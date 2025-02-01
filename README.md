
# LinkedIn Clone - Full-Stack Professional Networking Platform

Welcome to my **LinkedIn Clone** project! This dynamic, full-stack professional networking platform mimics key features of LinkedIn, built using **React**, **TypeScript**, **Vite**, **React Router**, and **Tailwind CSS**. It includes functionalities such as **user authentication**, **profile management**, **post creation**, **job listings**, and more, providing a seamless and engaging user experience.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://your-build-link)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)](https://www.typescriptlang.org/)
[![Version](https://img.shields.io/badge/version-0.0.0-blue)](https://github.com/saddamarbaa/LinkedIn-clone-app-react-typescript/releases)
[![Last Commit](https://img.shields.io/github/last-commit/saddamarbaa/LinkedIn-clone-app-react-typescript)](https://github.com/saddamarbaa/LinkedIn-clone-app-react-typescript/commits/main)



---

## ✨ Features

### Core Features:
- **User Authentication**: Secure user sign-up and login functionality using **email & password** or **OAuth (Google)**.
- **Shimmer UI**: Loading placeholders for a smoother user experience during data fetching.
- **Responsive Design**: Fully responsive UI optimized for both desktop and mobile devices.
- **User Profiles**: View and edit personal profiles, showcasing professional details like job title, education, and work experience.
- **Create and Manage Posts**: Users can create posts, add comments, like posts, and view post interactions such as the number of views.
- **Delete Posts (To Be Implemented)**: Users will soon be able to delete their own posts.
- **Network Page**: View your network and connections in a dedicated network page.
- **Notifications**: Stay updated with new notifications on the notifications page.
- **Jobs Section**: Explore job listings and apply for jobs directly from the platform.
- **Connections**: Manage connections, see who is in your network, and connect with others.
- **Dark/Light Mode**: Toggle between dark and light mode for a personalized user experience.
- **Loading Skeleton**: Improved page loading experience with a skeleton loader for smoother transitions during data fetches.

### Planned Features:
- **Delete Posts**: The ability to delete posts is in the pipeline.
- **Skills Endorsements**: Endorse the skills of your connections to boost their credibility.
- **Profile Analytics**: View who has visited your profile and track the performance of your posts.
- **Advanced Search**: Search for people, companies, and jobs with advanced filters.
- **Real-Time Messaging**: Chat with connections through real-time messaging (WebSocket integration planned).

### Bonus Features:
- **Optimized Performance**: Enhanced loading performance and interaction for a smooth user experience.
- **Responsive Design**: Fully responsive UI, optimized for both desktop and mobile devices, ensuring seamless experience across platforms.

---

## 🚀 Live Demo

You can check out the live demo of the LinkedIn Clone project at: [Live Demo](https://linkedin-clone-app-react-typescript.vercel.app/)


## 📸 Screenshots

### Responsive on large screens - Home Page

![image](https://user-images.githubusercontent.com/51326421/176983604-da9965c6-4cad-4d3c-8a38-75d67471c70b.png)

### Responsive on mobile and tablet screens

![image](https://user-images.githubusercontent.com/51326421/176983621-8cacc724-03bb-4e75-b00d-13cb81277d67.png)

### Loading screen

![image](https://user-images.githubusercontent.com/51326421/176983781-b2dc2a1b-ff9e-4b85-97b4-2c44d92aeff8.png)

### Sign in page

![image](https://user-images.githubusercontent.com/51326421/176983699-fcd9cbbb-7bc4-4e0b-ac8c-e4d71e6f8119.png)

![image](https://user-images.githubusercontent.com/51326421/176983709-f8c94795-3952-47ec-96bf-e5a4ca81afaa.png)

### LogIn Page

![image](https://user-images.githubusercontent.com/51326421/176983730-1a229a63-8de7-4c71-a77b-1dc8f245084f.png)

![image](https://user-images.githubusercontent.com/51326421/176983743-36e6f01c-ef2f-4cc2-87b4-c73acca6a124.png)

### Welcoming Page

![image](https://user-images.githubusercontent.com/51326421/128429995-55619601-d721-4ecf-acd2-1b815c9ed253.png)


---

## 🛠 Tech Stack

### Front-End:
- **React.js** with **TypeScript** – for building a scalable, maintainable, and type-safe user interface.
- **Vite** – a fast build tool for development, ensuring quick reloads and a smooth developer experience.
- **Tailwind CSS** – for utility-first CSS styling that enhances the user experience.
- **React Router** – for client-side routing and smooth page transitions.

### Back-End:
- **Firebase** – for authentication, real-time database, and file storage (e.g., user data, posts, job listings).

### Deployment:
- **Vercel/Netlify** – for front-end hosting, providing fast and reliable content delivery.
- **Firebase Hosting** – for hosting both front-end and back-end in a serverless environment.

### Tools & Libraries:
- **Prettier** – for code formatting to maintain consistent code style across the project.
- **ESLint** – for ensuring consistent code quality and identifying potential issues during development.

---

## 🧑‍💻 Author

This project is developed by:

- [Saddam Arbaa](https://github.com/saddamarbaa)


---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher) - You can download it from [here](https://nodejs.org/en/).

### Installation

#### 1. Clone the Repository

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/saddamarbaa/LinkedIn-clone-app-react-typescript.git
```

#### 2. Go to the Project Directory

```bash
cd LinkedIn-clone-app-react-typescript
```

#### 3. Install Dependencies and Set Up Environment Variables

Once you’ve cloned the repository, navigate to the project folder and install the required dependencies:

```bash
npm install
```

Copy `.env.example` to `.env` and update the necessary values.

#### 4. Set up Firebase

For user authentication, you'll need to set up Firebase:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. Enable Firebase Authentication (Email/Password and Google).
4. Copy the Firebase config and add it to the `.env` file in your project.

#### 5. Run the Project

Once the setup is complete, you can run the project locally using:

```bash
npm run dev
```

This will start the development server, and you can view the app in your browser at `http://localhost:3000`.

## 🌍 Environment Variables

To configure the project, you'll need to add the necessary environment variables. Follow these steps:

1. Copy `.env.example` to `.env`.
2. Update the environment variables with your Firebase configuration:

```env
VITE_REACT_APP_FIREBASE_API_KEY=""
VITE_REACT_APP_AUTH_DOMAIN=""
VITE_REACT_APP_PROJECT_ID=""
VITE_REACT_APP_STORAGE_BUCKET=""
VITE_REACT_APP_MESSAGING_SENDER_ID=""
VITE_REACT_APP_APP_ID=""
```

## 📦 Deployment

### Deploying to Production

1. **Prepare Environment Variables**:

   Ensure that the necessary environment variables are set up in your production environment:

   - `VITE_REACT_APP_FIREBASE_API_KEY`
   - `VITE_REACT_APP_AUTH_DOMAIN`
   - `VITE_REACT_APP_PROJECT_ID`
   - `VITE_REACT_APP_STORAGE_BUCKET`
   - `VITE_REACT_APP_MESSAGING_SENDER_ID`
   - `VITE_REACT_APP_APP_ID`

2. **Push Your Code to a Git Repository**:

   Push your code to a remote repository like GitHub, GitLab, or Bitbucket.

3. **Set Up a Hosting Service**:

   You can deploy the app on platforms like:

   - **Vercel**:
     ```bash
     npm i -g vercel
     vercel login
     npm run build
     vercel --prod
     ```

   - **Netlify**:
     ```bash
     npm i -g netlify-cli
     netlify login
     npm run build
     netlify deploy --prod
     ```

   Set the necessary environment variables in the respective dashboard (Vercel or Netlify).

4. **Set Up Firebase**:

   Ensure that Firebase Authentication, Firestore, and Storage are configured as needed in your Firebase Console. Ensure that the Firebase environment variables are correctly set in your deployment platform.

5. **Additional Considerations**:

   - **Security**: Ensure that sensitive information (like API keys) is securely stored in environment variables.
   - **Build Process**: Always run `npm run build` before deploying to ensure an optimized production build.

Once deployed, your application will be live, and you can access it through the provided URL from Vercel or Netlify.



## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---



## 🔄 Status

- **Current Status**: This project is in **active development**.

## 💡 Inspiration

This project was inspired by LinkedIn's platform, with an additional focus on building a modern, feature-rich web application using React. The goal is to replicate core LinkedIn features while adding enhancements like dark mode and Firebase authentication.

## 🛠️ Support

If you encounter any issues while setting up or using the app, feel free to raise an issue on the GitHub repository, and we will do our best to assist you. Alternatively, you can contact us via email or through social media.

## 📝 Feedback

We value your feedback and would love to hear from you! If you have any suggestions, improvements, or bugs to report, please feel free to:

- Open an issue on the [GitHub Issues page](https://github.com/saddamarbaa/LinkedIn-clone-app-react-typescript/issues).
- Send us an email at [linkedinclone@example.com].

Your feedback helps us improve the project and provide a better experience for everyone.


## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=saddamarbaa/LinkedIn-clone-app-react-typescript&type=Date)](https://star-history.com/#saddamarbaa/LinkedIn-clone-app-react-typescript&Date)

---

## 🌐 Social Links

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/saddamarbaa/)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-blue?style=for-the-badge&logo=twitter)](https://twitter.com/ArbaaSaddam)

---



## 📝 Related Projects

---

## 🛠️ **APIs & Backend Projects**

### **Open Source Blog REST API**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/node-express-mongodb-typescript-blog-rest-api)  
A RESTful API for managing blog posts and user authentication, built with modern technologies.  

- **Features:**  
  ✅ JWT-based authentication with role-based access control.  
  ✅ Advanced filtering, pagination, and search functionalities.  
  ✅ Scalable and maintainable architecture.  

- **Tech Stack:**  
  🛠️ Node.js | Express | MongoDB | TypeScript  

---

### **Dev Match App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/developer-match-app-vite-react-typescript)  
A developer matchmaking app designed to connect developers based on skills and interests.  

- **Features:**  
  ✅ Developer matching algorithm.  
  ✅ Real-time chat for seamless communication.  
  ✅ Dynamic and responsive user interface.  

- **Tech Stack:**  
  🛠️ React | Vite | TypeScript | REST API  

---

## 🎥 **Video Streaming Platforms**

### **YouTube Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/Youtube-clone-app-react-vite-typescript)  
A fully functional YouTube clone with video uploads, comments, and playlists.  

- **Features:**  
  ✅ Video streaming with like/comment functionality.  
  ✅ Playlist creation and management.  
  ✅ User profile customization.  

- **Tech Stack:**  
  🛠️ React | Vite | TypeScript  

---

### **Netflix Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/netflix-clone-app-react-typescript)  
A Netflix-inspired platform for movie streaming and user authentication.  

- **Features:**  
  ✅ Movie streaming with Firebase authentication.  
  ✅ Real-time search powered by ChatGPT.  
  ✅ Sleek and responsive design.  

- **Tech Stack:**  
  🛠️ React | TypeScript | Firebase  

---

## 🐦 **Social Media Platforms**

### **Twitter Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/twitter-clone-app-nextjs-typescript)  
A real-time Twitter clone with tweet posting and updates.  

- **Features:**  
  ✅ Tweet creation and commenting.  
  ✅ Real-time notifications and follow system.  
  ✅ Secure user authentication.  

- **Tech Stack:**  
  🛠️ Next.js | TypeScript | Firebase  

---

### **Instagram Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/Instagram-clone-app-nex-js)  
An Instagram-inspired app with image uploads and interactive features.  

- **Features:**  
  ✅ Photo uploads with comments and likes.  
  ✅ User authentication via Firebase.  
  ✅ Responsive and visually appealing design.  

- **Tech Stack:**  
  🛠️ Next.js | TypeScript | Firebase  

---

## 💬 **Messaging Platforms**

### **Messenger Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/messenger-clone-app-nex-js)  
A real-time messaging app inspired by Facebook Messenger.  

- **Features:**  
  ✅ Real-time chat using Firebase Firestore.  
  ✅ Group chat and media sharing.  
  ✅ User-friendly interface.  

- **Tech Stack:**  
  🛠️ Next.js | Firebase | Material-UI  

---

## 🛒 **E-Commerce Platforms**

### **Amazon Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/amazon-clone-app-react-typescript)  
An Amazon-inspired e-commerce platform with product listings and cart management.  

- **Features:**  
  ✅ Product browsing and add-to-cart functionality.  
  ✅ User authentication and order history.  
  ✅ Secure payment integration.  

- **Tech Stack:**  
  🛠️ React | Redux | Firebase  

---

## 🔍 **Search & Discovery Platforms**

### **Google Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/google-clone-app-nex-js-typeScript)  
A Google homepage clone with real-time search functionality.  

- **Features:**  
  ✅ Real-time search bar with suggestions.  
  ✅ Mobile-friendly, responsive design.  
  ✅ Minimalistic and fast UI.  

- **Tech Stack:**  
  🛠️ Next.js | TypeScript | Tailwind CSS  

---

## 📧 **Email & Productivity Platforms**

### **Gmail Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/Gmail-clone-app-nex-js)  
A Gmail-inspired app for email management and composition.  

- **Features:**  
  ✅ Email sending with secure authentication.  
  ✅ Responsive inbox interface.  
  ✅ Easy-to-use email composition tools.  

- **Tech Stack:**  
  🛠️ Next.js | Firebase | Tailwind CSS  

---

## 🚗 **Other Platforms**

### **Tesla Clone App**  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/saddamarbaa/tesla-clone-app-react-typescript)  
A Tesla-inspired app for browsing cars and managing user accounts.  

- **Features:**  
  ✅ Interactive car browsing with detailed specs.  
  ✅ Secure user authentication and account management.  
  ✅ Modern and sleek design.  

- **Tech Stack:**  
  🛠️ React | TypeScript | Styled Components  