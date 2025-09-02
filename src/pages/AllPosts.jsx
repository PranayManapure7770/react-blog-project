import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/configuration";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts only once when the component mounts
        appwriteService.getPosts().then((result) => {
            if (result) {
                setPosts(result.documents);
            }
        });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full text-gray-500">
                            No posts available
                        </p>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
