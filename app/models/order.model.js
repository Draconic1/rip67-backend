module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("order", {
    status: {
      type: Sequelize.INTEGER,
    },
    movie_id: {
      type: Sequelize.INTEGER,
      references: sequelize.movies,
    },
    seat_id: {
      type: Sequelize.INTEGER,
      references: sequelize.seats,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: sequelize.users,
    },
  });

  Model.statusEnum = [
    { val: 1, name: "В корзине" },
    { val: 2, name: "Оплачен" },
  ];

  return Model;
};
