const unitHelper = require('../helper/unit.helper');

async function countGeosByMinRarityAndPlayer(player, rarity) {
    const totalCount = 0;
    const geonosians = ['GEONOSIANBROODALPHA', 'SUNFAC', 'GEONOSIANSOLDIER', 'GEONOSIANSPY', 'POGGLETHELESSER'];
    return unitHelper.countByMinRarity(player, geonosians, rarity, 5, totalCount);
}
async function countDookuAsajjByMinRarityAndPowerAndPlayer(player, rarity, power) {
    const totalCount = 0;
    const asajjDooku = ['ASAJVENTRESS', 'COUNTDOOKU'];
    return unitHelper.countByMinRarityAndPower(player, asajjDooku, rarity, power, 2, totalCount);
}

async function countGGTeamByMinRarityAndPlayer(player, rarity) {
    const totalCount = 0;
    const ggTeam = ['GRIEVOUS', 'B1BATTLEDROIDV2', 'B2SUPERBATTLEDROID', 'MAGNAGUARD', 'DROIDEKA', 'WATTAMBOR', 'STAP'];
    return unitHelper.countByMinRarity(player, ggTeam, rarity, 5, totalCount);
}

async function countDookuAndSepTeamByMinRarityAndPowerAndPlayer(player, rarity, power) {
    const totalCount = 0;
    const separatists = [
        'TRENCH',
        'ASAJVENTRESS',
        'B1BATTLEDROIDV2',
        'B2SUPERBATTLEDROID',
        'DROIDEKA',
        'GRIEVOUS',
        'GEONOSIANBROODALPHA',
        'GEONOSIANSOLDIER',
        'GEONOSIANSPY',
        'MAGNAGUARD',
        'JANGOFETT',
        'NUTEGUNRAY',
        'POGGLETHELESSER',
        'STAP',
        'SUNFAC',
        'WATTAMBOR'
    ];

    const dookuOk = await unitHelper.getCharacterByBaseIdRarityAndPower(player, 'COUNTDOOKU', rarity, power);
    if (!dookuOk) return totalCount;

    return unitHelper.countByMinRarityAndPower(player, separatists, rarity, power, 5, totalCount);
}

module.exports = {
    countGeosByMinRarityAndPlayer,
    countDookuAsajjByMinRarityAndPowerAndPlayer,
    countGGTeamByMinRarityAndPlayer,
    countDookuAndSepTeamByMinRarityAndPowerAndPlayer
};
