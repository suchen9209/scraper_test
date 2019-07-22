const superagent = require('superagent');
const cheerio = require('cheerio');
const gboc = require('./scraper/a');

var request = require('request');
var http = require('http');
var url = require('url');
var fs = require("fs");
var path = require('path')


const dirname = 'uploadImages'
const hostdir = "../download_img/"

var detailUrl = 'https://www.youtube.com/watch?v=VlgZi1UHk_E';
superagent.get(detailUrl).end(function(err,res){
	if(err){
		//return throw Error(err);
	}

	console.log(res.text);
	let $ = cheerio.load(res.text);

	$('#content').each(function(i,elem){
		console.log(elem);

	});
	// $('.video-list li').each(function(i,elem){
	// 	console.log($(elem).find('a').attr('href'));
	// });
});

function mkdirSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirname))) {   
            fs.mkdirSync(dirname);
            return true;
        }
    }
    return false
}

