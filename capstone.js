function searchProduct() {

    let input =
    document.getElementById("search")
    .value.toLowerCase();

    let products =
    document.getElementsByClassName("product");

    for(let i=0;i<products.length;i++){

        let name =
        products[i].getElementsByTagName("h3")[0]
        .innerText.toLowerCase();

        if(name.includes(input)){
            products[i].style.display="block";
        }else{
            products[i].style.display="none";
        }
    }
}
