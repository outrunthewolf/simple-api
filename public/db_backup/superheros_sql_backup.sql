-- MySQL dump 10.13  Distrib 5.5.22, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: superheros
-- ------------------------------------------------------
-- Server version	5.5.22-0ubuntu1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `supers`
--

DROP TABLE IF EXISTS `supers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `type` varchar(100) NOT NULL,
  `strength` int(11) NOT NULL,
  `attack` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NOT NULL,
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supers`
--

LOCK TABLES `supers` WRITE;
/*!40000 ALTER TABLE `supers` DISABLE KEYS */;
INSERT INTO `supers` VALUES (1,'Magnarox','','hero',7,10,10,'2013-11-19 18:23:18','2013-11-20 01:27:53','2013-11-20 01:27:53',NULL),(2,'Killerpsych','','villain',3,1,3,'2013-11-19 18:23:53','2013-11-20 01:28:00','2013-11-20 01:28:00',NULL),(3,'ultradeath','','villain',8,1,8,'2013-11-19 18:46:30','2013-11-20 01:28:14','2013-11-20 01:28:14','http://static2.wikia.nocookie.net/__cb20101012052219/marveldatabase/images/7/7f/Red_Hulk_Main_Page_Icon.jpg'),(4,'ironmonkey','','hero',2,2,4,'2013-11-19 18:49:08','2013-11-20 01:28:19','2013-11-20 01:28:19','http://static4.wikia.nocookie.net/__cb20130101030833/marveldatabase/images/e/e6/Thor_Main_Page_Icon.jpg'),(5,'Deathattack','','villain',5,3,5,'2013-11-19 18:49:38','2013-11-20 01:28:20','2013-11-20 01:28:20','http://static4.wikia.nocookie.net/__cb20130101030833/marveldatabase/images/e/e6/Thor_Main_Page_Icon.jpg'),(6,'Ultratron','','hero',4,6,5,'2013-11-19 18:51:34','2013-11-20 01:28:42','2013-11-20 01:28:42','http://static4.wikia.nocookie.net/__cb20130602190229/marveldatabase/images/8/80/Kurse_Main_Page_Icon.jpg'),(7,'test','','hero',3,3,7,'2013-11-19 21:25:37','2013-11-20 01:28:43','2013-11-20 01:28:43','http://static2.wikia.nocookie.net/__cb20130101030824/marveldatabase/images/9/98/Hulk_Main_Page_Icon.jpg'),(8,'monkey man','','hero',8,2,7,'2013-11-19 21:26:44','2013-11-20 01:28:50','2013-11-20 01:28:50','http://static2.wikia.nocookie.net/__cb20101012052219/marveldatabase/images/7/7f/Red_Hulk_Main_Page_Icon.jpg'),(9,'bad guy','','villain',3,7,10,'2013-11-19 21:28:51','2013-11-20 07:45:19','2013-11-20 07:45:19','http://static4.wikia.nocookie.net/__cb20121027120555/marveldatabase/images/0/01/Journey_into_Mystery_645_textless.jpg'),(10,'superman','','hero',7,9,6,'2013-11-19 21:53:35','2013-11-20 01:28:28','2013-11-20 01:28:28','http://static2.wikia.nocookie.net/__cb20090509034261/marveldatabase/images/d/d8/Wolverine_Main_Page_Icon.jpg'),(11,'Orangutan','','hero',2,4,5,'2013-11-19 23:32:30','2013-11-20 01:27:29','2013-11-20 01:27:29','http://static2.wikia.nocookie.net/__cb20130101030824/marveldatabase/images/9/98/Hulk_Main_Page_Icon.jpg'),(12,'Kingly','','hero',8,2,9,'2013-11-19 23:33:11','2013-11-20 07:45:02','2013-11-20 07:45:02','http://static2.wikia.nocookie.net/__cb20101012052219/marveldatabase/images/7/7f/Red_Hulk_Main_Page_Icon.jpg'),(13,'john jones','','hero',10,5,4,'2013-11-20 00:44:41','2013-11-20 01:28:08','2013-11-20 01:28:08','http://static2.wikia.nocookie.net/__cb20130101030824/marveldatabase/images/9/98/Hulk_Main_Page_Icon.jpg'),(14,'alan rickman','','villain',10,3,8,'2013-11-20 00:45:07','2013-11-20 01:27:34','2013-11-20 01:27:34','http://static2.wikia.nocookie.net/__cb20130101030909/marveldatabase/images/0/00/Deadpool_Main_Page_Icon.jpg'),(15,'marc','','hero',6,3,1,'2013-11-20 00:48:28','2013-11-20 01:26:16','2013-11-20 01:26:16','http://static4.wikia.nocookie.net/__cb20121027120555/marveldatabase/images/0/01/Journey_into_Mystery_645_textless.jpg'),(16,'john','','hero',6,4,1,'2013-11-20 00:49:58','2013-11-20 01:27:15','2013-11-20 01:27:15','http://static4.wikia.nocookie.net/__cb20121027120555/marveldatabase/images/0/01/Journey_into_Mystery_645_textless.jpg'),(17,'evil cool','','hero',9,7,5,'2013-11-20 00:52:40','2013-11-20 01:25:33','2013-11-20 01:25:33','http://static2.wikia.nocookie.net/__cb20130101030824/marveldatabase/images/9/98/Hulk_Main_Page_Icon.jpg'),(18,'moon','','hero',5,1,9,'2013-11-20 00:53:45','2013-11-20 01:25:23','2013-11-20 01:25:23','http://static2.wikia.nocookie.net/__cb20101012052219/marveldatabase/images/7/7f/Red_Hulk_Main_Page_Icon.jpg'),(19,'boom','','hero',9,7,10,'2013-11-20 00:55:20','2013-11-20 01:24:34','2013-11-20 01:24:34','http://static2.wikia.nocookie.net/__cb20101012052219/marveldatabase/images/7/7f/Red_Hulk_Main_Page_Icon.jpg'),(20,'mulhos','','hero',2,2,10,'2013-11-20 00:57:06','2013-11-20 01:24:16','2013-11-20 01:24:16','http://static4.wikia.nocookie.net/__cb20130602190229/marveldatabase/images/8/80/Kurse_Main_Page_Icon.jpg'),(21,'bolck','','hero',7,7,6,'2013-11-20 00:58:26','2013-11-20 01:23:27','2013-11-20 01:23:27','http://static2.wikia.nocookie.net/__cb20130101030909/marveldatabase/images/0/00/Deadpool_Main_Page_Icon.jpg'),(22,'steven','','villain',4,10,2,'2013-11-20 01:03:52','2013-11-20 01:16:04','2013-11-20 01:16:04','http://static4.wikia.nocookie.net/__cb20121027120555/marveldatabase/images/0/01/Journey_into_Mystery_645_textless.jpg'),(23,'Test','','villain',2,10,1,'2013-11-20 01:31:22','2013-11-20 01:31:53','2013-11-20 01:31:53','http://static4.wikia.nocookie.net/__cb20121027120555/marveldatabase/images/0/01/Journey_into_Mystery_645_textless.jpg'),(24,'Alan','','hero',8,5,1,'2013-11-20 07:44:49','2013-11-20 07:45:33','2013-11-20 07:45:33','http://static2.wikia.nocookie.net/__cb20130101030909/marveldatabase/images/0/00/Deadpool_Main_Page_Icon.jpg'),(25,'Test','','hero',7,7,1,'2013-11-20 07:45:49','2013-11-20 08:28:37','2013-11-20 08:28:37','http://static2.wikia.nocookie.net/__cb20130101030824/marveldatabase/images/9/98/Hulk_Main_Page_Icon.jpg'),(26,'test1','','hero',7,7,4,'2013-11-20 08:35:07','2013-11-20 08:40:32','2013-11-20 08:40:32','http://static2.wikia.nocookie.net/__cb20101012052219/marveldatabase/images/7/7f/Red_Hulk_Main_Page_Icon.jpg'),(27,'test2','','villain',1,8,1,'2013-11-20 08:35:13','2013-11-20 08:45:15','2013-11-20 08:45:15','http://static4.wikia.nocookie.net/__cb20121027120555/marveldatabase/images/0/01/Journey_into_Mystery_645_textless.jpg'),(28,'alan','','hero',9,5,9,'2013-11-20 08:39:51','2013-11-20 08:45:13','2013-11-20 08:45:13','http://static2.wikia.nocookie.net/__cb20090509034261/marveldatabase/images/d/d8/Wolverine_Main_Page_Icon.jpg'),(29,'Iceman','','hero',10,1,8,'2013-11-20 08:45:37','2013-11-20 08:45:37','0000-00-00 00:00:00','http://static2.wikia.nocookie.net/__cb20130101030909/marveldatabase/images/0/00/Deadpool_Main_Page_Icon.jpg'),(30,'Megaplex','','villain',3,1,6,'2013-11-20 08:45:44','2013-11-20 08:45:44','0000-00-00 00:00:00','http://static1.wikia.nocookie.net/__cb20130602190227/marveldatabase/images/4/4b/Malekith_Main_Page_Icon.jpg');
/*!40000 ALTER TABLE `supers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-11-20  8:53:27
