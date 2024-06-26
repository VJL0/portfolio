import React from "react";
import NavBar from "./NavBar";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import Image from "next/image";

const Header = () => {
  const SocialMedias = [
    {
      name: "github",
      link: "https://github.com/VJL0",
      icon: <GithubIcon />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/victor-jimenez-lorenzo/",
      icon: <LinkedinIcon />,
    },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex">
          <Image
            className="rounded-xl object-cover mr-2"
            width={80}
            height={80}
            src={"/pfp.png"}
            alt=""
          />
          <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Victor <br />
            Jimenez-Lorenzo
          </h1>
        </div>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Time Student
        </h2>
        <p className="mt-4 leading-normal">
          I build interactive and accessible applications integrated with AI
          technology, incorporating API calls and backend functionalities.
        </p>
        <NavBar />
      </div>

      <ul className="mt-8 flex items-center">
        {SocialMedias.map((socialMedia) => (
          <li className="mr-5 text-xs shrink-0" key={socialMedia.name}>
            <a
              className="block hover:text-slate-200"
              href={socialMedia.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {socialMedia.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
