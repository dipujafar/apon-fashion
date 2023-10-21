import errorImg from "../../assets/images/404.gif";

const ErrorPage = () => {
  return (
    <div className="min-h-screen mt-5">
      <h1 className="text-4xl text-red-400 text-center">Opps...</h1>
      <p className="text-xl text-center">No Data Found!</p>
      <div className="mt-10">
        <img src={errorImg} alt="" className="w-3/4 mx-auto max-h-60" />
      </div>
    </div>
  );
};

export default ErrorPage;
