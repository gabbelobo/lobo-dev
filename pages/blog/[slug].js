import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Main from '../../layout/Main'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vsDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { getPostBySlug, getAllPosts } from '../../lib/api'


const Post = ({ post }) => {
    const [theme, setTheme] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setTheme(
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
                vscDarkPlus : vsDark
        )
    }, [])

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Main>
            <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <article>
                <h1>{post.title}</h1>
                <p>{moment(post.date).format("DD/MM/YYYY")} - por {post.author.name}</p>
                <div>
                    <ReactMarkdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={theme}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>

        </Main>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])

    return {
        props: {
            post
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}

export default Post