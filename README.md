# HCAID (Human Centric AI Design)

## 1. Introduction

HCAID is part of our minor Artificial Intelligence. This module focus on the design of AI systems by following some guidelines on how to design a user-centric AI-based app. Because AI makes it possible to make predictions, it increases our ability to make decisions. However, the user must be central when designing a prescribed AI system. Otherwise we lose the capacity for free choice. That is why we use Design Thinking to create a solution in which humans and the AI system are complementary to each other and people retain the ability to make free choices.

## 2. Our idea

[here comes our idea and the link to the prototype]

## 3. Development

Both websites are made with the framework NextJS. To run the website locally, you can use the 'docker-compose.dev.yml' file to launch a development environment for both applications, available on http://localhost:3001 and http://localhost:3002. To do this, you need to have Docker installed on your computer. If you don't have Docker installed, you can also run the applications locally by installing NodeJS.

** Launch the development environment with Docker **
Inside the root folder: 'docker compose -f docker-compose.dev.yml up -d'

## 4. Deployment

Both websites are deployed on a Linux server with Docker installed. Via a webhook, the server is automatically updated when a new commit is pushed to the master branch. The websites are available on:

- https://smart-lungs.qloozen.nl/
- https://lung-vitality.qloozen.nl/
