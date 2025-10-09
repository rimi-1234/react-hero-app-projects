- App name
Hero.iApp
- Description
 This project is a fully functional App Store Web Application built with React, designed to showcase, explore, and manage apps interactively. It features a clean, responsive layout with intuitive navigation and localStorage integration for user interaction. The Header section includes a clickable logo that redirects users to the home page, a navigation bar with active route highlighting for smooth browsing across “Home,” “Apps,” and “Installation” pages, and a Contribution button linking to the developer’s GitHub profile. The Footer is uniquely styled to enhance the overall user experience.The Home Page features a central banner with a heading, description, and two action buttons — one redirecting to the App Store and the other to the Play Store. It also includes a States Section with three informative cards and a Top Apps Section displaying eight popular apps in a four-column layout. Each app card shows its title, image, downloads, and average rating. Clicking on any card navigates to the App Details Page, and a “Show All” button allows users to view every available app on the All Apps Page.

The All Apps Page provides a title and subtitle, followed by a live search bar with case-insensitive filtering that updates results dynamically. It shows all apps as cards, and if no match is found, a clear “No App Found” message is displayed.

The App Details Page presents detailed app information — including image, title, rating, downloads, and reviews — alongside an Install button. When clicked, the button changes to “Installed,” becomes disabled, and triggers a success toast notification. App review data is visualized through a Recharts-based responsive chart, and a descriptive section elaborates on the app’s features.

For invalid routes, a custom error page is shown. The website also includes loading animations during page navigation and search operations to ensure smooth transitions.

The Challenge Feature introduces LocalStorage functionality, allowing users to install and uninstall apps. Installed apps are saved locally and displayed on a dedicated My Installation Page, which mirrors the Figma design. Each installed app card includes an Uninstall button to remove it from both the UI and LocalStorage, with a toast message confirming the action. Additionally, a Sort by Downloads dropdown enables sorting apps in ascending or descending order based on their download count.

🧰 Technologies Used

- Frontend Framework:

React.js – for building a dynamic, component-based user interface.

React Router DOM – for smooth navigation and route management.

- UI & Styling:

Tailwind CSS – for modern, responsive, and utility-first styling.

Lucide React Icons – for using lightweight and elegant icons.

Recharts – for creating responsive and interactive data visualization charts.

- State & Data Management:

LocalStorage API – for storing user-installed apps and maintaining state persistently.

JSON Data – for structured app information (title, company, rating, etc.).

- User Experience Enhancements:

React Toastify – for displaying success and alert messages (e.g., app installation/uninstallation).

Loading Animations – for smooth transitions during navigation and search operations.

- Development & Tools:

Vite – for fast React app bundling and development server.

npm / Node.js – for managing project dependencies.

Git & GitHub – for version control and project hosting.

Figma – for UI/UX design reference and layout inspiration