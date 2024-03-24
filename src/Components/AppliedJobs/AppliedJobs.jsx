import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [AppliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied);
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobs,storedJobIds, jobsApplied)
        }
    }, [])


    return (
        <div>
            <h3 className="text-2xl">Job i Applied: {AppliedJobs.length}</h3>

            <ul>
                {
                    AppliedJobs.map(job =>
                        <li key={job.id}>
                            <span>
                                {job.job_title}{job.company_name}
                            </span>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;