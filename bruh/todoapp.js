tasklist = document.getElementById("mylist");
function add(){
    var string = document.getElementById("newtask").value;
    var time = document.getElementById("taskdl").value;
    // empty invalid
    if ((string != "") && (time != "")){
        var mitask = document.createElement("div");
        mitask.setAttribute("id", "taskbox")
        mitask.innerHTML = "<div id='taskname'>" + string + "</div> \
                            <div id='tasktime'>" + time + "</div>";
        mitask.addEventListener("click", function(){
            mitask.style.display = "none";
        });
        document.getElementById("mylist").appendChild(mitask);
        
    }
    document.getElementById("newtask").value = "";
    document.getElementById("taskdl").value = "";
    tasklist = document.getElementById("mylist");
}
function timecheck(){
    var dt = new Date();
    var nowhr = dt.getHours();
    // console.log(nowhr);
    tasklist = document.getElementById("mylist");
    var mytext = new Array();
    if (tasklist != null){
        for (let i=1; i<tasklist.childNodes.length; i++){
            
            var temp = tasklist.childNodes[i].childNodes;
            var dl = parseInt(temp[2].innerHTML.slice(0,2));
            if ((dl == nowhr) || (dl == nowhr + 1)){
                mytext.push(temp[0].innerHTML);
            }
            if ((dl == 0)&&(nowhr == 23)){
                mytext.push(temp[0].innerHTML);
            }
        }
        console.log(mytext);
    alert("Incoming tasks in about an hour:\n" + mytext.join("\n"));
    }

}




