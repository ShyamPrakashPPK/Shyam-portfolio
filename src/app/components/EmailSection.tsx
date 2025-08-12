"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Github, Linkedin, Phone } from 'lucide-react'

const EmailSection = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently available for new opportunities. Whether you have a project in mind 
            or just want to chat about technology, I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors">
            <Mail className="w-8 h-8 text-white mb-4" />
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm">shyamprakash0019@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors">
            <Phone className="w-8 h-8 text-white mb-4" />
            <h3 className="font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+91 944 67919 82</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors">
            <Github className="w-8 h-8 text-white mb-4" />
            <h3 className="font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400 text-sm">Kerala, India</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Link
            href="https://github.com/ShyamPrakashPPK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            <Github className="w-6 h-6" />
          </Link>
          
          <Link
            href="https://www.linkedin.com/in/shyam-prakash-ppk/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          
          <Link
            href="mailto:shyamprakash0019@gmail.com"
            className="p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
