import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs,setJobs]=useState([]);
  const [loading,setLoading]=useState(true);
  const [value,setValue]=useState(0);

  const fetchJobs=async()=>{
    console.log('fetching data...')
    const response=await fetch(url);
    const newJobs=await response.json();
    console.log('jobs: '+newJobs)
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(()=>{
    fetchJobs();
  },[]);

  if(loading)
    return (
            <section className="section loading">
        <h1>Loading..</h1>
      </section>
    )
  const {company,dates,duties,title}=jobs[value];

  return (
    <section className="section">
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {
            jobs.map((items,index)=>{
            return <button className={`job-btn ${index===value && 'active-btn'}`} key={index} onClick={()=>{setValue(index)}}>{items.company}</button>
            })
          }
        </div>
      
        <div className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty,idx)=>{
            return <div key={idx} className='job-desc'> <FaAngleDoubleRight className="job-icon"/>  
                  <p>{duty}</p>
                  </div>
          })}
        </div>
      </div>
      
    </section>
  )
}

export default App
