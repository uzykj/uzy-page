/**
 * @author ghostxbh
 * @date 2020/04/01
 */
var current = 1;
var pageCount = 10;
$(function () {
    var url = 'http://140.143.126.226:9103/list';
    //初始化加载分页
    getPage(current, pageCount, url);
});

function getPage(pageIndex, totalPage, url) {
    $(".uzy_page").createPage({      //创建分页
        pageCount: totalPage,               //总页数
        current: pageIndex,                 //当前页
        url: url,                           //请求链接
        backFn: function (p) {
            getPage(p, totalPage);          //点击页码或者跳转页码时的回掉函数，p为要跳转的页码
        }
    });
}

function main(url, limit, page) {
    url += `/${limit}/${page}`;
    $.get(url, function (res, err) {
        if (err) {
            alert(err);
            return;
        }
        current = res.current;
        pageCount = res.pageCount;
        var list = res.list;
        $('#tboody').empty();
        var html = '';

    });
}
