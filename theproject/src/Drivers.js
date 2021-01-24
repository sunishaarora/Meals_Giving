import react from 'react'
import Restaurant from './Restaurant';

function Drivers() {
    return <div style={{"margin-top": "50px"}}>
        <h3>Available Pick-ups and Drops</h3>
        <div className="row justify-content-center">
            <table className="table table-light table-bordered col-md-8 table-hover">
                <thead>
                    <tr>
                        <th>Restaurant Places</th>
                        <th>Miles from you</th>
                        <th>Charity Places</th>
                        <th>Miles from restaurant</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Restaurant A</td>
                        <td>2.2 miles</td>
                        <td>Charity C</td>
                        <td>1.8 miles</td>
                        <td><button className="btn btn-success">Accept</button></td>
                    </tr>
                    <tr>
                        <td>Restaurant B</td>
                        <td>3.2 miles</td>
                        <td>Charity C</td>
                        <td>2.1 miles</td>
                        <td><button className="btn btn-success">Accept</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
}

export default Drivers