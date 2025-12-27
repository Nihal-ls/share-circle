import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { saveOrUpdateUser } from "../../utils";


const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
        const { user } = await signIn(email, password);
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        roll:""
      });
    
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Login failed");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
        const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });
    
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      setLoading(false);
      toast.error(err?.message || "Google login failed");
    }
  };


  if (user) return <Navigate to={from} replace />;

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFF8F0] p-4">
      <div className="flex flex-col max-w-md p-6 rounded-3xl sm:p-10 bg-white shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-gray-900">Log In</h1>
          <p className="text-sm text-gray-500">Sign in to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-lime-400 bg-[#FFF8F0]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-lime-400 bg-[#FFF8F0]"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B35] hover:bg-[#e85a2b] text-white py-3 rounded-lg font-semibold flex justify-center items-center"
          >
            {loading ? <TbFidgetSpinner className="animate-spin" /> : "Continue"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button className="text-xs text-gray-500 hover:text-[#FF6B35] underline">
            Forgot password?
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg cursor-pointer hover:bg-[#FFF8F0]"
        >
          <FcGoogle size={26} />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </div>

        <p className="text-center text-gray-400 text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FF6B35] font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
