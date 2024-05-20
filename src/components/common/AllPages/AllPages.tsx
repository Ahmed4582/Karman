import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

import style from "./styles.module.css";

const {width} = style;

const AllPages = () => {
  return (
     <Card style={{ width: '18rem' }} className=' mb-5'>
     <div className="container">
     
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
              
        <Card.Title className='mt-2'>
             <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder='Filter by'
      />
        </Card.Title>
        <Card.Text className='mt-4'>
            <h4>Category</h4>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width} />
                <label htmlFor="">All</label>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width} />
                <label htmlFor="">Rings</label>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width}/>
                <label htmlFor="">Necklaces</label>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width} />
                <label htmlFor="">Watches</label>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width} />
                <label htmlFor="">Errings</label>
            </div>
        </Card.Text>
        </ListGroup.Item>
        <ListGroup.Item>
            <h4>Category</h4>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width} />
                <label htmlFor="">Newest</label>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width} />
                <label htmlFor="">Hihgly Rated</label>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width}/>
                <label htmlFor="">Nost Ordered</label>
            </div>
        </ListGroup.Item>
        <ListGroup.Item>
            <h4>Show Products</h4>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width} />
                <label htmlFor="">Newest</label>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <input type="checkbox" className={width} />
                <label htmlFor="">All Products</label>
            </div>
        </ListGroup.Item>
        <ListGroup.Item>

           <Form.Label><h5>Price</h5></Form.Label>
            <Form.Range />
        </ListGroup.Item>
      </ListGroup>
     </div>
    </Card>
)}


export default AllPages;

