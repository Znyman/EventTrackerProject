-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema winerytrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `winerytrackerdb` ;

-- -----------------------------------------------------
-- Schema winerytrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `winerytrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `winerytrackerdb` ;

-- -----------------------------------------------------
-- Table `winery`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `winery` ;

CREATE TABLE IF NOT EXISTS `winery` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `street` VARCHAR(200) NULL,
  `city` VARCHAR(200) NULL,
  `state` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS winedrinker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'winedrinker'@'localhost' IDENTIFIED BY 'winedrinker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'winedrinker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `winery`
-- -----------------------------------------------------
START TRANSACTION;
USE `winerytrackerdb`;
INSERT INTO `winery` (`id`, `name`, `street`, `city`, `state`) VALUES (1, 'Favero Vineyards', '3939 Lovall Valley Rd', 'Sonoma', 'CA');
INSERT INTO `winery` (`id`, `name`, `street`, `city`, `state`) VALUES (2, 'Nicholson Ranch', '4200 Napa Rd', 'Sonoma', 'CA');
INSERT INTO `winery` (`id`, `name`, `street`, `city`, `state`) VALUES (3, 'Hudson Napa Valley', '5398 Sonoma Hwy', 'Napa', 'CA');
INSERT INTO `winery` (`id`, `name`, `street`, `city`, `state`) VALUES (4, 'Scribe Winery', '2100 Denmark St', 'Sonoma', 'CA');
INSERT INTO `winery` (`id`, `name`, `street`, `city`, `state`) VALUES (5, 'Keever Vineyards & Winery', '26 Vineyard View Dr', 'Napa', 'CA');
INSERT INTO `winery` (`id`, `name`, `street`, `city`, `state`) VALUES (6, 'Domaine Chandon', '1 California Dr', 'Yountville', 'CA');
INSERT INTO `winery` (`id`, `name`, `street`, `city`, `state`) VALUES (7, 'Priest Ranch', '6490 Washington St', 'Yountville', 'CA');

COMMIT;

