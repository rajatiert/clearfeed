import Image from "next/image";
import HomeContainer from "@/app/component/HomeContainer";

export default function Home() {
 
  const currMonthInd = new Date().getMonth();

  return (
      <div>
            <HomeContainer currMonthInd = {currMonthInd} />
      </div>
  );
}
