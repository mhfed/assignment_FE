import React from "react";
import "./Signin.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signin } from "../../api/auth";
import { setLocalStorage } from "../../utils/localStorage";

type TypeInputs = {
    name?: string;
    email: string;
    password: string;
};

const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
        const { data: user } = await signin(data);
        if (user) {
            setLocalStorage(user, () => {
                navigate("/");
            });
        }
    };
    return (
        <div className="super_container">
            <Sidebar />

            <div className="wrapper">
                <div className="form-wrap">
                    <h1>Login Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                className="input-custom"
                                id="email"
                                placeholder="ex: hieu@gmail.com"
                                {...register("email")}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="input-custom"
                                id="password"
                                placeholder="******"
                                {...register("password")}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn-submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
