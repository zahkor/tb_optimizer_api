const guildService = require('../services/guildService');
const memberService = require('../services/memberService');

async function getPlayersFromGuildId(guildId) {
    const guild = await guildService.getGuildById(guildId);
    const playersProfile = await memberService.getMembersFromGuild(guild);
    return playersProfile;
}

module.exports = {
    getPlayersFromGuildId
};

