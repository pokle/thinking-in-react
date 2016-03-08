// A sample pure React component

import React from 'react'

export function Container({children}) {
	return <div style={{border: "1px solid lightgrey"}}>
			{children}
		   </div>;
}