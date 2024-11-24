$(document).ready(function(){
topic=JSON.parse(data);
displayRecord();
});
function displayRecord()
{
var img=new Array();
img[0]="CE0-1.jpg,CE0-2.png";
img[1]="CE1-1.png,CE1-2.png";
img[2]="CE2-1.jpg,CE2-2.png";
img[3]="CE3-1.jpg,CE3-2.png";
img[4]="CE4-1.png,CE4-2.png";
img[5]="CE5-1.jpg,CE5-2.png";
img[6]="CE6-1.png,CE6-2.png";
img[7]="CE7-1.jpg,CE7-2.png";
img[8]="CE6-1.png,CE8-2.png";
img[9]="CE9-1.png,CE9-2.png";
img[10]="CE10-1.png,CE10-2.png";
img[11]="CE11-1.png,CE11-2.png";
img[12]="CE12-1.png,CE12-2.png";
img[13]="CE13-1.png,CE13-2.png";
img[14]="CE14-1.png,CE14-2.png";
img[15]=",CE15-2.png";
var results = [];
for (var i=0; i < topic.length; i++)
{
	results.push(topic[i]);
}
var htmlstr='';
var colorcode="";

if(results.length>0)
{
	var ctr=0;
	htmlstr='<div class="list-group">';
		$.each(results,function(k,v){
			if(ctr%2==0)
				colorcode="list-group-item list-group-item-warning";
			else
				colorcode="list-group-item list-group-item-info";
				htmlstr+='<a id="'+ctr+'" href="thumbnail.html?imagename='+img[ctr]+'#'+v.Title+'#con-electrical.html" class="'+colorcode+'">'+v.Title+'</a>';
				ctr++;
		});
}
	htmlstr+='</div>';
	$("#list").html(htmlstr);
}