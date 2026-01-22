# SHOP

SHOP is a Single Page Application (SPA) built with **React**, simulating a shopping experience. It lets you search for products by title, add them to your cart, and save your finished orders to a history page.

## Project Goal

I built this project to:

- **Learn how React handles data** across different pages using the Context API.
- **Practice connecting a website to a server** to save and load information permanently.
- **Understand the logic of a real E-shop**, like keeping a shopping cart updated and saving order history.
- **Improve my CSS skills** by building a clean and functional user interface.

## Features

- **Display Products from the json-server** : Fetch and render product data (titles, images, and prices) from the JSON-Server using Fetch() API using async/await for asynchronous data loading.
- **Product Search** : Filter products by **title** as you type in the search bar, using a global Context API **searchContext** to handle the state Globaly.
- **Shopping Cart** : A dynamic CartPage that handles displaying products, deleting products and calculating costs(subtotal, tax, shipping, total), managed by cartContext
- **Place Order** : While clicking the place order button, the app takes a **Snapshot** of the cart and navigate you to **OrdersPage**. To ensure that the order history remains accurate, it saves the order into **json-server** and then clears the cart.
- **Order History** : View all the past orders, by OrderPage. The app fetches and displays the completed orders by **/orders** endpoint of json.db.
- **Storage** : Orders stay saved even if the page is refreshed. By using **json-server**, the app works like real website where the data is stored in a database.
- **Loading States** : Using loading states for better User Experience. Displaying "Loading..." messages while user waiting for data to arrive from the server.

## Project Structure

- `src/context` : Global States (SearchContex, CartContex).
- `src/components` : Reusable UI for better structure.
- `src/pages` : The main views: **ShopPage**, **CartPage**, **OrdersPage**.
- `data/products.json` : The json-server database for products and orders.

## State Managment (Context API)

I use React Context API to avoid "Props Drilling" and share data globally:

- ### SearchContext:
  1. **_Creates a searchItems State_**: that track what user types and
  2. **_share_** the info between the **Navbar**(component where the input is) and **ShopPage** (Page where the products are).
  3. **_This allow_** ShopPage to filter products by title as user typing.

- ### CartContext:
  Manages the entire shopping flow:

1.  **_Creates a cartItems State_**: that tracks which products the user has added to their shopping cart.
2.  **_Handle Logic/Calculations_**: shares functions across the app to add/remove items and automatically calculate the **Subtotal, Tax, and Shipping**.
3.  **_Manage the orders proccess_**: Allows the app to take a **SnapShot** of the current cart, save it to the **json-server**, and then clear the cart.

## Set Up

To run this project locally:

### 1. Clone the Project

Open your terminal and run:

```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
```

### 2. Install Frontend dependencies

```bash
npm install
```

### 3. Run the json-server Database

This project uses json-server to fetch products and store order history. **You need to start the server in its own terminal window:**

```bash
npx json-server --watch db.json --port 5000
```

### 3. Run the app

Open a second terminal window and start the React application:

```bash
npm run dev
```

### You must see this endpoints

Endpoints:

- **Frontend**: http://localhost:5001/products
- **BackEnd**: http://localhost:5001/orders
