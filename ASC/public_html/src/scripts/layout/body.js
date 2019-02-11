/*
 * 
 * @Import Script
 */

  import * as FunctionHandling from "module/functionHandling.js"

          
  export class Body
  {
     onEvent(eventName,elementId)
      {
          switch(eventName)
          {
            case 'click':
                
                console.log('click');
                FunctionHandling.click(elementId);
                                           
                break;
            case 'dblclick':
                 console.log('dblclick');
                FunctionHandling.dblClick(elementId);
                break;
            case 'change':
                
                     console.log('onchange');
                     FunctionHandling.change(elementId);
                        
                break;
            case 'submit':
                
                    console.log('submit');
                    FunctionHandling.submit(elementId);
                    
                break;
            
            /* case 'mouseenter':
                
                    console.log('mouseenter');
                    FunctionHandling.mouseenter(elementId);
                    
                break;
                case 'mouseleave':
                
                    console.log('mouseleave');
                    FunctionHandling.mouseleave(elementId);
                    
                break;*/
        
          }
      }
  }
  
  var extract = function(par)
  {
      return par.split(":");
  };
 

