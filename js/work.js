// $(Document).ready(function(){
//     $(".tat_img").click(function() {
//         $("#tat_p").show();
//         $(".tat_img").hide();
//         console.log("display paragraph")
//     });
//     $("#tat_p").click(function(){
//         $(".tat_img").show();
//         $("#tat_p").hide();
//     });
//     $(".hair_img").click(function() {
//         $("#hair_p").show();
//         $(".hair_img").hide();
//         console.log("display paragraph")
//     });
//     $("#hair_p").click(function(){
//         $(".hair_img").show();
//         $("#hair_p").hide();
//     });
//     $(".styling_img").click(function() {
//         $("#styling_p").show();
//         $(".styling_img").hide();
//         console.log("display paragraph")
//     });
//     $("#styling_p").click(function(){
//         $(".styling_img").show();
//         $("#styling_p").hide();
//       })
//       $(".pedi_img").click(function() {
//           $("#pedi_p").show();
//           $(".pedi_img").hide();
//           console.log("display paragraph")
//       });
//       $("#pedi_p").click(function(){
//           $(".pedi_img").show();
//           $("#pedi_p").hide();
//         })
//         $(".weave_img").click(function() {
//           $("#weave_p").show();
//           $(".weave_img").hide();
//           console.log("display paragraph")
//       });
//       $("#weave_p").click(function(){
//           $(".weave_img").show();
//           $("#weave_p").hide();
//         })
//         $(".colour_img").click(function() {
//           $("#colour_p").show();
//           $(".colour_img").hide();
//           console.log("display paragraph")
//       });
//       $("#colour_p").click(function(){
//           $(".colour_img").show();
//           $("#colour_p").hide();
//         })
//     });
  
  
$(document).ready(function () {
    $(".tattoo").click(function() {
        $("#tattoo-show").slideToggle()
        $("#tattoo-hide").slideToggle()
    })
    $(".haircuts").click(function() {
        $("#haircut-show").slideToggle()
        $("#haircut-hide").slideToggle()
    })
    $(".bridal").click(function() {
        $("#bridal-show").slideToggle()
        $("#bridal-hide").slideToggle()
    })
    $(".pedi").click(function() {
        $("#pedi-show").slideToggle()
        $("#pedi-hide").slideToggle()
    })
    $(".weave").click(function() {
        $("#weave-show").slideToggle()
        $("#weave-hide").slideToggle()
    })
    $(".color").click(function() {
        $("#color-show").slideToggle()
        $("#color-hide").slideToggle()
    })
    
})