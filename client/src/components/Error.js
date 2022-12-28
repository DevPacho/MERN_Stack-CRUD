import { useRouteError } from "react-router-dom";

function Error() {

  const error = useRouteError();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Error 😥</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
