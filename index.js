const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use (bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.send('Halo, ini program REST API pertama saya');
})

app.post('/siswa', (req,res) => {
    let nama = req.body.nama;
    res.end(`Menampilkan siswa baru: ${nama}`);
})

app.put('/siswa/:id', (req,res) => {
    let id = req.params.id;
    let nama = req.body.nama;
    res.end(`id ${id} telah diupdate dengan nama ${nama}`);
})

app.delete('/siswa/:id', (req,res) => {
    let id = req.params.id;
    let nama = req.body.nama;
    res.end(`Siswa dengan id ${id} dan nama ${nama} telah dihapus`)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})