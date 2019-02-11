/*
 * 
 * @Import Script
 */

  import { Head } from "layout/head.js"
  import { Body } from "layout/body.js"
  import { Foot } from "layout/foot.js"
  
 export  var data= new Map();
           data.set("event","click dblclick  submit focus blur change " );
  export class Layout
  {
     
       getMapData(key)
      {
          return data.get(key);
      }
      
      on(eventName,elementId="",elementAnc)
      {
          switch(elementAnc)
          {
              case 'header':
                  let header = new Head();
                  header.onEvent(eventName,elementId);
                  break;
                  
              case 'section#content':
                   let main = new Body();
                  main.onEvent(eventName,elementId);
                  break;
              
              case 'footer':
                   let footer = new Foot();
                  footer.onEvent(eventName,elementId);
                  break;
            
                  
          }
      }
  }