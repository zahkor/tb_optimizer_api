// Controller functions to handle Members logic
const guildService = require('../services/guildService');
const memberService = require('../services/memberService');

// GET all members
const getMembers = async (request, response) => {
    try {
        const guildId = request.params.id;
        const guild = await guildService.getGuildById(guildId);
        const playersProfile = await memberService.getMembersFromGuild(guild);
        response.send({ playersProfile });
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
};

module.exports = {
    getMembers
};
