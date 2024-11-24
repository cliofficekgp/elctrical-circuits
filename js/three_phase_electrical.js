$(document).ready(function(){
topic=JSON.parse(data);
displayRecord();
});
function displayRecord()
{
	var img=new Array();
	img[0]= "TE0-1.jpg,";
	img[1]= "TE1-1.jpg,";
	img[2]= "TE2-1.jpg,";
	img[3]= "TE3-1.jpg,";
	img[4]= "TE4-1.jpg,";
	img[5]= "TE5-1.jpg,";
	img[6]= "TE6-1.jpg,";
	img[7]= "TE7-1.jpg,";
	img[8]= "TE8-1.jpg,";
	img[9]= "TE9-1.jpg,";
	img[10]= "TE10-1.jpg,";
	img[11]= "TE11-1.jpg,";
	img[12]= "TE12-1.jpg,";
	img[13]= "TE13-1.jpg,";
	img[14]= "TE14-1.jpg,";
	img[15]= "TE15-1.jpg,";
	img[16]= "TE16-1.jpg,";
	img[17]= "TE17-1.jpg,";
	img[18]= "TE18-1.jpg,";
	img[19]= "TE19-1.jpg,";
	img[20]= "TE20-1.jpg,";
	img[21]= "TE21-1.jpg,";
	img[22]= "TE22-1.jpg,";
	img[23]= "TE23-1.jpg,";
	img[24]= "TE24-1.jpg,";
	img[25]= "TE25-1.jpg,";
	img[26]= "TE26-1.jpg,";
	img[27]= "TE27-1.jpg,";
	img[28]= "TE28-1.jpg,";
	img[29]= "TE29-1.jpg,";
	img[30]= "TE30-1.jpg,";
	img[31]= "TE31-1.jpg,";

	
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
				htmlstr+='<a id="'+ctr+'" href="3Pthumbnail.html?imagename='+img[ctr]+'#'+v.Title+'#three-phase-electrical.html" class="'+colorcode+'">'+v.Title+'</a>';
				ctr++;
			});
	}
	htmlstr+='</div>';
		$("#list").html(htmlstr);
}