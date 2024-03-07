import React from 'react'
import Nav from './Nav'

const Actors = () => {
  return (
    <div>
        <Nav/>


        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">actor name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                             <label htmlFor="" className="form-label">actor age</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                             <label htmlFor="" className="form-label">industry</label>
                            <select name="" id="" className="form-control">
                                <option className="option">mal</option>
                                <option className="option">eng</option>
                                <option className="option">hin</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                             <label htmlFor="" className="form-label">salary</label>
                            <input type="text" className="form-control" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Actors