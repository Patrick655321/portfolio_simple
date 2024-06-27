import { useState, useEffect } from "react"

import '../styling/Heading.css'

export default function Heading() {
    const [heading, setHeading] = useState('PPPPPPP PPPPP');
    const headings = ['PATRICK HAMER.'];

    

    useEffect(() => {
        const changeText = () => {
            const randomIndex = Math.floor(Math.random() * headings.length)
            const randomGlitch = Math.floor((Math.random() * 200))
            setHeading(headings[randomIndex]);
            setTimeout(() => {
                setHeading('PATRICK HAMER');

            }, randomGlitch)
        };
        const randomInterval = Math.floor(Math.random() * 5000)
        const interval = setInterval(changeText, randomInterval);

        return () => clearInterval(interval)
    }, [headings])

    const isCorrectHeading = heading ==='PATRICK HAMER'
  return (
    <div className={isCorrectHeading ? 'correct-heading' : 'changing-heading'}>
      {heading}
    </div>
  )
}
