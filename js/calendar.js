//const CALENDAR_URL = 'https://docs.google.com/spreadsheets/d/17V__c3nv5uWqeCRMaJYGzW6YmlcyoHpxxEjzlCeQJj8/gviz/tq?';
const CALENDAR_URL = 'https://docs.google.com/spreadsheets/d/16GhtkHfu62XHI-mP3p3GuJFqdTdJ7kcHTsPwdXqEnOs/gviz/tq?';

const createCellInTableRow = (row, content) => {
    const newCell = row.insertCell();
    const newText = document.createTextNode(content);
    newCell.appendChild(newText);
};

const hideRendezVousSection = event => {
    document.getElementById('rendez-vous').style.display = 'none';
    document.getElementById('menu-rendez-vous').style.display = 'none';
}

const appendEventToTable = (event) => {
    const mipeulCalendar = document.getElementById('mipeul-calendar');

    const newRow = mipeulCalendar.insertRow();

    createCellInTableRow(newRow, event.printableDate);
    createCellInTableRow(newRow, event.name);
    createCellInTableRow(newRow, event.time);
    createCellInTableRow(newRow, event.location);
};

document.addEventListener('DOMContentLoaded', event => {
    const query = 'Select A,B,C,D,E';
    const httpQuery = `${CALENDAR_URL}&tq=${encodeURIComponent(query)}`;

    fetch(httpQuery)
        .then(res => res.text())
        .then(rep => {
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

            console.log(jsonData);
            if(!jsonData.table.rows || jsonData.table.rows.length === 0){
                    hideRendezVousSection();
            } else {
                jsonData.table.rows.map(row => {
                    return event = {
                        public : row.c[0].v === 'Public',
                        name : row.c[1].v,
                        printableDate : row.c[2] ? row.c[2].f : '??',
                        date : row.c[2] ? eval("new " + row.c[2].v) : null,
                        time : row.c[3].v,
                        location : row.c[4].v,
                    } })
                    .filter(event => event.public && event.date && event.date >= Date.now())
                    .sort((event1, event2) => event1.date - event2.date)
                    .forEach(event => {
                        appendEventToTable(event);    
                    });
            }
        })
        .catch(e => {
            console.log("catch" + e);
            hideRendezVousSection();
        })
;


});
