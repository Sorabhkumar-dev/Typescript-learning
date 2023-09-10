let myName:"Sorabh Kumar" | "Kallu"

let residence : "Saharapur" | "Gurugram"

type Company ={
    name:string,
    startDate:string,
    endDate:string
    CGPA:string
}


type College ={
    name:string,
    startDate:string,
    endDate:string
    salary:string
}

let bigFour:Company | College = {
    name:"Dev bhoomi group of institute",
    startDate:"2018",
    endDate:"2021",
    CGPA:"8"

}

bigFour = {
    name:"Dev bhoomi group of institute",
    startDate:"2018",
    endDate:"2021",
    salary:"5.15"
}

// array
const compnayDate:(string | number)[] = []