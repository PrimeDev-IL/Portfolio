# Skill: serviceLayer

## Description
Guidelines for creating SQL-driven services, data persistence, and logic at PrimeDev. This architecture uses Raw SQL queries within the service layer to manage data models and complex aggregations.

## File Location & Pattern
- **Backend:** Place services in `services/`. Use the naming convention `domain.service.js` (e.g., `customer.service.js`).
- **Structure:** Services must be exported as an object containing async functions (e.g., `query`, `getById`, `remove`, `save`).

## SQL & Data Modeling
- **Integrated Models:** There is no `models/` folder. Data schemas are defined through Raw SQL queries (`SELECT`, `INSERT`, `UPDATE`) within the service.
- **Complexity:** Use advanced PostgreSQL features like `json_agg`, `json_build_object`, and `COALESCE` to handle nested relationships (e.g., packages within a customer) in a single query.
- **Mapping:** Always map database results (snake_case) to clean JavaScript objects (camelCase) before returning them to the controller.
- **Parameters:** Always use parameterized queries (e.g., `$1, $2`) to prevent SQL injection.

## Data Persistence Strategy
- **Backend (Remote):** Use `dbService.query` for PostgreSQL interactions. Use `JSON.stringify` for storing arrays or complex objects in SQL columns if necessary.
- **Frontend (Local):** For client-side logic, use `localStorage` and ensure safe JSON parsing with default values.
- **ID Generation:** Use a local `_makeId()` utility if a database-generated ID is not provided.

## Logic Implementation
- **Validation:** Ensure strict null-checks when extracting values from the `customer` object (e.g., `customer.personal?.fullName`).
- **Relationships:** Handle sub-entities (like `packages`) by performing secondary operations or using `JOIN` with `GROUP BY` as demonstrated in the customer service.
- **Error Handling:** Use `try/catch` blocks in every async function. Log errors using `logger.error` and rethrow them to be caught by the Express error middleware.

## Utility Functions
Refer to `src/services/util.service.ts/js` or internal service helpers for:
- `makeId(length?)`
- String/Date formatting.