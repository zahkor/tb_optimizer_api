const axios = require('axios');

async function getMemberProfile(id) {
    const payload = {
        payload: {
            playerId: id
        },
        enums: false
    };

    const axiosResponse = await axios.post('https://swgoh-comlink.metpnas.fr/player', payload);
    const member = axiosResponse.data;
    return member;
}

async function getMembersFromGuild(guild) {
    const membersPlayerIds = guild.member.map((member) => member.playerId);
    const playersProfile = await Promise.all(membersPlayerIds.map((id) => getMemberProfile(id)));
    return playersProfile;
}

module.exports = {
    getMemberProfile,
    getMembersFromGuild
};
