const express = require('express');
const censusRoute = express.Router();
let Census = require('../model/Census');

// Get all Census
censusRoute.route('/').get((req, res) => {
  Census.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get census: ${error}`);
      res.status(500).json({ error: 'Could not get census' });
    });
});

// Add a Census
censusRoute.route('/add-census').post((req, res) => {
  Census.create(req.body)
    .then(() => {
      console.log('Census added successfully.');
      res.status(200).json({ message: 'Census added successfully' });
    })
    .catch((error) => {
      console.error(`Could not save census: ${error}`);
      res.status(500).json({ error: 'Could not save census' });
    });
});

// Delete a Census
censusRoute.route('/delete-census/:id').delete((req, res) => {
  console.log(`Preparing to delete: ${req.params.id}`);
  Census.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Census deleted successfully.');
      res.status(200).json({ message: 'Census deleted successfully' });
    })
    .catch((error) => {
      console.error(`Could not delete census: ${error}`);
      res.status(500).json({ error: 'Could not delete census' });
    });
});

// Update a Census
censusRoute.route('/update-census/:id').put((req, res) => {
  Census.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((response) => {
      res.status(200).json({
        message: 'Census updated successfully',
        data: response
      });
    })
    .catch((error) => {
      console.error(`Could not update census: ${error}`);
      res.status(500).json({ error: 'Could not update census' });
    });
});

module.exports = censusRoute;




