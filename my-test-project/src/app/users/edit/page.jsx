"use client";

import Menu from "../../../components/menu/menu";
import SimpleInput from "../../../components/FormElements/Elements/SimpleInput";
import NormalTextArea from "../../../components/FormElements/Elements/NormalTextArea";
import SelectOption from "../../../components/FormElements/Elements/SelectOption";
import React, { useState, useEffect } from "react";
import Button from "../../../components/FormElements/Elements/PrimaryButton";
import { useRouter } from "next/navigation";

export default function Edit() {
    const [formData, setFormData] = useState({
        firstName: "",
        address: "",
        gender: "",
    });

    const router = useRouter();

    useEffect(() => {
        try {
            const savedFormData = localStorage.getItem("formData");
            if (savedFormData) {
                setFormData(JSON.parse(savedFormData));
            }
        } catch (error) {
            setFormData({
                firstName: "",
                address: "",
                gender: "",
            });
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        let users = JSON.parse(localStorage.getItem("users"));
        users = users.map((user) =>
            user.id === formData.id ? formData : user
        );
        localStorage.setItem("users", JSON.stringify(users));

        router.push("/users");
    };

    const options = [
        { value: "female", label: "Female" },
        { value: "male", label: "Male" },
        { value: "other", label: "Other" },
    ];

    return (
        <div className="flex flex-wrap justify-center items-start">
            <div className="w-full md:w-1/4">
                <Menu />
            </div>
            <div className="flex flex-col text-center w-full md:w-3/4 items-center">
                <h2 className="text-2xl font-bold mt-6">Edit User</h2>
                <div className="flex flex-col items-center gap-2 mt-4">
                    <SimpleInput
                        id="firstName"
                        simpleInputTitle="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter First Name"
                    />

                    <NormalTextArea
                        id="address"
                        textAreaTitle="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Address"
                    />

                    <SelectOption
                        id="gender"
                        name="gender"
                        genderTitle="Gender"
                        value={formData.gender}
                        options={options}
                        onChange={handleChange}
                    />

                    <Button type="button" onClick={handleSave}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
}
