SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES utf8mb4;

--
-- Database: `seweb_backend`
--



CREATE TABLE `tbl_sys_role` (
  `id` varchar(255) NOT NULL,
  `altered_time` varchar(255) DEFAULT NULL,
  `altered_user_id` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_user_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `role_string` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `tbl_sys_staff` (
  `id` varchar(255) NOT NULL,
  `altered_time` varchar(255) DEFAULT NULL,
  `altered_user_id` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_user_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `identification` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `truename` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

