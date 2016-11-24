$(function(){
	var $articles = $('.article-list')
	$.ajax({
		url :'data/sections.json',
		type:'get',
		dataType:'json',
		success : function(res){
			if(res.status){
				res.data && res.data.forEach(function(item){
					$articles.append(
						'<li class="article">'+
							'<a href="#" class="a-container">'+
								'<img src="'+item.img+'" alt="">'+
							'</a>'+
							'<p class="p-tip">'+item.title+'</p>'+
						'</li>')
				})
			}
		}
	})
})