import sqlite3 from "sqlite3";

const db= new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    await dbRun("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, nev TEXT, evelo BOOLEAN, kategoria TEXT, ar INTEGER)");

    const plants = [
        {nev: "Tulipán" , evelo: true, kategoria: "virág", ar: 1000},
        {nev: "Tölgyfa" , evelo: false, kategoria: "fa", ar: 2000},
        {nev: "Málna" , evelo: true, kategoria: "bokor", ar: 3000},
    ];
        for (const plant of plants) {
            await dbRun("INSERT INTO plants (nev, evelo, kategoria, ar) VALUES (?, ?, ?, ?)", [plant.nev, plant.evelo, plant.kategoria, plant.ar]);
        }
};

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { db, dbQuery, dbRun, initializeDB };