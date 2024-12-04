import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    await dbRun("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT ,email TEXT, class TEXT)");

    const users = [
        { firstName: "John", lastName: "Doe", email: "john.doe@example.com",class:"2E" },
        { firstName: "Mercedes", lastName: "Benz", email: "sls_amg@example.com",class:"S" },
        { firstName: "John", lastName: "Wick", email: "continental@example.com",class:"E" },
    ];

    for (const user of users) {
        await dbRun("INSERT INTO users (firstName, lastName, email, class) VALUES (?, ?)", [user.firstNamename, user.lastName, user.email, user.class]);
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