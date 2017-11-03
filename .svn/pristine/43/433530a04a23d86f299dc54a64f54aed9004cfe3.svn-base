$(function(){
	var _main = $('body'), _tbody = _main.find('#list'), _url = window.location;
	//main下所有需要注册的事件
	_main.on('blur', '.quick-search input', function(){
		$('#listForm').
		attr('method', 'get').
		submit();
	}).on('change', '.quick-search select', function(){
		$('#listForm').
		attr('method', 'get').
		submit();
	}).on('click', '#quick-search', function(){
		var _re = /http:\/\/([^\?]+)/ig;
		var _r = _re.exec(_url);
		var _cookie = $.md5(_r[0]);
		if ($(this).is(':checked'))
		{
			$('.quick-search').show();
			cloudui.cookie(_cookie, 1, 7);
		}
		else
		{
			$('.quick-search').hide();
			cloudui.cookie(_cookie, null);
		}
	}).on('click', '#list :checkbox', function(){
    	var _row = $('#list').children('tr').length;
    	var _checked = $('#list').find(':checkbox:checked').length;
    	if(_checked > 0)
    	{
    		$('.tool-bar').
    		find('button:disabled').
    		addClass('btn-enabled').
    		attr('disabled', false);
    	}
    	else
    	{
    		$('.tool-bar').
    		find('.btn-enabled').
    		attr('disabled', true).
    		removeClass('btn-enabled');
    	}
    	if (_checked == _row)
    	{
    		cloudui.checked($('#checkall'));
    	}
    	else if ($('#checkall').is(':checked'))
    	{
    		cloudui.uncheck($('#checkall'));
    	}
    	if ($(this).is(':checked'))
    	{
    		$(this).
    		parent().
    		parent().
    		parent().
    		addClass('active');
    	}
    	else
    	{
    		$(this).
    		parent().
    		parent().
    		parent().
    		removeClass('active');
    	}
    }).on('click', '#list td:gt(0)', function(){
    	var _row = $('#list').children('tr').length;
    	var _checkbox = $(this).parent().find(':checkbox');
    	if (_checkbox.is(':checked'))
    	{
	    	cloudui.uncheck(_checkbox);
	    	$(this).
    		parent().
    		removeClass('active');
    	}
    	else
    	{
	    	cloudui.checked(_checkbox);
	    	$(this).
    		parent().
    		addClass('active');
    	}
    	var _checked = $('#list').find(':checkbox:checked').length;
    	if(_checked > 0)
    	{
    		$('.tool-bar').
    		find('button:disabled').
    		addClass('btn-enabled').
    		attr('disabled', false);
    	}
    	else
    	{
    		$('.tool-bar').
    		find('.btn-enabled').
    		attr('disabled', true).
    		removeClass('btn-enabled');
    	}
    	if (_checked == _row)
    	{
    		cloudui.checked($('#checkall'));
    	}
    	else if ($('#checkall').is(':checked'))
    	{
    		cloudui.uncheck($('#checkall'));
    	}
    }).on('click', '[data-rel]', function(){
		var _rel     = $(this).data('rel'),
		    _confirm = $(this).data('confirm');
		if (_confirm != undefined)
		{
			cloudui.confirm('确定执行' + $(this).html() + '操作吗？', function(){
				$.ajax({
					type : "post",
					url  : _rel,
					data : $("input[name='id[]']").serialize(),
					success : function(data){
						if (data == 100)
						{
							cloudui.success('操作执行成功！', function(){
								window.location.reload();
							});
						}
						else
						{
							cloudui.alert('操作执行失败！');
						}
						return false;
					}
				});
			});
		}
	}).on('click', '#checkall', function(){
    	var _tbody = _main.find('#list');
    	if($(this).is(':checked'))
    	{
    		_tbody.
    		find('label').
    		attr('class', _NC + '-checked');
    		_tbody.
    		find(':checkbox').
    		attr('checked', true);
    		_tbody.
    		children('tr').
    		addClass('active');
    		$('.tool-bar').
    		find('button:disabled').
    		addClass('btn-enabled').
    		attr('disabled', false);
    	}
    	else
    	{
    		_tbody.
    		find('label').
    		attr('class', _NC);
    		_tbody.
    		find(':checkbox').
    		attr('checked', false);
    		_tbody.
    		children('tr').
    		removeClass('active');
    		$('.tool-bar').
    		find('.btn-enabled').
    		attr('disabled', true).
    		removeClass('btn-enabled');
    	}
    });
});