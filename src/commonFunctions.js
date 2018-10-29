export function getSichta(date, days, offset){

    let dayInWeek = Math.floor(date.getTime() / (1000 * 3600 * 24));
    dayInWeek = (dayInWeek + offset) % days;
    return dayInWeek;
}

export function normalizeDate(date){
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 11));
}

export function daysInMonth (date) {
    return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}