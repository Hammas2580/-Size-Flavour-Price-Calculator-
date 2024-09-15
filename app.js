var size = prompt("what do you like small , medium , large");
var flavour = prompt("enter your flavour name apple , lemon , peech");
var price = 0;
if ((size == "small" || size == "medium" || size == "large")//  &&// (flavour == "apple" || flavour == "lemon" || flavour == "peech")
) 
   if (flavour == "apple" || flavour == "lemon" || flavour == "peech")
   {
  if (flavour == "apple") {
    price = 100;
  } else if (flavour == "lemon") {
    price = 150;
  } else if (flavour == "peech") {
    price = 250;
  } 
  alert(
    "your price of " + flavour + " flavour in" + " " + size + " size is " + price);
} 

else {
  alert("Not avaiable this flavour and size");
}

