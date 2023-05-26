import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const location = useLocation();

    const from = location.state?.from?.pathname || '/login'

    const navigate = useNavigate();

    useTitle('Sign Up');

    const handleSignUp = event => {
        event.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
            setErrorMessage('');
            event.target.reset();
            setSuccessMessage('User has been created successfully');
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message)
        })
    }
    return (
        <div className="hero min-h-screen rounded-2xl bg-base-200">
            <div className="card flex-shrink-0 w-full rounded-2xl max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Please Sign Up!</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Enter Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" />
                            <label className="label mt-2 text-green-600">
                                <p>{successMessage}</p>
                            </label>
                            <label className="label text-red-500">
                                <p>{errorMessage}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center">Have an account? <Link className="text-red-500 font-bold" to="/login">Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default SignUp;