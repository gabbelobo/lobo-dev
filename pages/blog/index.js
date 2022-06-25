import Head from 'next/head'
import React from 'react'
import Main from '../../layout/Main'
import { getAllPosts } from '../../lib/api'
import styles from '../../styles/Blog.module.scss'
import moment from 'moment'

const Blog = ({ posts }) => {
    return (
        <Main>
            <Head>
                <title>Blog - Gabriel Lobo</title>
            </Head>
            <h1>Blog</h1>
            <ul className={styles.article_list}>
                {posts.map(post => (
                    <li key={post.slug} className={styles.item}>
                        <a href={`/blog/${post.slug}`}>
                            <h2>{post.title}</h2>
                            <p>{moment(post.date).format('DD/MM/YYYY')} - {post.excerpt}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </Main>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts(['slug', 'excerpt', 'title', 'date'])
    return {
        props: {
            posts
        },
    }
}

export default Blog