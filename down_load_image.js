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

const reptileUrl = 'http://www.99gboc.com/jrjb/12/100.jsp';

//var test_arr = gboc.gboc_scraper(reptileUrl);
//console.log(test_arr);

var detailUrl = 'http://dota2.uuu9.com/201907/597200.shtml';
superagent.get(detailUrl).end(function(err,res){
	if(err){
		//return throw Error(err);
	}

	//console.log(res.text);
	let $ = cheerio.load(res.text);

	var imgBaseUrl = 'F:\\download_img\\1\\';
	$('div.w960 img').each(function(i,elem){
	//$('div.content img').each(function(i,elem){
		var url = $(elem).attr('src');

		const first = url.indexOf('pcgame')
      	const last = url.lastIndexOf('/')
      	if (first > 0 && last > 0) {
        	const name = url.substr(last + 1)
        	const dir = url.substr(first, last - first)
        	const dstpath = hostdir + dir + '/' + name
			if (name.length && dir.length && !fs.existsSync(dstpath)) {
				if (mkdirSync(hostdir + dir)) {
					console.log(dstpath)
					//request(url).pipe(fs.createWriteStream(dstpath))

					var writeStream=fs.createWriteStream(dstpath,{autoClose:true})
					var readStream = request(url)
					readStream.pipe(writeStream);
					readStream.on('end', function() {
						console.log(i+'文件下载成功');
					});
					readStream.on('error', function() {
						console.log("错误信息:" + err)
					})

					writeStream.on('finish',function(){
						console.log(i+'文件写入成功')
					})
				}
			}
		}


		//saveImg(url,imgBaseUrl+i+'.jpg');

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

function saveImg(url,path) {
    http.get(url,function (req,res) {
        var imgData = '';
        req.setEncoding('binary');
        req.on('data',function (chunk) {
            imgData += chunk;
        })
        req.on('end',function () {
            fs.writeFile(path,imgData,'binary',function (err) {
                console.log('保存图片成功'+path)
            })
        })
    })
}