# To-Do List Web App

A clean, functional, and fully responsive To-Do List web application, built using only **HTML**, **CSS**, and **JavaScript**.

## Features

This app allows users to:

 **Add New Tasks**  
 **Mark Tasks as Completed / Un-Completed**  
 **Delete Individual Tasks**  
 **Clear All Tasks**  
 **Fully Responsive Design** 
 **Persistent Storage with `localStorage`**  
  Your tasks are stored in the browser using `localStorage`. Even after closing or refreshing the browser, your list remains exactly as it was.
    Tasks are saved as a JSON string.
    On page load, the app retrieves and parses this data to restore your task list.
    Every add, delete, or toggle is synced with `localStorage`, so nothing gets lost.

## Developer’s Journey

This project was not just about building a to-do app it was a **personal milestone**.
The Struggle with `localStorage`
At first, I struggled a lot with how to **save tasks persistently**. The concept of `localStorage` was completely new to me and I had to learn how to **store arrays**, parse JSON, and update it dynamically on state changes.
After multiple failures I finally cracked it!
Learning DOM Manipulation
 Every button, task, and state in this app helped me understand:
  How to create elements using JavaScript
  How to append them to the DOM
  How to add dynamic event listeners
This was my **first real experience** with **vanilla DOM manipulation** and it built the my concepts of DOM.
Another feature which I learned about was making the app **responsive**. I learned how to:
  Use `media queries`
  Adjust layouts for mobile, tablet, and desktop