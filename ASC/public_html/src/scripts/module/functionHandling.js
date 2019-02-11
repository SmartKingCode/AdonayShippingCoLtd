
  import $ from "jquery"
  import { EventHandling } from "module/eventHandling.js"
  import { DataHandling } from "module/dataHandling.js"
  import { AnimationHandling } from "module/animationHandling.js"

    let eventHandler = new EventHandling();     
    let dataHandler = new DataHandling();
  
  let array=["Byte:Short:int:Long:Double:Float:","String:Char","Date:Time:DateTime"];
  export  var ids=  new Map();
  ids.set("mono","mono_entity:mono_constraint:mono_relation:mono_manipulation");
  ids.set("1",array[1]);
   ids.set("2",array[1]);
    ids.set("3",array[2]);
     ids.set("4",array[0]);
      ids.set("5",array[0]+array[1]);
       ids.set("6",array[0]+array[1]);
         ids.set("7",array[0]+array[1]);
         

export let extract =  function(par)
  {
      return par.split(":");
  };
  
/*
 * On Click
 */  
export let click = function(elementId)
{
     let arro = extract(ids.get("mono"));
               let formId;
                let tag;
             switch(elementId)
                {
                    case 'page_name_slct':
                        console.log("page name select click");
                        let pag_nme = $(event.target).text();
                        let content =`<object class="m-0 w-100 p-0">
                                <div class="container-fluid border border-dark">
                                    <p class="text-danger">HTML VIEWER</p>
                                    </div>
                            </object>`;
                                $("#display").append(content);
                    break;
                  
                     case 'input-head':
                        console.log("input-head");
                         $(event.target).nextAll("ul").slideToggle("slow");
                    break;
                    case 'drop':
                        $(event.target).toggleClass("b-grey");
                          
                        $(event.target).find("span#toolbox").toggleClass("d-none");
                  
                       break;
                case 'edit':
                    console.log("edit");
                    let xvv= $(event.target.parentNode).parent("li").text();
                    console.log(xvv);
                     $(event.target.parentNode).parent("li").find("span#data_carry").empty();
                    let inpt = `<input type="text" name="editor" class="rounded mb-1" value="${xvv}"/>`;
                    $(event.target.parentNode).parent("li").find("span#data_carry").append(inpt);
                    break;
                case 'delete':
                     console.log("delete");
                $(event.target.parentNode).parent("li").remove();
                break;
                     case 'save':
                          console.log("save");
                        let vl=  $(event.target.parentNode).parent("li").find("input").val();
                         console.log(vl);
                       $(event.target.parentNode).parent("li").find("span#data_carry").empty();
                       
                   $(event.target.parentNode).parent("li").find("span#data_carry").text(vl);
                     break;
                    case 'entity_plus':
                         console.log("entity_plus");
                         formId = arro[0];
                        let entite ={
                          name:  document.forms[formId]["1_entity"].value,
                          attr: document.forms[formId]["1_attribute"].value,
                          type: document.forms[formId]["1_type"].value
                        };
                           console.log(entite);
                        tag=`
                        <li class="m-0 p-0">
                      
                <ul class="datalist m-0 p-0" >
                                <li id="datalist_link" class="p-0 m-0"><span id="input-head" class="m-0 bg-dark pl-1 text-muted h6 d-lg-block"><i class="fa fa-caret-right mr-1"></i>${entite.name}</span>
                                        <ul class=" p-0 pl-3 m-0 " type="none">
                                            <li class="ml-3 mb-1 p-1" id="drop"><span id="data_carry">${entite.type} ${entite.attr}</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                        </ul>
                                    </li>
                        </ul>
                        </li>    
                        `;
                          //  eventHandler.addElementToView(tag,"after","#"+formId);
                          $("#input_show").prepend(tag);
                            $("div#input").scrollTop(110);
                        break;
                    case 'attribute_plus':
                        console.log("attribute_plus");
                          formId = arro[0];
                         let entite_attr ={
                          name:  document.forms[formId]["1_entity"].value,
                          attr: document.forms[formId]["1_attribute"].value,
                          type: document.forms[formId]["1_type"].value
                        };
                         console.log(entite_attr);
                         let dataTitle;
                         dataTitle=  $("ul.datalist");
                         let dt = $(dataTitle).children();
                       console.log(dataTitle);
                      var i;
                      for (i = 0; i < dataTitle.length; i++) 
                      {
                          
                           let tit=$(dataTitle[i]).find("span#input-head");
                           let title=$(dataTitle[i]).find("ul");
                           let ti = $(title).children();
                           var val,txt =0;
                           for(i=0;i<ti.length;i++)
                           {
                                val =$(tit).text();
                               
                                if( val == entite_attr.name && txt != 1 )
                                {
                                    txt =1;
                                    console.log(val);
                                    let tagss=`
                                <li class="ml-3 mb-1  p-1" id="drop"><span id="data_carry">${entite_attr.type} ${entite_attr.attr}</span>  <span class="border border-dark pl-3 pr-3 float-right d-none mr-3" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>`;
                                        
                                        var rdm = ti.length-1;
                                        
                                    eventHandler.addElementToView(tagss,"after",ti[rdm]);
                                }
                                else
                                {
                                    txt =0;
                                }
                           }
                      }
                      let dtyu = $("div#input").scrollTop();
                         $("div#input").scrollTop(dtyu+35);
                        break;
                   
                    case 'relation_plus':
                         console.log("relation_plus");
                         
                           formId = arro[2];
                        let relation ={
                          name:  document.forms[formId]["1_relation_name"].value,
                          firstEnt: document.forms[formId]["1_rel"].value,
                          firstCard: document.forms[formId]["1_cardinal"].value,
                          scdEnt: document.forms[formId]["2_rel"].value,
                          scdCard: document.forms[formId]["2_cardinal"].value
                        };
                           console.log(relation);
                         tag=`<ul class="datalist" type="none">
                                <li id="datalist_link"><span  id="input-head" class="bg-dark pl-1 text-muted h6 d-lg-block"><i class="fa fa-caret-right mr-1"></i>${relation.name}</span>
                                        <ul class="pl-3 m-0 " type="none">
                                            <li id="drop" class="p-1 mb-1"><span id="data_carry" > ${relation.firstEnt} & ${relation.firstCard}</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                            <li id="drop"  class="p-1 mb-1"> <span id="data_carry" >${relation.scdEnt} & ${relation.scdCard}</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                        </ul>
                                    </li>
                        </ul>`;
                            //eventHandler.addElementToView(tag,"after","#"+formId);
                              $("#input_show").prepend(tag);
                                $("div#input").scrollTop(110);
                                dtyu = $("div#input").scrollTop();
                         $("div#input").scrollTop(dtyu+35);
                        break;
                    case 'manipulation_plus':
                        console.log("manipulation_plus");
                         
                           formId = arro[3];
                        let manip ={
                          nameEnt:  document.forms[formId]["repository"].value,
                          query: document.forms[formId]["query"].value,
                          method: document.forms[formId]["method"].value
                         
                        };
                           console.log(manip);
                         tag=`<ul class="datalist">
                                <li id="datalist_link"><span id="input-head" class="bg-dark pl-1 text-muted h6 d-lg-block"><i class="fa fa-caret-right mr-1"></i>${manip.nameEnt}</span>
                                        <ul class="pl-3 m-0 " type="none">
                                            <li id="drop" class="p-1"><span id="data_carry" >@Query('${manip.query}')</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                            <li id="drop" class="font-weight-bold p-1"><span id="data_carry" >${manip.method}</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                        </ul>
                                    </li>
                        </ul>`;
                          //  eventHandler.addElementToView(tag,"after","#"+formId);
                          
                                 $("#input_show").prepend(tag);
                                   $("div#input").scrollTop(110);
                        break;
                    case 'constraint_plus':
                        console.log("constraint_plus");
                          formId = arro[1];
                         let namEt = document.forms[formId]["client_ent"].value;
                         let namAt = $("dd.true").text();
                         let constraint ={
                          nameEnt:  namEt,
                          nameAtr:  namAt
 
                        };
                        
                         tag=`<ul class="datalist" type="none">
                                <li id="datalist_link"><span id="input-head" class="bg-dark pl-1 text-muted h6 d-lg-block"><i class="fa fa-caret-right mr-2 ml-1"></i>${constraint.nameEnt}</span>
                                         <ul class="pl-3 m-0 ml-2 " type="none">
                              `;
                        
                         let tyP = namAt.split(" ");
                         let dumb,rescue="", bool;
                         for(dumb=1; dumb<8; dumb++)
                         {
                             rescue = ids.get(dumb+"");
                             bool = rescue.includes(tyP[0]);
                             console.log(bool);
                             if(bool > 0)
                             {
                                 switch(dumb)
                                 {
                                     case 1:
                                         constraint.min = document.forms[formId]["min"].value;
                                         constraint.max = document.forms[formId]["max"].value;
                                         if(constraint.min != "" &&  constraint.max != "")
                                         {
                                               tag += `
                                               
                                             <li id="drop" class="p-1"><span id="data_carry">@Size(min=${constraint.min},max=${constraint.max})</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li> 
                                                `;
                                         }
                                       
                                         break;
                                     case 2:
                                         constraint.pattern= document.forms[formId]["pattern"].value;
                                         if(constraint.pattern != "")
                                         {
                                         tag += `
                                                 <li id="drop" class="p-1"> <span id="data_carry">@Pattern(regex='${constraint.pattern}')</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;
                                            }
                                         break;
                                     case 3:
                                         constraint.past= document.forms[formId]["past"].value;
                                         if(constraint.past != ""){
                                         tag += `
                                                 <li id="drop" class="p-1"><span id="data_carry">@Past(value=${constraint.past})</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;
                                            }
                                         break;
                                     case 4:
                                         constraint.numMax = document.forms[formId]["max_num"].value;
                                                 if(constraint.numMax != ""){
                                         tag += `
                                                  <li id="drop" class="p-1"><span id="data_carry">@Max(value=${constraint.numMax}) </span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;
                                                }
                                         break;
                                     case 5:
                                         constraint.nullable = document.forms[formId]["nullable"].checked;
                                       if(constraint.nullable == true){
                                          tag += `
                                                  <li id="drop" class="p-1"><span id="data_carry">@NotNull()</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;}
                                         break;
                                     case 6:
                                         constraint.array = document.forms[formId]["array"].checked;
                                           if(constraint.array == true){
                                        tag += `
                                                  <li id="drop" class="p-1"><span id="data_carry">@Array()</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;}
                                         break;
                                     case 7:
                                          constraint.custom = document.forms[formId]["custom_name"].value;
                                           if(constraint.custom != ""){
                                          tag += `
                                                     <li id="drop" class="p-1"><span id="data_carry">@${constraint.custom}</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;}
                                         break;
                                         
                                 }
                             }
                         }
                         
                                            tag += `
                                                     <li class="font-weight-bold p-1">${constraint.nameAtr}</li>    
                                                    </ul>
                                                    </li>
                                                    </ul>
                                                   `;
                       
                           console.log(constraint);
                         
                           // eventHandler.addElementToView(tag,"after","#"+formId);
                             $("#input_show").prepend(tag);
                                $("dd#data").removeClass("b-grey");
                                $("div#input").scrollTop(150);
                        break;
                    case 'controller_data':
                        
                        $("span.true").removeClass("true");
                             $(event.target).addClass("true");
                    break;
                
                    case 'data':
                        console.log("default");
                           let chldr= $("div#constraint_list").children();
                         
                           let chd;
                         /*  for(chd in chldr)
                           {
                                 $(chldr[chd]).hide();
                           }*/
                             let html=  $(event.target).text();
                             $("dd.true").removeClass("true");
                             $(event.target).addClass("true");
                              $(event.target).toggleClass("b-grey");
                             console.log(html);
                             let dataType = html.split(" ");
                               console.log(dataType[0]);
                             let ct=1,sp="", tr=0 ;
                             
                             for(chd in chldr)
                             {
                                  sp = ids.get(ct+"");
                                  if(sp == 'undefined')
                                  {
                                      sp = "";
                                  }
                                  
                                
                                     /*
                                      * Enable or Disable VAlidation Boxes
                                      */
                                     tr = sp.search(dataType[0]);
                                     console.log(tr);
                                     if(tr == -1)
                                     {
                                          console.log("true");
                                          $("div#"+ct).find("input, textarea").val("");
                                        $("div#"+ct).hide();
                                     }
                                     else
                                     {
                                         console.log("false");
                                        $("div#"+ct).show();
                                        
                                     }
                                     
                                 
                                 ct = ct + 1;
                             }
                             
                         break; 
                     case 'manipulation_plus_plus':
                           console.log("manipulation_plus_plus");
                         
                           formId = arro[3];
                         manip ={
                          nameEnt:  document.forms[formId]["repository"].value,
                          query: document.forms[formId]["query"].value,
                          method: document.forms[formId]["method"].value
                         
                        };
                        
                          dataTitle=  $("ul.datalist");
                       
                           tag=`
                                        <ul  class="pl-3 m-0 " type="none">
                                            <li id="drop" class="p-1"><span id="data_carry" >@Query('${manip.query}')</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                            <li id="drop" class="font-weight-bold p-1"><span id="data_carry" >${manip.method}</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                        </ul>
                                        `;
                        
                      for (i = 0; i < dataTitle.length; i++) 
                      {
                          
                           let tit=$(dataTitle[i]).find("span#input-head");
                           let title=$(dataTitle[i]).find("ul");
                           let ti = title.length;
                           var val;
                            val =$(tit).text();
                        
                               
                               
                                if( val ==manip.nameEnt  )
                                {
                                    
                                    console.log(val);
                                    
                                         rdm = ti -1;
                                        
                                    eventHandler.addElementToView(tag,"after",title[rdm]);
                                }
                              
                      }
                       dtyu = $("div#input").scrollTop();
                         $("div#input").scrollTop(dtyu+35);
                     break;
                 case 'controller_plus':
                      console.log("controler_plus");
                      let contro = document.forms["controller_create"]["controller_type"].value ;
                      let controName = document.forms["controller_create"]["controller_name"].value ;
                      $("span#input-head").remove();
                      let vw = `<span id="input-head" class="bg-dark pl-1 text-muted h6 d-lg-block"><i class="fa fa-caret-right mr-2 ml-1"></i>Controllers</span>`;
                    $("#input_parent").prepend(vw);
                       tag=`<ul class="datalist">
                               
                                <li id="datalist_link">
                                    
                                        <ul class="pl-3 m-0 " type="none">
                                            <li id="drop" class="p-1"> <span id="data_carry" > ${contro} & ${controName}</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                            
                                        </ul>
                                    </li>
                        </ul>`;
                         //   eventHandler.addElementToView(tag,"after","#controller_create");
                               $("#input_show").prepend(tag);
                               $("div#input").scrollTop(110);
                                dtyu = $("div#input").scrollTop();
                         $("div#input").scrollTop(dtyu+35);
                 break;
                 
                 case 'method_plus':
                       console.log("method_plus");
                       let cntrler = document.forms["controller_form"]["controller_name_select"].value;
                      cntrler=  cntrler.charAt(0).toUpperCase()+cntrler.slice(1);
                       let mthd =  document.forms["controller_form"]["method_name"].value;
                       let mthdUrl =  document.forms["controller_form"]["url"].value;
                       let mthdAction =  document.forms["controller_form"]["method_action"].value;
                       
                        tag=`<ul class="datalist">
                                <li id="datalist_link"> <span id="input-head" class="bg-dark pl-1 text-muted h6 d-lg-block"><i class="fa fa-caret-right mr-2 ml-1"></i>${cntrler}</span>
                                        <ul class="pl-3 m-0 " type="none">
                                              <li id="drop" class="p-1"><span id="data_carry" >@RequestMapping(value='${mthdUrl}',method='RequestMethod.${mthdAction}')</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                            <li id="drop"  class="font-weight-bold p-1"> <span id="data_carry" ><span id="controller_data"> ${mthd}()</span></span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                            
                                        </ul>
                                    </li>
                        </ul>`;
                           // eventHandler.addElementToView(tag,"after","#method_plus_plus");
                           $("#input_show").prepend(tag);
                           $("div#input").scrollTop(110);
                 break;
                 case 'parameters_plus':
                    console.log("parameter_plus");
                     cntrler = document.forms["controller_form"]["controller_name_select"].value;
                     let elmtTrue  = $("span.true").text();
                     console.log(elmtTrue);
                     let replConstruct = elmtTrue.replace("()","");
                     console.log(replConstruct);
                     let parm={
                         view : document.forms["controller_form"]["view_name"].value,
                         redirect: document.forms["controller_form"]["redirect_to"].value,
                         error: document.forms["controller_form"]["error"].value,
                         multiple_path: document.forms["controller_form"]["multiple_path"].value,
                         multiple_req: document.forms["controller_form"]["multiple_req"].value
                     };
                     tag = `<li id="controller_data">${replConstruct}(view=${parm.view},redirect=${parm.redirect},error=${parm.error},
                                multilpe_path=${parm.multiple_path},multiple_req=${parm.multiple_req})
                            </li>`;
                     
                     $("span.true").attr("class","false");
                     let xv = $("span.false");
                      eventHandler.addElementToView(tag,"after",xv);
                      $(xv).remove();
                break;
             case 'method_plus_plus':
                  cntrler = document.forms["controller_form"]["controller_name_select"].value;
                   cntrler=  cntrler.charAt(0).toUpperCase()+cntrler.slice(1);
                  mthd =  document.forms["controller_form"]["method_name"].value;
                  mthdUrl =  document.forms["controller_form"]["url"].value;
                  mthdAction =  document.forms["controller_form"]["method_action"].value;
                  
                     dataTitle=  $("ul.datalist");
                       
                           tag=`
                                        <ul class="pl-3 m-0 " type="none">
                                              <li id="drop" class="p-1"><span id="data_carry" >@RequestMapping(value='${mthdUrl}',method='RequestMethod.${mthdAction}')</span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                        <li id="drop"  class="font-weight-bold p-1"> <span id="data_carry" ><span id="controller_data"> ${mthd}()</span></span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                            
                                        </ul>
                                        `;
                        
                      for (i = 0; i < dataTitle.length; i++) 
                      {
                          
                           let tit=$(dataTitle[i]).find("span#input-head");
                           let title=$(dataTitle[i]).find("ul");
                           let ti = title.length;
                           var val;
                            val =$(tit).text();
                        
                               
                               
                                if( val ==cntrler  )
                                {
                                    
                                    console.log(val);
                                    
                                         rdm = ti -1;
                                        
                                    eventHandler.addElementToView(tag,"after",title[rdm]);
                                }
                            }
                  
             break;
                     case 'constraint_plus_plus':
                         
                         console.log("constraint_plus_plus");
                          formId = arro[1];
                         let namEt1 = document.forms[formId]["client_ent"].value;
                         let namAt2 = $("dd.true").text();
                          let tyP2 = namAt2.split(" ");
                          let db2,rescu2="",bool2;
                          
                          tag=`<ul class="pl-3 m-0 ml-2 " type="none">`;
                           constraint={};
                          for(db2=1;db2<8;db2++)
                          {
                              rescu2 = ids.get(db2+"");
                              bool2 = rescu2.search(tyP2[0]);
                              
                              if(bool2>0)
                              {
                                  switch(db2)
                                  {
                                       case 1:
                                         constraint.min = document.forms[formId]["min"].value;
                                         constraint.max = document.forms[formId]["max"].value;
                                         if(constraint.min != "" &&  constraint.max != "")
                                         {
                                               tag += `
                                               
                                             <li id="drop" class="p-1"><span id="data_carry">@Size(min=${constraint.min},max=${constraint.max})</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li> 
                                                `;
                                         }
                                       
                                         break;
                                     case 2:
                                         constraint.pattern= document.getElementById("pattern").value;
                                         if(constraint.pattern != "")
                                         {
                                         tag += `
                                                 <li id="drop" class="p-1"> <span id="data_carry">@Pattern(regex='${constraint.pattern}')</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;
                                            }
                                         break;
                                     case 3:
                                         constraint.past= document.forms[formId]["past"].value;
                                         if(constraint.past != ""){
                                         tag += `
                                                 <li id="drop"><span id="data_carry">@Past(value=${constraint.past})</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;
                                            }
                                         break;
                                     case 4:
                                         constraint.numMax = document.forms[formId]["max_num"].value;
                                                 if(constraint.numMax != ""){
                                         tag += `
                                                  <li id="drop" class="p-1"><span id="data_carry">@Max(value=${constraint.numMax}) </span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;
                                                }
                                         break;
                                     case 5:
                                         constraint.nullable = document.forms[formId]["nullable"].checked;
                                       if(constraint.nullable == true){
                                          tag += `
                                                  <li id="drop"><span id="data_carry">@NotNull()</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;}
                                         break;
                                     case 6:
                                         constraint.array = document.forms[formId]["array"].checked;
                                           if(constraint.array == true){
                                        tag += `
                                                  <li id="drop" class="p-1"><span id="data_carry">@Array()</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;}
                                         break;
                                     case 7:
                                          constraint.custom = document.forms[formId]["custom_name"].value;
                                           if(constraint.custom != ""){
                                          tag += `
                                                     <li id="drop" class="p-1"><span id="data_carry">@${constraint.custom}</span>  <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>
                                                   `;}
                                         break;
                                         
                                         
                                  }
                              }
                             
                              
                          }
                          
                          tag +=`<li class="font-weight-bold p-1">${namAt2}</li>
                            </ul>`;
                            /*
                             * Get all the unordered lisit with class datalist
                             * get span content compare with enity name
                             * if true append entity attribute and validation
                             */
                            
                           
                         dataTitle=  $("ul.datalist");
                          dt = $(dataTitle).children();
                         
                        
                      for (i = 0; i < dataTitle.length; i++) 
                      {
                          
                           let tit=$(dataTitle[i]).find("span#input-head");
                           let title=$(dataTitle[i]).find("ul");
                           let ti = title.length;
                           var val;
                            val =$(tit).text();
                        
                               
                               
                                if( val ==namEt1  )
                                {
                                    
                                    console.log(val);
                                    
                                         rdm = ti -1;
                                        
                                    eventHandler.addElementToView(tag,"after",title[rdm]);
                                }
                               
                           
                      }
                        $("dd#data").removeClass("b-grey");
                         break;
                     case 'model_plus':
                          console.log("model_plus");
                
                     let mdl={
                         controller_name : document.forms["model_attribute"]["controller_name"].value,
                         model_alias: document.forms["model_attribute"]["model_alias"].value,
                         model_object: document.forms["model_attribute"]["model_object"].value
                         
                     };
                     tag = `<ul class="datalist">
                                <li id="datalist_link"><span id="input-head" class="bg-dark pl-1 text-muted h6 d-lg-block"><i class="fa fa-caret-right mr-2 ml-1"></i>${mdl.controller_name}</span>
                                       <ul class="pl-3 m-0 ml-2 " type="none">
                                               <li id="drop" class="p-1"><span id="data_carry" class="font-weight-bold">model.addObject('${mdl.model_alias}',${mdl.model_object}) </span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>                                                                         
                                       </ul>
                                    </li>
                            </ul>`;
                     
                     
                     // eventHandler.addElementToView(tag,"after","#object_toolbox");
                         $("#input_show").prepend(tag);
                         break;
                     case 'entity_bind':
                          console.log("entity_bind");
                         $(event.target).next("ul.collapse").toggleClass("show");
                         let tmp = "new "+$(event.target).text()+"()";
                         document.forms["model_attribute"]["model_object"].value=tmp;
                         break;
                     case 'model_plus_plus':
                         mdl={
                         controller_name : document.forms["model_attribute"]["controller_name"].value,
                         model_alias: document.forms["model_attribute"]["model_alias"].value,
                         model_object: document.forms["model_attribute"]["model_object"].value
                         
                     };
                        tag = `
                                      <ul class="pl-3 m-0 ml-2 " type="none">
                                               <li id="drop" class="p-1"><span id="data_carry" class="font-weight-bold">model.addObject('${mdl.model_alias}',${mdl.model_object}) </span> <span class="border border-dark pl-3 pr-3 float-right mr-3 d-none" id="toolbox"><i class="fa fa-edit text-secondary mr-2" id="edit"></i><i class="fa fa-times text-danger mr-2" id="delete"></i><i class="fa fa-save text-primary mr-2" id="save"></i></span></li>                                                                         
                                       </ul>
                                    `;
                                                                                                                                
                          dataTitle=  $("ul.datalist");
                          
                        
                      for (i = 0; i < dataTitle.length; i++) 
                      {
                          
                           let tit=$(dataTitle[i]).find("span#input-head");
                           let title=$(dataTitle[i]).find("ul");
                           let ti = title.length;
                           var val;
                            val =$(tit).text();
                        
                               
                               
                                if( val ==mdl.controller_name  )
                                {
                                    
                                    console.log(val);
                                    
                                         rdm = ti -1;
                                        
                                    eventHandler.addElementToView(tag,"after",title[rdm]);
                                }
                               
                           
                      }
                     break;
                    case 'repo_bind':
                         let tmps =$(event.target).text();
                         document.forms["model_attribute"]["model_object"].value=tmps;
                         break;
                     case 'disable':
                         $("div.editor").css("display","none");
                         $("div.editor").attr("class","false editor");
                         $("div.disable").css("display","block");
                         $("div.disable").attr("class","true disable");
                         break;
                     case 'property_editor':
                         
                        $("div.disable").css("display","none");
                         $("div.disable").attr("class","false disable");
                        $("div.editor").css("display","block");
                            $("div.editor").attr("class","true editor");
                         break;
                     case 'folder_name':
                         /*
                          * 
                          * Get folder Name and add to span class of true
                          */
                         $("span#folder_name").removeClass("true");
                         $("span#folder_name").removeClass("b-grey");
                             $("span#folder_name").removeClass("font-weight-bold");
                         $(event.target).addClass("true");
                           $(event.target).addClass("b-grey");
                            $(event.target).addClass("font-weight-bold");
                            $(event.target).nextAll("ul.collapse").toggleClass("show");
                         
                         break;
                     case 'folder_plus':
                          $("div#page_create").addClass("d-none");
                         $("div#folder_create").removeClass("d-none");
                         break;
                     case 'page_plus':
                           $("div#folder_create").addClass("d-none");
                           $("div#page_create").removeClass("d-none");
                         break;
                     case 'add_folder':
                       //  let folder = $("span.true").text();
                         let nw = document.forms["templates_form"]["folder"].value;
                          nw = nw.charAt(0).toUpperCase()+nw.slice(1);
                         
                         // dataTitle=  $("ul.datalist");
                         
                               // let tit = $("span.true").text();
                            let title = $("span.true").parent().children("ul").children();
                            let ti = title.length;
                            
                                if(ti==0)
                                {
                                    tag = `
                                <li id="sub_folder"><span id="folder_name" class="d-lg-block p-1 selector"><i class="fa fa-folder-open pr-1 small"></i>${nw}</span>
                                          <ul class="pl-3 collapse " type="none" >
                                            </ul>                                                                                                                    
                                </li>`;
                                     $("span.true").parent().children("ul").append(tag)  ;                                                                                                                             
                                }
                                else
                                {
                                      tag = `
                                <li id="sub_folder"><span id="folder_name" class="d-lg-block p-1 selector"><i class="fa fa-folder-open pr-1 small"></i>${nw}</span>
                                          <ul class="pl-3 collapse " type="none" >
                                            </ul>                                                                                                                    
                                </li>
                                    `;

                                $("span.true").parent().children("ul").append(tag)  ; 
                                }

                             
                         
                         break;
                     case 'add_page':
                          let pg = document.forms["templates_form"]["page"].value;
                         
                          //dataTitle=  $("ul.datalist");
                          
                               // let tit = $("span.true").text();
                          title = $("span.true").parent().children("ul").children();
                            ti = title.length;
                            

                                if(ti==0)
                                {
                                     tag = `
                                <li id="page_name" class="p-1"><i class="fa fa-file-alt small pr-1"></i>${pg}.html
                                                                                                                                                            
                                </li>`;
                                     $("span.true").parent().children("ul").append(tag) ;                                                                                                                     
                                }
                                else
                                {
                                     tag = `
                                <li id="page_name" class="p-1"><i class="fa fa-file-alt small pr-1"></i>${pg}.html
                                                                                                                                                            
                                </li>
                                    `;

                               $("span.true").parent().children("ul").append(tag) ;
                                }
                              
                            
                         break;
                          case 'src_folder':
                        
                         $("span").removeClass("true");
                          $("span").removeClass("b-grey");
                           $("span").removeClass("font-weight-bold");
                         
                         $(event.target).addClass("true");
                          $(event.target).addClass("b-grey");
                           $(event.target).addClass("font-weight-bold");
                           $("div#perform").children().addClass("d-none");
                          $(event.target).next("ul.collapse").toggleClass("show");
                          $("li#2,li#3").hide();
                           $("li#1").show();
                         
                         break;
                         case 'packages':
                        
                        $("span").removeClass("true");
                          $("span").removeClass("b-grey");
                           $("span").removeClass("font-weight-bold");
                            $("div#perform").children().addClass("d-none");
                         $(event.target).addClass("true");
                          $(event.target).addClass("b-grey");
                           $(event.target).addClass("font-weight-bold");
                          $(event.target).next("ul.collapse").toggleClass("show");
                          $("li#1,li#3").hide();
                          $("li#2").show();
                         break;
                           case 'classes':
                         
                          $("span").removeClass("true");
                          $("span").removeClass("b-grey");
                           $("span").removeClass("font-weight-bold");
                            $("div#perform").children().addClass("d-none");
                         $(event.target).addClass("true");
                          $(event.target).addClass("b-grey");
                           $(event.target).addClass("font-weight-bold");
                            $(event.target).next("ul.collapse").toggleClass("show");
                          $("li#1,li#2").hide();
                          $("li#3").show();
                         break;
                          case 'package':
                              $("div#perform").children().addClass("d-none");
                           $("div#1_perform").toggleClass("d-none");
                           
                         break;
                           case 'class':
                               $("a").removeClass("true");
                               $("a#class").addClass("true");
                              $("div#perform").children().addClass("d-none");
                           $("div#2_perform").toggleClass("d-none");
                           
                         break;
                         case 'interface':
                               $("a").removeClass("true");
                               $("a#interface").addClass("true");
                              $("div#perform").children().addClass("d-none");
                           $("div#3_perform").toggleClass("d-none");
                           
                         break;
                         case 'abstract':
                               $("a").removeClass("true");
                               $("a#abstract").addClass("true");
                              $("div#perform").children().addClass("d-none");
                           $("div#4_perform").toggleClass("d-none");
                           
                         break;
                         case 'method':
                               $("a").removeClass("true");
                               $("a#method").addClass("true");
                              $("div#perform").children().addClass("d-none");
                           $("div#5_perform").toggleClass("d-none");
                           
                         break;
                         case 'variable':
                               $("a").removeClass("true");
                               $("a#variable").addClass("true");
                              $("div#perform").children().addClass("d-none");
                           $("div#6_perform").toggleClass("d-none");
                           
                         break;
                     case 'functionnality_plus':
                         let span = $("span.true").attr("id");
                         let htl=``;
                         switch(span)
                         {
                             case 'src_folder':
                                 let val = $(event.target).parent().children("input").val();
                                
                                 console.log(val);
                                 let pckg = $("ul.datalist").find("li");
                                 pckg = $(pckg[0]).children("span");
                                 pckg = $(pckg[0]).text();
                                 htl=" <li><span id=\"packages\" class=\"selector d-lg-block p-1\">"+"<i class=\"fa fa-code small\"></i>"+pckg+"."+val+"</span><ul class=\"pl-3 m-0 collapse\" type=\"none\"></ul></li> ";
                                 $("ul.datalist").append(htl);
                                 break;
                             case 'packages':
                                 val = $(event.target).parent().children("input").val();
                                 val = val.charAt(0).toUpperCase()+val.slice(1)
                                 let i = $("a.true").attr("id");
                                        switch(i)
                                        {
                                            case 'class':
                                                 htl=" <li ><span id=\"classes\" class=\"selector d-lg-block p-1\">"+"<i class=\"fa fa-code-branch small mr-1\"></i>"+val+".java"+"</span><ul class=\"pl-3 m-0 collapse\" type=\"none\"></ul></li> ";
                                                $("span.true").parent().children("ul").append(htl);
                                                break;
                                            case 'interface':
                                                  htl=" <li ><span id=\"classes\" class=\"selector d-lg-block p-1\">"+"<i class=\"fa fa-code-branch small mr-1\"></i>"+" Interface "+val+"</span><ul class=\"pl-3 m-0 collapse\" type=\"none\"></ul></li> ";
                                                $("span.true").parent().children("ul").append(htl);
                                                break;
                                            case 'abstract':
                                                  htl=" <li ><span id=\"classes\" class=\"selector d-lg-block p-1\">"+"<i class=\"fa fa-code-branch small mr-1\"></i>"+" abstract "+val+"</span><ul class=\"pl-3 m-0 collapse\" type=\"none\"></ul></li> ";
                                                $("span.true").parent().children("ul").append(htl);
                                                break;
                                        }
                                 break;
                                    
          
               
                                     case   'classes':
                                         val = $(event.target).parent().children("textarea").val();
                                         val = val.split(";");
                                         let loop;
                                         for(loop in val)
                                         {
                                             htl +=`
                                                    <li>${val[loop]}</li>
                                                    `;
                                         }
                                         i = $("a.true").attr("id");
                                        switch(i)
                                        {
                                            case 'method':
                                                 
                                                $("span.true").parent().children("ul").append(htl);
                                                break;
                                            case 'variable':
                                                 
                                                $("span.true").parent().children("ul").append(htl);
                                                break;
                                            
                                        }
                                         break;
                         }
                         break;
                    
                        }
                        
                    };

/*
 * 
 *
 * On Double Click
 */
export let dblClick = function(elementId)
{
    switch(elementId)
    {
         case 'attribute':
                         
                         let cts = document.forms["init_binder"]["controller_name"].value;
            let clk = $(event.target).text();
            let cloest = $(event.target).parents("li");
            cloest = $(cloest).find("span");
            cloest = $(cloest).text();

            let tgs, tru;

            let gt = $("ul.datalist");
            let i, rdm,txt=false;
            if (gt.length > 0)
            {
                tru = $("div.true").attr("class");
                if (tru.includes("disable"))
                {
                    for (i = 0; i < gt.length; i++)
                    {

                        let tit = $(gt[i]).find("span");
                        let title = $(gt[i]).find("ul").children();
                        let ti = title.length;
                        var val;
                        val = $(tit).text();
                        tgs = `     <li>${cloest} : ${clk}</li>                                                                                                 
                                    `;


                        if (val == cts)
                        {
                            txt=true;
                            console.log(val);

                            rdm = ti - 1;

                            eventHandler.addElementToView(tgs, "after", title[rdm]);
                        }
                        
                            if(i == (gt.length-=1) && txt == false)
                            {
                                 tgs = `<ul class="datalist">
                                        <li>
                                            <span>${cts}</span> 
                                                  <ul class="pl-3 m-0">
                                                       <li>${cloest} <span class="font-weight-bold">:</span> ${clk}</li>                                                                                                 
                                                    </ul>                                                                                              
                                        </li>
                                    </ul>`;
                    eventHandler.addElementToView(tgs, "after", $("div.disable>dl>dt"));
                 // $("#input_show").prepend(tgs);
                            }
                        


                    }
                }
            } else
            {
                tru = $("div.true").attr("class");
                if (tru.includes("disable"))
                {
                    tgs = `<ul class="datalist">
                                        <li>
                                              <span>${cts}</span> 
                                                  <ul>
                                                       <li>${cloest} : ${clk}</li>                                                                                                 
                                                    </ul>                                                                                              
                                        </li>
                                    </ul>`;
                    eventHandler.addElementToView(tgs, "after", $("div.disable>dl>dt"));
                } else
                {

                }
            }

                         
         break;
    }
};

/*
 * On Submit
 */
export let submit = function(elementId)
{
    
     let arr = extract(ids.get("mono"));
                 let data;
                 let mapData;
                 
                 let urls;
                 
                 var count=0 ;
                 let nam="";
                 let attrr;
                 let str="";
                 let comp="";
    
                    switch(elementId)
                    {
                        case arr[0]:
                             event.preventDefault();
                             
                             /*
                              * Data list elements
                              * get all dt
                              */
                            let fils=  $("ul.datalist");
                           mapData= $("form").serializeArray();
                          
                         
                           console.log(fils);
                            let y =1;
                            let temp_name,temp,temp_var,tmp;
                            let yy;
                          for(count=0;count<fils.length;count++)
                           {
                                     data=$(fils[count]).find("li#datalist_link");
                                        
                                      temp_name=$(data).find("span#input-head");
                                     nam+= $(temp_name).text()+":";
                                     temp=$(data).find("ul");
                                     
                                      temp_var=$(temp).children();
                                     for(yy=0;yy<temp_var.length;yy++)
                                     {
                                          str +=y+$(temp_var[yy]).text()+":";
                                     }
                                     y++;
                                 
                           }
                           let ent = nam.split(":");
                           let atr = str.split(":");
                           
                           
                         
                           var obj=[];
                           y=1;
                           let vl;
                           for(count=0;count<ent.length;count++)
                           {
                               if(ent[count] != "")
                               {
                                    obj.push({name:y+"_entity",value:ent[count]});
                                     y++;
                               }
                               
                           }
                           let rep="",c=1;
                           for(count=0;count<atr.length;count++)
                           {
                               if(atr[count].includes(c))
                               {
                                   
                                 rep += atr[count].replace(c,"");
                                 rep +=":";
                                  obj.push({name:c+"_attribute",value:rep});
                               }
                               else
                               {
                                    c++;
                                    if(atr[count] != "")
                                    {
                                         rep=atr[count].replace(c,"");
                                        rep +=":";
                                        obj.push({name:c+"_attribute",value:rep});
                                    }
                                  
                                  
                               }
                                
                              
                           }
                          
                          
                            
                              
                                mapData.length=1;
                                 for(count=0;count<obj.length;count++)
                                {
                                   mapData.splice(0,0,obj[count]);
                                 }
                               
                              
                             console.log(mapData);
                          
                                    urls=$("#"+arr[0]).attr("action");
                           
                          dataHandler.postRequest(urls,mapData);
              
                          
                        
                            break;
                        case arr[1]:
                              event.preventDefault();
                              
                                fils=  $("ul.datalist");
                           mapData= $("form").serializeArray();
                           let extr="",constr,constrEntVal="",cck;
                            obj=[];
                            for(count=0;count<fils.length;count++)
                           {
                                     data =$(fils[count]).find("li#datalist_link");
                                        
                                      temp_name=$(data).find("span#input-head");
                                     nam = $(temp_name).text();
                                     console.log(nam);
                                     
                                     //Send entity name to server to get key
                                $.ajax({
                                        type:"GET",
                                        url:"/bitcode/get-key/"+nam, 
                                        success:function(dat)
                                        {
                                          
                                           
                                            
                                           //console.log(extr);
                                           temp=$(data).find("ul");
                                     
                                     for(yy=0;yy<temp.length;yy++)
                                     {
                                       
                                          
                                                    temp_var=$(temp[yy]).children();
                                               for(cck=0;cck<temp_var.length;cck++)
                                               {
                                                    constrEntVal +=$(temp_var[cck]).text()+":";
                                               }
                                               constrEntVal += "|";
         
                                     }
                                       let ext="";
                                        ext =  ""+dat;
                                        ext = ext.substring(0,1);
                                            constr =""+ ext+'_constraint';
                                         console.log(constr);
                                           console.log(constrEntVal);
                                          obj.push({name:constr,value:constrEntVal});
                                          
                                          mapData.length=1;
                                 for(count=0;count<obj.length;count++)
                                {
                                   mapData.splice(0,0,obj[count]);
                                 }
                                   urls=$("#"+arr[1]).attr("action");
                          dataHandler.postRequest(urls,mapData);
                                        

                                        },
                                        error:function(e)
                                        {
                                              console.log(e);
                                        }
                                        });
           
                           }

                         
                            break;
                        case arr[2]:
                              event.preventDefault();
                           
                           fils=  $("ul.datalist");
                           mapData= $("form").serializeArray();
                          
                          obj = [];
                           console.log(fils);
                           let relt="",reltName="";
                          for(count=0;count<fils.length;count++)
                           {
                                     data=$(fils[count]).find("li#datalist_link");
                                        
                                      temp_name=$(data).find("span#input-head");
                                     reltName += $(temp_name).text()+":";
                                     temp=$(data).find("ul");
                                     
                                      temp_var=$(temp).children();
                                     for(yy=0;yy<temp_var.length;yy++)
                                     {
                                          relt +=$(temp_var[yy]).find("span#data_carry").text()+"!";
                                     }
                                      relt +="|";
                                 
                           }
                           console.log(relt);
                           let rN = reltName.split(":");
                           let rr= relt.split("|");
                           
                           
                           
                           let trace =1;
                          for(yy=0;yy<rN.length;yy++)
                           {
                               obj.push({name:trace+"_rel",value:rN[yy]+"|"+rr[yy]});
                               trace++;
                           }
                           
                            mapData.length=1;
                                 for(count=0;count<obj.length;count++)
                                {
                                   mapData.splice(0,0,obj[count]);
                                 }
                           urls=$("#"+arr[2]).attr("action");
                          dataHandler.postRequest(urls,mapData);
                    
                        
                            break;
                       case arr[3]:
                             event.preventDefault();
                             
                             
                           fils=  $("ul.datalist");
                           mapData= $("form").serializeArray();
                           let repo=0,repp,repository="";
                           obj=[];
                            for(count=0;count<fils.length;count++)
                           {
                                     data=$(fils[count]).find("li#datalist_link");
                                        
                                      temp_name=$(data).find("span#input-head");
                                     nam = $(temp_name).text();
                                     
                                     $.ajax({
                                        type:"GET",
                                        url:"/bitcode/get-key/"+nam, 
                                        success:function(dat)
                                        {
                                             console.log(dat);
                                             repo = dat.substring(0,1);  
                                             
                                              temp=$(data).find("ul");
                                     
                                    
                                      
                                      
                                      for(yy=0;yy<temp.length;yy++)
                                     {
                                       
                                          
                                                    temp_var=$(temp[yy]).children();
                                               for(cck=0;cck<temp_var.length;cck++)
                                               {
                                                    repository +=$(temp_var[cck]).find("span#data_carry").text()+":";
                                               }
                                               repository += "|";
                                               
                                               
                                              
                                               
                                               
                                     }
                                     console.log(repository);
                                       
                                      repp = repo+'_repository';
                                      console.log(repository);
                                          obj.push({name:repp,value:repository});
                                              
                                      
                                               
                           urls=$("#"+arr[3]).attr("action");
                           let xxv=0;
                             
                            mapData.length=1;
                                 for(xxv=0;xxv<obj.length;xxv++)
                                {
                                   mapData.splice(0,0,obj[xxv]);
                                 }
                       dataHandler.postRequest(urls,mapData);
                                           
                                        },
                                        error:function(e)
                                        {
                                            console.log(e);
                                        }
                                        });
          
                           }
                      
                        
                            break;
                        case 'controller_create':
                            event.preventDefault();
                             
                             
                           fils=  $("ul.datalist");
                           mapData= $("form").serializeArray();
                           
                           let nm="",work="",ctner;
                            obj=[];
                            for(count=0;count<fils.length;count++)
                           {
                               data=$(fils[count]).find("li#datalist_link");
                               
                                temp=$(data).find("ul");
                                
                                     temp_var=$(temp).children();
                                    ctner = $(temp_var).find("span#data_carry").text()+"|";
                                   
                                          nm +=ctner;
                                     
                           }
                           let  tc=1,ttc, slpt = nm.split("|");
                           for(ttc in slpt)
                           {
                                obj.push({name:tc+"_controller",value:slpt[ttc]});
                                tc++;
                           }
                            
                                              
                                      
                                               
                           urls=$("#controller_create").attr("action");
                           
                             
                            mapData.length=1;
                                 for(count=0;count<obj.length;count++)
                                {
                                   mapData.splice(0,0,obj[count]);
                                 }
                          dataHandler.postRequest(urls,mapData);
                           
                            break;
                            case 'controller_form':
                              event.preventDefault();
                              fils=  $("ul.datalist");
                          
                              mapData= $("form").serializeArray();
                              reltName ="";relt="";
                                 obj=[];
                          for(count=0;count<fils.length;count++)
                           {
                                     data=$(fils[count]).find("li#datalist_link");
                                        
                                      temp_name=$(data).find("span#input-head");
                                     reltName += $(temp_name).text()+":";
                                     temp=$(data).find("ul");
                                     
                                     let cf;
                                     for(cf=0;cf<temp.length;cf++)
                                     {
                                          temp_var=$(temp[cf]).children();
                                     for(yy=0;yy<temp_var.length;yy++)
                                     {
                                          relt +=$(temp_var[yy]).find("span#data_carry").text()+"|";
                                     }
                                      relt +="!";
                                     }
                                     
                                       relt +="&";
                                 
                           }
                            let ctN = reltName.split(":"), ctM=relt.split("&");
                            let ctA;
                            let chg = $("select#controller_name_select").children();
                            let fr,fr2;
                            for(fr=0;fr < chg.length; fr++)
                            {
                                let  rv2=$(chg[fr]).text();
                                  
                                  for(fr2=0;fr2< ctN.length; fr2++)
                                     {
                                       let  rv=ctN[fr2];
                                      
                                               if(rv == rv2)
                                                 {
                                                      console.log("trut 1");
                                                     ctN[fr2]=(fr)+"_methodController";
                                                  }
                                     }
                             
                            }
                           for(ctA in ctN)
                           {
                                obj.push({name:ctN[ctA],value:ctM[ctA]});
                                
                           }
                            
                              urls=$("#controller_form").attr("action");
                              
                                   mapData.length=1;
                                 for(count=0;count<obj.length;count++)
                                {
                                   mapData.splice(0,0,obj[count]);
                                 }
                          dataHandler.postRequest(urls,mapData);
                            break;
                        case 'model_attribute':
                              event.preventDefault();
                               fils=  $("ul.datalist");
                              mapData= $("form").serializeArray();
                                reltName ="";
                                relt="";
                                 let cN="",cM="",collect ,ctB;
                                obj=[];
                                 for(count=0;count<fils.length;count++)
                           {
                                     data=$(fils[count]).find("li#datalist_link");
                                        
                                      temp_name=$(data).find("span#input-head");
                                     reltName += $(temp_name).text()+":";
                                     temp=$(data).find("ul");
                                     
                                     let cf;
                                     for(cf=0;cf<temp.length;cf++)
                                     {
                                          temp_var=$(temp[cf]).children();
                                     for(yy=0;yy<temp_var.length;yy++)
                                     {
                                          relt +=$(temp_var[yy]).find("span#data_carry").text()+"|";
                                     }
                                      relt +="!";
                                     }
                                     
                                       relt +="&";
                                 
                           }
                           cN = reltName.split(":"); 
                          cM=relt.split("&");
                             //ctA="";
                            collect = $("select#controller_name").children();
                           let cgt,rdv="",rdv2="",cgu;
                        
                           
                           
                            for(cgu=0;cgu < collect.length; cgu++)
                            {
                                 rdv2=$(collect[cgu]).text();
                                  console.log(rdv2);
                                  for(cgt=0;cgt< cN.length; cgt++)
                                     {
                                         rdv=cN[cgt];
                                        console.log(rdv);
                                               if(rdv == rdv2)
                                                 {
                                                      console.log("trut");
                                                     cN[cgt]=(cgu)+"_modelAttribute";
                                                  }
                                     }
                             
                            }
                          
                         
                                   
                                      console.log(cN);
                                    console.log(cM);
                                    //console.log(collect);
                           for(ctB in cN)
                           {
                                obj.push({name:cN[ctB],value:cM[ctB]});
                                
                           }
                              urls=$("#model_attribute").attr("action");
                              
                                  mapData.length=1;
                                 for(count=0;count<obj.length;count++)
                                {
                                   mapData.splice(0,0,obj[count]);
                                 }
                              dataHandler.postRequest(urls,mapData);
                            break;
                         case 'init_binder':
                              event.preventDefault();
                              mapData= $("form").serializeArray();
                              urls=$("#init_binder").attr("action");
                                dataHandler.postRequest(urls,mapData);
                            break;
                        case 'view_generate':
                            event.preventDefault();
                              mapData= $("form").serializeArray();
                              urls=$("#view_generate").attr("action");
                                dataHandler.postRequest(urls,mapData);
                            break;
                        case 'templates_form':
                            event.preventDefault();
                              /*
                               * Get all ul in div#gener...
                               * Loop through
                               * get all li#folder
                               * for each get span#folder_name 
                               * Concatenate to main template folder
                               * get all li#page
                               * if contain 
                               */
                              fils=  $("ul.datalist").children();
                          
                              mapData= $("form").serializeArray();
                                    let  obj2;
                                    let allUl="",xcvt="",allSpan="/templates/",cvt,bound,bd1,bd3,bd2=",", collectFolders="",pageColt=",",childr,chil;
                               let pltVar="", sploit ,sdr="";
                               obj2=[];
                                for (count = 0; count < fils.length; count++)
                                {
                                        allUl = $(fils[count]).attr("id");
                                        
                                        if(allUl == "sub_folder")
                                        {
                                          collectFolders =  $(fils[count]).children("span#folder_name").text()+"/";
                                          console.log(allSpan+collectFolders);
                                          cvt = $(fils[count]).find("ul");
                                          console.log(cvt);
                                          
                                         for(bound=0; bound < cvt.length; bound++)
                                          {
                                             
                                            bd2 ="";
                                             
                                                 if(bound == 0)
                                                 {
                                                      childr = $(cvt[bound]).children("li#sub_folder");
                                                       chil = $(cvt[bound]).children("li#page_name");
                                                       console.log(childr);
                                                        console.log(chil);
                                                      for(bd1=0; bd1 < childr.length; bd1++)
                                                       {
                                                            pltVar += ($(childr[bd1]).children("span#folder_name").text()).trim()+":";
                                                       }
                                                       console.log(pltVar);
                                                       for(bd3=0; bd3 < chil.length; bd3++)
                                                       {
                                                           bd2 += ($(chil[bd3]).text()).trim()+",";
                                                       }
                                                         console.log(bd2);
                                                         
                                                         obj2.push({name:count+""+bound+"_folder",value:allSpan+collectFolders+bd2});
                                                
                                                
                                                /*
                                                 * SAve folfer + pages
                                                 * Split pltVar to use it
                                                 */
                                                
                                               // obj2.push(allSpan+collectFolders+bd2);
                                                //obj2.push({name:count+""+bound+"_folder",value:allSpan+collectFolders+bd2});
                                                 }
                                              else
                                                 {
                                                     sploit = pltVar.split(":");
                                                       
                                                        
                                                         
                                                         chil = $(cvt[bound]).children("li#page_name");
                                                         for(bd3=0; bd3 < chil.length; bd3++)
                                                       {
                                                          sdr += ($(chil[bd3]).text()).trim()+",";
                                                       }
                                                       
                                                        obj2.push({name:count+""+bound+"_folder",value:allSpan+collectFolders+sploit[count]+"/"+sdr});
                                                        }
                                                       //  obj2.push("/"+sploit[count]+"/"+bd2);
                                                        
                                                     
                                                 }
                                             
                                                
                                                
                                          
                                        }
                                        else
                                        {
                                            if(allUl == "page_name")
                                            {
                                                allSpan += $(fils[count]).text()+",";
                                            }
                                        }
                                 }
                                  console.log(allSpan);
                                  //obj2.push(allSpan);
                                         obj2.push({name:"0_folder",value:allSpan});
                                let sff;
                                for(sff in obj2)
                                {
                                     console.log(obj2[sff]);
                                }
                           
                                
                              urls=$("#templates_form").attr("action");
                               mapData.length=1;
                                 for(count=0;count<obj2.length;count++)
                                {
                                   mapData.splice(0,0,obj2[count]);
                                 }
                              dataHandler.postRequest(urls,mapData);
                                //dataHandler.postRequest(urls,mapData);
                            break;
                        case 'validate_form':
                            event.preventDefault();
                              mapData= $("form").serializeArray();
                              urls=$("#validate_form").attr("action");
                                dataHandler.postRequest(urls,mapData);
                            break;
                               case 'functionnality_form':
                            event.preventDefault();
                             fils=  $("ul.datalist").find("span#packages");
                              mapData= $("form").serializeArray();
                               obj=[];
                               let fls,chng,vtb,vtg,pckg="",clss="",mthd="",jmp=0,ctru;
                                let itrator;
                                 for(count=0;count<fils.length;count++)
                                 {
                                     pckg += ($(fils[count]).text()).trim()+":";
                                     chng = $(fils[count]).parent("li").children("ul");
                                      //console.log(chng);
                                      
                              
                                         fls = $(chng).find("span#classes");
                                        
                                                    
                                       
                                                     for(vtg=0; vtg < fls.length; vtg++)
                                                    {
                                             
                                                        clss += ($(fls[vtg]).text()).trim()+";";
                                                           ctru = $(fls[vtg]).parent("li").children("ul").children();
                                                             for(jmp=0; jmp < ctru.length; jmp++)
                                                             {
                                             
                                                                mthd += ($(ctru[jmp]).text()).trim()+";";
                                             
                                                            }
                                                             mthd +="!";
                                                          
                                                    }
                                                       clss +="!";
                                                         mthd +="|";
                                 }
                                                let pvb= pckg.split(":");
                                                let rdi = clss.split("!");
                                                let rdk = mthd.split("|");
                                                      let rf,mn,mnb;
                                                     
                                                      for(itrator=0; itrator < pvb.length; itrator++)
                                                      {
                                                         
                                                              obj.push({name:itrator+"_package",value:pvb[itrator]+"|"+rdi[itrator]+"|"+rdk[itrator]});
                                                          
                                                         
                                                      }
         
                                    
                             
                              urls=$("#functionnality_form").attr("action");
                               mapData.length=1;
                                 for(count=0;count<obj.length;count++)
                                {
                                   mapData.splice(0,0,obj[count]);
                                 }
                              
                              
                             dataHandler.postRequest(urls,mapData);
                            break;
                    }
};

/*
 * On Change
 */
export let change = function(elementId)
{
                    switch(elementId)
                    {
                        case 'client_ent':
                             console.log('client_ent');
                             //Get client entity name
                            let clientEnt =  document.getElementById("client_ent").value;
                            console.log(clientEnt);
                             
                             //Send entity name to server to get key
                                $.ajax({
                                        type:"GET",
                                        url:"/bitcode/get-key/"+clientEnt, 
                                        success:function(da)
                                        {
                                            console.log(da);
                                            let extr = da.substring(0,1);  
                                            console.log(extr);
                                            //Send key to server to get value
                                                $.ajax({
                                                          type:"GET",
                                                          url:"/bitcode/get-value/"+extr+"_attribute", 
                                                          success:function(dta)
                                                          {
                                                                console.log(dta);

                                                                let listAtr = dta.split(":");
                                                                let dt;
                                                                let tg=`<dl id="datalist" class="row p-0"><dt class="col-lg-4 ">${extr} Attributes </dt>`;
                                                                tg+=`<div class="col-lg-7 border border-muted m-0 p-0">`;
                                                                for(dt in listAtr)
                                                                {
                                                                    tg+=`<dd id="data" class="plus p-2 m-0">${listAtr[dt]}</dd>`;
                                                                }
                                                                tg+=`</div>`;
                                                                tg+=`</dl>`;
                                                                $("dl#datalist").remove();
                                                                // eventHandler.addElementToView(tg,"after","#client_ent");
                                                                $("#list_attributes").append(tg);

                                                          },
                                                          error:function (e)
                                                          {
                                                                console.log("ERROR : ", e);
                                                            }
                                                       });
                                            //  entityCollect += data+":";
   
                                        },
                                        error:function (e)
                                        {
                                             console.log("ERROR : ", e);
                                         }
   
                        
                        });

                            break;
                        case 'repo_by':
                            let by = $(event.target).value;
                            let clost = $(event.target).closest("span");
                            let clt = $(clost).text()+`(${by})`;
                            document.forms["model_attribute"]["model_object"].value=clt;
                            break;
                    }
};

/*
 * On Hover
 */
export let mouseenter = function(elementId)
{
       switch (elementId)
        {
            case 'input-drop':
                $(event.target).find("span#toolbox").removeClass('d-none');
                break;
        }
};

export let mouseleave = function(elementId)
{
       switch (elementId)
        {
            case 'input-drop':
                $(event.target).find("span#toolbox").addClass('d-none');
                break;
        }
};
