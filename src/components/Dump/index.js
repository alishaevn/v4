import React from 'react'
import styles from './styles'

const Dump = props => (
	<div
		style={styles.container}>
		{Object.entries(props).map(([key, val]) => (
			<pre key={key}>
				<strong style={styles.key}>
					{key} ?
				</strong>
				{JSON.stringify(val, '', ' ')}
			</pre>
		))}
	</div>
)

export default Dump
