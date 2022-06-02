import React, { useState } from 'react';



const Login = () => {

    const url = 'https://localhost:5001/api/Task';
    const data = {
        "username": "Dimas",
        "taskname": "Srat",
        "iscompleted": false,
        "isimportant": true
    };

    return (
        <section id="section-todo">

            <span className="menu animate__animated animate__fadeInLeft">
                <span className="menu_inner">
                    <span className="profile">
                        <span className="profile_pic"><img className="avatar" src="bang.jpg" alt="" /></span>
                        <span className="profile_name text"><p>NAME</p></span>
                        <span className="profile_lastname text"><p>LASTNAME</p></span>
                        <span className="profile_line"></span>
                        <span className="profile_sex">MALE</span>
                    </span>

                    <span className="quit">
                        <span className="quit_inner">
                            <span className="quit_butt">QUIT</span>
                        </span>
                    </span>
                </span>
            </span>
        </section>
    );
}

export default Login;
