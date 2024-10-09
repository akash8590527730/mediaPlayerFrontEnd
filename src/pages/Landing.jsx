import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/image.gif'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/1.jpg'
import feature2 from '../assets/2.avif'
import feature3 from '../assets/3.webp'

const Landing = () => {
  return (
    <div style={{paddingTop:'80px'}} className='container'>
{/* /landing head */}
<div className="row align-items-center">
  <div className="col-lg-5">
<h3>Welcome to <span className='text-warning'>Media Player</span></h3>
<p style={{textAlign:'justify'}} className='mt-3'>Media Player App will allow user to add or remove their uploaded videos from youtube and also allow them to arrange it in different categories by drag and drop.User can also have the provision to manage their watch history as well.What are you waiting for,let starts exploring our site!!!</p>
<Link to={'./home'} className='btn btn-info'> Get Started </Link>
  </div>
  <div className="col"></div>
  <div className="col-lg-6">
    <img  className=" img-fluid ms-5" src={landingImg} alt="" />
  </div>
</div>

{/* /features */}
{/* Features */}
<div className="my-5">
          <h3 className='text-center'>Features</h3>
           <div className="row mt-5">
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        Users can upload ,view and remove the video
        </Card.Text>
      </Card.Body>
    </Card>


            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Categorizing Video</Card.Title>
        <Card.Text>
          Users can Categorize the videos by drag and drop Feature 
       
        </Card.Text>
      </Card.Body>
    </Card>


            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>Managing Video History</Card.Title>
        <Card.Text>
          Users Can mange the watch history of all videos
       
        </Card.Text>
      </Card.Body>
    </Card>


            </div>
           </div>
</div>


{/* youtube */}
<div className="my-5 row align-items-center border rounded p5">
  <div className="col-lg-5">
    <h3 className='text-warning'>Simple,Fast and Powerfull</h3>
    <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything :  </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint, totam sunt ipsum magnam repudiandae id deserunt temporibus magni minus quidem harum ducimus maxime in distinctio perspiciatis at. Quisquam, rerum! </p>
    <p style={{textAlign:'justify'}}> <span className='fs-5'>Categorise Videos : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint, totam sunt ipsum magnam repudiandae id deserunt temporibus magni minus quidem harum ducimus maxime in distinctio perspiciatis at. Quisquam, rerum! </p>
    <p style={{textAlign:'justify'}}> <span className='fs-5'>Managing Videos  : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint, totam sunt ipsum magnam repudiandae id deserunt temporibus magni minus quidem harum ducimus maxime in distinctio perspiciatis at. Quisquam, rerum! </p>
  </div>
  <div className="col"></div>
  <div className="col-lg-6">
  <iframe width="631" height="360" src="https://www.youtube.com/embed/WRc-LdSfc9w" title="Coldplay Toronto 2006 Full Concert HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
</div>

    </div>
  )
}

export default Landing