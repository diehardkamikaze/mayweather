import Post from '@models/Post';
console.log('t');
import * as $ from 'jquery';
import './styles/styles.css';
import weather from './assets/weather.json';
import ryan from './assets/ry.jpg';
import xml from './assets/ry.xml';
import csv from './assets/weather.csv';
import './styles/less.less'
import './babel.js'

const post = new Post('WebPack test', ryan);

console.log(post);
console.log("XML", xml);
console.log("CSV", csv);

$("pre").html(post.toString());