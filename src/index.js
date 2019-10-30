import React from "react"
import ReactDOM from "react-dom"
import { EposodeInfo } from './episodeinfo'
import { Pagination } from './pagination'
import { Popular } from "./popular"
import { TopRated } from "./toprated"
import { SeasonInfo } from './seasoninfo'
import { TvShowInfo } from "./tvshowinfo"
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"
import './index.css'


const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={Pagination, Popular} />
					<Route path='/popular' component={Popular} />
					<Route path='/toprated' component={TopRated} />
					<Route path='/info/:movieId' component={TvShowInfo} />
					<Route path='/info-season/:seasonId/:movieId/:seasonNumber' component={SeasonInfo} />
					<Route path='/info-of-episodes/:showId/:seasonNumber/:episodeNumber' component={EposodeInfo} />
				</Switch>
			</Router>
		</>
	)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)