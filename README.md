
# Financial Tracker

A web application for tracking personal finances built with the MERN stack (MongoDB, Express, React, Node.js).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Track income and expenses
- Visualize spending habits with charts
- User authentication and account management by clerk auth


## Technologies Used

- **MongoDB**: Database for storing user data and transactions
- **Express.js**: Web framework for Node.js
- **React**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side code
- **Vite**: Build tool for fast development of React applications

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Setup

1. Clone the repository:
```bash 
git clone repo link
cd financial-tracker
```
2.Install server dependencies:
```bash 
cd server
npm install
```
3.Install client dependencies:
```bash 
cd client
npm install
```
4.Get the clerk CLERK_PUBLISHABLE_KEY from clerk website by sign up and put the key in .env.sample
```bash
https://clerk.com/
```

### Usage
## Starting the Server
1.Navigate to the server folder:
```bash
cd server
```
2.Run the server:
```bash
npm run dev
```
## Starting the Client
1. Open a new terminal and navigate to the client folder:
```bash
cd client
```
2. Run the client:
```bash
npm run dev
```
3. Get the MongoDB string from MongoDB Atlas by creating project and cluster and add to env sample and add port number as well.
```bash
https://www.mongodb.com/atlas?msockid=0ffa5d83640965d0172f4e0965bb6419
```

Your application should now be running on http://localhost:3000 (or the specified port).

### Contributing
We welcome contributions! Please follow these steps to contribute:

1.Fork the repository: Click the "Fork" button at the top right corner of the page.

2.Clone your fork:
```bash
git clone repo link
cd financial-tracker
```
3.Create a new branch for your feature or bug fix:
- For a feature:
 ```bash
 git checkout -b feat/[name-of-feature]
 ```
- For a bug fix:
```bash
git checkout -b Bug/[name-of-bug]
```
4.Make your changes and commit them:
```bash
git add .
git commit -m "Add [description of changes]"
```
5.Push to your fork:
```bash
git push origin feat/[name-of-feature]
```
6.Create a pull request: Go to the original repository and click on "New Pull Request."

7.Create an issue if necessary: Before creating a pull request, you may want to open an issue to discuss your changes.

