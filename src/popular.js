import React from "react"
import { RenderListOfElement } from './renderlistofelement'
import { API_link } from './APIlink'
import { Pagination } from './pagination'

export const Popular = () => {
	return (
		<>
			<Pagination />
			<RenderListOfElement fetchUrl={API_link.GET_POPULAR} />
		</>
	)
}