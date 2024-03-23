import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatureJob = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className="text-center">
                <h3 className="text-5xl">Featured Jobs:{jobs.length}</h3>
                <p className="text-sm text-gray-600">
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="">
                {
                    jobs.map(job => <Job key={jobs.id} job={job} ></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJob;