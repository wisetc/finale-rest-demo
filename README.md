一个基于 final-rest 的简单接口示例。

A simple restful api demo based on final-rest.

## Instruction

This demo choose MySQL as database, but you can also choose other relational database like MSSQL, PostgreSQL etc. Refer to [sequelize](http://docs.sequelizejs.com) to find more information.

## Usage

### Run server

Configure your MySQL connection in file [.env](./src/.env), then run npm scripts.

```bash
$ npm install
$ npm run dev
```

### Test server

Use postman to test the http api. Set bearer token which get from login success response data for `Authorization`.
