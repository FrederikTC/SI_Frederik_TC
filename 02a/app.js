const express = require('express');
const fs = require('fs');
const xml2js = require('xml2js');
const yaml = require('js-yaml');

const app = express();
const port = 3000;

const dataFolderPath = 'C:\\Users\\Frede\\Desktop\\System-integration\\SI_Frederik_TC\\01a';

const readFileContents = (fileName) => {
  const filePath = `${dataFolderPath}\\${fileName}`;
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

app.get('/csv', async (req, res) => {
  try {
    const data = await readFileContents('me.csv');
    res.type('text/plain').send(data);
  } catch (error) {
    res.status(500).send('Error reading CSV file');
  }
});

app.get('/json', async (req, res) => {
  try {
    const data = await readFileContents('me.json');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).send('Error reading JSON file');
  }
});

app.get('/txt', async (req, res) => {
  try {
    const data = await readFileContents('me.txt');
    res.type('text/plain').send(data);
  } catch (error) {
    res.status(500).send('Error reading TXT file');
  }
});

app.get('/xml', async (req, res) => {
  try {
    const data = await readFileContents('me.xml');
    xml2js.parseString(data, (err, result) => {
      if (err) res.status(500).send('Error parsing XML');
      else res.json(result);
    });
  } catch (error) {
    res.status(500).send('Error reading XML file');
  }
});

app.get('/yaml', async (req, res) => {
  try {
    const data = await readFileContents('me.yaml');
    const result = yaml.load(data);
    res.json(result);
  } catch (error) {
    res.status(500).send('Error reading YAML file');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
