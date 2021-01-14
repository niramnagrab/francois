import React, { useState, useEffect } from 'react'
import sanityClient from '../../../src/client'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar2'
import Footer from '../Footer'

function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        }
    }`,
      )
      .then((data) => setAllPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <Navbar />
      <div className="bg-e5e7eb-100 min-h-screen p12 py-28">
        <div className="container mx-auto">
          <h2 className="text-5xl flex justify-center">
            The French Review's Blog Page
          </h2>
          <h3 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my blog posts page
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData &&
              allPostsData.map((post, index) => (
                <Link to={'/' + post.slug.current} key={post.slug.current}>
                  <span
                    className="block bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-green-800"
                    key={index}
                  >
                    <img
                      className="w-full h-full rounded-r object-cover absolute"
                      src={post.mainImage.asset.url}
                      alt="main hero image for blog post"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-gray-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h2>
                    </span>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AllPosts
