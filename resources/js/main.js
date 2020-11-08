 //Get the button
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () { scrollFunction() };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }


//  ==== start btn ===

// function start_btn(id) {
//     var x = document.getElementById(id);
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function html_btn() {
//     var x = document.getElementById('html');
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function css_btn() {
//     var x = document.getElementById('css');
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function logo_btn() {
//     var x = document.getElementById('logo');
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
//   function headline_btn() {
//     var x = document.getElementById('headline');
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
//   function js_btn() {
//     var x = document.getElementById('js');
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
//   function feature_btn() {
//     var x = document.getElementById('feature');
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function services_btn() {
//     var x = document.getElementById('services');
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

  // function footer_logo() {
  //   var x = document.getElementById('footer_logo');
  //   if (x.style.display == "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }

  // function bg_btn() {
  //   var x = document.getElementById('bg');
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }


// function display(id) {
//     var id_list=['start','html','css','logo','headline','js','feature','services','footer_logo','bg'];
//     var x = document.getElementById(id);


//     for ( var i = 0; i<id_list.length;i++) {
//         console.log(id_list.indexOf(id));
//         if(i==id){
//           console.log(id_list[i]);
//         }
        
// }

// // for(var i=0;i<id.length;i++){
// //   if(id==id_list[i]){
// //     x.style.display = "block";
// //   }
// //   else{
// //     x.style.display = "none";
// //   }
// // }
    
//   }
  


  function display(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
      x.style.display = "block";
    }
     else{
       
      x.style.display = "block";
    }
  }


  // function display(cityName,elmnt,color) {
  //   var i, start, tablinks;
  //   start = document.getElementsByClassName("start");
  //   for (i = 0; i < start.length; i++) {
  //     start[i].style.display = "block";
  //   }
  //   tablinks = document.getElementsByClassName("tablink");
  //   for (i = 0; i < tablinks.length; i++) {
  //     start[i].style.display = "none";
  //   }
  //   // document.getElementById(cityName).style.display = "block";
  //   // elmnt.style.backgroundColor = color;
  
  // }
  // // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();



 




  