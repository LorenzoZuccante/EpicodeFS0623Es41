import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Star from '../assets/image/star-svgrepo-com.svg'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

const JobFavourites = ({ data }) => {
  const dispatch = useDispatch()

  return(
    <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={1}>
      <img src={Star} style={{fill:'yellow'}} alt='star' onClick={() => {
        dispatch({
          type: 'REMOVE_FROM_FAVOURITES',
          payload: data
        })
      }}/>
    </Col>
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  )

  }

export default JobFavourites