function dispList(){
    document.getElementById("container").hidden=false;
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
             let jFile=JSON.parse(this.responseText);

            setTable(jFile);

        }
    };
    xhr.open("GET", "gList.json",true);
    xhr.send();
}

//table format
function setTable(obj){
    document.getElementById("button").style.display="none";
    let item=obj;
    let table ="<thead><tr><th>S.No</th><th>ItemName</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr></thead>";
    for(let i=0;i<item.length;i++)
    {       
        table+="<tr>";
        table+="<td>"+item[i].sNo+"</td><td>"+item[i].iName+"</td><td>"+item[i].qty+"</td><td>"+item[i].unit+"</td><td>"+item[i].dept+"</td><td>"+item[i].note+"</td>";
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("gList").innerHTML=table;
}