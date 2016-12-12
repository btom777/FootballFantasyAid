import React, {Component} from "react"
import {Link} from "react-router"

const Runningback = props => (
    <div className="searchForms">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Running Back 1</h3>
                        </div>
                        <div className="panel-body text-center">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="text" placeholder="Search Running Back" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Running Back 2</h3>
                        </div>
                        <div className="panel-body text-center">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="text" placeholder="Search Running Back" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="seachbtn">
                    <a className="btn btn-default action-button" role="button" href="../Results">Compare Running Backs</a>
                </div>
            </div>
        </div>
    </div>
)

export default Runningback
