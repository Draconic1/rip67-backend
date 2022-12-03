module.exports = {
  HOST: "localhost",
  USER: "labwork",
  PASSWORD: "123",
  DB: "labwork",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
