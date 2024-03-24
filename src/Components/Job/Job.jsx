import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Jobs" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name} </p>

                <div >
                    <button className="px-5 py-2 font-extrabold border rounded border-[#9873FF] text-[#7E90FE] mr-4">
                        {remote_or_onsite}
                    </button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#9873FF] text-[#7E90FE] mr-4">{job_type}</button>
                </div>

                <div className="flex mr-4 mt-4">
                    <div className="mr-4">
                        <h2 className="flex"><MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn> {location} </h2>

                    </div>
                    <div className="">
                        <h2 className="flex"><HiOutlineCurrencyDollar className="text-2xl mr-2" /> {salary} </h2>
                    </div>
                </div>

                <div className="card-actions">
                    <Link to={`job/${id}`}>
                        <button className="btn btn-primary"> View Details  </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;