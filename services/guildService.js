const axios = require('axios');

async function getGuildById(id) {
    const payload = {
        payload: {
            guildId: id,
            includeRecentGuildActivityInfo: true
        },
        enums: false
    };

    const axiosResponse = await axios.post('https://swgoh-comlink.metpnas.fr/guild', payload);
    const guild = axiosResponse.data.guild;
    return guild;
}

module.exports = {
    getGuildById
};
