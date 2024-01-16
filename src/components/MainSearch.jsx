import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSearchResultAction } from '../redux/actions'
import { Spinner } from 'react-bootstrap'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  //const [jobs, setJobs] = useState([])

  const dispatch = useDispatch()
  const jobsSearched = useSelector((state) => state.search.searchResult)

  //const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  useEffect(() => {
    console.log(jobsSearched)
  },[jobsSearched])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(getSearchResultAction(query))
    /* try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
        if (data) {
          dispatch({
            type: 'UPDATE_SEARCH',
            payload: data
          })
        }
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    } */
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search | <Link to='/favourites'>Pagina preferiti</Link></h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsSearched.data ? (
            jobsSearched.data.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))
          ) : (
            <Spinner animation="border" className='mt-3'/>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
