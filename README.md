# Events list

## About

Events list is small but full fledged app build with React and Express allowing user to document events and save it in sqlite db.

### Built With

- [React.js](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)

## Prerequisites

To run this application you need couple of packages installed first:

- Node.js version at least 14 with npm version 7.2
- sqlite3

## Installation

1. Clone the repo

```sh
git clone https://github.com/eabald/events-list.git && cd events-list
```

2. Install main npm packages

```sh
npm install
```

3. Install client npm packages

```sh
cd src/public && npm install
```

4. Create database file in project root

```sh
touch db.sqlite
```

5. Create .env file

```sh
cp .env.example .env
```

## Development mode

To start app in development mode run in project root:

```sh
npm run start:dev
```

Backend api is available in:

```url
http://localhost:5000/api
```

Client app:

```url
http://localhost:300
```

## Build and run in production mode

To run app in production mode:

1. Make database setup script executable

```sh
chmod +x setup_database.sh
```

2. Run database setup script

```sh
./setup_database.sh
```

3. Run build script

```sh
npm run build
```

4. Start app

```sh
npm run start:prod
```

App is available on

```url
http://localhost:5000
```

## Tests

TODO
