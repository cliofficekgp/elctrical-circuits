$(document).ready(function(){
topic=JSON.parse(data);
displayRecord();
});
function displayRecord()
{
	var img=new Array();
	img[0]= ",TP0-2.jpg";
	img[1]= ",TP1-2.png";
	img[2]= ",TP2-2.png";
	img[3]= ",TP3-2.png";
	img[4]= ",TP4-2.png";
	img[5]= ",TP5-2.png";
	img[6]= ",TP6-2.png";
	img[7]= ",TP7-2.png";
	img[8]= ",TP8-2.png";
	img[9]= ",TP9-2.png";
	img[10]= ",TP10-2.png";
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
				htmlstr+='<a id="'+ctr+'" href="thumbnail.html?imagename='+img[ctr]+'#'+v.Title+'#three-phase-Pneumatic.html" class="'+colorcode+'">'+v.Title+'</a>';
				ctr++;
			});
	}
	htmlstr+='</div>';
		$("#list").html(htmlstr);
}