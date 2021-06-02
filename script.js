function myFunction() {

   function toggleClass(element, className){
     for (var i = 0; i < element.length; i++) {
       element[i].classList.toggle(className);
     }
   }

   var page = document.body;
   page.classList.toggle("dark-mode");

   var section = document.getElementsByTagName("section");
   var footer = document.getElementsByTagName("footer");

   var iconsFas = document.getElementsByClassName("fas");
   var iconsFar = document.getElementsByClassName("far");
   var iconsFab = document.getElementsByClassName("fab");
   var date = document.getElementsByClassName("date");
   var actual = document.getElementsByClassName("actual");

   var hover = document.querySelectorAll('.hover');
   var pgl = document.querySelectorAll('.pgl');


   toggleClass(pgl, "dark-pgl");
   toggleClass(actual, "dark-actual");
   toggleClass(hover, "dark-hover");
   toggleClass(section, "dark-mode-section");
   toggleClass(footer, "dark-mode-footer");
   toggleClass(iconsFas, "dark-icons");
   toggleClass(iconsFar, "dark-icons");
   toggleClass(date, "dark-icons");
   toggleClass(iconsFab, "dark-icons");
}
