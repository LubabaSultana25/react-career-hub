import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar, AiOutlineMail } from "react-icons/ai";
import { SlCalender, SlPhone,SlLocationPin } from "react-icons/sl";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center py-5">Job details of :{job.job_title} </h2>

            <div className="grid gap-6 grid-cols-6">
                <div className=" md:col-span-4 py-4 pl-4 text-justify">
                    <div className="pb-5">
                        <h3> <span className="font-bold text-sm">Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h3>

                    </div>
                    <div className="py-3">
                        <h3>
                            <span className="font-bold text-sm">Job Responsibility:</span>  Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</h3>

                    </div>
                    <div className="py-3">
                        <h2 className="font-bold text-sm">Educational Requirements:</h2>
                        <p>
                            Bachelor degree to complete any reputational university.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm">Experiences:</h3>
                        <p>2-3 Years in this field.</p>
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
                        <button className="btn bg-[#9873FF] w-full">Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;