# Skill: devopsLayer

## Infrastructure & Environment
- **Environment Variables:** Always use `.env` files. Ensure a `.env.example` is present with all required keys for AWS.
- **Service Connectivity:** Ensure the Backend can connect to PostgreSQL/MongoDB using dynamic connection strings provided by the environment.
- **Port Binding:** Use `process.env.PORT || 3030` to ensure compatibility with cloud providers.

## Dockerization
- **Multi-stage Builds:** Use multi-stage Dockerfiles to keep images lightweight and secure.
- **Optimization:** In production, do not include devDependencies. Use `NODE_ENV=production`.
- **Persistence:** Define Docker volumes for local database persistence (PostgreSQL/MongoDB) in `docker-compose.yml`.

## Deployment & Monitoring (AWS)
- **Health Checks:** Implement a `/api/health` route that checks DB connectivity and returns a 200 status.
- **Static Assets:** Ensure the Frontend (Vite) is built for production (`npm run build`) and served correctly (either via Express `static` or a CDN).
- **Automation:** When modifying GitHub Actions, ensure the workflow includes Linting, Testing, and a Build step before deployment.

## Database Operations (Ops)
- **SQL Migrations:** Since no ORM is used, maintain a `data/migrations` or `sql/` folder for schema changes.
- **Backup & Recovery:** Prioritize plans that include database backup strategies for production environments.

## Security
- **Headers:** Always use `helmet` for Express security headers.
- **Validation:** Every entry point must have input validation to prevent SQL injection (parameterized queries).