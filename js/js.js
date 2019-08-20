$(document).ready(function(){

$("form#identifiers").submit(function(event){
  event.preventDefault();
      $("input:checkbox[name=personality]:checked").each(function(){
        var personalityTrait = $(this).val();
        $('.responses')append.(personalityTrait);
  });

});
});
