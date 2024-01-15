import './FavouritesPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import JobFavourites from '../JobFavourites'
import { Link } from 'react-router-dom'

const FavouritesPage = () => {
    const state = useSelector((state) => state.jobsStates)

    useEffect(() => {
        console.log(state)
      },[state])

    return(
        <>
        <h1>Favourites page | <Link to='/'>Back to search</Link></h1>
        <Container>
            {state.favourites.map((job) => {
                return <JobFavourites key={job._id} data={job} />
            })}
        </Container>
        </>

    )
}

export default FavouritesPage