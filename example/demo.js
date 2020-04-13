/**
 * @author ghostxbh
 * @date 2020/04/01
 */
$(function () {
    var current = $("input[name='current']").val();
    var pageCount = $("input[name='pageCount']").val();
    var url = 'http://127.0.0.1:8080';
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

