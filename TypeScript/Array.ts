class Find_in_array{
    arrnum:number[]=[1,2,3,4];
    i:number;
    found:number=0;
    find()
    {
        for(this.i=0;this.i<this.arrnum.length;this.i=this.i+1)
        {
            if (4==this.arrnum[this.i])
            {
                this.found=1;
            }
        }
        if(this.found==1)
        {
            console.log("Number Found");
        }
        else
        {
            console.log("Number Not Found");
        }
    }
}

var arr=new Find_in_array();

arr.find(); 