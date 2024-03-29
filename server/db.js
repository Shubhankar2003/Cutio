import sqlite3 from 'sqlite3'

const DBSOURCE = './db.sqlite'

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err){
        console.error('Database Connection Error: ', err.message)
    }else{
        console.log('Connected to SQLite database')
    }
})

// Creating table with specific requirements
export const setUp = () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Links (
        ID TEXT PRIMARY KEY,
        URL TEXT NOT NULL
    )
    `
    
    db.run(createTableQuery, (err) => {
        if(err){
            console.log('Error Creating Table: ', err)
        }else{
            console.log('Table Created Successfully')
        }
    })
}

// Creating function to insert into table


// generating unique id for each link
function generateUniqueId(length = 8) {
    const randomString = Math.random().toString(36).slice(2, 2 + length);
    return randomString;
}

export const insertLink = (url) => {
    try{
        const urlPattern = /^(https?):\/\/(www\.)?([a-zA-Z0-9\-.]+\.)([a-zA-Z0-9-.]+)\/?([a-zA-z0-9\/?=%&-]+)?$/;
        const result = urlPattern.test(url)
        if(result){
            const id = generateUniqueId()
            const insertQuery = `
            INSERT INTO Links (ID, URL) VALUES (?, ?)
            `
            db.run(insertQuery, [id,url], (err) => {
                if (err){
                    return console.error(err.message)
                }else{
                    console.log(`Link Inserted Successfully with id ${id}`)
                }
            })
            return id
        }else{
            throw new Error('Invalid URL')
        }
    }catch(error){
        console.error(error)
    }
}

export const query = async (id) => {
    try{
        const idRegex = /^[a-zA-Z0-9]{8}$/;
        if (!idRegex.test(id)) {
            throw new Error('Invalid id');
        }

        const selectQuery = `
        SELECT * FROM LINKS WHERE ID = ?
        `
        const row = await new Promise((resolve, reject) => {
            db.get(selectQuery, [id], (err, row) => {
                if(err){
                    reject(err)
                    return console.error(err.message)
                }
                if(row){
                    resolve(row.URL)
                }else{
                    resolve(null)
                }
            })
        })
        return row
    }catch (error){
        console.error(error)
    }
}

export const shutDown = () => db.close()