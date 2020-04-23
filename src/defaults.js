let predefined;


const commonNames = {
    "3shift": {
        colors: ["#27ae60", "#27ae60", "#e67e22", "#e67e22", "#2c3e50", "#2c3e50", "#2980b9", "#2980b9"],
        names: ["R", "R", "O", "O", "N", "N", "-", "-"]
    },
    "3shiftAlternative": {
        colors: ["#27ae60", "#27ae60", "#2c3e50", "#2c3e50", "#e67e22", "#e67e22", "#2980b9", "#2980b9"],
        names: ["R", "R", "N", "N", "O", "O",  "-", "-"]
    },
    "3shift-all": {
        colors: ["#27ae60", "#27ae60", "#e67e22", "#e67e22", "#2c3e50", "#2c3e50", "#2980b9", "#2980b9"],
        names: ["ABC", "ABC", "DAB", "DAB", "CDA", "CDA", "BCD", "BCD"]
    },
    "3shiftWithWeekends": {
        colors: ["#27ae60", "#27ae60", "#27ae60", "#27ae60", "#27ae60", "#2980b9",  "#2980b9", "#e67e22", "#e67e22", "#2c3e50", "#2c3e50", "#2c3e50", "#2980b9", "#2980b9", "#2c3e50", "#2c3e50", "#e67e22", "#e67e22", "#e67e22", "#2980b9",  "#2980b9"],
        names: ["R", "R", "R", "R", "R", "-",  "-", "O", "O", "N", "N", "N", "-", "-", "N", "N", "O", "O", "O", "-",  "-"]
    },

};



predefined = [
    { name: "Železárny A", days: 8, offset: 1, scheme: commonNames["3shift"] },
    { name: "Železárny B", days: 8, offset: 3, scheme: commonNames["3shift"] },
    { name: "Železárny C", days: 8, offset: 5, scheme: commonNames["3shift"] },
    { name: "Železárny D", days: 8, offset: 7, scheme: commonNames["3shift"] },
    { name: "Železárny nové A", days: 8, offset: 1, scheme: commonNames["3shiftAlternative"] },
    { name: "Železárny nové B", days: 8, offset: 3, scheme: commonNames["3shiftAlternative"] },
    { name: "Železárny nové C", days: 8, offset: 5, scheme: commonNames["3shiftAlternative"] },
    { name: "Železárny nové D", days: 8, offset: 7, scheme: commonNames["3shiftAlternative"] },
    { name: "Železárny A Ostrava", days: 21, offset: 17, scheme: commonNames["3shiftWithWeekends"] },
    { name: "Železárny B Ostrava", days: 21, offset: 3, scheme: commonNames["3shiftWithWeekends"] },
    { name: "Železárny C Ostrava", days: 21, offset: 10, scheme: commonNames["3shiftWithWeekends"] },
    /*{ name: "Železárny souhrn (zatím nefunkční!)", days: 8, offset: 1, scheme: commonNames["3shift-all"] },*/
];


export default predefined;