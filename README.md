# jq-modal

模态框（jquery插件）


## 使用

* 模拟系统弹框

```js

    import {alert,confirm} from 'jq-modal';
    
    alert('test');
    
    confirm('Sure you want to exit？',{
        successCallback:function(){
            console.dir('successCallback');

        },
        cancelCallback:function(){
            console.dir('cancelCallback');
        }
    });
   
```

* 自定义弹框

```html

    <div id="dialog-test" style="width: 500px;height: 300px;display: none;">
        <div class="header">自定义标题</div>
        <div class="content">
            自定义内容
        </div>
        <div class="footer">
            自定义button
        </div>
    </div>
```

```js

    import {mask} 'jq-modal';
    
    //jquery plugs
    $('#dialog-test').mask({
        closeCallback:()=>{
            console.dir('关闭2');
        }
    });
    
    //or
    mask($('#dialog-test'),{
        closeCallback:()=>{
            console.dir('关闭2');
        }
    });
```

## 示例查看

下载源码至本地后执行

```js

    npm install 
    npm run demo
```