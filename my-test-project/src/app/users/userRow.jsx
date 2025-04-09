"use client";

import React from "react";

export default function UserRow({ user, openEditPage, handleDelete }) {
    return (
        <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200 py-5 text-left">{user.id}</td>
            <td className="p-4 border-b border-slate-200 py-5 text-left">{user.firstName}</td>
            <td className="p-4 border-b border-slate-200 py-5 text-left">{user.address}</td>
            <td className="p-4 border-b border-slate-200 py-5 text-left">{user.gender}</td>
            <td className="p-4 border-b border-slate-200 py-5 text-left">{user.createdAt}</td>
            <td className="p-4 border-b border-slate-200 py-5 text-left flex gap-2">
                <button
                    onClick={() => openEditPage(user)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
