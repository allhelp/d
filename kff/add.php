<?php

/**

 * @功能 将表单插入数据库

 */

$content=$_POST['content'];

print_r($_POST);

$time= date("Y-m-d H:i:s", time(0));

$link = mysqli_connect('localhost', 'root', '123', 'test');

mysqli_query($link, 'set names utf8');

$ip = $_SERVER["REMOTE_ADDR"];

$sql="INSERT INTO talk VALUES(NULL,'匿名者','$ip','$content','$time')";

$data = mysqli_query($link,$sql);

echo "$content";

if($data)

 echo "1";

 else

  echo "0";

---------------------

本文来自 Lz18310851892 的CSDN 博客 ，全文地址请点击：https://blog.csdn.net/qq_40842615/article/details/80671343?utm_source=copy 