import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar, AiOutlineMail } from "react-icons/ai";
import { SlCalender, SlPhone, SlLocationPin } from "react-icons/sl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";
const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt)
    toast('You have Applied Successfully')
    
    }



    return (
        <div>
            <h2 className="text-4xl font-semibold text-center py-5">Job details of :{job.job_title} </h2>

            <div className="grid gap-6 grid-cols-6">
                <div className=" md:col-span-4 py-4 pl-4 text-justify">
                    <div className="pb-5">
                        <h3> <span className="font-bold text-sm">Job Description:</span> {job.job_description} </h3>
                    </div>
                    <div className="py-3">
                        <h3>
                            <span className="font-bold text-sm">Job Responsibility:</span> {job.job_responsibility} </h3>

                    </div>
                    <div className="py-3">
                        <h2 className="font-bold text-sm">Educational Requirements:</h2>
                        <p>
                            {job.educational_requirements}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm">Experiences:</h3>
                        <p>{job.experiences}</p>
                    </div>



                </div>
                <div className="md:col-span-2">
                    <div className="card bg-[#a27efe9b] text-black-content">
                        <div className="card-body">
                            <h2 className="card-title">Job details</h2>
                            <hr />
                            <div className="">

                                <div className="justify-items-center">
                                    <h2 className="flex"><AiOutlineDollar className="text-xl mr-2 align-middle" /><span className="font-bold mr-2">Salary:</span>{job.salary}</h2>
                                </div>
                                <div className="py-4">
                                    <h2 className="flex">
                                        <SlCalender className="text-xl mr-2 align-middle" />
                                        <span className="font-bold mr-2">Job title:</span>
                                        {job.job_title}</h2>
                                </div>

                            </div>

                            <h2 className="card-title">Contact Information</h2>
                            <hr />
                            <div className="">

                                <div className="justify-items-center">
                                    <h2 className="flex"><SlPhone className="text-xl mr-2 align-middle" /><span className="font-bold mr-2">Phone:</span>{job.contact_information.phone}</h2>
                                </div>
                                <div className="py-4">
                                    <h2 className="flex">
                                        < AiOutlineMail className="text-xl mr-2 align-middle" />
                                        <span className="font-bold mr-2">Email:</span>
                                        {job.contact_information.email}</h2>
                                </div>

                                <div className="">
                                    <h2 className="flex">
                                        < SlLocationPin className="text-2xl mr-2 align-middle" />
                                        <span className="font-bold mr-2">Address:</span>
                                        {job.contact_information.address}</h2>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="card-actions justify-center py-4">
                        <button onClick={handleApplyJob} className="btn bg-[#9873FF] w-full">Buy Now</button>
                    </div>

                </div>

                <ToastContainer />
            </div>

        </div>
    );
};

export default JobDetails;