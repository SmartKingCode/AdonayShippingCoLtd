/*
 * 
 * @Import Script
 */
  import { EventHandling } from "module/eventHandling.js"
  import { DataHandling } from "module/dataHandling.js"
  import { AnimationHandling } from "module/animationHandling.js"
   import * as FunctionHandling from "module/functionHandling.js"
  
     
  export class Head
  {
      onEvent(eventName,elementId)
      {
          switch(eventName)
          {
            case 'click':
               console.log('click');
               
               /*
                * 
                * @Switch Element
                */
               
               
               
               
               
               
                //FunctionHandling.click(elementId);
                /*
                 * Switch id
                 * 
                 */
              /*  switch(elementId)
                {
                     case 'dropdownMenuLink':
                        
                   
                              
                       $("a#dropdownMenuLink").next("ul.dropdown-menu").toggleClass("d-none");
                        $("a#dropdownMenuLink2").next("ul.dropdown-menu").addClass("d-none");
                        $("a#dropdownMenuLink3").next("ul.dropdown-menu").addClass("d-none");
                        $("a#dropdownMenuLink4").next("ul.dropdown-menu").addClass("d-none");
                        
                          break;
                          case 'dropdownMenuLink2':
                            
                              
                       $("a#dropdownMenuLink2").next("ul.dropdown-menu").toggleClass("d-none");
                        $("a#dropdownMenuLink").next("ul.dropdown-menu").addClass("d-none");
                        $("a#dropdownMenuLink3").next("ul.dropdown-menu").addClass("d-none");
                        $("a#dropdownMenuLink4").next("ul.dropdown-menu").addClass("d-none");
                          break;
                          case 'dropdownMenuLink3':
                            
                              
                        $("a#dropdownMenuLink3").next("ul.dropdown-menu").toggleClass("d-none");
                        $("a#dropdownMenuLink").next("ul.dropdown-menu").addClass("d-none");
                        $("a#dropdownMenuLink2").next("ul.dropdown-menu").addClass("d-none");
                        $("a#dropdownMenuLink4").next("ul.dropdown-menu").addClass("d-none");
                          break;
                          case 'dropdownMenuLink4':
                             
                              
                       $("a#dropdownMenuLink4").next("ul.dropdown-menu").toggleClass("d-none");
                        $("a#dropdownMenuLink").next("ul.dropdown-menu").addClass("d-none");
                        $("a#dropdownMenuLink2").next("ul.dropdown-menu").addClass("d-none");
                        $("a#dropdownMenuLink3").next("ul.dropdown-menu").addClass("d-none");
                          break;
                }*/
                break;
            case 'dblclick':
                break;
            case 'hover':
                break;
        
          }
      }
  }


