# 2022_qa_bootcamp

Cypress project for Cypress Homework 2.

Secrets for login are managed using as-a. More instructions below.

# Quick start

Install dependencies on root directory:

```
npm install
```

# Convenience NPM Scripts

Open Cypress on interactive mode

```
npm run cypress
```

Open Cypress without npm script using as-a secrets manager

```
npx as-a testing npx cypress open
```

Run Cypress tests on headless mode

```
npm run test
```

Run ESLint checkup

```
npm run lint
```

# Secret management

Copy "secrets.ini" file and name it .as-a.ini on source directory

On the new file .as-a.ini, write your secrets

.as-a.ini is gitignored, so it won't be tracked by git

Secrets are managed using secretsManager class on utils folder

As secrets are pass into Cypress as env variables when it's opened, it needs to be restarted to update them.

!Important Never commit your secrets
