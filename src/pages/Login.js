import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("1111111");
  const [error, setError] = useState("");
  const { logIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/3cee8404-4da5-4507-bd7b-3daa66da6210/HR-en-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="image"
      />

      <div className="left-0 top-0 bg-black/60 fixed w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error.length > 0 ? (
              <span className="text-red-500 my-4">{error}</span>
            ) : null}

            <form
              onSubmit={handleSubmit}
              className="w-full flex  flex-col py-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-2  my-2 rounded bg-gray-700"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="p-2  my-2 rounded bg-gray-700"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded hover:bg-red-700 font-bold">
                Sign In
              </button>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>

                <p>Need help ?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600 mr-2">New to Netflix? </span>{" "}
                <span>
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
