# Title project: SornDoang Store
    Here is the capstone project. And it is the website that using only HTML5, CSS, Tailwind, JavaScript, and Bootstrap.

## Feature:
    + User:
        _ Responsive layout
        _ Header, main content, footer
        _ Contact page
        _ Adding products into the card.
    + Admin:
        _ With full CRUD(Create, Read, Update, and Delete) control over:
            _ Users
            _ Products
            _ Orders.

## Technologies Used:
    _ HTML5
    _ CSS3
    _ Bootstrap
    _ Tailwind
    _ JavaScript.

## Project Structure:
    project/
    ├── index.html                  # Start / Home page
    ├── pages/
    │   ├── auth/
    │   │   ├── login.html          # Login / Sign up
    │   │   └── signup.html
    │   ├── categories/
    │   │   ├── all-gear.html
    │   │   ├── gaming.html
    │   │   ├── ultrabooks.html
    │   │   ├── workstations.html
    │   │   └── accessories.html
    │   ├── product.html            # Product page
    │   ├── cart.html               # Card (cart)
    │   ├── checkout.html           # Checkout page
    │   ├── favorites.html
    │   ├── user/
    │   │   ├── profile.html        # User profile and orders
    │   │   └── orders.html
    │   └── admin/
    │       ├── dashboard.html
    │       ├── users.html          # Users (CRUD)
    │       ├── products.html       # Prods (CRUD)
    │       └── orders.html         # Orders (CRUD)
    ├── css/
    │   ├── main.css
    │   ├── components.css
    │   ├── admin.css
    │   ├── allGear.css
    │   ├── gaming.css
    │   ├── ultrabooks.css
    │   ├── workstations.css
    │   └── accessories.css
    ├── js/
    │   ├── core/
    │   │   ├── auth.js             # JS / localStorage auth state check
    │   │   ├── storage.js          # localStorage helpers
    │   │   └── router-guard.js     # Redirect: user vs admin vs guest
    │   ├── components/
    │   │   ├── header.js           # Global header nav
    │   │   ├── search.js
    │   │   ├── night-mode.js
    │   │   ├── favorites.js
    │   │   └── cart.js
    │   ├── pages/
    │   │   ├── home.js
    │   │   ├── category.js
    │   │   ├── product.js
    │   │   ├── checkout.js
    │   │   └── profile.js
    │   └── admin/
    │       ├── users-crud.js
    │       ├── products-crud.js
    │       └── orders-crud.js
    ├── data/
    │   ├── products.json
    │   ├── users.json
    │   └── orders.json
    ├── assets/
    │   ├── images/
    │   └── icons/
    └── README.md

## Getting Started:1. Clone the repository:
    1. git clone https://github.com/yourusername/your-repo.git
    2. Open the folder in Visual Code.
    3. Open index.html in your browser, or use the Live Server extension.
    _ Or Using vercel link at Sidebar section.

## Usage:
    1. Open the website and browse products from the header menu.
    2. Use the search bar, favorites, and cart to find and save items.
    3. Log in or sign up to see your profile and orders.
    4. Admin users can log in to manage users, products, and orders.