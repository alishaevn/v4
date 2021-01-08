import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import Code from './src/components/Code'

const components = {
	h2: ({ children }) => (
		<h2 style={{ color: 'rebeccapurple' }}>{children}</h2>
	),
	'p.inlineCode': props => (
		<code style={{ backgroundColor: 'lightgray' }} {...props} />
	),
	pre: ({ children: { props } }) => {
		const codeString = props.children.trim()
		const language = props.className && props.className.replace('language-', '')

			if (props.mdxType === 'code') {
				return (
				  <Code
					codeString={codeString}
					language={language}
					{...props}
				  />
				);
			  }
	}
}

export const wrapRootElement = ({ element }) => (
	<MDXProvider components={components}>{element}</MDXProvider>
)
