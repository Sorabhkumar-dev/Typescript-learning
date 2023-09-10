type User = {
    name:string,
    age:number,
    isPaid:boolean
};


const createUser = ({name:string,isPaid:boolean}) => {

};

const loginUser = (user:User):User => {
    return user;
}

const user = {name:"Sorabh Kumar",isPaid:true,age:18};

const newUser = {name:"Kallue",age:22};


createUser(user); // this not giving Error

loginUser(user); // this also not giving error because we pass all the fields as mentioned in type

//loginUser(newUser); // this will give error beccause we not passed fields in bojcet as we mentioned in type

type Student = College & {
   readonly _id:string,
   studentName:string,
   course:Course,
   fatherName?:string,
   motherName?:string
}

type Course ={
    departMent:Department,
    courseName:string
}

type Department = {
    departmentName:string,
    headName:string,
}

type College ={
    collegeName:string,
    address:string
}

export{};