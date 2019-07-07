const superagent = require('superagent');
const cheerio = require('cheerio');

const reptileUrl = 'http://m.gooddy.me/juqing.html';

superagent.get(reptileUrl).end(function(err,res){
	if(err){
		//return throw Error(err);
	}

	//console.log(res.text);
	let $ = cheerio.load(res.text);

	$('.video-list li').each(function(i,elem){
		console.log($(elem).find('a').attr('href'));
	});
});