<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Run dev

1. Clone repository
2. Execute

```
yarn install
```

3. Have Nest CLI install

```
npm i -g @nestjs/cli
```

4. Run database

```
docker-compose up -d
```

5. Clone **.env.template** file and rename it to **.env**

6. Fill environment variables

7. Execute application

```
yarn start:dev
```

8. Propagate database with seed

```
http://localhost:3000/api/v2/seed
```

# Stack

- MongoDB
- Nest

# Production Build

1. Create `.env.prod` file

2. Fill production environment variables

3. Create new image

```
docker-compose -f docker-compose.prod.yml --env-file .env.prod up --build
```
