import {HomeScreen} from  "./home.js"

import {About} from "./about.js"

import {Contact} from "./contact.js"
 
import {ParseUrl} from "./utlis.js"

import {Error} from "./error.js"

let main_Content = document.getElementById("main-content");


let routes = {
    "/":HomeScreen,
    "/about":About,
    "/contact":Contact,
     
}



 

function route(){

    
     
    let parse  = ParseUrl();

     

    let parser = function(){
        if(parse == ""){
          return  routes["/"]
        }
        else if(parse == "#/about"){
            return routes["/about"]
        }
        else if(parse == "#/contact"){
            return routes["/contact"]
        }
        else{
            return Error;
        }
       
    }

    let x = parser()
     

  
    


main_Content.innerHTML = x.render();

}

 
window.addEventListener("load",route)
 

 window.addEventListener("hashchange",route);
  

 
 
 



 
  