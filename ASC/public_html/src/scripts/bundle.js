

/*
     * on load
     */
    $(window).on("load",function(){
        
        console.log("process");
        if($("div#process").length > 0)
        {
            console.log("enter");
        $.ajax({
            type: "GET",
            
            url: "/bitcode/get-value/level",
            
            success: function (data) {
                  console.log(data.toString());  
               
               switch(data.toString() )
               {
                   case '':
                       console.log("empty");  
                   break;
                   default:
                       let prs = parseInt(data.toString());
                        let it =0; 
                      
                     
                         console.log("ex");
                        
                         while(it <= prs )
                           {
                                
                                $("a.step_"+it).removeClass("text-muted");
                         $("a.step_"+it).addClass("text-white checked");
                        
                           
                           
                            it++;
                             }
                             if(prs==7){
                              
                                  console.log(prs);
                                $.ajax({
                                    type: "GET",

                                    url: "/bitcode/get-value/dev_page",
                                    success: function(det){
                                       let it2 = parseInt(det.toString());
                                       console.log("dev_page: "+det.toString());
                                         $.ajax({
                                    type: "GET",

                                    url: "/bitcode/get-value/dev_page_block",
                                    success: function(dete){
                                       let cnst = parseInt(dete.toString());
                                         console.log("dev_page_block: "+dete.toString());
                                        
                                            if(it2 ==0 && cnst==5){
                                             $("a.step_70").removeClass("text-muted");
                                          $("a.step_70").addClass("text-white checked");
                                        }
                                        else if(it2 ==1 && cnst <=4){
                                            if(cnst != 4){
                                                  $("a.step_70").removeClass("text-muted");
                                          $("a.step_70").addClass("text-white checked");
                                            }
                                            else{
                                                 $("a.step_70").removeClass("text-muted");
                                          $("a.step_70").addClass("text-white checked");
                                           $("a.step_71").removeClass("text-muted");
                                          $("a.step_71").addClass("text-white checked");
                                            }
                                            
                                        }
                                        else if(it2==2 && cnst <=2){
                                              if(cnst != 2){
                                                  $("a.step_70").removeClass("text-muted");
                                          $("a.step_70").addClass("text-white checked");
                                                  $("a.step_71").removeClass("text-muted");
                                          $("a.step_71").addClass("text-white checked");
                                            }
                                            else{
                                                $("a.step_70").removeClass("text-muted");
                                          $("a.step_70").addClass("text-white checked");
                                                 $("a.step_71").removeClass("text-muted");
                                          $("a.step_71").addClass("text-white checked");
                                           $("a.step_72").removeClass("text-muted");
                                          $("a.step_72").addClass("text-white checked");
                                            }
                                        }
                                        else if(it2==3 || it2==4){
                                            while(it2>=0){
                                                  $("a.step_7"+it2).removeClass("text-muted");
                                          $("a.step_7"+it2).addClass("text-white checked");
                                          it2--;
                                            }
                                        }
                                           
                                     
                                    }});
                                        
                                     
                                    }
                                    });
                                    
                                     
                                  
                             }
                          
                       
                       
                     
                       break;
               }
                
                    
            },
            error: function (e) {

                console.log("ERROR : ", e);
     

            }
        });
    }
    
  
    
    });

/*
 * 
 * @on click
 */
 $("*").click(function(event){
       console.log(event.target.id);
       switch(event.target.id)
       {
            case 'web_app':
                         $("section#login_form").empty();
                         let ty=`
                           <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title"> Server side</h4>
         
        </div>
                <!-- Modal body -->
        <div class="modal-body w-100">
              <div class="form-group">
               <label for="language">Language:</label>
                 <select class="custom-select float-right" id="language" name="language" >
                                     <option value="java">java</option>
                                     <option value="node">node.js</option>
                                         </select>   
               <br/>
                  <br/>
                          
               </div>
            
            </div>
               
                 <div class="modal-footer">
      
           
                 
                           <a href="#" id="send" class="btn btn-outline-secondary float-right">Send</a> 
                
        </div>
            </div>
           </div>
               
   `;
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            
                               $("section#login_form").append(ty);                                                                                                                                                                                                             
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                
                         break;
                          case 'website':
                         break;
                     case 'mobile_app':
                         break;
                     case 'send':
                         let serve = document.getElementById("language").value;
                           $("section#login_form").empty();
                         if(serve.includes("java"))
                         {
                             ty=`
                              <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Application Architecture</h4>
         
        </div>
                <!-- Modal body -->
        <div class="modal-body w-100">
             
                  <ul class="nav flex-column  m-0 w-100 container-fluid ">
                   	
                           <li  class="nav-item dropdown-item "> <a class="nav-link dropdown-item " href="/bitcode/application/monolithic" >Monolithic Application</a></li>
                             
                         <li  class="nav-item dropdown-item ">  <a class="nav-link dropdown-item" href="/bitcode/application/microservice">Microservice Application</a>  </li>                                                                                                                                                                                        
                     </ul>  
              
            
            </div>
            </div>
           </div>
 `;
                             
                             
                             
                              $("section#login_form").append(ty);      
                             
                             
                             
                             
                             
                             
                         }
                         break;
                    
       }
    });
    
