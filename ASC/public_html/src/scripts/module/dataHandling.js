/*
 * 
 * @Export Script
 */
    import $ from "jquery"
    
    
  
  export class DataHandling
  {
     getRequest()
     {
         
     }
     
     postRequest(path,dataToSend)
     {
         
         $.ajax({
            type: "POST",
            
            url: path,
            data:dataToSend,
          
            cache: false,
            timeout: 600000,
            success: function (data) {
                        
                console.log("SUCCESS : ", path);
                 window.location.replace(path);
            },
            error: function (e) {

                console.log("ERROR : ", e);
     

            }
        });
          
     }
  }

