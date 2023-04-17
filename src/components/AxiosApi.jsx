import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AxiosApi() {
    const [students, setStudents] = useState([]);
    // Khi render lần đầu tiên gọi API lấy ra tất cả sinh viên và hiển thị
    useEffect(() => {
        getAllStudent();
    }, []);
    const getAllStudent = async () => {
        // dùng axios để gọi API
        let response = await axios.get("http://localhost:3001/students");
        if (response) {
            setStudents(response.data);
        }
    }
    const handleCreateStudent = async (student) => {
        let studentNew = await axios.post("http://localhost:3001/students", student);
        console.log("Sinh vien vua them moi--->", studentNew);
        getAllStudent();
    }
    const handleUpdateStudent = async (student) => {
        let studentUpdate = await axios.put("http://localhost:3001/students/" + student.id, student);
        getAllStudent();
    }
    const handleUpdateStudentPatch = async (student) => {
        let studentUpdatePatch = await axios.patch("http://localhost:3001/students/" + student.id, student);
        getAllStudent();
    }
    const hanleDeleteStudent = async (studentId) => {
        await axios.delete("http://localhost:3001/students/" + studentId);
        getAllStudent();
    }
    const elementListStudent = students.map(st => {
        return <tr key={st.id}>
            <td>{st.id}</td>
            <td>{st.studentName}</td>
            <td>{st.age}</td>
            <td>{st.studentStatus ? "Active" : "Inactive"}</td>
            <td>
                <button>Edit</button>
                <button onClick={() => hanleDeleteStudent(st.id)}>Delete</button>
            </td>
        </tr>
    })
    return (
        <div>
            <h2>Call API with Axios</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListStudent}
                </tbody>
            </table>
            <button onClick={() => handleCreateStudent({ id: "SV004", studentName: "Nguyễn Thị Ninh", age: 18, studentStatus: false })}>Create Student</button>
        </div>
    )
}
