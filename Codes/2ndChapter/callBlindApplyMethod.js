// call()
var kariObj = {
    name : 'Abdul Karim',
    dob : 1997,
    ageMsg : function (current) {
        console.log(this.name+' is '+(current - this.dob)+' years old ');
    },
    customObj : {
        name : 'Ahmed Rokib',
        dob : 1999,
        ageMsgInCObj : function (current) {
            console.log(this.name+' is '+(current - this.dob)+' years old (this is inside coustom obj)');
        }
    }
}
kariObj.customObj.ageMsgInCObj(2023);//it will coustomobj
kariObj.customObj.ageMsgInCObj.call(kariObj,2023);//it will call kari obj

kariObj.ageMsg(2023);

var rahiObj ={
    name : "Abdul Rahim ",
    dob : 2003
}

//rahim.ageMsg();//error
kariObj.ageMsg(rahiObj , 2023);// won't show any thing from rahim

kariObj.ageMsg.call(rahiObj , 2023);

//apply method