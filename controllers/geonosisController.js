const geonosisService = require('../services/geonosisService');
const playerHelper = require('../helper/player.helper');

const getNumberOfGeoOver6Stars = async (request, response) => {
    const guildId = request.params.guildId;
    const playersProfile = await playerHelper.getPlayersFromGuildId(guildId);

    const results = await Promise.all(playersProfile.map((player) => geonosisService.countGeosByMinRarityAndPlayer(player, 6)));
    const geosOver6 = results.reduce((acc, val) => acc + val, 0);

    response.send({ geosOver6 });
};

const getNumberOfDookuAndAsajjOver6StarAnd16k5GP = async (request, response) => {
    const guildId = request.params.guildId;
    const playersProfile = await playerHelper.getPlayersFromGuildId(guildId);

    const results = await Promise.all(playersProfile.map((player) => geonosisService.countDookuAsajjByMinRarityAndPowerAndPlayer(player, 6, 16500)));
    const dookuAsajjOver6And16500 = results.reduce((acc, val) => acc + val, 0);

    response.send({ dookuAsajjOver6And16500 });
};

const getGGTeamAt7Stars = async (request, response) => {
    const guildId = request.params.guildId;
    const playersProfile = await playerHelper.getPlayersFromGuildId(guildId);

    const results = await Promise.all(playersProfile.map((player) => geonosisService.countGGTeamByMinRarityAndPlayer(player, 7)));
    const grievousTeam = results.reduce((acc, val) => acc + val, 0);

    response.send({ grievousTeam });
};

const getDookuAndTeamOver7And16K5 = async (request, response) => {
    const guildId = request.params.guildId;
    const playersProfile = await playerHelper.getPlayersFromGuildId(guildId);

    const results = await Promise.all(
        playersProfile.map((player) => geonosisService.countDookuAndSepTeamByMinRarityAndPowerAndPlayer(player, 7, 16500))
    );
    const dookuAndSepOver7And16500 = results.reduce((acc, val) => acc + val, 0);

    response.send({ dookuAndSepOver7And16500 });
};

module.exports = {
    getNumberOfGeoOver6Stars,
    getNumberOfDookuAndAsajjOver6StarAnd16k5GP,
    getGGTeamAt7Stars,
    getDookuAndTeamOver7And16K5
};
