import React, {Component} from "react"
import {Link} from "react-router"

const WideReciever = props => (
    <div className="searchForms">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Wide Reciever 1</h3>
                        </div>
                        <div className="panel-body text-center">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="text" placeholder="Search Wide Reciever" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Wide Reciever 2</h3>
                        </div>
                        <div className="panel-body text-center">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="text" placeholder="Search Wide Reciever" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="seachbtn">
                    <button type="submit" className="btn btn-default">Compare Wide Recivers</button>
                </div>
            </div>
        </div>
    </div>
)

export default WideReciever
