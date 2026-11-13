# 📝 Modern To-Do List Application

A sleek, lightweight, and responsive To-Do List web application built with pure vanilla web technologies. It allows users to organize their daily tasks efficiently with instant browser-based data persistence.

---

## 📖 Project Overview

This project is a beginner-friendly yet production-ready task management tool. It requires **no installation, no frameworks, and no external dependencies**—it runs directly inside any modern web browser. 

All task operations (adding, completing, and deleting) are automatically synchronized with the browser's **Local Storage (`localStorage`)**, ensuring your data is never lost when the browser is refreshed or closed.

---

## ✨ Features

* **Instant Task Creation**: Add tasks quickly by clicking the **Add Task** button or simply pressing the <kbd>Enter</kbd> key.
* **Input Validation**: Prevents adding blank or accidental whitespace tasks.
* **Mark as Completed**: Click anywhere on a task to toggle a visual strikethrough indicating completion.
* **Delete Tasks**: Remove individual tasks permanently with a single click on the dedicated delete button (`✕`).
* **Local Storage Persistence**: Automatically saves your tasks in the browser's `localStorage` so your list remains intact even after closing the tab.
* **Responsive & Accessible Design**: Beautifully styled for desktop monitors, tablets, and smartphones using CSS Flexbox and media queries.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Provides semantic structure and accessible layout (`input`, `button`, `ul`, `li`). |
| **CSS3** | Powers the modern card UI, soft shadows, rounded borders, hover animations, and mobile responsiveness. |
| **JavaScript (ES6+)** | Handles DOM manipulation, event listeners, user interactions, and `localStorage` JSON serialization. |

---

## 📂 Project Structure

```text
todo-list-app/
├── index.html       # Application skeleton and layout
├── style.css        # Visual presentation, theme, and responsive styling
├── script.js        # Dynamic behavior and localStorage management
└── README.md        # Project documentation
```

### File Breakdown:
* **`index.html`**: The entry point connecting the stylesheet and JavaScript file, containing the app container, heading, input section, and empty list container.
* **`style.css`**: Defines a clean, centered card interface with modern typography, smooth micro-interactions, and mobile-friendly layouts.
* **`script.js`**: Contains the core logic to create task elements, listen for events, and manage persistence using `JSON.stringify()` and `JSON.parse()`.

---

## 🚀 How to Run the Application

No build step or local server is required. You can launch it in seconds:

1. **Download or Clone** this repository to your local computer.
2. Locate the project folder:
   ```text
   c:\Users\ASUS\Documents\todo-list-app
   ```
3. **Double-click `index.html`** or right-click it and choose **Open with** -> your favorite web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Brave, etc.).
4. Start adding your tasks!

---

## 📸 Screenshots

*(To display screenshots here, take a screenshot of your app, save it as `screenshot.png` in this folder, and reference it below)*

```markdown
![To-Do List App Screenshot](./screenshot.png)
```

> **Preview Highlights**:
> * Clean white card floating over a subtle slate gradient background.
> * Vibrant indigo **Add Task** button with hover and active states.
> * Intuitive completed task styling with line-through and muted contrast.

---

## 🔮 Future Improvements

Here are ideas and features planned for future updates:

- [ ] **Task Filters**: Filter tasks by *All*, *Active*, and *Completed*.
- [ ] **Inline Editing**: Double-click a task description to edit and rename it.
- [ ] **Task Counter**: Display the total count of pending and completed tasks.
- [ ] **Clear All / Clear Completed**: Add a bulk action button to purge finished items.
- [ ] **Dark Mode Toggle**: Allow users to switch between light and dark themes.
- [ ] **Due Dates & Priorities**: Assign priority flags (Low, Medium, High) and deadlines.

---

## 📄 License

This project is open-source and free to use for educational and personal projects.
