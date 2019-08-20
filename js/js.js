$(document).ready(function(){
  console.log('Works!');

  $("form#identify").submit(function(event){
    event.preventDefault();
        $("input:checkbox[name=personality]:checked").each(function(){
          var personalityTrait = parseInt((this).val());
          var theTotal =[];
          theTotal = theTotal.push(personalityTrait);
          if (theTotal).length < 3{
            $('responses').append("You Lose");
          }
          if (theTotal).length =3{
            $("responses").append("Okie Doke");
          }
          console.log('Works!');
    });

  });
});
