# Notification System Design

## Overview
A full stack notification management system built using React, Node.js, Express, and reusable logging middleware.

## Architecture
Frontend communicates with backend APIs.
Backend processes notifications.
Reusable logging middleware captures lifecycle events.

## Frontend
- React + TypeScript
- Material UI
- Axios for API calls

## Backend
- Node.js
- Express.js
- REST APIs
- Middleware logging

## Logging Middleware
Reusable logger integrated into backend and frontend.

## API Endpoints
GET /
POST /notifications

## Scalability
- Modular folder structure
- Reusable services
- Centralized logging

## Error Handling
- Try/catch blocks
- Middleware logs all failures

## Security
- Environment variables
- Protected logging API