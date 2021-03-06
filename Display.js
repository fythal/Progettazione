function displayImages(data) {

	$('ul#lista').remove();
	$('#navcontainer').html('<ul id="lista"></ul>');
	
	var htmlString = [];

	$.each(data.results, function(i,item){
		htmlString += '<li><a class="fancybox" title="' + item.filename + '" rel="group" href="' + item.link + '" target="_blank">';
		htmlString += '<img title="' + item.imageURI + '" src="' + item.link + '" height=37%' ;
		htmlString += '" alt="'; htmlString += item.title + '" ondragstart="similaritySearch(event, this.title, this.src)"/>';
		htmlString += '</a></li>';
	});

	$('#lista').html(htmlString);
	$('#lista a').hide();
	$('ul#lista').easyPaginate({
		step:10
	});
	$('#lista a').show(2000);
}