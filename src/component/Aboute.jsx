import React, { useEffect, useState } from 'react'

function About() {
    const [first, setFirst] = useState({
        name: 'shubham',
        age: 22,
        company: 'google'
    })

    useEffect(() => {
        setTimeout(() => {
            setFirst({
                name: 'shubham',
                age: 22,
                company: 'google'
            })
        }, 2000);
    })
    return (
        <div>
            <h1>{first.name}</h1>
            <h1>{first.age}</h1>
            <h1>{first.company}</h1>
        </div>
    )
}

export default About