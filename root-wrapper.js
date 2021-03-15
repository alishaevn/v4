import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import styled from 'styled-components'
import CodeBlock from './src/components/markdown-styles/CodeBlock'
import { Header1, Header2, Header3 } from './src/components/markdown-styles/Headers'
import { Paragraph, ParagraphWithInlineCode } from './src/components/markdown-styles/Paragraph'
import { Table, TableData, TableHeader, TableRow } from './src/components/markdown-styles/Table'
import UnorderedList from './src/components/markdown-styles/UnorderedList'
import { eerieBlack } from './src/utilities/colors'

const Main = styled.main`
	background-color: ${eerieBlack};
	min-height: 100vh;
	width: 100vw;
	margin: -8px;
	padding: 20px;
	box-sizing: border-box;
`

const components = {
	h1: ({ children }) => <Header1>{children}</Header1>,
	h2: ({ children }) => <Header2>{children}</Header2>,
	h3: ({ children }) => <Header3>{children}</Header3>,
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
