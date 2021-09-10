import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../constants/index'

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;

    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 2px solid pink; */
        border-radius: 10px;
        width: 60%;
        height: 100%;
        margin-top: 10px;
        background-color: white;
    }

    .card-title {
        /* border: 2px solid red; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: slategray;
        width: 80%;

        &:hover {
            font-weight: bold;
        }
    }
    .card-body {
        /* border: 3px solid green; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .description {
        /* border: 2px solid orange; */
        width: 95%;
        font-size: 12px;
        color: darkslategray;

        &:hover {
            font-weight: bolder;
        }
    }
`
const NasaImg = styled.img`
    height: 450px;
    width: 80%;
    border-radius: 10px;
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
            <section className='card-container'>
                <div className='card-title'>
                    <p className='image-title'>{title}</p>
                    <p className='card-date'>{date}</p>
                </div>
                <div className='card-body'>
                    <NasaImg className='card-img' src={dailyPic} alt='NASA pic of the day'/>
                    <p className='description'>{description}</p>
                </div>
            </section>
        </StyledCard>
    )
}