# Issue: Implement Top-Sticky Navigation Bar for Landing Page

## Context
We are building a Single Page Application (SPA) to solve booking problems for a boarding house in Bali. The application will serve primarily as a promotional landing page that includes a booking form, alongside an admin dashboard to manage room availability. 

## Task Overview
As a junior developer, your task is to build a top-sticky navigation bar for the main landing page. This navigation bar should allow users to easily navigate between different sections of the page without reloading.

## Requirements

### 1. Structure & Layout
- Create a new component for the Navigation Bar (e.g., `NavBar`).
- The navigation bar should be positioned at the top of the viewport.
- It must be "sticky" so that it remains visible at the top of the screen as the user scrolls down the page. 
- While reach at very top of the page, it should not be sticky anymore, but when scolled down it should be sticky again.
- The navigation bar should have a background color that is different from the background color of the page.


### 2. Navigation Links
- The navigation bar should contain links to the key sections of the landing page. At a minimum, include:
  - **Home / Hero section:** Introduction to the boarding house.
  - **About/Features** Give details about the boarding house benefits, its features and services.
  - **Rooms:** Details about available rooms and amenities.
  - **Gallery:** Photos of the boarding house and surroundings.
  - **Location:** Map and directions to the boarding house in Bali.
  - **Book Now:** Quick link to the booking form section.

### 3. Functionality
- Implementing "Smooth Scrolling": When a user clicks a link in the navigation bar, the page should smoothly scroll to the corresponding section.
- Active State: (Optional but recommended) Highlight the current navigation link based on which section is currently visible in the viewport.

### 4. Styling (Tailwind CSS)
- Ensure the navigation bar is fully responsive (looks good on mobile and desktop). On mobile, consider a hamburger menu if there are too many links.
- Apply styling that matches the overall aesthetic of a Bali boarding house (clean, modern, perhaps with subtle tropical/warm tones).
- Use a slight drop-shadow or a distinct background color to separate the sticky navbar from the content scrolling underneath it.

## Technical Guidance
- The project is using **Next.js** (App Router) and **Tailwind CSS**.
- You can create the component inside the `app/ui` directory.
- For smooth scrolling, you can use standard HTML/CSS (`scroll-behavior: smooth;` on the `html` tag) and anchor links (`href="#section-id"`), or leverage React state/refs if more complex behavior is needed.

## Definition of Done
- [ ] `NavBar` component is created and integrated into the main landing page layout.
- [ ] Navigation bar remains sticky at the top during scrolling.
- [ ] Clicking links smoothly scrolls to the correct section.
- [ ] The component is responsive and displays correctly on both desktop and mobile views.
- [ ] Code is clean, well-commented, and follows project conventions.

## Additional Notes
Feel free to ask questions if you need clarification on the design or implementation details. Happy coding!
