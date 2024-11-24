$(document).ready(function(){
topic=JSON.parse(data);
displayRecord();
});
function displayRecord()
{
	var img=new Array();
	img[0]=",CP0-2.png";
	img[1]=",CP1-2.png";
	img[2]=",CP2-2.png";
	img[3]=",CP3-2.png";
	img[4]=",CP4-2.png";

	var results = [];
	for (var i=0; i < topic.length; i++)
	{
		results.push(topic[i]);
	}
	var htmlstr='';
	var colorcode='';
	if(results.length>0)
	{
		var ctr=0;
		htmlstr='<div class="list-group">';
			$.each(results,function(k,v){
				if(ctr%2==0)
					colorcode="list-group-item list-group-item-warning";
				else
					colorcode="list-group-item list-group-item-info";
				htmlstr+='<a id="'+ctr+'" href="thumbnail.html?imagename='+img[ctr]+'#'+v.Title+'#con-Pneumatic.html" class="'+colorcode+'">'+v.Title+'</a>';
				ctr++;
			});
	}
	htmlstr+='</div>';
		$("#list").html(htmlstr);
}