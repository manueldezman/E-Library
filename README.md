# 📚 E-Library (Vanilla JS)

A lightweight **browser-based library management app** that lets users add books, toggle read status, and remove entries using dynamic DOM rendering.

---

## 🧠 JavaScript Concepts Demonstrated

- **ES6 Classes**
  - The `Book` class models a book entity with properties (`title`, `author`, `pages`, `read`) and methods, encapsulating related data and behavior.

- **Prototypes**
  - `Book.prototype.toggleReadStatus` extends the class with behavior to mutate the `read` state, demonstrating prototype-based inheritance.

- **DOM Manipulation**
  - Elements are dynamically created (`document.createElement`) and injected into the table to render the library state.

- **Event Handling**
  - Click events (`addEventListener`) are used to trigger book creation, deletion, and read-status toggling.

- **Array Operations**
  - The `myLibrary` array acts as the in-memory data store, using methods like `push`, `splice`, and `indexOf` for state management.

- **Data Attributes (`dataset`)**
  - Each DOM row and button stores a unique `data-id` to map UI interactions back to the corresponding book object.

- **UUID Generation**
  - `crypto.randomUUID()` ensures each book has a unique identifier for reliable lookup and mutation.

---

## 🧩 Problem-Solving Approach

The core problem is **keeping UI state synchronized with application data** while allowing user interactions (add, delete, toggle).

The solution uses a **single source of truth (`myLibrary`)** to store all book objects.  
Every user action mutates this array, followed by a **full re-render (`displayBooks`)** to ensure the UI always reflects the current state.

This approach was chosen because:

- It avoids complex DOM diffing or partial updates.
- It keeps logic predictable and easy to reason about.
- It scales cleanly for small-to-medium datasets without introducing framework overhead.

Using **unique IDs + dataset mapping** ensures that UI events can reliably identify the correct object without relying on fragile index positions.

---

## ✨ Key Features

- **Add Books**
  - Capture user input and instantiate new `Book` objects.

- **Dynamic Table Rendering**
  - Automatically rebuilds the table whenever data changes.

- **Toggle Read Status**
  - Switches between `"Yes"` and `"No"` using a prototype method.

- **Delete Books**
  - Removes items from the data store and updates the UI instantly.

- **Unique Book Identification**
  - Prevents collisions and ensures accurate updates using UUIDs.

---

## Live Preview
👉 https://manueldezman.github.io/E-Library/

## Tech Stack
- Vanilla JavaScript  
- DOM API
