import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Signup.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/auth";

type TypeInputs = {
    name?: string;
    email: string;
    password: string;
};

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = (data) => {
        signup(data).then(() => {
            navigate("/signin", {
                state: {
                    email: data.email,
                    password: data.password,
                },
            });
        });
    };

    return (
        <div className="super_container">
            <Sidebar />
            <div className="wrapper">
                <div className="form-wrap">
                    <h1>Register Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                className="input-custom"
                                id="name"
                                placeholder="ex: Nguyen Minh Hieu"
                                {...register("name")}
                            />
                        </div>
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
                            <button className="btn-submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
