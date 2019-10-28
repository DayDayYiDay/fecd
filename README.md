# fecd
[![npm version](https://img.shields.io/npm/v/fecd.svg)](https://www.npmjs.com/package/fecd)
[![Build Status](https://travis-ci.com/DayDayYiDay/fecd.svg?branch=master)](https://travis-ci.com/DayDayYiDay/fecd)
[![Coverage Status](https://coveralls.io/repos/github/DayDayYiDay/fecd/badge.svg?branch=master)](https://coveralls.io/github/DayDayYiDay/fecd?branch=master)

front end continuoud deploy
make sure you have run https://github.com/DayDayYiDay/atreus-backend on server


1. create .fecd.json like
```
{
  "server": "http://localhost:8080/upload",
  "dir": "dist"
}
```
2. after build your project run 'fecd' to deploy 'dist' folder to server
```
# fecd
⠋ making tarball
⠋ Uploading /Folder/Of/Your/Project/dist
✔ tar done
23585552731f5d6b7866f8aba67f761c78e74728dccc902b926164a6abasdfe
✔ upload success
cleaned tarball
```
