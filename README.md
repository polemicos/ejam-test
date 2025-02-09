# Ejam test assignment

A simple API to obtain list of superhero employees by humility score in descending order and add new superheroes! Entities are stored in simple in-memory array. Tests are a part of CI/CD process by Github Actions.




## API Reference

API Documentation is available [here](https://ejam-test-production.up.railway.app/api-docs). It's made with APIHub and consistent with OpenAPI Specification. You can also test endpoints there.




## Demo

Also I've created a UI for this API, available [here](https://polemicos.github.io/ejam-test-front/) (and here's repo on [github](https://github.com/polemicos/ejam-test-front)).

### Desktop version
![desktop](https://github.com/polemicos/ejam-test/blob/main/public/ejam.gif)

### Mobile version

![mobile](https://github.com/polemicos/ejam-test/blob/main/public/ejam-mobile.gif)

## If had a teammate...

To efficiently collaborate, we’d divide tasks based on skill sets and priorities. One teammate could focus on the frontend (React + UI/UX) while the other handles the backend (API + database). We'd communicate through GitHub Issues, Pull Requests, possibly a shared Kanban board (like Trello) and regilar meetings.\
I believe that kind of teamwork would drastically improve overall speed and quility of the end product.
## If had more time...

If I had more time, I would focus on several key improvements and expansions for this Superhero API:

*   **Database Persistence:**  Currently, the superhero data is stored in memory.  This means that if the server restarts, all the data is lost.  I would implement a proper database solution, such as PostgreSQL, MongoDB, or even a simple file-based storage for persistence. This would ensure data is preserved across sessions.

*   **Authentication and Authorization:**  In a real-world scenario, I would add authentication and authorization to secure the API. This would allow controlling who can add superheroes and who can only view the list.  This could be implemented using JWTs or a similar mechanism.

*   **Search and Filtering:**  Adding the ability to search for superheroes by name or superpower, and to filter the list based on various criteria (e.g., humility score range), would greatly enhance the API's functionality.

*   **Rate Limiting:**  To prevent abuse and ensure the API's availability, I would implement rate limiting to restrict the number of requests a user can make within a given time frame.

