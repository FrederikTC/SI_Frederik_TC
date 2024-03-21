// Mit forsøg på at parse i typescript
function parseCSV(filename: string): void {
    const fs = require('fs');
    fs.readFile(filename, 'utf-8', (err: any, data: string) => {
        const lines = data.split('\n');
        const header = lines[0].split(',');
        const parsedData = lines.slice(1).map((line: string) => {
            const values = line.split(',');
            const item: any = {};
            header.forEach((key, index) => {
                item[key] = values[index];
            });
            return item;
        });
        console.log(parsedData);
    });
}

function parseJSON(filename: string): void {
    const fs = require('fs');
    fs.readFile(filename, 'utf-8', (err: any, data: string) => {
        console.log(data);
    });
}

function parseYAML(filename: string): void {
    const fs = require('fs');
    fs.readFile(filename, 'utf-8', (err: any, data: string) => {
        console.log(data);
    });
}

function parseXML(filename: string): void {
    const fs = require('fs');
    const xml = require('xml2js');
    fs.readFile(filename, 'utf-8', (err: any, data: string) => {
        xml.parseString(data, (err: any, result: any) => {
            console.log(result);
        });
    });
}

function parseTXT(filename: string): void {
    const fs = require('fs');
    fs.readFile(filename, 'utf-8', (err: any, data: string) => {
        const lines = data.split('\n');
        const header = lines[0].split(',');
        const parsedData = lines.slice(1).map((line: string) => {
            const values = line.split(',');
            const item: any = {};
            header.forEach((key, index) => {
                item[key] = values[index];
            });
            return item;
        });
        console.log(parsedData);
    });
}

const csvFile = 'me.csv';
const jsonFile = 'me.json';
const yamlFile = 'me.yaml';
const xmlFile = 'me.xml';
const txtFile = 'me.txt';

parseCSV(csvFile);
parseJSON(jsonFile);
parseYAML(yamlFile);
parseXML(xmlFile);
parseTXT(txtFile)