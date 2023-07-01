const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
app.use(cors());

const workers = JSON.stringify([
    { id: 1, name: "Mark Zuckerberg" },
    { id: 2, name: "Bill Gates" },
    { id: 3, name: "Albert Einstein" },
    { id: 4, name: "Next Shein" },
    { id: 5, name: "Ali Express" }
]);

const flights1 = JSON.stringify([
    { num: "5A", from: "Israel", to: "USA", from_date: "01/02/2023", to_date: "02/02/2023",
        plane: "AB2", duration: 670, from_gate: 2, to_gate: 3 },
    { num: "6B", from: "Japan", to: "Russia", from_date: "15/05/2023", to_date: "16/05/2023",
        plane: "F4", duration: 2260, from_gate: 4, to_gate: 6 },
    { num: "7C", from: "London", to: "Egypt", from_date: "23/10/2023", to_date: "24/10/2023",
        plane: "D7", duration: 8890, from_gate: 6, to_gate: 9 },
    { num: "8D", from: "China", to: "Italy", from_date: "14/07/2023", to_date: "14/07/2023",
        plane: "G3", duration: 450, from_gate: 8, to_gate: 18 },
    { num: "9E", from: "France", to: "Cuba", from_date: "17/06/2023", to_date: "17/06/2023",
        plane: "OI8", duration: 55, from_gate: 10, to_gate: 1 }
]);

const flights2 = JSON.stringify([
    { num: "B6", from: "Japan", to: "Russia", from_date: "15/05/2023", to_date: "16/05/2023",
        plane: "F4", duration: 2260, from_gate: 4, to_gate: 6 },
    { num: "C7", from: "London", to: "Egypt", from_date: "23/10/2023", to_date: "24/10/2023",
        plane: "D7", duration: 8890, from_gate: 6, to_gate: 9 },
    { num: "D8", from: "China", to: "Italy", from_date: "14/07/2023", to_date: "14/07/2023",
        plane: "G3", duration: 450, from_gate: 8, to_gate: 18 },
    { num: "E9", from: "France", to: "Cuba", from_date: "17/06/2023", to_date: "17/06/2023",
        plane: "OI8", duration: 55, from_gate: 10, to_gate: 1 },
    { num: "5A", from: "Israel", to: "USA", from_date: "01/02/2023", to_date: "02/02/2023",
        plane: "AB2", duration: 670, from_gate: 2, to_gate: 3 }
]);

const flights3 = JSON.stringify([
    { num: "7D", from: "London", to: "Egypt", from_date: "23/10/2023", to_date: "24/10/2023",
        plane: "D7", duration: 8890, from_gate: 6, to_gate: 9 },
    { num: "8E", from: "China", to: "Italy", from_date: "14/07/2023", to_date: "14/07/2023",
        plane: "G3", duration: 450, from_gate: 8, to_gate: 18 },
    { num: "9F", from: "France", to: "Cuba", from_date: "17/06/2023", to_date: "17/06/2023",
        plane: "OI8", duration: 55, from_gate: 10, to_gate: 1 },
    { num: "5G", from: "Israel", to: "USA", from_date: "01/02/2023", to_date: "02/02/2023",
        plane: "AB2", duration: 670, from_gate: 2, to_gate: 3 },
    { num: "6H", from: "Japan", to: "Russia", from_date: "15/05/2023", to_date: "16/05/2023",
        plane: "F4", duration: 2260, from_gate: 4, to_gate: 6 }
]);

const flights4 = JSON.stringify([
    { num: "7D", from: "China", to: "Italy", from_date: "14/07/2023", to_date: "14/07/2023",
        plane: "G3", duration: 450, from_gate: 8, to_gate: 18 },
    { num: "8E", from: "France", to: "Cuba", from_date: "17/06/2023", to_date: "17/06/2023",
        plane: "OI8", duration: 55, from_gate: 10, to_gate: 1 },
    { num: "4A", from: "Israel", to: "USA", from_date: "01/02/2023", to_date: "02/02/2023",
        plane: "AB2", duration: 670, from_gate: 2, to_gate: 3 },
    { num: "5B", from: "Japan", to: "Russia", from_date: "15/05/2023", to_date: "16/05/2023",
        plane: "F4", duration: 2260, from_gate: 4, to_gate: 6 },
    { num: "8C", from: "London", to: "Egypt", from_date: "23/10/2023", to_date: "24/10/2023",
        plane: "D7", duration: 8890, from_gate: 6, to_gate: 9 }
]);

const flights5 = JSON.stringify([
    { num: "10E", from: "France", to: "Cuba", from_date: "17/06/2023", to_date: "17/06/2023",
        plane: "OI8", duration: 55, from_gate: 10, to_gate: 1 },
    { num: "6A", from: "Israel", to: "USA", from_date: "01/02/2023", to_date: "02/02/2023",
        plane: "AB2", duration: 670, from_gate: 2, to_gate: 3 },
    { num: "5B", from: "Japan", to: "Russia", from_date: "15/05/2023", to_date: "16/05/2023",
        plane: "F4", duration: 2260, from_gate: 4, to_gate: 6 },
    { num: "8C", from: "London", to: "Egypt", from_date: "23/10/2023", to_date: "24/10/2023",
        plane: "D7", duration: 8890, from_gate: 6, to_gate: 9 },
    { num: "9D", from: "China", to: "Italy", from_date: "14/07/2023", to_date: "14/07/2023",
        plane: "G3", duration: 450, from_gate: 8, to_gate: 18 }
]);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/workers', function(req, res) {
    res.send(workers);
});

app.get('/flights/:worker_id', function(req, res) {
    switch (req.params.worker_id) {
        case "1":
            res.send(flights1);
            break;
        case "2":
            res.send(flights2);
            break;
        case "3":
            res.send(flights3);
            break;
        case "4":
            res.send(flights4);
            break;
        case "5":
            res.send(flights5);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error: "Resource not found"}));
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
