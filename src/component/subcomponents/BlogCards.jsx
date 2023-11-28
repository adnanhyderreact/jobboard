import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function BlogCards({items}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/posts?limit=${items}`);
                setPosts(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, items);

    const BlogCards = [];
    {
        console.log(posts);
        posts.posts && posts.posts.map((post, index) => (
                BlogCards.push(
                    <div className="col-lg-4 col-sm-6" key={post.id}>
                        <div className="blog-card">

                            <>
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src={`assets/img/blog/1.jpg`} alt="blog image"/>
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <ul>
                                        <li>
                                            <i className='bx bxs-user'></i>
                                            Admins
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            7 Feb, 2021
                                        </li>
                                    </ul>

                                    <h3>
                                        <a href="blog-details.html">
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p> {post.body.slice(0, 150)}</p>

                                    <a href="blog-details.html" className="blog-btn">
                                        Read More
                                        <i className='bx bx-plus bx-spin'></i>
                                    </a>
                                </div>
                            </>
                        </div>
                    </div>
                )
            )
        )
    }
    return (
        BlogCards
    )
}