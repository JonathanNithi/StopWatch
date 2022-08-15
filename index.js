function StopWatch(){
    let startTime = 0;
    let endTime = 0;
    let isStartOn = false;

    this.start = () =>{
        if(!isStartOn){
            isStartOn = true;
            const time = new Date();
            startTime = time.getTime();
        } else{
            throw new Error("StopWatch has already started");
        }
    }

    this.stop = () =>{
        if(isStartOn){
            isStartOn = false;
            const time = new Date();
            endTime = time.getTime();
        } else{
            throw new Error("StopWatch has not started");
        }
    }

    this.duration = ()=>{
        console.log(`${(endTime-startTime)/1000} seconds`);
    }

    this.reset = ()=>{
        startTime = 0;
        endTime = 0;
    }
    

}