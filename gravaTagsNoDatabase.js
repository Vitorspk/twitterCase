const Twitter = require('twitter');
const config = require('./config/twitterConfig');
const T = new Twitter(config);
const MysqlJson = require('mysql-json');
const mysqlJson = new MysqlJson({
  host:'localhost',
  user:'root',
  password:'mestre',
  database:'twitter_case'
});


var valores = [
  '#openbanking',
  '#apifirst',
  '#devops',
  '#cloudfirst',
  '#microservices',
  '#apigateway',
  '#oauth',
  '#swagger',
  '#raml',
  '#openapis'
];


for(const valor of valores){

  T.get('search/tweets', { q: valor,count: 1, result_type: 'recent'}, function(err, data, response){
    if(err){
      return console.log(err);
    }

    for(let i = 0; i < data.statuses.length; i++){

      console.log(data.statuses[i].user.name);
      
      mysqlJson.insert('twittes', {
        contexto : data.statuses[i].user.name,
      }, function(err, response) {
        if (err) throw err;
        console.log(response);
      });
    }
  });
  
}



