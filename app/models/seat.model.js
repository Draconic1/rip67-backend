module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("seat", {
    hall: {
      type: Sequelize.INTEGER,
    },
    number: {
      type: Sequelize.INTEGER,
    },
    row: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.DOUBLE,
    },
  });

  return Model;
};
