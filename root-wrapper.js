import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import CodeBlock from './src/components/markdown-styles/CodeBlock'
import Header1 from './src/components/markdown-styles/Header1'
import Header2 from './src/components/markdown-styles/Header2'
import { Paragraph, ParagraphWithInlineCode } from './src/components/markdown-styles/Paragraphs'
import { Table, TableData, TableHeader, TableRow } from './src/components/markdown-styles/Tables'
import UnorderedList from './src/components/markdown-styles/UnorderedList'
import { Main } from './src/utilities/responsive'

const components = {
	h1: ({ children }) => <Header1>{children}</Header1>,
	h2: ({ children }) => <Header2>{children}</Header2>,
	p: Paragraph,
	'p.inlineCode': props => <ParagraphWithInlineCode {...props} />,
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
	},
	ul: UnorderedList,
	table: Table,
	td: TableData,
	th: TableHeader,
	tr: ({ children }) => <TableRow>{children}</TableRow>,
}

export const wrapRootElement = ({ element }) => (
	<MDXProvider components={components}>
		<Main>{element}</Main>
	</MDXProvider>
)