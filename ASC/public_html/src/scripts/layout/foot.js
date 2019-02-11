/*
 * 
 * @Import Script
 */
  import { EventHandling } from "module/eventHandling.js"
  import { DataHandling } from "module/dataHandling.js"
  import { AnimationHandling } from "module/animationHandling.js"
  
  export class Foot
  {
     onEvent(eventName,elementId)
      {
          switch(eventName)
          {
            case 'click':
                console.log("foot");
                break;
            case 'dblclick':
                break;
            case 'hover':
                break;
        
          }
      }
  }

