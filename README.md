This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Task 1: User list with search functionality

https://gist.github.com/Leo4815162342/430bd20db4f0e7137fc466d80fbbc98c

## 📖 Tasks:

Implement a web app that allows viewing a list of users with pagination with the pages listed below.
Implement a search widget (autocomplete) where you can perform a search all users by user name. For example, typing in Jo should list all users that have Jo in their name, each suggested item should lunk to the user page with the specific id.

## 📄 Pages:

### /users - a page with list of users with pagination.

There are 100 users in total, so let's have 10 pages with 10 user cards on each.

Each page should have its own url: either as separate route /users/${PAGE_NUM} or a query parameter /users?page=${PAGE_NUM}

Clicking on the user card should bring you to the /user/${USER_ID} page.

### /user/${USER_ID} - a page with information on the specific user based on the provided USER_ID

## ⚙️ API:

### User list with pagination

https://dummyjson.com/users?limit=10&skip=0 - page 1

https://dummyjson.com/users?limit=10&skip=10 - page 2  
https://dummyjson.com/users?limit=10&skip=90 - page 10

### Search User by ID

https://dummyjson.com/users/${USER_ID} - where $USER_ID 1-100

https://dummyjson.com/users/1 - https://dummyjson.com/users/100

### Search User by name (this is for task #2)

https://dummyjson.com/users/search?q=${USER_NAME} - where USER_NAME is the name of the user

detailed API spec: https://dummyjson.com/docs/users

## 🔧 Technologies to use:

Next.js, Typescript.

# Task 2:

## 1. Race condidtion when making API calls

Implement a functionality to make sure that the last request to users api resolves last.

Example of an issue:

we type J - the request is sent to the server which takes 3 seconds to complete,
we immediately remove J and type O - the request takes 1 second.
after few seconds, we will see the results for O, and then results for J
We want to see results only for what is in the input - which in this case is O

## 2 . Throttling / debouncing

We want to avoid making a request on every character change. Implement a functionality that throttles/debounces the user input.

## 3. Cache

Implement functionality that caches the results for input queries - and caches them in-memory to avoid a call to the server.

Example:

We type J => send request to server => wait for results => update list
We type Jo => send request to server => wait for results => update list
We remove last character (Jo => J) => we AGAIN(!) send request to server => wait for results => update list.
In step 3 we do not need to make a call to the server for J because we already made this call before, so we can store the users associated with J character and display them right away instead of calling the server again
