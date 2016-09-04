'use strict'

$(document).ready(function(){

 var $bold = $('.bold')
 var $italic = $('.italic')
 var $size = $('.font-size')
 var $openfile = $('.openfile')
 var $text = $('#text')
 var $underline = $('.underline')
 var $textbox = $('#textbox')

 /*$bold.toggle(function(){
     document.getElementById("text").style.fontWeight = "bold";
 },function(){
     document.getElementById("text").style.fontWeight = "normal";
 }
 )*/

 $bold.toggle(function(){
 	$text.css("font-weight","Bold");
 },function(){
 	$text.css("font-weight","normal");
 })

 $italic.toggle(function(){
     document.getElementById("text").style.fontStyle = "italic";
 },function(){
     document.getElementById("text").style.fontStyle = "normal";
 }
 )

 $underline.toggle(function(){
 	$text.css("text-decoration","underline");
 },function(){
 	$text.css("text-decoration","none");	
 })

 $size.change(function(){
	$text.css("font-size",$(this).val() + "px");
 }
 )

 $('#open').on('click', function() {
    $('#fileinput').trigger('click');
})

	$('#replace').click(function(){
     var textFind = $('#replace1').val();
     var textReplace = $('#replace2').val();
     var data = $text.val();
     var replace = data.replace(textFind,textReplace);
     document.getElementById("text").value = replace;
   })


  $('#search').click(function(){
     var str = $('#input').val();
     var length = str.length;
     var data = $text.val();
     var find = data.search(str);
     document.getElementById('text').setSelectionRange(find,find+length);
   })
  $('#save').click(function(){
   var text = document.getElementById("text").value;
   function dl(data,filename){
     var b=document.createElement('a');
     b.download=filename;
     b.textContent=filename;
     b.href='data:application/json;base64,'+
     window.btoa(unescape(encodeURIComponent(data)));
     return b
}

document.body.appendChild(dl(text,'Notepad.txt'));
})
})