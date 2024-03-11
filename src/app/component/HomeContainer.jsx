"use client"
import Header from "./Header"
import { useState  , useEffect } from "react"
import Calendar from "./Days";

const monthsArray = ["January" , "Febuary" , "March" , "Aprail" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
const HomeContainer = ({ currMonthInd })=>{

    
    const [currMonth , setCurrMonth] = useState(currMonthInd);
    const [currYear , setCurrYear] = useState(2023);

    return (
        <div className=" flex flex-col w-1/3 mx-auto gap-2 ">
             <Header month={monthsArray[currMonth]} year = {currYear} currMonth={currMonth} setCurrentMonth={setCurrMonth} setCurrYear={setCurrYear}/>
             <Calendar currentMonth = {currMonth} currYear = {currYear}/>
        </div>
    )
}


export default HomeContainer;