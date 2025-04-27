"use client";
import { SignedOut } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  BookOpen,
  Lock,
  MessageSquare,
  PieChart,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function () {
  return (
    <div className="-mt-5 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col w-full md:w-1/2 justify-center items-start pt-12 pb-24 px-6"
          >
            <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-4 text-gray-900">
              Chat with your PDF documents using AI
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              Lynkr helps you extract insights, find answers, and make sense of
              your PDF documents using advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
              <Link
                href="/chat"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-center w-full sm:w-auto"
              >
                Get Started — It's Free
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 py-6 flex justify-center"
          >
            <img src="/logo.png" alt="Lynkr App Demo" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience a new way to interact with your PDF documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-indigo-600 mb-4">
                <MessageSquare size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Chat with Documents
              </h3>
              <p className="text-gray-600">
                Ask questions and get answers directly from your PDF content
                using advanced AI.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-indigo-600 mb-4">
                <Zap size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
              <p className="text-gray-600">
                Get key insights and summaries from large documents in seconds.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-indigo-600 mb-4">
                <BookOpen size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multiple Document Support
              </h3>
              <p className="text-gray-600">
                Upload and manage multiple PDFs in your personal library.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-indigo-600 mb-4">
                <Lock size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your documents remain private and secure with encryption and
                data protection.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-indigo-600 mb-4">
                <PieChart size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visual Insights</h3>
              <p className="text-gray-600">
                Generate visualizations and charts from your document data
                automatically.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-indigo-600 mb-4">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Share insights and documents with teammates for better
                collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  src="https://raw.githubusercontent.com/theaiemperor/theaiemperor/main/assets/me.png"
                  alt="Founder"
                  className="h-full w-full object-contain md:w-48"
                />
              </div>
              <div className="p-8">
                <div className="text-indigo-600 text-sm font-semibold mb-1">
                  FOUNDER'S MESSAGE
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Revolutionizing Document Analysis
                </h3>
                <p className="text-gray-600 mb-4 italic">
                  "We created Lynkr to solve a problem we faced daily -
                  extracting meaningful information from PDF documents quickly.
                  Our AI-powered platform now helps thousands save time and make
                  better decisions."
                </p>
                <div className="font-semibold">
                  — Arman (theaiemperor), Founder & CEO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with Lynkr in just three simple steps
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center max-w-xs"
            >
              <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your PDF</h3>
              <p className="text-gray-600">
                Simply drag and drop or select your PDF documents to upload them
                to Lynkr.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-xs"
            >
              <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ask Questions</h3>
              <p className="text-gray-600">
                Ask any question about your document in natural language to get
                instant answers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center max-w-xs"
            >
              <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
              <p className="text-gray-600">
                Receive detailed responses, summaries, and insights extracted
                directly from your documents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SignedOut>
        <section className="py-20 bg-indigo-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to transform the way you work with PDFs?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who are saving time and gaining
                deeper insights from their documents.
              </p>
              <Link
                href="/register"
                className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
              >
                Sign Up for Free
              </Link>
            </motion.div>
          </div>
        </section>
      </SignedOut>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-5 py-8">
        <div className=" border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Lynkr. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://x.com/theaiemperor"
              className="text-gray-400 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X (Twitter)</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21.5 2h-4.6L12 9.8 7.1 2H2l7.9 11.5L2.7 22h4.6L12 14.7 16.9 22H22l-8-11.6L21.5 2z" />
              </svg>
            </a>

            <a
              href="https://github.com/theaiemperor"
              className="text-gray-400 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.107-.776.418-1.305.76-1.605-2.665-.304-5.467-1.334-5.467-5.933 0-1.31.469-2.38 1.236-3.22-.124-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.652.243 2.872.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.9-.014 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/theaiemperor/"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
