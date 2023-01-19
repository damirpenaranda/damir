const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const car = document.querySelectorAll(".car")
    const cname = storeitems.getElementsByTagName("h4")

    for(var i=0; i < cname.length; i++){
        let match = car[i].getElementsByTagName("h4")[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            car[i].style.display = "";
           }else{
            car[i].style.display = "none";
           }
        }
    }
}