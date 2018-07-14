SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES utf8mb4;

--
-- Database: `seweb_backend`
--



CREATE TABLE `tbl_sys_staff_role` (
  `id` int COLLATE utf8_bin primary key not null auto_increment,
  `staff_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `role_id` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `tbl_sys_role` VALUES
('role220',NULL,NULL,'4',NULL,NULL,NULL,'content verifier',NULL,'VCont'),
('role210',NULL,NULL,'3',NULL,NULL,NULL,'news verifier',NULL,'VNews'),
('role120',NULL,NULL,'2',NULL,NULL,NULL,'content maintainer',NULL,'MCont'),
('role110',NULL,NULL,'1',NULL,NULL,NULL,'news maintainer',NULL,'MNews'),
('role777',NULL,NULL,'0',NULL,NULL,NULL,'administrator',NULL,'Admin');

