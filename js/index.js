window.onload=function(){
	var jinzhu=document.getElementsByClassName('header_list')[0];
	var jinzhu_li=jinzhu.parentNode;
	var shang=document.getElementsByClassName('shang');
	for(i=0;i<shang.length;i++){
		shang[i].onmouseover=function(){
			jinzhu.style.display="block";
		}
		shang[i].onmouseout=function(){
			jinzhu.style.display="none";
		}
	}
	/*jinzhu_li.onmouseover=function(){
		jinzhu.style.display="block";
	}
	jinzhu_li.onmouseout=function(){
		jinzhu.style.display="none";
	}*/
}