import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../constants/index'

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    border: 2px solid black;

    .card-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid green;
    }

    .card-title {
        border: 2px solid red;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
const NasaImg = styled.img`
    border: 2px solid purple;
    height: 600px;
    width: 750px;
`

export default function PhotoCard({date, title, description}) {
    const [dailyPic, setDailyPic] = useState('');
    
    // planetary/apod?api_key=
    useEffect(() => {
        axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
            console.log(res.data)
            setDailyPic(res.data.hdurl)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <StyledCard>
            <div className='card-container'>
                <div className='card-title'>
                    <p className='card-date'>{date}</p>
                    <p className='image-title'>{title}</p>
                </div>
                <div className='card-body'>
                    <NasaImg className='card-img' src={dailyPic} alt='NASA pic of the day'/>
                    <p className='description'>{description}</p>
                </div>
            </div>
        </StyledCard>
    )
}