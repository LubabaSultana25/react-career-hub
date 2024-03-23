
const Job = ({ job }) => {
    const { logo } = job;
    return (
        <div>
            <img src={logo} alt="logo"></img>

        </div>
    );
};

export default Job;