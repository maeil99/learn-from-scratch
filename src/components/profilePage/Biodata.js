import useFetch from "../../const/useFetch";

const Biodata = () => {
  const {
    data: biodata,
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
  } = useFetch(" http://localhost:8001/profile");
  return (
    <>
      <h1>My Profile</h1>
      <br />
      {isLoadingProfile && (
        <div className="loadin-outer">
          <div className="loading-inner">
            <p>Loading...</p>
            <span></span>
          </div>
        </div>
      )}
      {isErrorProfile && (
        <div>
          <p>An error occured...</p>
          <p style={{ color: "red" }}>Error message: {isErrorProfile}</p>
        </div>
      )}
      {biodata && (
        <>
          <p>Name : {biodata.name}</p>
          <p>Age : {biodata.age}</p>
          <p>Gender : {biodata.gender}</p>
        </>
      )}
    </>
  );
};

export default Biodata;
