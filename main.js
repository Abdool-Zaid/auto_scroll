
window.addEventListener('load',()=>{
    let main= document.getElementById('tar')
    let slave = new Worker('./worker.js')
    
    let fucn =()=>{
        console.log("running")
        slave.postMessage(window)
        console.log("slave started")
        
    }
    main.addEventListener('click',fucn)
})