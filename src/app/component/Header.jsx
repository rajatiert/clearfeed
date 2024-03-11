const Header = ({month , year ,currMonth ,setCurrentMonth , setCurrYear})=>{

    return <div className="flex flex-row w-full justify-between text-black items-center ">
           <div>{month} {year}</div>
           <div className="flex gap-4 items-center justify-center">
               <button onClick={()=>{
                   if(currMonth === 0)
                   {
                      setCurrYear(prev=>prev-1);
                      setCurrentMonth(11);
                   }
                   else
                      setCurrentMonth(prev=>prev-1);
               }}  className="bg-black text-white rounded-lg p-1">Prev</button>

               <button onClick={()=>{
                   if(currMonth === 11)
                   {
                      setCurrYear(prev=>prev+1);
                      setCurrentMonth(0);
                   }
                   else
                      setCurrentMonth(prev=>prev+1);
               }} className="bg-black text-white rounded-lg p-1">Next</button>
           </div>
    </div>
}

export default Header;