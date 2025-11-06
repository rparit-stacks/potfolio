# Eventura

Eventura is a comprehensive movie ticket booking system built with Spring Boot. It provides a robust and scalable backend with a RESTful API to manage the entire lifecycle of booking movie tickets.

The application is designed around a core domain model that includes:
*   **Movies**: Information about movies, including title, genre, language, and status.
*   **Theaters**: Represents the physical locations where movies are shown.
*   **Screens**: Individual screens within a theater.
*   **Shows**: Specific showtimes for a movie on a particular screen.
*   **Seats**: The layout and availability of seats for each screen.
*   **Bookings**: Manages user reservations for specific shows and seats.
*   **Payments**: Handles the financial transactions associated with bookings.
*   **Users**: Manages user accounts and authentication.

This structure allows users to perform actions such as:
*   Browsing available movies and filtering them by various criteria.
*   Viewing showtimes for a selected movie in different theaters.
*   Selecting seats for a particular show.
*   Making a booking and completing the payment.
*   Viewing their booking history.
*   Canceling a booking.

The API is designed with a clear and consistent structure, using Data Transfer Objects (DTOs) for handling requests and responses. It also includes features like pagination for endpoints that return lists of resources, ensuring efficient data retrieval.

## Technologies Used

* Java 21
* Spring Boot 3.5.6
* Spring Data JPA
* Spring Web
* Spring Security
* MySQL

## Getting Started

### Prerequisites

* Java 21 or later
* Maven 3.6.3 or later
* MySQL 8.0 or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/eventura.git
```

2. Create a MySQL database named `eventura`.

3. Configure the database connection in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/eventura
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
```

4. Build the project:

```bash
mvn clean install
```

5. Run the application:

```bash
mvn spring-boot:run
```

The application will be available at `http://localhost:8080`.

## API Endpoints

### Booking Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/bookings` | Create a new booking. |
| `GET` | `/bookings/{id}` | Get a booking by ID. |
| `PUT` | `/bookings/{id}` | Update a booking. |
| `PUT` | `/bookings/{id}/cancel` | Cancel a booking. |
| `GET` | `/bookings/users/{userId}` | Get all bookings for a user. |
| `GET` | `/bookings/{bookingId}/payments` | Get all payments for a booking. |

### Movie Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/movies` | Create a new movie. |
| `GET` | `/movies/{id}` | Get a movie by ID. |
| `PUT` | `/movies/{id}` | Update a movie. |
| `DELETE` | `/movies/{id}` | Delete a movie. |
| `GET` | `/movies` | Get all movies with optional filters. |

### Payment Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/payments` | Create a new payment. |
| `GET` | `/payments/{id}` | Get a payment by ID. |

### Screen Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/screens` | Create a new screen. |
| `GET` | `/screens/{id}` | Get a screen by ID. |
| `PUT` | `/screens/{id}` | Update a screen. |
| `DELETE` | `/screens/{id}` | Delete a screen. |
| `GET` | `/screens/{screenId}/seats` | Get all seats for a screen. |

### Seat Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/seats` | Create a new seat. |
| `GET` | `/seats/{id}` | Get a seat by ID. |
| `PUT` | `/seats/{id}` | Update a seat. |
| `DELETE` | `/seats/{id}` | Delete a seat. |
