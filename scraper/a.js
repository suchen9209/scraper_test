const superagent = require('superagent');
const cheerio = require('cheerio');

const baseUrl = 'http://www.99gboc.com';
var gboc_scraper =  function(reptileUrl){
    (async () => {
        try {
            superagent.get(reptileUrl).end(function(err,res){
                if(err){
                    return Error(err);
                }
            
                //console.log(res.text);
                let $ = cheerio.load(res.text);
            
                var li_arr = new Array();
                var name_arr = new Array();
                $('ul.e2 ul li').each(function(i,elem){
                    path = $(elem).find('a').attr('href');
                    title = $(elem).find('a').text();
                    li_arr.push(baseUrl+path);
                    name_arr.push(title)
                    console.log(li_arr);
                    console.log(title+' : '+baseUrl+path);
                });
        
                return li_arr;
            });
        } catch (err) {
          console.error(err);
        }
      })();

}

module.exports.gboc_scraper = gboc_scraper;

