const StatCalculator = require('./statCalculator');

async function getCharacterByBaseIdRarityAndPower(player, base_id, rarity, power) {
    const statCalculator = new StatCalculator();
    await statCalculator.setGameData();
    let found = false;
    const unit = player.rosterUnit.find((unit) => unit.definitionId.includes(base_id));
    if (unit) {
        let unitPower = statCalculator.calcCharGP(unit);
        found = unit.currentRarity >= rarity && unitPower >= power;
    }
    return found;
}

function getCharacterByBaseIdRarity(player, base_id, rarity) {
    const unit = player.rosterUnit.find((unit) => unit.definitionId.includes(base_id));
    return unit ? unit.currentRarity >= rarity : false;
}

async function countByMinRarity(player, baseIds, rarity, requiredCount, totalCount) {
    const results = await Promise.all(baseIds.map((id) => getCharacterByBaseIdRarity(player, id, rarity)));
    const countTrue = results.filter(Boolean).length;

    if (countTrue >= requiredCount) {
        totalCount++;
    }
    return totalCount;
}

async function countByMinRarityAndPower(player, baseIds, rarity, power, requiredCount, totalCount) {
    const results = await Promise.all(baseIds.map((id) => getCharacterByBaseIdRarityAndPower(player, id, rarity, power)));
    const countTrue = results.filter(Boolean).length;

    if (countTrue >= requiredCount) {
        totalCount++;
    }
    return totalCount;
}

module.exports = {
    getCharacterByBaseIdRarityAndPower,
    getCharacterByBaseIdRarity,
    countByMinRarity,
    countByMinRarityAndPower
};
