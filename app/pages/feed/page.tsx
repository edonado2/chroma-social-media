"use client";
import BottomNavbar from "@/app/components/BottomBar";
import React, { useState, useRef, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Gallery: React.FC = () => {
  const [reactions, setReactions] = useState([
    { excitement: 0, calm: 0, joy: 0, inspiration: 0 },
    { excitement: 0, calm: 0, joy: 0, inspiration: 0 },
    { excitement: 0, calm: 0, joy: 0, inspiration: 0 },
  ]);
  const [comments, setComments] = useState([[], [], []]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [openCommentDrawer, setOpenCommentDrawer] = useState<number | null>(null);

  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleReaction = (postIndex: number, key: string) => {
    const updatedReactions = [...reactions];
    updatedReactions[postIndex][key as keyof typeof reactions[typeof postIndex]] += 1;
    setReactions(updatedReactions);
  };

  const handleCommentSubmit = (postIndex: number) => {
    if (commentInput.trim()) {
      const updatedComments = [...comments];
      updatedComments[postIndex].push(commentInput);
      setComments(updatedComments);
      setCommentInput("");
      setOpenCommentDrawer(null); // Close the drawer after submission
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setOpenCommentDrawer(null); // Close drawer if clicking outside
    }
  };

  useEffect(() => {
    if (openCommentDrawer !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCommentDrawer]);

  const posts = [
    {
      user: "Colorful",
      timeAgo: "2d ago",
      images: [
        "https://cdn.usegalileo.ai/sdxl10/0da761de-e3ec-4c93-ab44-222eb281d1a7.png",
        "https://cdn.usegalileo.ai/stability/800149dd-168f-4852-bcad-fc506dc7b982.png",
      ],
    },
    {
      user: "Nature Lover",
      timeAgo: "1d ago",
      images: [
        "https://cdn.usegalileo.ai/stability/285da409-1e1e-449c-8bf4-cb062bf1d6d1.png",
        "https://cdn.usegalileo.ai/stability/49348aea-0b36-41c7-bc2d-7bc4a04c980e.png",
      ],
    },
    {
      user: "Artsy",
      timeAgo: "3h ago",
      images: [
        "https://cdn.usegalileo.ai/sdxl10/8419e44b-f0c7-4957-99ce-569e75231e94.png",
        "https://cdn.usegalileo.ai/sdxl10/c293c288-ae1a-48e7-9acd-0f8c5a61b688.png",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="flex items-center justify-between bg-white shadow-md p-4">
        <h2 className="text-lg font-bold text-gray-800">Mural Feed</h2>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        {posts.map((post, postIndex) => (
          <div key={postIndex} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                style={{
                  backgroundImage:
                    "url('https://cdn.usegalileo.ai/stability/1029d142-d1f7-40fd-9af6-ad014b0f63cd.png')",
                }}
              ></div>
              <div className="flex flex-col">
                <p className="text-gray-800 font-semibold">{post.user}</p>
                <p className="text-gray-500 text-sm">{post.timeAgo}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {post.images.map((url, index) => (
                <div key={index} className="relative w-full h-32">
                  <div
                    className="w-full h-full bg-center bg-cover rounded-lg transition-transform duration-200 transform hover:scale-105"
                    style={{ backgroundImage: `url(${url})` }}
                  ></div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <div
                  onClick={() => handleReaction(postIndex, "excitement")}
                  className="flex items-center cursor-pointer"
                >
                  <FavoriteBorderIcon style={{ color: "#FF5757" }} />
                  <span>{reactions[postIndex].excitement}</span>
                </div>
                <div
                  onClick={() => handleReaction(postIndex, "calm")}
                  className="flex items-center cursor-pointer"
                >
                  <ThumbUpOffAltIcon style={{ color: "#57AFFF" }} />
                  <span>{reactions[postIndex].calm}</span>
                </div>
                <div
                  onClick={() => handleReaction(postIndex, "joy")}
                  className="flex items-center cursor-pointer"
                >
                  <SentimentVerySatisfiedIcon style={{ color: "#FFDB57" }} />
                  <span>{reactions[postIndex].joy}</span>
                </div>
                <div
                  onClick={() => handleReaction(postIndex, "inspiration")}
                  className="flex items-center cursor-pointer"
                >
                  <SentimentVerySatisfiedIcon style={{ color: "#57FF88" }} />
                  <span>{reactions[postIndex].inspiration}</span>
                </div>
                <div
                  onClick={() => setOpenCommentDrawer(openCommentDrawer === postIndex ? null : postIndex)}
                  className="flex items-center cursor-pointer"
                >
                  <ChatBubbleOutlineIcon style={{ color: "#57AFFF" }} />
                </div>
              </div>
            </div>

            {/* Comment Drawer */}
            {openCommentDrawer === postIndex && (
              <div className="fixed inset-0 flex justify-center items-end z-50 bg-black bg-opacity-50">
                <div
                  ref={drawerRef}
                  className="bg-white w-full h-1/2 rounded-t-lg p-4 transition-transform transform translate-y-0 animate-slideIn"
                >
                  <h3 className="text-lg font-bold text-gray-800">Comments</h3>
                  <div className="flex flex-col h-4/5 mt-1 border-t border-gray-300">
                    {/* Scrollable Comments Section */}
                    <div className="flex-1 p-2 overflow-y-auto">
                      {comments[postIndex].length > 0 ? (
                        comments[postIndex].map((comment, index) => (
                          <div key={index} className="mb-1 text-gray-700">• {comment}</div>
                        ))
                      ) : (
                        <div className="text-gray-500">No comments yet.</div>
                      )}
                    </div>

                    {/* Emoji and Sticker Bar */}
                    <div className="flex overflow-x-auto space-x-2 mt-2 p-2 border-t border-gray-300">
                      <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.0/assets/svg/1f600.svg" alt="😀" className="w-8 h-8" />
                      <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.0/assets/svg/1f622.svg" alt="😢" className="w-8 h-8" />
                      <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.0/assets/svg/1f609.svg" alt="😉" className="w-8 h-8" />
                      <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.0/assets/svg/1f60d.svg" alt="😍" className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-lg"
                    />
                    <button
                      onClick={() => handleCommentSubmit(postIndex)}
                      className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>

      <BottomNavbar />
    </div>
  );
};

export default Gallery;
