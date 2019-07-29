const Twitter = require('twitter');
const config = require('./config/twitterConfig');
const inquirer = require('inquirer');
const T = new Twitter(config);

var questions = [
  {
    type: 'input',
    name: 'tag',
    message: "What's tag you'r looking for ?"
  }
];

try {
  inquirer.prompt(questions).then(answers => {

    var j = JSON.stringify(answers.tag);

    T.get('search/tweets', { q: j, count: 100 }, function(err, data, response){

      if(err){
        return console.log(err);
      }

      for(let i = 0; i < data.statuses.length; i++){
        console.log(data.statuses[i].text);
        let name = { name: data.statuses[i].user.name}
        console.log(name);
      }

    });
  });
} catch (err) {
  console.error(err)
}



