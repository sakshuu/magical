import React, { useEffect, useState } from 'react'

function About() {
    const [first, setFirst] = useState({
        name: 'shubham',
        age: 22
    })

    useEffect(() => {
        setTimeout(() => {
            setFirst({
                name: 'shubham',
                age: 22
            })
        }, 2000);
    })
    return (
        <div>
            <h1>{first.name}</h1>
            <h1>{first.age}</h1>
        </div>
    )
}

export default About