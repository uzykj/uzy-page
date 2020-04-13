# uzy_page

## use

### Essential condition
1. Bootstrap
2. jQuery

### Development

#### Introduce
```html
<link rel="stylesheet" href="/uzy-page/css/uzy_page.css"/>
<script src="/uzy-page/js/uzy_page.js"></script>
```

#### main method
```javascript
$(function () {
    var current = $("input[name='current']").val();
    var pageCount = $("input[name='pageCount']").val();
    //初始化加载分页
    getPage(current, pageCount);
});


function getPage(pageIndex, totalPage, url) {
    $(".uzy_page").createPage({             //创建分页
        pageCount: totalPage,               //总页数
        current: pageIndex,                 //当前页
        url: url,                           //请求链接
        backFn: function (p) {
            getPage(p, totalPage);          //点击页码或者跳转页码时的回掉函数，p为要跳转的页码
        }
    });
}
```

### Show

<img src="./example/page_show.png" height="100" width="550">
