let predefined;

if (process.env.REACT_APP_MODE === 'flat') {
    let flatWork = {colors: [], names:[]};

    for(let j of ["KŠ", "KO", "-", "OB", "KU", "PO"]){
        for(let i = 0; i < 7; i++){
            flatWork.names.push(j);
        }
    }
    for(let j of ["#2c3e50", "#7f8c8d", "#27ae60",  "#c0392b", "#2980b9", "#e67e22"]){
        for(let i = 0; i < 7; i++){
            flatWork.colors.push(j);
        }
    }

     predefined = [
        { name: "Lukáš", days: 7*6, offset: 3 + 7, scheme: flatWork },
        { name: "Tomáš", days: 7*6, offset: 3 + 2 * 7, scheme: flatWork },
        { name: "David", days: 7*6, offset: 3 + 3 * 7, scheme: flatWork },
        { name: "Dominik", days: 7*6, offset: 3 + 4 * 7, scheme: flatWork },
        { name: "Iza", days: 7*6, offset: 3 + 5 * 7, scheme: flatWork },
        { name: "Jakub", days: 7*6, offset: 3 + 6 * 7, scheme: flatWork },
    ]

} else {
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

    };



    predefined = [
        { name: "Železárny A", days: 8, offset: 1, scheme: commonNames["3shift"] },
        { name: "Železárny B", days: 8, offset: 3, scheme: commonNames["3shift"] },
        { name: "Železárny C", days: 8, offset: 5, scheme: commonNames["3shift"] },
        { name: "Železárny D", days: 8, offset: 7, scheme: commonNames["3shift"] },
        { name: "Železárny A Bohumín", days: 8, offset: 1, scheme: commonNames["3shiftAlternative"] },
        { name: "Železárny B Bohumín", days: 8, offset: 3, scheme: commonNames["3shiftAlternative"] },
        { name: "Železárny C Bohumín", days: 8, offset: 5, scheme: commonNames["3shiftAlternative"] },
        { name: "Železárny D Bohumín", days: 8, offset: 7, scheme: commonNames["3shiftAlternative"] },
        /*{ name: "Železárny souhrn (zatím nefunkční!)", days: 8, offset: 1, scheme: commonNames["3shift-all"] },*/
    ];
}

export default predefined;