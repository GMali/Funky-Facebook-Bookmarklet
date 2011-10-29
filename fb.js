javascript:
function fb(){
    try{
        if(document.getElementById("pagelet_header_personal")){
            var head = document.getElementById("pagelet_header_personal");
            var nameDiv = head.childNodes[0].childNodes[1].childNodes[0].childNodes[0];
            var name = nameDiv.childNodes[0]; 

        }else if (document.getElementById("fbTimelineHeadline")){
            var head = document.getElementById("fbTimelineHeadline");
            var nameDiv = head.childNodes[1].childNodes[1].childNodes[0];
            var name = nameDiv.childNodes[0]; 

        }else{
            alert('Facebook is mad weird. Wait till it\'s completely done loading.');      
        }
        
        if (document.createTextNode){
          var mytext=document.createTextNode("Biggest Mali Fan EVER!");
          nameDiv.replaceChild(mytext, name);
        }        
    }catch(e){
      alert('Facebook is mad weird. Wait till it\'s completely done loading.');
    }
}
fb();
