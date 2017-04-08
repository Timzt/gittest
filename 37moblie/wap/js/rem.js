//750分辨率时，根元素字体大小为55px，随着文档的缩小而缩小
//!function (doc, win) {
//    var docWidth = 750;// 设计图文档宽度
//    // css值为：设计图尺寸/100  例：100px => 1rem;
//    var docEl = doc.documentElement,
//        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
//    var recalc = (function refreshRem() {
//        var clientWidth = docEl.getBoundingClientRect().width;
//        // 8.533333为iPhone4[最小宽为iPhone4尺寸]
//        // *5为了方便计算 => 设计图px值除以100得出rem值
//        docEl.style.fontSize = Math.min(11 * (clientWidth / docWidth), 11) * 5 + 'px';
//
//        return refreshRem;
//    })();
//    if (!doc.addEventListener) return;
//    win.addEventListener(resizeEvt, recalc, false);
//    doc.addEventListener('DOMContentLoaded', recalc, false);
//    // 解决:active这个高端洋气的CSS伪类不能使用问题 特别注意：有可能跟FastClick冲突
//    doc.addEventListener('touchstart', function () {
//    }, false);
//}(document, window);


//640分辨率时，根元素字体大小为100px，随着文档的缩小而缩小
!function (doc, win) {
    var docWidth = 640;// 设计图文档宽度
    // css值为：设计图尺寸/100  例：100px => 1rem;
    // 为什么是100 由下面的 20 * 5得出
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
    var recalc = (function refreshRem() {
        var clientWidth = docEl.getBoundingClientRect().width;
        // 8.533333为iPhone4[最小宽为iPhone4尺寸]
        // *5为了方便计算 => 设计图px值除以100得出rem值
        var size = (20 * (clientWidth / docWidth) * 5);
        docEl.style.fontSize = (size >100 ? 100 : size)+ 'px';
        return refreshRem;
    })();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    // 解决:active这个高端洋气的CSS伪类不能使用问题 特别注意：有可能跟FastClick冲突
    doc.addEventListener('touchstart', function () {
    }, false);
}(document, window);


