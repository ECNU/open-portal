# 一、代码结构说明
## 1、.vitepress/theme/components 页面文件，包含页首页、文章等页面样式布局
## 2、.vitepress/theme/components css文件，设置页面全局样式
## 3、.vitepress/theme/utils.ts 工具方法
## 4、posts 用于存放通知文件
通知文件定义
```
---
title: '使用伽马校正获取对比度色值'  //通知标题
description: "这是一个描述"        // 通知描述
date: 2024-03-08                  //通知时间
hidden: false                    //是否隐藏
tags:                            //  标签
  - 伽马校正
  - 算法
---
=================正文
```
## 5、public 用于存放图片等文件
## 6、static/carousel.json 首页轮播定义
```
  {
    "imgUrl": "/O1C.png",  //public里面的图片存放路径
    "title": "一只乌龟标题", //轮播标题
    "description": "这就是一只乌龟的图片",//轮播描述
    "linkName": "点击跳转",//轮播按钮操作描述
    "link": "https://www.baidu.com" //轮播按钮跳转链接
  }
```
## 7、static/mirrors.json 首页 项目card 定义

```
  {
    "title": "mirror1",
    "description": "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
    "tags": ["tag1", "tag2"],
    "link": "https://www.baidu.com/",
    "status": "1",
    "type": "type1"
  },
```
# 二、代码运行
1、运行环境
  node版本 18.19.1 
  npm 10.2.4

2、代码运行 
`
npm run dev
`

# 三、 部署

无需build，发布到GitHub上自动部署，在GitHub仓库页面，点击"Settings"（设置），然后点击"Pages"查看是否有已配置的Pages服务。如果未启用，需要在"Settings"下的"Pages"部分选择合适的分支来构建和部署网站即可。


