const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(
		'src/templates/blogPostTemplate.js'
	)

	return graphql(`
		{
			allMdx(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { published: { eq: true } } }
			) {
				nodes {
					fields { slug }
					frontmatter { title }
				}
			}
		}
	`).then(result => {
		if (result.errors) throw result.errors

		const notes = result.data.allMdx.nodes

		// create page for each mdx file
		notes.forEach((note, index) => {
			const previous = index === notes.length - 1 ? null : notes[index + 1]
			const next = index === 0 ? null : notes[index - 1]

			createPage({
				path: note.fields.slug,
				component: blogPostTemplate,
				context: {
					slug: note.fields.slug,
					previous,
					next,
				},
			})
		})
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `Mdx`) {
		// create the path for the notes
		const value = `${createFilePath({ node, getNode })}`

		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions

	createTypes(`
		type Mdx implements Node {
			frontmatter: MdxFrontmatter!
		}
		type MdxFrontmatter {
			heroImage: File @fileByRelativePath
		}
	`)
}
