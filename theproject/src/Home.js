import react from 'react'
import './Home.css'
import kidpics from './mealsgiving.jpg'

function Home() {
    return <div>
        <img src={kidpics}/>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="box">
                    <h2>The Problem</h2>
                    <p>
                        In the United States, 30-40% of the food produced is wasted. That means 133 billion pounds are thrown away, and $161 billion is lost in the food industry each year. Despite this, in 2019, 10.5 percent of households were food insecure at least sometime during the year, including 4.1 percent (5.3 million households) with deficient food security.
                    </p>
                </div>

                <br/>
                
                <div className="box">
                    <h2>Project Idea</h2>
                    <p>
                    Meals Giving is a web application that connects restaurants to charities through volunteer drivers to solve this problem of hunger. It is an application with the database of an entire city's restaurants and charities. Whenever a restaurant has excess food in good condition, they fill a form under the restaurant tab scheduling a pickup. Whenever a charity is food insecure, they fill a form under the charities tab requesting a delivery. The drivers' page is where the helping hands (volunteer drivers) go to find a list of donating restaurants and needful charities, made through Artificial Intelligence, in order of the driver’s distance from restaurants and then further connecting it to the nearest charity in need. When a driver accepts the route, it notifies the restaurant and charity for pickup and delivery, respectively. Meals Giving creates an intermediate system between donor restaurants, volunteer drivers, and charities to combat food insecurity. 
                    </p>
                </div>

                <br/>
                <div className="box">
                    <h2>Alternatives</h2>
                    <p>
                    The delivery can also be done through a non-profit or could be government-funded. Such an organization could also collaborate with an already set database of a food delivery app like UberEats, where giving points to the donor restaurants on this app would work as an incentive for the restaurants to donate.
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default Home