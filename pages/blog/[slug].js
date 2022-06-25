import React from 'react'
import Head from 'next/head'
import Main from '../../layout/Main'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import moment from 'moment'
const Post = ({ post }) => {
    const router = useRouter()
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
                <p>{moment(post.date).format("DD/MM/YYYY")}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
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