# SE-web
网站服务于访问的网站游客、管理网站内容的各类管理员及管理权限的超级管理员。后端基于Spring框架，结合hibernate和mybatis，使用Mysql作为数据库，应用Shiro实现了不同角色的权限管理。前端主要基于react。

生成jar包
  在server文件夹下输入 mvn clean package -DskipTests

运行
  在server文件夹下输入 mvn spring-boot run
