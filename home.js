const arr = [{
    todo: 'go to market',
    completed:'false'
}, {
    todo: 'take water',
    completed:'false'
}, {
    todo: 'be a good programmer',
    completed:'false'
}, {
    todo: 'travel world',
    completed:'false'
}, {
    todo: 'full stack web developer',
    completed:'false'
}, {
    todo: 'start from odisha',
    completed:'false'
}]
arr.forEach((ar)=>{
    $("ol").append("<li><i class='fas fa-trash-alt'></i> "+ar.todo+"</li>");
})

$('#button-addon2').click(()=>{
    let newTodo=$('input').val();
    $("ol").append("<li><i class='fas fa-trash-alt'></i> "+newTodo+"</li>");
})
$("li").click(function(){
    $(this).addClass('completed');
})

$("i").click(function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});