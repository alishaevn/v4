import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import CodeBlock from './src/components/CodeBlock/index'
import { Main } from './src/utilities/responsive'

const components = {
	h2: ({ children }) => (
		<h2>{children}</h2>
	),
	'p.inlineCode': props => (
		<code style={{ backgroundColor: 'lightgray' }} {...props} />
	),
	pre: ({ children: { props } }) => {
		const codeString = props.children.trim()
		const language = props.className && props.className.replace('language-', '')

		if (props.mdxType === 'code') {
			// any code block in a markdown file
			return (
				<CodeBlock
					codeString={codeString}
					language={language}
					{...props}
				/>
			)
		}
	}
}

export const wrapRootElement = ({ element }) => (
	<MDXProvider components={components}>
		<Main>{element}</Main>
	</MDXProvider>
)