# shopverse-ui

## Table of Contents
1. [Overview](#Overview)
2. [Product Spec](#Product-Spec)

## Overview
### Description
This app has flexible system modules that enable sellers to enroll on our platform and customize interfaces based on product and website needs while following OOP principles to ensure scalability and maintainability.

### App Evaluation
[Evaluation of your app across the following attributes]
- **Category:** E-commerce/Business/SaaS(Software as a Service). This app provides a platform for sellers to enroll and customize their interfaces based on product and website needs. The main users are sellers, who utilize the platform as a tool to manage their online stores.

- **Platform Accessibility:** Web-Based, Mobile Adaptability Possible. Currently, it is a web application, but there is potential for mobile optimization in the future. A mobile version could be considered later to allow sellers to manage their stores on the go.

- **Story:** Sellers can enroll on the platform and customize their interfaces based on product and website needs. Flexible system modules enable sellers to customize their online stores. Designed using OOP principles, ensuring scalability and maintainability.

- **Market:** Businesses and independent sellers looking for customizable e-commerce solutions. The target audience is businesses and independent sellers managing e-commerce platforms. This app can be an alternative for sellers who find existing platforms like Shopify or WooCommerce too restrictive for customization.

- **Habit:** Regularly used by sellers to manage storefronts, update products, and optimize interfaces. Frequent tasks include adding new products and adjusting the store’s interface. Some sellers may use it only a few times weekly for maintenance, while others might log in daily for updates.
- **Scope:** Moderately complex. The main technical challenge is ensuring flexibility in system modules, but the MVP (Minimum Viable Product) can start with a simplified version of the core features. Since the system is designed with scalability in mind, additional features can be implemented later with ease.

## Product Spec

### User Stories (Required and Optional)

**Required Must-Have Stories/Features**

- User Authentication & Profile Management
  - [x] Users can create an account and log in
  - [ ] Users can manage their profile, including:
  	- [x] Editing username
  	- [x] Adding/updating personal and business information
  	- [ ]  Uploading a profile image
  - [ ]  Users can log out

- Navigation & Layout
  - [ ] Global Navigation Bar: Implement navigation bars for seamless access to key pages, including:
  	- [x] Header
  	- [ ] Footer
  - [ ] Sidebar for Seller Dashboard: Develop a collapsible sidebar with menu options for store management
  - [ ] Responsive Design: Ensure UI is fully responsive across desktop, tablet, and mobile views

- Seller Dashboard & Storefront Customization
  - [ ] Dashboard Home UI: Create an intuitive seller dashboard displaying store performance, orders, and updates, including:
  	- [ ] Store Performance Metrics, including:
  		- [ ] Display real-time total sales, order count, visitor count, and conversion
  		- [ ] Visualize performance trends over daily, weekly, and monthly periods using charts and graphs
    - [ ] Order Status Overview, including:
    	- [ ] Manage order statuses: new, processing, shipped, and completed
    	- [ ] Provide quick action buttons for instant order review and processing
    - [ ] Notifications & Updates, including:
    	- [ ] Notify sellers of new customer messages and product reviews
    	- [ ] Display system updates and platform announcements
  	  - [ ] Send inventory alerts for low stock or out-of-stock products
  	- [ ] Quick Access for Sellers, including:
  		- [ ] Provide shortcuts for product management (add, edit, delete)
  		- [ ] Include a direct link to order management
  		- [ ] Enable quick access to marketing tools such as promotions and ad settings
  	- [ ] Product Management UI, including:
  		- [ ] UI for adding, editing, and deleting products
  		- [ ] Drag-and-drop functionality for image uploads
  		- [ ] Category & tag selection dropdowns
  	- [ ] Storefront Customization Panel, including:
  		- [ ] UI for modifying store themes, colors, and layouts
  		- [ ] Live preview feature for store customization changes

- Marketplace & Product Display
  - [ ] Product Listing Page, including:
  	- [ ] Display product thumbnails, pricing, and brief descriptions
  	- [ ] Implement sorting and filtering options
  - [ ] Product Details Page, including:
  	- [ ] UI for viewing full product descriptions, reviews, and seller information
  	- [ ] “Add to Cart” or “Inquire” buttons

- User Interaction & Community Features
  - [ ] Reviews & Ratings UI, including:
  	- [ ] Users can rate products and leave reviews
  	- [ ] Implement a review filtering option (e.g., most helpful, recent)
  - [ ] Following System UI including:
  	- [ ] Users can follow sellers
    - [ ] UI for viewing followed stores’ updates
- Order Management UI:
	- [ ] Order Tracking Page: UI for sellers to manage order statuses (pending, shipped, completed)
	- [ ] Order Details Page: Detailed order summary, customer information, and shipping updates

**UI Enhancements & Nice-to-Have Stories/Features**:

- [ ] Advanced Search & Filtering, including:
	- [ ] UI for keyword-based product search
	- [ ] Category, tag, and rating-based filters
- [ ] Dark Mode & Theme Customization, including:
	- [ ] Implement light/dark mode toggle
  - [ ] Custom theme options for seller dashboards
- [ ] Mobile UI Optimization, including:
	- [ ] 	Mobile-friendly navigation
	- [ ] 	Adaptive UI for different screen sizes.
