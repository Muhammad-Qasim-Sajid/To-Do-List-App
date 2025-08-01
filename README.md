# 📋 To-Do List Web App

A clean, functional, and fully responsive To-Do List web application, built using only **HTML**, **CSS**, and **JavaScript**.

---

## ✨ Features

- **Add New Tasks**
- **Mark Tasks as Completed / Un-Completed**
- **Delete Individual Tasks**
- **Clear All Tasks**
- **Fully Responsive Design**
- **Persistent Storage with `localStorage`**
  - Tasks are saved in the browser using `localStorage` as a JSON string
  - On page load, the app retrieves and parses this data to restore your task list
  - Every add, delete, or toggle is synced with `localStorage`, so nothing gets lost

---

## 👨‍💻 Developer’s Journey

This project was not just about building a to-do app — it taught me a **lot of things**.

### 🔄 The Struggle with `localStorage`

- I struggled a lot with how to **save tasks persistently**
- The concept of `localStorage` was completely new to me
- I had to learn how to:
  - Store arrays
  - Parse JSON
  - Dynamically update state and reflect it in the UI
- After multiple failures, I finally cracked it!

### 🧠 Learning DOM Manipulation

- Learned how to use:
  - `createElement()`
  - `appendChild()`
  - `querySelector()`
- Understood how nodes and their relationships work
- Learned how to:
  - Create and insert elements dynamically with JavaScript
  - Attach event listeners to those elements
- This was my **first real experience** with **vanilla DOM manipulation**, and it built the foundation of my frontend skills.
