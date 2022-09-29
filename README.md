# React+Redux+Login


## 安装依赖
```$js
npm install --save react-router-dom
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools-extension
```
    使用cdn方式引入
    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>

    使用脚手架
        1.npm i -g create-react-app
        2.在想要生成项目的目录下 执行creat-react-app 项目名 
        3.在项目根目录下 npm start 启动项目
        4.脚手架自动配置了webpack工具 项目运行时 会自动打包index.js到index.html中
        5.index.js 引入了App.js 并且渲染到 id='root'的标签中
        6.App.js 项目的根组件
          React项目是SPA项目(单页网页应用) 
          整个网站只有一个页面 通过路由切换页面中局部的内容，实现页面变更
          
    

## 使用路由
    创建路由基本结构
    
## 使用BootStrap
    中文网站：https://www.bootcss.com/
    简介：Twitter推出的一个UI框架 
         优点是响应式布局(即栅格系统，根据屏幕比例不同，加载不同的样式)、移动设备优先
         栅格参数：超小屏幕 手机 (<768px)
                 小屏幕   平板 (≥768px)	
                 中等屏幕 桌面显示器 (≥992px)	
                 大屏幕   大桌面显示器 (≥1200px)
                 
    CDN:通过网络地址引用bootStrap
        <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js"></script>
        <script src="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    
    使用sass样式 
    npm install node-sass --save 
                使用.scss文件 书写样式
                
    使用classnames控制样式
    cnpm install --save classnames
    
## 使用redux
    cnpm install --save redux react-redux
    cnpm install --save-dev redux-devtools-extension    
    
## react
    1.视口
        <meta name="viewport" content="width=device-width, user-scalable=no, 
        initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    2.媒体查询
        @media screen and (min-width:992px) and (max-width:1199px)
    3.bootstrap