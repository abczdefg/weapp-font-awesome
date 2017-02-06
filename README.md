# WeApp-FontAwesome

#### 微信小程序使用font-awesome图标库

[参考方法](http://www.wxapp-union.com/forum.php?mod=viewthread&tid=1211)

1. 下载`font-awesome`字体包
2. 打开[Transfonter](http://transfonter.org/)网站，上传字体`fontawesome-webfont.ttf`（理论其它文件格式也可以转换，并未尝试），选择base64编码，convert后下载
3. 下载得到的包中有style文件，打开后获得以下代码，并对照`font-awesome.css`中的内容，加入到微信小程序的`app.wxss`文件中

  ```
  @font-face {
    font-family: 'fa';
    src: url(data:font/truetype;charset=utf-8;base64,AAEAAAANAIAAAwBQRkZUTXLOMIUAAlXMAAAAHEdERUYAJwKrAAJVrAAAAB5PUy8yiDJ6IwAAAVgAAABgY21hcJ0vdNQAAAw4AAADAmdhc3D//wADAAJVpAAAAAhnbHlmHejPwQAAGdQAAh3kaGVhZAbB4eAAAADcAAAANmhoZWEO+QqbAAAB......long long) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .fa {
    font-family: "fa" !important;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
  }

  /* makes the font 33% larger relative to the icon container */
  .fa-lg {
    font-size: 1.33333333em;
    line-height: 0.75em;
    vertical-align: -15%;
  }
  .fa-2x {
    font-size: 2em;
  }

  //long long long...........

  ```

4. 然后在小程序中使用``` class="fa fa-user" ```即可，如```<text class="fa fa-user"></text>```
