import React,{useEffect,useState} from 'react';
import { FcPlus,FcBiotech,FcGlobe } from "react-icons/fc";
import { GiLoveInjection } from "react-icons/gi";
import { MdMasks } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiPulseFill } from "react-icons/ri";
import Header from './Header';
const Table = () => {
    const [coviddata,setCovidData]=useState([]);
    const[india,setIndia]=useState({});
    const covidData=async()=>{
        const compute=await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        const result=await compute.json();
        console.log(result.data.regional);
        console.log(result.data.summary);
        setIndia(result.data.summary)
        setCovidData(result.data.regional);
    }
    useEffect(()=>{
        covidData();
    },[]);
  return <div>
      <div className='container my-3'>
        <div className='row'>
            <div className='col-md-3'>
                <Header bordervalue={"border-danger"} india={india.total} textvalue={"text-danger"} name={"Confirmed"} />
            </div>
            <div className='col-md-3'>
            <Header bordervalue={"border-primary"} india={india.total-(india.discharged+india.deaths)} textvalue={"text-primary"} name={"Active"} />
            </div>
            <div className='col-md-3'>
            <Header bordervalue={"border-success"} india={india.discharged} textvalue={"text-success"} name={"Recovery"} />
            </div>
            <div className='col-md-3'>
            <Header bordervalue={"border-secondary"} india={india.deaths} textvalue={"text-secondary"} name={"Deceased"} />
            </div>
        </div>
      </div>
      <div className="container my-3">
      <table className="table table-hover table-light">
  <thead>
    <tr>
      
      <th scope="col" className='text-warning'>State <FaMapMarkerAlt/></th>
      <th scope="col" className="text-danger" >Confirmed Cases <MdMasks/></th>
      <th scope="col" className="text-primary">Active <  GiLoveInjection /></th>
      <th scope="col" className="text-success">Recovery <FcPlus/></th>
      <th scope="col" className="text-secondary">Deceased <RiPulseFill/></th>
    </tr>
  </thead>
  <tbody>
    {
        coviddata.map((item)=>{
            return(<tr>
                <td>{item.loc}</td>
                <td>{item.totalConfirmed}</td>
                <td>{item.totalConfirmed-(item.discharged+item.deaths)}</td>
                <td>{item.discharged}</td>
                <td>{item.deaths}</td>
              </tr>)
        })
    }
   
        </tbody>
    </table>
  </div>
  </div>;
};

export default Table;
