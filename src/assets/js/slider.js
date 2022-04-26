var position = 1;

$('#next').click(function(){
    $('#carousel-item-'+position).removeClass('active');
    position = position+1;
    if(position > 4){
        position = 1;
    }
    $('#carousel-item-'+position).addClass('active');
    console.log(position);
});

$('#previus').click(function(){
    $('#carousel-item-'+position).removeClass('active');
    position = position-1;
    if(position == 0){
        position = 4;
    }
    $('#carousel-item-'+position).addClass('active');
    console.log(position);
})