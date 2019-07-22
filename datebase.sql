CREATE DATABASE `scarper`CHARACTER SET utf8 COLLATE utf8_general_ci; 
SHOW DATABASES; 
USE `scarper`; 
/SHOW CHARSET; 
CREATE TABLE `scarper`.`dlitem`( `id` INT(11) NOT NULL AUTO_INCREMENT, `orgin_url` VARCHAR(255), `website` VARCHAR(255), `website_url` VARCHAR(510), `video_id` VARCHAR(255), `video_date` DATETIME, `create_date` DATETIME, `is_download` TINYINT(4), `is_upload` TINYINT(4), `author` VARCHAR(255), `desc` TEXT, PRIMARY KEY (`id`) ); 
SHOW TABLE STATUS FROM `scarper` LIKE 'dlitem'; 