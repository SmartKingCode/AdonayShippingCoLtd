/*
 * 
 * @Export Script
 */
    import $ from "jquery"
  
  export class EventHandling
  {
       addElementToView(placeThis,position,targetedElement)
       {
           switch(position)
           {
               case "after":
                   $(targetedElement).after(placeThis);
                   break;
                case "before":
                      $(targetedElement).before(placeThis);
                   break;
           }
       }
       
       emptyForm()
       {
           
       }
  }

