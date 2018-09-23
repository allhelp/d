DROP TABLE IF EXISTS `talk`;

CREATE TABLE `talk` (

 `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',

 `send` varchar(10) CHARACTER SET utf8 DEFAULT NULL COMMENT '发送者昵称',

 `ip` varchar(12) CHARACTER SET utf8 DEFAULT NULL,

 `content` varchar(500) CHARACTER SET utf8 DEFAULT NULL,

 `time` varchar(50) DEFAULT NULL,

 PRIMARY KEY (`id`)

) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

---------------------

本文来自 Lz18310851892 的CSDN 博客 ，全文地址请点击：https://blog.csdn.net/qq_40842615/article/details/80671343?utm_source=copy 