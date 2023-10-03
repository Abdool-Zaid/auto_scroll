window.addEventListener('load',()=>{

while(true){
    console.log("slave active")
    window.scrollBy(0,1)
    setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, "1000");
}
})