const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser")

const port = 8000
const app = express()

app.use(cors())
app.use(bodyParser.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moomeadows'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.get('/API/v1/Moomeadows', (req, res) => {
    res.send("API MOOMEADOWS FARM")
})

app.get('/API/v1/Moomeadows/Babi', (req, res) => {
    const sql = "SELECT * FROM babi"
    db.query(sql, (err, result) => {
        res.send(result)
    })
})

app.post('/API/V1/Moomeadows/Babi', (req, res) => {
    const { jenisBabi, jenisKelamin, umur, berat, kondisi } = req.body
    const sql = `INSERT INTO Babi (jenis_babi, jenis_kelamin, umur, berat, kondisi) VALUES 
    ('${jenisBabi}', '${jenisKelamin}', ${umur}, ${berat}, '${kondisi}')`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses')
})

app.put('/API/V1/Moomeadows/Babi', (req, res) => {
    const { kondisi, idbabi } = req.body
    const sql = `UPDATE babi SET kondisi = '${kondisi}' WHERE idbabi = ${idbabi}`

    db.query(sql, (err, fields) => {
        if (err) throw err
        res.send("data updated")
    })

})

app.delete('/API/V1/Moomeadows/Babi/:idbabi', (req, res) => {
    const idbabi = req.params.idbabi
    const sql = `DELETE FROM babi WHERE idbabi = ${idbabi};`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses di Hapus')
})

app.get('/API/v1/Moomeadows/Kesehatan_Babi', (req, res) => {
    const sql = "SELECT * FROM kesehatan_babi"
    db.query(sql, (err, result) => {
        res.send(result)
    })
})

app.post('/API/v1/Moomeadows/Kesehatan_Babi', (req, res) => {
    const { idbabi, tanggal_sakit, penyakit, penanganan } = req.body
    const sql = `INSERT INTO kesehatan_babi (idbabi, tanggal_sakit, penyakit, penanganan) VALUES 
    ('${idbabi}', '${tanggal_sakit}', '${penyakit}','${penanganan}')`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('data sukses')
    })
})

app.put('/API/v1/Moomeadows/Kesehatan_Babi', (req, res) => {
    const { penanganan, idkesehatan } = req.body
    const sql = `UPDATE kesehatan_babi SET penanganan = '${penanganan}' WHERE idkesehatan = ${idkesehatan}`

    db.query(sql, (err, fields) => {
        if (err) throw err
        res.send("data updated")
    })
})

app.delete('/API/V1/Moomeadows/Kesehatan_Babi/:idkesehatan', (req, res) => {
    const idkesehatan = req.params.idkesehatan
    const sql = `DELETE FROM kesehatan_babi WHERE idkesehatan = ${idkesehatan};`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses di Hapus')
})

app.get('/API/v1/Moomeadows/Kambing', (req, res) => {
    const sql = "SELECT * FROM kambing"
    db.query(sql, (err, result) => {
        res.send(result)
    })
})

app.post('/API/V1/Moomeadows/kambing', (req, res) => {
    const { jenisKambing, jenisKelamin, umur, berat, kondisi } = req.body
    const sql = `INSERT INTO kambing (jenis_kambing, jenis_kelamin, umur, berat, kondisi) VALUES 
    ('${jenisKambing}', '${jenisKelamin}', ${umur}, ${berat}, '${kondisi}')`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses')
})

app.put('/API/V1/Moomeadows/Kambing', (req, res) => {
    const { kondisi, idkambing } = req.body
    const sql = `UPDATE kambing SET kondisi = '${kondisi}' WHERE idkambing = ${idkambing}`

    db.query(sql, (err, fields) => {
        if (err) throw err
        res.send("data updated")
    })

})

app.delete('/API/V1/Moomeadows/Kambing/:idkambing', (req, res) => {
    const idkambing = req.params.idkambing
    const sql = `DELETE FROM kambing WHERE idkambing = ${idkambing};`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses di Hapus')
})

app.get('/API/v1/Moomeadows/Kesehatan_Kambing', (req, res) => {
    const sql = "SELECT * FROM kesehatan_kambing"
    db.query(sql, (err, result) => {
        res.send(result)
    })
})

app.post('/API/v1/Moomeadows/Kesehatan_Kambing', (req, res) => {
    const { idkambing, tanggal_sakit, penyakit, penanganan } = req.body
    const sql = `INSERT INTO kesehatan_kambing (idkambing, tanggal_sakit, penyakit, penanganan) VALUES 
    ('${idkambing}', '${tanggal_sakit}', '${penyakit}','${penanganan}')`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('data sukses')
    })
})

