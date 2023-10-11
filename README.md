## About

A Nextjs 13 Template with a few popular and regularly used libraries already setup in case I need it
so I dont need to search for setup documentation and can look in my own project instead.

This template includes following libs:

- Redux
- Prisma
- Nextjs
- NextAuth
- Docker
- Docker compose for multiple environments
- React Query
- Shadcn UI Library

## Running Docker

- building dev: docker compose -f docker/development/docker-compose.yml build
- running dev: docker compose -f docker/development/docker-compose.yml up -d
- stopping dev: docker compose -f docker/development/docker-compose.yml down

- building prod: docker compose -f docker/production/docker-compose.yml build
- running prod: docker compose -f docker/production/docker-compose.yml up -d
- stopping prod: docker compose -f docker/production/docker-compose.yml down
