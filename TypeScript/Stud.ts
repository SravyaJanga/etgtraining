class StudentAssignment{
    SID:number=15;
    SName:string="Sravya";
    SClass:number=3
    constructor(i:number,n:string,s:number){
           this.SID=i;
           this.SName=n;
            this.SClass=s;
           }
           display()
            {
                 console.log(this.SID);
                 console.log(this.SName);
                 console.log(this.SClass);
                  }}
                 var s1=new StudentAssignment(14,"somi",9);
                 s1.display();
                 var s2=new StudentAssignment(13,"suni",11);
                 s2.display();