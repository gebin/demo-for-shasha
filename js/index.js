$(function(){
	var $articles = $('.article-list')
	$.ajax({
		url :'data/sections.json',
		type:'get',
		dataType:'json',
		success : function(res){
			if(res.status){
				res.data && res.data.forEach(function(item){
					var str =
						'<li class="article">'+
							'<a href="'+item.url+'" target="_blank" class="a-container '+item.color+' fs-48">';

					// 判断有没有图片
					if(item.img){
						str += '<img src="'+item.img+'" alt="">'
					} else {
						str += item.title;
					}

					str = str + '</a>'+
							'<p class="p-tip">'+item.tip+'</p>'+
						'</li>';
					$articles.append(str);
				})

				$articles.append('<li class="placeholder"></li>');
			}
		}
	})
})