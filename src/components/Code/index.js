import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import React from 'react'
import { LineNo, Pre } from './styles'

const Code = ({ codeString, language }) => {
	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			theme={theme}
		>
			{({
				className,
				getLineProps,
				getTokenProps,
				style,
				tokens,
			}) => (
				<Pre className={className} style={style}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							<LineNo>{i + 1}</LineNo>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</Pre>
			)}
		</Highlight>
	)
}

export default Code
