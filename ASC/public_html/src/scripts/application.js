
/*
 * 
 * @Import Script
 */
        import $ from "jquery"
  import { Layout } from "layout/layout.js"

/*
 *  BITCODE APPLICATION VIEW SCRIPT
 */


   
    
    //Get the Layout structure script management
    let page_layout = new Layout();
    
    //GEt List Of All Supported Event in one String
      let events = page_layout.getMapData("event");
   // console.log(page_layout.getMapData("event"));
    
    /*
     * OnEvent on header or body or footer
     * -GET the type of Event
     * - GET part of view that raise 
     * the Event[Head,Body,Foot]
     * -GET the element that raise is ID specific
     * 
     */
    
        //Page Blocks
      var dumbVar=['header','section#content','footer'];

    //Header
     $(dumbVar[0]).on(events,function(event){
        // console.log(event.target.id);
      
         //Get type Event
        let typeEvent = event.type;
        //Get the Tag Name and his ID
       // let tag = event.target.nodeName;
        let elementId = event.target.id;
        //Get the Element Super Parent
        let  elementAncestor = dumbVar[0];

        /*
         * Call Layout Methosd to handle event
         */
        
        page_layout.on(typeEvent,elementId,elementAncestor);
     
            });
            
            
            //Section#content
            
            $(dumbVar[1]).on(events,function(event){
        // console.log(event.target.id);
      
         //Get type Event
        let typeEvent = event.type;
        //Get the Tag Name and his ID
       // let tag = event.target.nodeName;
        let elementId = event.target.id;
        //Get the Element Super Parent
        let  elementAncestor = dumbVar[1];

        /*
         * Call Layout Methosd to handle event
         */
        
        page_layout.on(typeEvent,elementId,elementAncestor);
     
            });
            
            //Footer  
         $(dumbVar[2]).on(events,function(event){
        // console.log(event.target.id);
      
         //Get type Event
        let typeEvent = event.type;
        //Get the Tag Name and his ID
       // let tag = event.target.nodeName;
        let elementId = event.target.id;
        //Get the Element Super Parent
        let  elementAncestor = dumbVar[2];

        /*
         * Call Layout Methosd to handle event
         */
        
        page_layout.on(typeEvent,elementId,elementAncestor);
     
            });
     
     
  
    
  