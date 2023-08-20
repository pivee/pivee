import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-2">Hello!</h2>
        <p className="text-lg mb-6">
          Welcome to my website! I&apos;m glad you&apos;re here. On this site,
          you&apos;ll find information about me and the things I do. I work as a
          software engineer and an English teacher. This means I build computer
          programs and help people improve their English language skills. I also
          share what I know on social media. This website is a way for me to
          share even more with you.
        </p>
        <h2 className="text-xl font-bold mb-2">About Me</h2>
        <p className="text-base mb-4">
          I&apos;m someone who enjoys working with computers. As a software engineer,
          I write code to make computer programs work well. I like solving
          problems and making things run smoothly. On the other hand, I also
          enjoy teaching English. I help people understand and use the English
          language better. From grammar to writing, I&apos;m here to help.
        </p>
        <h2 className="text-xl font-bold mb-2">Why This Website?</h2>
        <p className="text-base mb-4">
          I made this website so I can share my knowledge and experiences with
          you. Whether you&apos;re interested in computers or want to improve your
          English, you&apos;ll find something here for you. I write blog posts and
          tutorials to explain things in a simple way. My goal is to help you
          learn and understand.
        </p>
        <h2 className="text-xl font-bold mb-2">Join Me on This Journey</h2>
        <p className="text-base mb-4">
          Thank you for visiting my website. I hope you find helpful information
          here. If you want to learn about computers or English, stick around.
          We can learn together. Feel free to explore the articles and resources
          I&apos;ve put together. I&apos;m here to help answer your questions and share
          what I know.
        </p>
        <p className="text-base">
          Best regards, <span className="font-semibold"><br />Pivithuru Jayakody</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
