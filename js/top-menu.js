/**
 * top-menu js file
 *
 * @author: Hu Yali <huyali@123.com.cn>
 * @link:  
 * @copyright: Copyright 安徽黄埔网络科技有限公司All Rights Reserved
 */

var _focus = false;
$(function () {
    $('#menuFrame,#main-content').height(window.innerHeight - 60);
    $(window).resize(function () {
        $('#menuFrame,#main-content').height(window.innerHeight - 60);
        if ($(window).width() < 1400)
        {
            topMenuShow.width(menuLeft(navNum) + 8 * navNum);
        }
    });

    /*
     * 顶部导航交互
     */
//    $('.dropdown').hover(function () {
//         $(this).addClass('open');
//    }, function(){
//        $(this).removeClass('open');
//    });
    $(document).click(function () {
        $(".dropdown").removeClass('open');
    });

    $(".dropdown,#dropdown-menu").click(function (event) {
        event.stopPropagation();
    });

    $('.dropdown').on('click', function () {
        if ($(this).attr('class') == 'pull-left dropdown' || $(this).attr('class') == 'dropdown pull-left clearfix') {
            $(".dropdown").removeClass('open');
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');
        }
        $('.dropdown-menu').attr('tabindex', 0).focus();
        _focus = true;

        $('#dropdown-menu').append("<style>#dropdown-menu::before{left:" + tp_mw + "px}</style>");
    });

    $('.dropdown-menu').hover(function () {
        _focus = true;
    }, function () {
        _focus = false;
    }).blur(function () {
        if (!_focus)
            $(this).parent().removeClass('open');
    });

    var topMenuShow = $('.top-menu-show > ul').eq(0); // 可视导航区域
    var topMenuDrop = $('.top-menu .dropdown-menu').eq(0); // 下拉导航区域
    var topMenuDropUl = $('.top-menu .dropdown-menu >ul').eq(0);
    var navNum = topMenuShow.children('li').length; //导航个数

    // 导航菜单宽度
    topMenuShow.width(menuLeft(navNum) + 20 * navNum);

    //可视区点击
    topMenuShow.find('a').click(function () {
        var activeIndex = $(this).parent().index();
        //选中状态
        topMenuDropUl.children('li').children('a').removeClass('active');
        topMenuDropUl.children('li').eq(activeIndex).children('a').addClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('li').children('a').removeClass('active');
    });

    // 更多菜单中点击
    topMenuDrop.find('a').click(function () {
        var activeIndex = $(this).parent().index();
        var activeLeftWidth = 0;

        //选中状态
        topMenuShow.children('li').children('a').removeClass('active');
        topMenuShow.children('li').eq(activeIndex).children('a').addClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('li').children('a').removeClass('active');

        $(window).width() < 1400 ? activeLeftWidth = menuLeft(activeIndex + 1) + 8 * (activeIndex + 1) : activeLeftWidth = menuLeft(activeIndex + 1) + 20 * (activeIndex + 1);

        if (activeLeftWidth > $('.top-menu-show ').width()) {
            topMenuShow.css('left', -(activeLeftWidth - topMenuShow.parent().width()));
        } else
        {
            topMenuShow.css('left', 0);
        }

        topMenuDrop.parent('.dropdown').removeClass('open');
    });

    /**
     * 导航li标签总宽度
     * @param {type} index 
     * @returns {Number}
     */
    function menuLeft(index) {
        var widthTotal = 1;
        for (var i = 0; i < index; i++)
        {
            widthTotal += $('.top-menu-show > ul').eq(0).children('li').eq(i).width();
        }
        return widthTotal;
    }

});

//平台项目跳转菜单左移
function normal_Menu() {
    var _topMenu = $('#topMenu'),
            _active = _topMenu.find('.active'),
            _li = _topMenu.find('li'),
            _index = _topMenu.find('a').index(_active);
    if (_index > 6)
    {
        var _leftWidth = 0;
        for (i = 0; i < _index - 6; i++)
        {
            _leftWidth -= _li.eq(7 + i).outerWidth(true);
        }
        _topMenu.css('left', _leftWidth);
    }
}

//获取顶部菜单显示的宽度
function top_width() {
    var _topMenu = $('#topMenu'),
            _li = _topMenu.find('li'),
            _twidth = 0;
    for (j = 0; j < 7; j++) {
        _twidth += _li.eq(j).outerWidth(true);
    }
    $('.top-menu-show').css('width', _twidth);
    window.tp_mw = _twidth + 10;
}

//控制左侧菜单隐藏
$('.bars-con').on('click', function () {
    if ($('#leftmenu').css('display') == 'block' || $('#sidebar').css('display') == 'block') {
        $('#leftmenu,#sidebar').hide();
        $('#main-content').css({'margin-left': '0'});
    } else {
        $('#leftmenu,#sidebar').show();
        $('#main-content').css({'margin-left': '210px'});
    }
});

//控制不同平台title显示
function title_show() {
    var _title = $('#topMenu').find('.active').text();
    $('title').text('BOSS后台-' + _title);

}
$('#topMenu li a,#dropdown-menu li a').on('click',function(){
   $('title').text('BOSS后台-' + $(this).text()); 
});
