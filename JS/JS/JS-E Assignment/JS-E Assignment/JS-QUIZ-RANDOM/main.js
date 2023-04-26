var images = [
    {
        src : "https://images.unsplash.com/photo-1616436348354-77e70e18226e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        with : "300",
        height: "300",
        id : 1
    },
    {
        src : "https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        with : "300",
        height: "300"
    },
    {
        src : "https://images.unsplash.com/photo-1573690706484-86f444f0b940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        with : "300",
        height: "300"
    },
    {
        src : "https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
        with : "300",
        height: "300"
    },
    {
        src : "https://images.unsplash.com/photo-1514925312285-7a2c94c2c095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        with : "300",
        height: "300"
    },
    {
        src : "https://images.unsplash.com/photo-1528743061033-811f9c409881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        with : "300",
        height: "300"
    },
    {
        src : "https://images.unsplash.com/photo-1528425646626-fcc5dd57daf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80",
        with : "300",
        height: "300"
    },
    {
        src : "https://images.unsplash.com/photo-1607605150327-df8a94851f4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        with : "300",
        height: "300"
    },
]

function shuffleArray(array) {
    let lenArr = array.length;
    while (lenArr != 0) {
      let randId = Math.floor(Math.random() * lenArr);
      lenArr--;
      let tmp = array[lenArr];
      array[lenArr] = array[randId];
      array[randId] = tmp;
    }
    return array;
}

let image1 = document.querySelector("#img-item1");
let image2 = document.querySelector("#img-item2");
let image3 = document.querySelector("#img-item3");
image1.src = images[0].src;
image2.src = images[1].src;
image3.src = images[2].src;

let btn = document.querySelector(".generate__Image");


btn.addEventListener('click',function(){
    var x = shuffleArray(images);
    image1.src = x[0].src;
    image2.src = x[1].src;
    image3.src = x[2].src;
});



