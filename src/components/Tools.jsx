
import ProfitLossCOGS from "./ProfitLossCOGS";
import GrossMargin from "./GrossMargin";
import ChurnRate from "./ChurnRate";
import NetIncome from "./NetIncome";
import CLVCACROI from "./CLVCACROI";



export default function Tools() {
  return (
    <>
     <div className="min-h-screen bg-gray-200 text-center px-8 py-28">
    
       <ProfitLossCOGS />
       <GrossMargin />
      <ChurnRate />
       <NetIncome />
       <CLVCACROI />
      
   
       </div>
    </>
  );
}