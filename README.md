# AI Modules Project

This repository contains both the backend and frontend for an AI-powered application. The backend is built using **Spring Boot** with AI modules integrated into services such as **ChatService**, **ImageService**, and **RecipeService**. The frontend is developed using **React** to provide a user-friendly interface.

---

## Project Overview

This project is a combination of a **backend** (built using **Spring Boot**) and a **frontend** (built using **React**). The backend integrates **OpenAI** services to create AI-powered services that users can interact with through the frontend.

### Backend
The backend provides several AI services:
- **ChatService**: 
  - Allows users to chat with the AI. It sends user queries to OpenAI's GPT model and returns the responses in real-time.
  
- **ImageService**: 
  - Allows users to generate images based on a text description using OpenAI’s DALL·E model.

- **RecipeService**: 
  - Suggests recipes based on ingredients and preferences provided by the user. It uses a recipe API integrated with AI for suggestions.


### Frontend
The frontend is built using React, providing an interface for users to interact with the backend AI services. Users can input prompts, get AI-generated responses, and view the results in an intuitive UI.

---



## Technologies Used
### Backend:

- Spring Boot
- OpenAI API for AI-powered services (Chat, Image, Recipe)
- Java 11+
### Frontend:

- React for building the user interface