app.put('/API/v1/Moomeadows/Kesehatan_Kambing', (req, res) => {
    const { penanganan, idkesehatan } = req.body
    const sql = `UPDATE kesehatan_kambing SET penanganan = '${penanganan}' WHERE idkesehatan = ${idkesehatan}`

    db.query(sql, (err, fields) => {
        if (err) throw err
        res.send("data updated")
    })
})

app.delete('/API/V1/Moomeadows/Kesehatan_Kambing/:idkesehatan', (req, res) => {
    const idkesehatan = req.params.idkesehatan
    const sql = `DELETE FROM kesehatan_kambing WHERE idkesehatan = ${idkesehatan};`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses di Hapus')
})

app.get('/API/v1/Moomeadows/Sapi', (req, res) => {
    const sql = "SELECT * FROM sapi"
    db.query(sql, (err, result) => {
        res.send(result)
    })
})

app.post('/API/V1/Moomeadows/Sapi', (req, res) => {
    const { jenisSapi, jenisKelamin, umur, berat, kondisi } = req.body
    const sql = `INSERT INTO sapi (jenis_sapi, jenis_kelamin, umur, berat, kondisi) VALUES 
    ('${jenisSapi}', '${jenisKelamin}', ${umur}, ${berat}, '${kondisi}')`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses')
})

app.put('/API/V1/Moomeadows/Sapi', (req, res) => {
    const { kondisi, idsapi } = req.body
    const sql = `UPDATE sapi SET kondisi = '${kondisi}' WHERE idsapi = ${idsapi}`

    db.query(sql, (err, fields) => {
        if (err) throw err
        res.send("data updated")
    })

})

app.delete('/API/V1/Moomeadows/Sapi/:idsapi', (req, res) => {
    const idsapi = req.params.idsapi
    const sql = `DELETE FROM sapi WHERE idsapi = ${idsapi};`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses di Hapus')
})

app.get('/API/v1/Moomeadows/Kesehatan_Sapi', (req, res) => {
    const sql = "SELECT * FROM kesehatan_sapi"
    db.query(sql, (err, result) => {
        res.send(result)
    })
})

app.post('/API/v1/Moomeadows/Kesehatan_Sapi', (req, res) => {
    const { idsapi, tanggal_sakit, penyakit, penanganan } = req.body
    const sql = `INSERT INTO kesehatan_sapi (idsapi, tanggal_sakit, penyakit, penanganan) VALUES 
    (${idsapi}, '${tanggal_sakit}', '${penyakit}','${penanganan}')`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('data sukses')
    })
})

app.put('/API/v1/Moomeadows/Kesehatan_Sapi', (req, res) => {
    const { penanganan, idkesehatan } = req.body
    const sql = `UPDATE kesehatan_sapi SET penanganan = '${penanganan}' WHERE idkesehatan = ${idkesehatan}`

    db.query(sql, (err, fields) => {
        if (err) throw err
        res.send("data updated")
    })
})

app.delete('/API/V1/Moomeadows/Kesehatan_Sapi/:idkesehatan', (req, res) => {
    const idkesehatan = req.params.idkesehatan
    const sql = `DELETE FROM kesehatan_sapi WHERE idkesehatan = ${idkesehatan};`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses di Hapus')
})

app.get('/API/v1/Moomeadows/Kebutuhan', (req, res) => {
    const sql = "SELECT * FROM kebutuhan"
    db.query(sql, (err, result) => {
        res.send(result)
    })
})

app.post('/API/v1/Moomeadows/Kebutuhan', (req, res) => {
    const { jenisKebutuhan, Nama, Kuantitas } = req.body
    const sql = `INSERT INTO kebutuhan (jenis_kebutuhan, nama, kuantitas) VALUES 
    ('${jenisKebutuhan}', '${Nama}','${Kuantitas}')`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('data sukses')
    })
})

app.put('/API/v1/Moomeadows/Kebutuhan', (req, res) => {
    const { kuantitas, idkebutuhan } = req.body
    const sql = `UPDATE kebutuhan SET kuantitas = '${kuantitas}' WHERE idkebutuhan = ${idkebutuhan}`

    db.query(sql, (err, fields) => {
        if (err) throw err
        res.send("data updated")
    })
})

app.delete('/API/v1/Moomeadows/Kebutuhan/:idkebutuhan', (req, res) => {
    const idkebutuhan = req.params.idkebutuhan
    const sql = `DELETE FROM kebutuhan WHERE idkebutuhan = ${idkebutuhan};`

    db.query(sql, (err, result) => {
        console.log(result)
    })
    res.send('data sukses di Hapus')
})

app.get('/API/v1/Moomeadows/Users', (req, res) => {
    const sql = `SELECT * FROM users`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send(result)
    })

})

app.post('/API/v1/Moomeadows/Users', (req, res) => {
    const { username, password } = req.body
    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`

    db.query(sql, (err, result) => {
        if (err) throw err
        if (!err) {
        res.send("Berhasil Masuk")
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})