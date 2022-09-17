var div=document.createElement("div")
div.setAttribute("class","div")
var div1=document.createElement("div")
div1.setAttribute("id","active")

var active=document.createElement("div")
//active.setAttribute("id","active")
div.append(div1)

document.body.append(div,foo())
 async function foo(){
    let url=`https://zoo-animal-api.herokuapp.com/animals/rand`
    var res=await fetch(url)
     var res1=await res.json();

//console.log(res1) 
 //console.log(res1[i])

        div1.innerHTML=`
        <h4 style="margin-top:0%;">Name:${res1.name} </h4>
        <h4>Latin Name:${res1.latin} </h4>
        <h4>Animal Type:${res1.animal_type} </h4>
        <h4>Weight Max:${res1.weight_max} </h4>
        <h4>Lifespan:${res1.lifespan} </h4>
      
        `
        
    }