$(document).ready(function(){
     $("#login_form").modal("show");
       $("#create_form").modal("show");
   
   $("#login_block").modal("show");
    $("#registration").modal("show");
     $("#tasks").modal("show");
  

 $('#project_tree').jstree({"plugins":["wholerow"]});
   
    
        
    
   /*
    * On Click
    */
            
  
    
    let width=0,height=0;
    let getBlockWidth,getBlockHeight,col,wdth=60.65,red=0;
   interact('.resizable').resizable({
   
  edges: {
    top   : '.resize-top',
    left  : '.resize-left',
    bottom: '.resize-bottom',
    right : '.resize-right'
  },
  onmove: function(event)
  {
      
    //var target = event.target;
    //console.log("resizeend");
   
    // update the element's style
   width = event.rect.width;
    height =  event.rect.height;
     switch(event.target.id)
      {
          case 'view_profile':
               console.log("view_profile");
               console.log(event.rect.height);
                getBlockHeight = $("#view_profile").height();
               if(height>getBlockHeight && getBlockHeight <230){
                     red = height - getBlockHeight;
                   $("#view_profile").height(height);
                     $("#view_profile .body").height( $("#view_profile .body").height() +red);
                    $("#view_contain, #view_contain .body").height( $("#view_contain").height()-red);
               }
               else if(height<getBlockHeight && getBlockHeight >150){
                   red =  getBlockHeight - height ;
                   $("#view_profile").height(height);
                      $("#view_profile .body").height( $("#view_profile .body").height() -red);
                    $("#view_contain,#view_contain .body ").height( $("#view_contain").height()+red);
               }
          break;
          case 'input_output':
               console.log("input_output");
               getBlockHeight = $("#input_output").height();
               if(height>getBlockHeight && getBlockHeight <490){
                              console.log("height sup");
                   red = height - getBlockHeight;
                   $("#input_output").height(height);
                 
                    $("#input_container").height($("#input_container").height()+red);
                   $("#developpeur,#developpeur form,#devtool,#devtool .contain,#devtool .contain .body,#devtool .contain .body .tab-content,#devtool .contain .body .tab-content div#process ul.range").height($("#developpeur").height() -red);
               }
               else if(height<getBlockHeight && getBlockHeight >100){
                      console.log("height inf");
                   red =  getBlockHeight - height ;
                   $("#input_output").height(height);
                 
                    $("#input_container").height($("#input_container").height()-red);
                  $("#developpeur,#developpeur form,#devtool,#devtool .contain,#devtool .contain .body,#devtool .contain .body .tab-content,#devtool .contain .body .tab-content div#process ul.range").height($("#developpeur").height() +red);
               }
             
          break;}
    
  },onend: function(event){
        console.log("end "+event.target.id);
     
      switch(event.target.id)
      {
         
          case 'devtool':
               console.log("devtool");
              getBlockWidth = $("#devtool").width();
               if(getBlockWidth > width){
                   console.log("devtool sup");
                    
                    col = getColNumber("devtool");
                    if(col>3){
                         col--;
                        applyClass("devtool",col+" ");
                        col= getColNumber("developpeur");
                        col++;
                          applyClass("developpeur",col+" ");
                    }
               }
               else{
                     console.log("devtool inf");
                    col = getColNumber("devtool");
                    if(col<4){
                         col++;
                        applyClass("devtool",col+" ");
                        col= getColNumber("developpeur");
                        col--;
                          applyClass("developpeur",col+" ");
                    }
               }
                        
              
          break;
          
          case 'view_project':
              console.log("view_project");
              getBlockWidth = $("#view_project").width();
              
              if(getBlockWidth < width){
                    console.log("view_project sup");
                    
                    col = getColNumber("view_project");
                    if(col < 4)
                    {
                        col++;
                        applyClass("view_project",col+" ");
                        col= getColNumber("right_box");
                        col--;
                          applyClass("right_box",col+" ");
                        
                    }
              }
              else if(getBlockWidth > width){
                   col = getColNumber("view_project");
                    if(col > 2)
                    {
                        col--;
                        applyClass("view_project",col+" ");
                        col= getColNumber("right_box");
                        col++;
                          applyClass("right_box",col+" ");
                    }
              }
             
              break;
      }
  }
});
    
});

/*
 * REsizing features
 */


 let getColNumber = function(cl){
       let  clas = $("#"+cl).attr("class");
                        //console.log(clas);
                  let      ind = clas.search("col-lg-");
                   let     sub = clas.substr(ind, (ind + 9));
                   let     spt = sub.split("-");
                    let    ty = parseInt(spt[2]);
                    return ty;
 };
 
 let applyClass = function(cl,newCol){
     let  clas = $("#"+cl).attr("class");
                        //console.log(clas);
                  let      ind = clas.search("col-lg-");
                   let     sub = clas.substr(ind, (ind + 9));
                   let     spt = sub.split("-");
                   
                     let rep = clas.replace(sub, spt[0] + "-" + spt[1] + "-" +newCol);
                     
                        $("#"+cl).attr("class", rep);
 };
 