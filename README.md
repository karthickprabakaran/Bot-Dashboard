-> Delhivery Bot Management Dashboard

A simulation-based admin dashboard built using React + Context API, designed to manage bots, view task queues, track analytics, and provide a full mock operational experience.

 Live Link: https://bot-dashboard-7vwo.onrender.com

->  Features

-> Authentication
	•	Simple login & signup flow
	•	Uses js-cookie to store the current user session

-> Bot Dashboard
	•	Displays 10 simulated bots
	•	Every bot auto-updates every 10 seconds
	•	Status, battery, speed, and last-updated timestamp shown
	•	Color-coded bot statuses for fast visual scanning

-> Task Queue Simulation
	•	Admin can create new tasks with:
	•	Pickup
	•	Drop
	•	Priority
	•	Comments
	•	High-priority tasks are automatically pushed to the top (below to the already present High Priority Tasks).
	•	Each task automatically clears after 3 seconds (simulation behaviour)
	•	Task Overview Section:
	•	Total tasks
	•	Pending
	•	Completed
	•	Tasks with blockers

-> Analytics Dashboard
	•	Built with Recharts
	•	Picked the idle, busy and the completed so that the admin can have an visual insight so, he can deploy more bots or turn off the bots that are idle.
	•	Data flows from Task & Bot context

->  UI/UX
	•	Designed using Delhivery-inspired color palette so that the site would feel like the internal tool of Delhivery.
	•	Clean card layout, minimalistic analytics, and admin-friendly navigation
	•	Fully responsive using Tailwind CSS

   ##  Tech Stack

- **React.js** – Frontend library used to build the UI  
- **JavaScript (ES6+)** – Core programming language  
- **Tailwind CSS** – Utility-first styling framework  
- **Context API** – State management across the entire app  
- **js-cookie** – For managing user session tokens  
- **Recharts** – For dashboards and analytics visualizations  


##  How to Run the App Locally

Follow the steps below to set up and run the project on your local machine.

1.Clone the Repository

```
git clone https://github.com/karthickprabakaran/Bot-Dashboard.git
```
3.Navigate to the Project Directory
```
cd Bot-Dashboard
```
 4.Install Dependencies
```
 npm install
```
 5.Start the Development Server
```
 npm run dev
```
 6.Open the App at the link 
```
    http://localhost:5173
```