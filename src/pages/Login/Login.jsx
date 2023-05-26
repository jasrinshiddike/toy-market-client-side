import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import useTitle from "../../hooks/useTitle";

const Login = () => {
    const [user, setUser] = useState(null);
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useTitle('Login')
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('');
        setSuccessMessage('');

        //console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                setSuccessMessage('User login successfully');
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, { replace: true })
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }
    return (
        <div className="hero min-h-screen p-8 rounded-2xl bg-base-200">
            <div className="card flex-shrink-0 w-full rounded-2xl max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Please Login!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter password" className="input input-bordered" />
                            <label className="label mt-2 text-green-600">
                                <p>{successMessage}</p>
                            </label>
                            <label className="label text-red-500">
                                <p>{errorMessage}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="mt-5 text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                <FaGoogle />
                            </button>
                        </div>
                    </form>
                    <p className="text-center">New to Toy Market? <Link className="text-red-500 font-bold" to="/signup">Sign Up</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;