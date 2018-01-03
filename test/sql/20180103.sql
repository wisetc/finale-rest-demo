-- --------------------------------------------------------
-- 主机:                           192.168.2.102
-- 服务器版本:                        5.7.13-log - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 sequelize-lab 的数据库结构
CREATE DATABASE IF NOT EXISTS `sequelize-lab` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `sequelize-lab`;

-- 导出  表 sequelize-lab.basicmaterial 结构
CREATE TABLE IF NOT EXISTS `basicmaterial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `type` enum('干料','湿料') DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 正在导出表  sequelize-lab.basicmaterial 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `basicmaterial` DISABLE KEYS */;
INSERT INTO `basicmaterial` (`id`, `name`, `code`, `type`, `created_at`, `updated_at`) VALUES
	(1, '食用盐', 'solt', '干料', '2018-01-03 18:09:07', '2018-01-03 18:09:08'),
	(2, '食用油', 'oil', '湿料', '2018-01-03 18:11:11', '2018-01-03 18:11:13');
/*!40000 ALTER TABLE `basicmaterial` ENABLE KEYS */;

-- 导出  表 sequelize-lab.batchmaterial 结构
CREATE TABLE IF NOT EXISTS `batchmaterial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `batch` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `basic_material_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `basic_material_id` (`basic_material_id`),
  CONSTRAINT `batchmaterial_ibfk_1` FOREIGN KEY (`basic_material_id`) REFERENCES `basicmaterial` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- 正在导出表  sequelize-lab.batchmaterial 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `batchmaterial` DISABLE KEYS */;
INSERT INTO `batchmaterial` (`id`, `batch`, `created_at`, `updated_at`, `basic_material_id`) VALUES
	(1, '2018010301', '2018-01-03 18:10:12', '2018-01-03 18:10:13', 1),
	(2, '2018010302', '2018-01-03 18:10:14', '2018-01-03 18:10:17', 1),
	(3, '2018010303', '2018-01-03 18:10:14', '2018-01-03 18:10:17', 2);
/*!40000 ALTER TABLE `batchmaterial` ENABLE KEYS */;

-- 导出  表 sequelize-lab.inspecting 结构
CREATE TABLE IF NOT EXISTS `inspecting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auditing_man` varchar(255) DEFAULT NULL,
  `auditing_date` datetime DEFAULT NULL,
  `status` enum('待检验','检验完成','审核通过','审核不通过') DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `batch` varchar(255) DEFAULT NULL,
  `approve_suggestion` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `batch_material_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `batch_material_id` (`batch_material_id`),
  CONSTRAINT `inspecting_ibfk_1` FOREIGN KEY (`batch_material_id`) REFERENCES `batchmaterial` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 正在导出表  sequelize-lab.inspecting 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `inspecting` DISABLE KEYS */;
INSERT INTO `inspecting` (`id`, `auditing_man`, `auditing_date`, `status`, `remark`, `batch`, `approve_suggestion`, `created_at`, `updated_at`, `batch_material_id`) VALUES
	(1, 'Mark', '2018-01-03 18:11:41', '待检验', NULL, '@2018010301', NULL, '2018-01-03 18:12:10', '2018-01-03 18:12:11', 1),
	(2, 'Jake', '2018-01-03 18:11:41', '待检验', NULL, '@2018010302', NULL, '2018-01-03 18:12:13', '2018-01-03 18:12:15', 2);
/*!40000 ALTER TABLE `inspecting` ENABLE KEYS */;

-- 导出  表 sequelize-lab.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 正在导出表  sequelize-lab.user 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `password`, `created_at`, `updated_at`) VALUES
	(1, 'mark', '123', '2018-01-03 18:13:01', '2018-01-03 18:13:01'),
	(2, 'jake', '123', '2018-01-03 18:13:01', '2018-01-03 18:13:01');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
