import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import React from 'react'
import {
	LiveEditor,
	LiveError,
	LivePreview,
	LiveProvider,
} from 'react-live'
import { LineNo, Pre } from './styles'

const CodeBlock = ({ codeString, language, ...props }) => {
	// if 'jsx react-live' is the chosen syntax highlighter
	// render an editable code block 
	if (props['react-live']) {
		return (
			<LiveProvider code={codeString} noInline={true} theme={theme}>
				<LiveEditor />
				<LiveError />
				<LivePreview />
			</LiveProvider>
		)
	}

	// otherwise, render a regular code block
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

export default CodeBlock
