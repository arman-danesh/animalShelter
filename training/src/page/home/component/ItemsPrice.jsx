import React from 'react';

export default class ItemsPrice extends React.Component {
  render() {
    return (
      <div className='w-100'>
        <h6 className="text-light my-2 fw-bold">
          Price
        </h6>
        <div className='d-flex flex-md-row flex-column w-100'>
            <div className='mx-1'>
                <label className='d-none' htmlFor="inputNumberOne">Price 1:</label>
                <input className='rounded-4 bg-dark text-light border border-1 border-light border-opacity-75 shadow w-100 px-2'
                style={{height:"50px"}}
                id="inputNumberOne"
                placeholder='$'
                type="number"
                />
            </div>
            <p className='text-light fw-bold my-auto mx-1'>
               - 
            </p>
            <div className='mx-1'>
                <label className='d-none' htmlFor="inputNumberTwo">Price 2:</label>
                <input className='rounded-4 bg-dark text-light border border-1 border-light border-opacity-75 shadow w-100 px-2'
                style={{height:"50px"}}
                id='inputNumberTwo'
                placeholder='$'
                type="number"
                />
            </div>
        </div>
      </div>
    );
  }
}