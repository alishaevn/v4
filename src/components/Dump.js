import React from 'react'

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

const styles = {
	container: {
		fontSize: 20,
		border: '1px solid #efefef',
		padding: 10,
		background: 'white',
	},
	key: {
		color: 'white',
		background: 'red',
	},
}