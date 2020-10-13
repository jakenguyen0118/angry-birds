# Node Reps! With Disgruntled Avians.

![angry birds](https://media.giphy.com/media/fKACOQcJ6LnTa/giphy.gif)

So far, we've learned how to organize an Express app using MVC (**M**odel **C**ontroller) format along with **R**outes. Express has a lot of setup. It can become easy to get lost, especially once we start adding more controllers and models. Constructing everything in an organized way is **key** to keeping track of everything. Lets practice by creating an app from scratch!

## Setup

The only file that has been provided is the seed. The rest is up to you to make!

## Completion

Parts 1, 2.

All routes have been tested using `Postman`

## Assignment

### Part 1 - Set Up Your App

- Install and requuire any dependencies 
- Set up your file structure
    - Make the following directories:
        - `controllers`
        - `models`
    - Create your `server.js` file
- Set up your `server.js` file. Require your packages, set up your app and listen on your port. 

### Part 2 - Functionality

Below is a description of what your app should contain.  Figure out your process for constructing your app. Some start with the routes, others start with the model. Do what makes sense to you.

#### Models

Your model will handle the angry bird data. It should be an array of data. Don't forget to export this data!

#### Controllers

You will have 1 controller. It will handle all of the `/angry-birds` routes.

| **URL** | **HTTP Verb** | Action |
|------------|-------------|-------------|
| /angry-birds       | GET       |  it should get all of the angry birds from the model and return as json
| /angry-birds       | POST       |  it should add a new bird to the model and return the entire list as json
| /angry-birds/:id      | GET       | it should get that individual bird from the model and return as json
| /angry-birds/:id      | PUT       | it should update the individual bird from the model and return as it json
| /angry-birds/:id      | DELETE      | it should delete the individual bird from the model and return the entire list as json 

<hr>

### Bonus
- Can you create a Delete Route?
