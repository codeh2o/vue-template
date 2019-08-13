

## 工程启动流程

``` bash
# 切换到课程章节对应的分支上（重要！）
git checkout 分支名

# 安装项目依赖
npm install

# 启动开发环境服务器
npm run dev
```

## 常见问题汇总

1. 在手机测试详情页面，向下滚动的时候头部header不会出现,在电脑端是可以的  
解答：scrollTop的兼容性问题。const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset


