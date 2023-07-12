import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
                href="https://www.linkedin.com/in/fadega/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img
                    src="../assets/linkedin.png"
                    alt="linkedin"
                    className="w-8 h-8"
                />
            </a>
            <a
                href="https://www.github.com/fadega/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img
                    src="../assets/github.png"
                    alt="github"
                    className="w-8 h-8"
                />
            </a>
            
      
    </div>
  )
}

export default SocialMediaIcons
