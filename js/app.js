$(document).ready(function(){
	$(".twitts").click(function(){
		if($(".notify").attr('data-notify')=='0'){
			viewT();
		}
	});
	$(".close").click(function(){
		if($(".notify").attr('data-notify')=='1'){
			closeT();
		}
	})
});
function viewT(){
	$(".notify").velocity("transition.bounceIn",1000);
	$(".notify").attr('data-notify','1');
}
function closeT(){
	$(".notify").velocity("transition.bounceOut",1000);
	$(".notify").attr('data-notify','0');
}