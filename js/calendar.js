const CALENDAR_URL = 'https://docs.google.com/spreadsheets/d/1OzD3YcqYXDue6klV0jVroqNuHhtdyyDC7EFqzoWTKq4/gviz/tq?';

const createCellInTableRow = (row, content) => {
    const newCell = row.insertCell();
    const newText = document.createTextNode(content);
    newCell.appendChild(newText);
};

const hideRendezVousSection = event => {
    document.getElementById('rendez-vous').style.display = 'none';
}

const appendEventToTable = (event) => {
    const mipeulCalendar = document.getElementById('mipeul-calendar');

    const newRow = mipeulCalendar.insertRow();

    createCellInTableRow(newRow, event.date);
    createCellInTableRow(newRow, event.name);
    createCellInTableRow(newRow, event.location);
};

document.addEventListener('DOMContentLoaded', event => {
    const query = 'Select A,B,C';
    const httpQuery = `${CALENDAR_URL}&tq=${encodeURIComponent(query)}`;

    fetch(httpQuery)
        .then(res => res.text())
        .then(rep => {
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

            console.log(jsonData);
            if(jsonData.table.rows 
                && jsonData.table.rows.length === 1 
                && jsonData.table.rows[0].c[0].v === 'Date'){
                    hideRendezVousSection();
            } else {
                jsonData.table.rows.forEach(row => {
                    const event = {
                        date : row.c[0].f.substring(0,10),
                        name : row.c[1].v,
                        location : row.c[2].v
                    };
    
                    appendEventToTable(event);
                });
            }
        })
        .catch(_ => hideRendezVousSection())
;


});
