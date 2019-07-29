# TwitterCase

application to consumes twitter API and save values on database.

# Docker

looking for dockerhub ?
Follow link to pull image:

docker pull vitorspk/twittercase


docker build --rm -f "twitterCase/Dockerfile" -t twittercase:1.0.0 twitterCase

# Run application

export your's twitter variables :
CONSUMER_KEY
CONSUMER_SECRET
ACCESS_TOKEN_KEY
ACCESS_TOKEN_SECRET

to run application into container use this command:

docker exec -it fast_painting bash

into docker container run:

npm run pesquisa
npm run grava

# Mysql

to create table:

CREATE DATABASE `twitter_casee` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

create table twittes(
id_tag int not null primary key auto_increment, 
contexto text,
data_criacao timestamp default current_timestamp);

ALTER DATABASE twitter_case CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci';
ALTER TABLE twitter_case CONVERT TO CHARACTER SET utf8mb4;
ALTER TABLE twitter_case.twittes MODIFY COLUMN contexto text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;