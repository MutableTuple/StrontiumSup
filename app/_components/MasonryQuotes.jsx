import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    src: "https://raw.githubusercontent.com/MutableTuple/fm_images/main/Screenshot%202024-08-26%20214426.png",
    caption: "What's the easiest way to center the div?",
    likes: 210,
    dislikes: 12,
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFg-yfnvetuUzPfSJl11ZpB53npM4nSyDTnKlN-LwhxcWeX6JSiDQTtU4U03m9YZIA0T0os-jIh8ydPkY5UHU0HOSclRwo8wlcdzXZKsQcXfp4LbwYKXU96OGyiiQFhYcdobvnhDGODDsK/w1200-h630-p-k-no-nu/Obtuse.PNG",
    caption: "Seniors, can somebody help me out with this?",
    likes: 150,
    dislikes: 8,
  },
  {
    src: "https://raw.githubusercontent.com/MutableTuple/fm_images/main/Screenshot%202024-08-26%20214947.png",
    caption: "Today's quizzy is pretty easy!",
    likes: 320,
    dislikes: 15,
  },
  {
    src: "https://cultbranding.com/ceo/wp-content/uploads/2013/08/What-is-Marketing-2.png",
    caption: "Marketing is kinda difficult!",
    likes: 3320,
    dislikes: 15,
  },
];

export default function MasonryQuotes() {
  return (
    <div className=" text-white mt-4">
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="border p-4 flex flex-col gap-2 overflow-hidden border  transition duration-300 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img src={post.src} alt="image" />
            <p className="text-xs md:text-base text-stone-800">
              {post.caption}
            </p>
            <div className="flex gap-4 text-center items-center text-xs">
              <p className="flex items-center flex-col text-green-600">
                &middot;{post.likes}
              </p>
              <p className="flex items-center text-red-600 flex-col">
                &middot;{post.dislikes}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
