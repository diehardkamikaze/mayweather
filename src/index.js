import Post from './Post';
import './styles/styles.css';
import weather from './assets/weather.json';
import ryan from './assets/ry.jpg';
import xml from './assets/ry.xml';
import csv from './assets/weather.csv';

const post = new Post('WebPack test', ryan);

console.log(post);
console.log("XML", xml);
console.log("CSV", csv);