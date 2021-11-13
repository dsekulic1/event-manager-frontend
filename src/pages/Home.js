import { useGlobalContext } from '../context'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import main from '../images/sss-min.jpg'
import Button from 'react-bootstrap/Button'

function Home() {
  const { user } = useGlobalContext()
  return (
    <>
      {user && <Redirect to='/dashboard' />}
      <Wrapper className='page'>
        <div className='info'>
          <h2>
            <span>Event</span>
            Manager
          </h2>
          <h2>
            Software
            <span>Engineer</span>
          </h2>
          <p>
            “If we want users to like our software, we should design it to
            behave like a likeable person.”
          </p>
          <p style={{ textAlign: 'right' }}>
            <i>Alan Cooper</i>
          </p>

          <Link to='/login'>
            <Button variant='primary'>Login</Button>
          </Link>
          <Link to='/register'>
            <Button variant='primary'>Register</Button>
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
    border-radius: 50%;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
      width: 400px;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`

export default Home
