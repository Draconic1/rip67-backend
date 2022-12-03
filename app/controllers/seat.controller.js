const db = require("../models");
const Seat = db.seats;
const Op = db.Sequelize.Op;

// Create and Save a new Seat
exports.create = (req, res) => {
  // Validate request
  if (!req.body.hall) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Seat
  const obj = {
    hall: req.body.hall,
    number: req.body.number,
    row: req.body.row,
    price: req.body.price,
  };

  // Save Seat in the database
  Seat.create(obj)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Seat.",
      });
    });
};

// Retrieve all Seat from the database.
exports.findAll = (req, res) => {
  const hall = req.query.hall;
  var condition = hall ? { hall: { [Op.like]: `%${hall}%` } } : null;

  Seat.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Seats.",
      });
    });
};

// Find a single Seat with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Seat.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Seat with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Seat with id=" + id,
      });
    });
};

// Update a Seat by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Seat.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Seat was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Seat with id=${id}. Maybe Seat was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Seat with id=" + id,
      });
    });
};

// Delete a Seat with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Seat.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Seat was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Seat with id=${id}. Maybe Seat was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Seat with id=" + id,
      });
    });
};

// Delete all Seat from the database.
exports.deleteAll = (req, res) => {
  Seat.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Seats were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Seats.",
      });
    });
};
