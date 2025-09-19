// Controller functions to handle Guild logic

const guildService = require('../services/guildService');

// GET guild by id
const getGuildById = async (request, response) => {
    try {
        const guildId = request.params.id;
        const guild = await guildService.getGuildById(guildId);
        response.send(guild);
    } catch (err) {
        reponse.status(500).json({ error: err.message });
    }
};

const getGalacticPowerStats = async (request, response) => {
    try {
        const guildId = request.params.id;
        const guild = await guildService.getGuildById(guildId);
        const guildCharactersGP = guild.member.reduce((count, player) => count + Number(player.characterGalacticPower), 0);
        const guildCharactersGPAsMillions = Math.round((guildCharactersGP / 1000000) * 10) / 10;
        const guildShipsGP = guild.member.reduce((count, player) => count + Number(player.shipGalacticPower), 0);
        const guildShipsGPAsMillions = Math.round((guildShipsGP / 1000000) * 10) / 10;
        response.send({ guildCharactersGPAsMillions, guildShipsGPAsMillions });
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
};

module.exports = {
    getGuildById,
    getGalacticPowerStats
};
