const holidays = {
    1: {1: "Nový rok | Den obnovy samostatného českého státu"},
    2: {},
    3: {},
    4: {},
    5: {1: "Svátek práce",8: "Den vítězství"},
    6: {},
    7: {5: "Den slovanských věrozvěstů Cyrila a Metoděje", 6: "Den upálení mistra Jana Husa"},
    8: {},
    9: {28: "Den české státnosti"},
    10: {28: "Den vzniku samostatného československého státu"},
    11: {17: "Den boje za svobodu a demokracii"},
    12: {24: "Štědrý den", 25: "1. svátek vánoční", 26: "2. svátek vánoční"},
};

/*
    30. 3. 2018
    2. 4. 2018
 */

const easterFriday = "Velký pátek";
const easterMonday = "Velikonoční pondělí";

const easters = {
    2018: {3: {30: easterFriday}, 4: {2: easterMonday}},
    2019: {4: {19: easterFriday, 22: easterMonday}},
    2020: {4: {10: easterFriday, 13: easterMonday}},
    2021: {4: {2: easterFriday, 5: easterMonday}},
    2022: {4: {15: easterFriday, 18: easterMonday}},
    2023: {4: {7: easterFriday, 10: easterMonday}},
    2024: {3: {29: easterFriday}, 4: {1: easterMonday}},
    2025: {4: {18: easterFriday, 12: easterMonday}},
};

class CzechHolidays{

    static getEaster = (date) => {
        let year = easters[date.getFullYear()];
        if(year === undefined) {return undefined;}
        let month = year[date.getMonth() + 1];
        if(month === undefined) {return undefined;}
        return month[date.getDate()];
    };

    static getHoliday = (date) => {
        let easter = CzechHolidays.getEaster(date);
        let otherHoliday = holidays[date.getMonth() + 1][date.getDate()];

        if(easter !== undefined){
            return easter;
        }

        return otherHoliday;
    };

    static isEaster = (date) => {
        return CzechHolidays.getEaster(date) !== undefined;
    };

    static isHoliday = (date) => {
        return CzechHolidays.getHoliday(date) !== undefined;
    }

}

export default CzechHolidays;