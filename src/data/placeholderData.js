export const data = {
    characters: [
        {
            id: 1,
            name: 'Kirill',
            class: 'Shaman',
            race: 'Barbarian',
            level: 11
        },
        {
            id: 2,
            name: 'Merill',
            class: 'Ranger',
            race: 'Half-elf',
            level: 3
        }
    ], 
    equipment: [
        {
            id: 1,
            character: 'Merill',
            name: 'Short Sword of the Ykesha',
            slot: 'Primary/Secondary',
            skill: '1 Hand Slashing',
            damage: 8,
            delay: 24,
            effect: 'Ykesha'
        },
        {
            id: 2,
            character: 'Kirill',
            name: 'Darksea Harpoon',
            slot: 'Primary/Range',
            skill: '1 Hand Piercing',
            damage: 10,
            delay: 28,
            str: 5,
            wis: 5,
            mana: 20,
            svdisease: 5,
        }
    ]
}