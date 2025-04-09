"use client";

import React, { useEffect, useState } from "react";
import Menu from "../../components/menu/menu";
import UserRow from "../../app/users/userRow";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Users() {
    const [userList, setUserList] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        setUserList(storedUsers);
    }, []);

    const openEditPage = (user) => {
        localStorage.setItem("formData", JSON.stringify(user));
        router.push("/users/edit");
    };

    const handleDelete = (id) => {
        const updatedUsers = userList.filter(user => user.id !== id);
        setUserList(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    return (
        <div className="flex flex-row">
            <div className="w-1/4">
                <Menu />
            </div>
            <div className="w-full flex flex-col gap-4 mt-7 ml-6">
                <Link
                    href="/users/create"
                    className="w-64 bg-blue-600 text-white px-4 py-2 text-center rounded-md hover:bg-blue-700 transition"
                >
                    Create
                </Link>

                {/* Table */}
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                        <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-300 bg-slate-50 text-left">Id</th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50 text-left">Name</th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50 text-left">Address</th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50 text-left">Gender</th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50 text-left">Created_at</th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50 text-left">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userList.map((user, index) => (
                            <UserRow
                                key={index}
                                user={user}
                                openEditPage={openEditPage}
                                handleDelete={handleDelete}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
