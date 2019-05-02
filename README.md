# My personal website

In `root` folder

```bash
  cp sever/config/index.js.dist server/config/index.js
```

## Start database server

Prerequisites : Follow mongodb installation (https://treehouse.github.io/installation-guides/mac/mongo-mac.html)

### Start mongodb bin

```bash
  mongod
```

### Start express server

In `root` folder (open new terminal)

```bash
  npm run serve
```

## Start VueJS server

### Install dependencies

In `app` folder (open new terminal)

```
  npm i
```

### Start hotreload server

```
  npm run serve
```