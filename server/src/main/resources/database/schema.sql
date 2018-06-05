SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES utf8mb4;

--
-- Database: `seweb_backend`
--

-- --------------------------------------------------------

--
-- TABLE_STRUCTURE 'TBL_ATC_NEWS'
--
CREATE TABLE IF NOT EXISTS  `tbl_staff` (
  `id` varchar(255) COLLATE utf8_bin NOT NULL,
  `code` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `created_time` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `created_user_id` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `altered_time` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `altered_user_id` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `truename` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `identification` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `section` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `position` varchar(255) COLLATE utf8_bin DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

