import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const { user, createUser } = useContext(authContext);
    const [error, setError] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        //error reset
        setError("");

        //password confirm check
        if (password !== confirm) {
            setError("Password not matched")
            return
        }

        //user create function
        createUser(email, password)
            .then((userCredential) => {
                const signinUser = userCredential.user;
                console.log(signinUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
        form.reset()
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" required />
                                <label className="flex gap-3 my-2">
                                    <input type="checkbox" name="" id="" />
                                    <a href="#" className="label-text-alt link link-hover">Accept all trams & comditions</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <p className="text-pink-700 my-1">{error}</p>
                                <button className="btn btn-primary bg-gray-800 text-white">Register</button>
                                <p className="mt-2">Have a Account? <Link to="/login" className="font-bold text-gray-900">Login Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;