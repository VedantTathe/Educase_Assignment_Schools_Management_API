const db = require('../config/db');

exports.addSchool = (req, res) => {

  console.log(req.body);

  try {

    const { name, address, latitude, longitude } = req.body;

    if (
      typeof name !== 'string' || name.trim() === '' ||
      typeof address !== 'string' || address.trim() === '' ||
      typeof latitude !== 'number' || isNaN(latitude) ||
      typeof longitude !== 'number' || isNaN(longitude)
    ) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    db.query('insert into school (name, address, latitude, longitude) values (?,?,?,?)', [name.trim(), address.trim(), latitude, longitude], (err, result) => {
      if (err) {
        console.log("error = ", err);
        return res.status(500).json({ "error": "Database Error" });
      }

      console.log("Successfully added..!");
      return res.status(201).json({
        message: 'School added successfully',
        schoolId: result.insertId
      });
    }
    );
  }
  catch (err) {
    console.log("Error", err);
    return res.status(400).json({ "error": err });
  }
};


function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in KM
  const toRad = (value) => (value * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}



exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required.' });
  }

  const userLat = parseFloat(latitude);
  const userLon = parseFloat(longitude);

  db.query('SELECT * FROM school', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }

    const sortedSchools = results
      .map((school) => {
        const distance = calculateDistance(
          userLat,
          userLon,
          parseFloat(school.latitude),
          parseFloat(school.longitude)
        );
        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

      
    return res.json(sortedSchools);
  });
};
