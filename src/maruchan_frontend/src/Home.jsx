import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useRestActor } from "@bundly/ic-react";

export const Home = () => {
    const bnd = useRestActor("backend");
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await bnd.get("/users");
            console.log(res.data)
        } catch (error) {
            console.log("Error", error)
        }
    }
    getUsers()
    return (
        <div>Home</div>
    )
}