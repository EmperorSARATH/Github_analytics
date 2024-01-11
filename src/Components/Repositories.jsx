import { useContext, useEffect, useRef, useState } from "react";
import { fetchRepo } from "../api/responses";
import { Context } from "../contexts/Context";
import { Link } from "react-router-dom";
const Repositories = () => {

  const {dta} = useContext(Context);
  const [dt,setDt]= dta;
  const [repo,setRepo] = useState({});
  async function apicall (){
    setRepo(await fetchRepo(dt));
  }
  let refcall = useRef(false);


  useEffect(()=>{
    if(refcall.current === false){
      apicall();
    } 
      
    refcall.current=true;

    return ()=>{

      refcall.current = true;
    }
    
    

    
  },[refcall])

  console.log(repo);
  return (
    <div className="overflow-x-auto p-10 ">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Repository name
            </th>
            <th scope="col" className="px-6 py-3">
              Language used 
            </th>
            <th scope="col" className="px-6 py-3">
              Visibility
            </th>
            <th scope="col" className="px-6 py-3">
              Visit link
            </th>
          </tr>
        </thead>
        <tbody>
            
            {Array.from(repo).map((i,index)=>{
              return (
                <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
               
             

                <td className=" px-6 py-4">{i.name}</td>
               
              
               <td className=" px-6 py-4">{i.language}</td>

               <td className=" px-6 py-4">{i.visibility}</td>
               <td className=" px-6 py-4"><Link to={i.html_url} target = "_blank" className="bg-teal-500 shadow-xl text-white p-2">
                View Repo
               </Link></td>
             
          </tr>


               

              )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Repositories;
