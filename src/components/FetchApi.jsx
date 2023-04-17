import React, { useEffect } from 'react'

export default function FetchApi() {
    useEffect(() => {
        // Gọi API lấy dữ liệu tất cả các sinh viên
        fetch("http://localhost:3001/students")
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);
    const handleCreate = () => {
        // Gọi API thêm mới dữ liệu một sinh viên
        fetch("http://localhost:3001/students", {
            method: "POST",
            headers: {
                "content-type": "application/JSON"
            },
            body: JSON.stringify({ id: "SV003", studentName: "Nguyễn Duy Quang", age: 40, studentStatus: true })
        }).then(response => response.json)
            .then(data => console.log(data)).catch((error) => console.log("error--->", error))
    }
    return (
        <div>
            <h2>Fetch call api demo</h2>
            <button onClick={handleCreate}>Create New Student</button>
        </div>
    )
}
