# twitterCase

application to consumes twitter API and save values on database.

#to run application

node gravaTagsNoDatabase
node pesquisaDeterminadaTag

# mysql

to create table:

CREATE DATABASE `twitter_casee` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

create table twittes(
id_tag int not null primary key auto_increment, 
contexto text,
data_criacao timestamp default current_timestamp);

ALTER DATABASE twitter_case CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci';
ALTER TABLE twitter_case CONVERT TO CHARACTER SET utf8mb4;
ALTER TABLE twitter_case.twittes MODIFY COLUMN contexto text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;

#Build docker

docker build --rm -f "twitterCase/Dockerfile" -t twittercase:1.0.0 twitterCase