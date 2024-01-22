import React from 'react'

const ReactTask = () => {
    const data = {
        "company": "ABC Corp",
        "departments": [
            {
                "name": "Engineering",
                "teams": [
                    {
                        "name": "Frontend",
                        "members": [
                            { "name": "John Doe", "role": "Developer" },
                            { "name": "Jane Smith", "role": "Designer" }
                        ]
                    },
                    {
                        "name": "Backend",
                        "members": [
                            { "name": "Bob Johnson", "role": "Backend Developer" }
                        ]
                    }
                ]
            },
            {
                "name": "Marketing",
                "teams": [
                    {
                        "name": "Digital Marketing",
                        "members": [
                            { "name": "Alice Brown", "role": "Marketing Specialist" }
                        ]
                    }
                ]
            }
        ]
    }

    return (
        <>
            <h1>React Task </h1>

            {/* Use box and keep the data in the box with some border and padding. Keep some gap in two boxes */}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: "flex", padding: '10px' }}>
                    <h1>Company :</h1>
                    <h1>{data.company}</h1>
                </div>
            </div>


            {data.departments.map((item, index) => {
                return (
                    <div style={{ display: "inline", border: "1px solid blue", width: "33%", float: "left", marginRight: "30px" }}>

                        <h1 style={{ display:"inline" }}>Department :</h1>
                        <h1 style={{ display:'inline'}}>{item.name}</h1>

                        {/* <h3>Team</h3> */}




                        {item.teams.map((item, index) => {
                            return (
                                <>

                                    <div key={index} >
                                        <h4>SUB-DEPARTMENT : {item.name}</h4>

                                        {item.members.map((item, index) => {
                                            return (
                                                <div key={index} style={{ display: "inline" }}>
                                                    <p>Employee Name :{item.name} &nbsp; Designation:{item.role}</p>

                                                </div>
                                            )
                                        })}
                                    </div>

                                </>
                            )
                        })}


                    </div>
                )
            })}







        </>
    )
}

export default ReactTask