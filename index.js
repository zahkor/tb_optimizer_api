const express = require('express');

const app = express();
app.use(express.json({ limit: '50mb' }));

const guildRoutes = require('./routes/guildRoutes');
const geonosisRoutes = require('./routes/geonosisRoutes');
app.use('/guild', guildRoutes);
app.use('/geonosis', geonosisRoutes);

app.listen(8080, () => {
    console.log("Serveur à l'écoute");
});
