const express = require('express');
const app = express();
const path = require('path');
const fileName = './src/api/recipes.json'

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/add', (req, res) => {
    addRecipe(req.body).then(data => {
        res.end("added");
    });
})

async function addRecipe(body){
    await writeData(body, fileName);
}

async function writeData(data, filename) {
    const fs = require('fs').promises;
    const jsonContent = JSON.stringify(data);
    console.log(jsonContent);
    await fs.writeFile(filename, jsonContent, 'utf8', function (err) {
        if (err)
            return console.log(err);
    });
}


app.listen(5000, () => {
    console.log("server started on port 5000");
});