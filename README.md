#  Delhivery Bot and Task Management Dashboard

A simulation-based admin dashboard built using React + Context API, designed to manage bots, view task queues, track analytics, and provide a full mock operational experience.

 Live Link: https://bot-dashboard-7vwo.onrender.com

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

   ##  Tech Stack

- **React.js** – Frontend library used to build the UI  
- **JavaScript (ES6+)** – Core programming language  
- **Tailwind CSS** – Utility-first styling framework  
- **Context API** – State management across the entire app  
- **js-cookie** – For managing user session tokens  
- **Recharts** – For dashboards and analytics visualizations  

## Component Architecture

The application is organized using a modular, easy-to-navigate component structure:

### **1. Pages**
- **Login / Signup Pages** – Handle user authentication using cookies.
- **Home Dashboard** – Displays bot and task overview using Tab components.
- **Task Queue Page** – Shows the list of tasks and their status.
- **Task Allocation Page** – Simulates assigning bots to tasks.
- **Analytics Page** – Renders charts using Recharts.

### **2. Context Layer**
- **AppContext** provides global state:
  - User session (persisted with js-cookie)
  - Bots data
  - Tasks data
  - Utility functions for simulation (add/update/remove tasks, update bot states)

All pages consume this context to keep the data consistent across the application.

### **3. Reusable Components**
- **BotCard**, **TaskCard** – Uniform card components with color-coded statuses.
- **BotTab**, **TaskTab** – Dashboard tab sections for bots and task overview.
- **Navigation Components** – Header.

### **4. Styling**
- Styled entirely with **Tailwind CSS** for fast, consistent UI.
- Status-based colors used across bot and task components for quick visual scanning.

##  Data Flow

The app follows a simple and predictable data flow powered by **Context API** for global state management.

### **1. User Authentication Flow**
- When a user logs in or signs up, their details are stored using **js-cookie**.
- On every page load, the app checks for the cookie and restores the user session.
- If no cookie exists, the user is redirected to the login page.

### **2. Task Creation → Queue Update**
- When a new task is created, the `addTask()` function in the Context is triggered.
- High-priority tasks are inserted at the top of the queue.
- Normal tasks are added to the end.
- Each task auto-expires after **3 seconds**, and Context updates the global task list.

### **3. Bot Status Simulation**
- Bots have simple states like *Idle*, *Active*, or *Busy*.
- Bot status changes are stored in the same global context.
- No real backend assignment occurs — tasks are not mapped to bots (as per the assumptions).

### **4. Reading State Across Pages**
- All pages (Dashboard, Task Queue, Analytics) read from the shared context.
- When tasks or bots update in one place, the change instantly reflects across the app.

### **5. Analytics Data Flow**
- The Analytics page reads from the same global state.
- Charts are generated based on:
  - Number of tasks created
  - Bot status summary
- Since there is no backend, all analytics come from in-memory state.

### **Overall Flow**
User actions → Context state updates → UI updates → Analytics recalculates

This keeps the app responsive, predictable, and easy to scale later with a real backend.

##  State Management Reasoning

This project uses **React Context API** for state management because it provides a lightweight and clean way to share data across the app without introducing unnecessary complexity.

### **Why Context API?**
1. **Simple Global State Needs**  
   The app only needs to manage two main global states:
   - Bot simulation data  
   - Task queue data  
   - Auth Data.
   Context API handles both efficiently without needing Redux or other heavy libraries.

2. **Predictable One-Way Flow**
   All updates (task creation, bot status simulation, user login) happen in a single place and then flow down to the UI. This keeps the app highly predictable and easy to debug.

3. **Lightweight & Built Into React**
   No external dependencies were required for state, reducing bundle size and keeping the architecture clean.

### **BotContext**
- Stores real-time bot data such as battery, speed, status, and last updated time.  
- Updates automatically every few seconds to simulate a live system.  
- All screens that display bot-related information subscribe to this context.

### **TaskContext**
- Manages task creation, prioritization, and removal.  
- Ensures high-priority tasks are always pushed to the top.  
- Allows global access to the task queue from any component.

### **Benefits**
- Consistent state across all pages.
- Easy for components to consume data without prop drilling.

Overall, Context API was chosen because it provides the **perfect balance between simplicity, scalability, and performance** for this project.

## Figma Link

```
https://www.figma.com/design/0eDXZKs6ZGadwe68cXsMl2/DashBoard-design-for-bot-and-task?node-id=0-1&t=0Du4TdeOtuoyYNxk-1
```


## ->  Features

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


