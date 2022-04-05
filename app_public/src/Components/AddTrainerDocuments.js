import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";

import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function AddTrainerDocuments(props) {

    let history = useHistory();
    const token = sessionStorage.getItem('userData');


    const addtrainerdocuments = (event) => {

        event.preventDefault();



        var experience = event.target.experience.value;
        var skills = event.target.skills.value;
        var description = event.target.description.value;
        var age = event.target.age.value;

        var file = event.target.file.files[0];


        console.log(experience + "   " + skills);

        const data = new FormData();

        data.append("experience", experience);
        data.append("skills", skills);
        data.append("description", description)
        data.append("age", age);
        data.append("document_file", file);


        axios({
            method: 'post',
            url: 'http://localhost:5000/api/trainers',
            data: data,
            headers: { "Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data" }
        }).then(res => {

            console.log("data=", res);
            history.push('/userprofile');


        }).catch((err) => {
            console.log("in catch");
            console.log(err);
        });
    }

    return (
        <>
            <p className="addtrainerdocuments-heading">Trainer Details</p>

            <div className="addtrainerdocuments-div">

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <form onSubmit={addtrainerdocuments} >

                                <p>Experience : - <span><input type="Number" id="experience" name="experience" placeholder="Enter Experience in number of years" required /></span></p>

                                <p>Skills : - <span><textarea id="skills" name="skills" placeholder="Enter your Skills" rows="1" cols="50" required /></span></p>

                                <p>Description : - <span><textarea id="description" name="description" placeholder="Enter your Description" rows="1" cols="50" required /></span></p>

                                <p>Age : - <span><input type="Number" id="age" name="age" placeholder="Enter your Age" required /></span></p>

                                <input type="file" name="file" accept=".pdf" multiple />
                                {/* <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Label>Please Select Document to upload : - </Form.Label>
                                    <Form.Control type="file" size="lg" name="file" accept=".doc,.pdf" multiple required />
                                    <Form.Label style={{ color: "red" }}>Please Select maximum 5 files and Documents required for admin verification only.</Form.Label>
                                </Form.Group> */}

                                <input type="submit" className="update-btn" value="Submit" />
                            </form>

                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>

        </>
    );
}
