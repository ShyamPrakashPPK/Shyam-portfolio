"use client"
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  return (
    <section
      id="contact"
      className="flex flex-col items-center p-20 mt-28"
    >
      <div className="z-10">
        <h5 className="mt-20 text-6xl   font-extrabold  text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] text-2xl font-extralight mb-4  pt-10">
       
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 mt-10">
          <Link href="https://github.com/ShyamPrakashPPK">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/shyam-prakash-ppk/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
     
    </section>
  );
};

export default EmailSection;
