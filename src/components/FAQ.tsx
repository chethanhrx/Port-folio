'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Who is Chethan Kumar HR?",
    answer: "Chethan Kumar HR is a Java Full Stack Developer based in Bengaluru, India. He specializes in building high-concurrency backends with Spring Boot and reactive frontends with React."
  },
  {
    question: "What does Chethan HR work on?",
    answer: "Chethan HR works on distributed systems, microservices architecture, and scalable full-stack applications. His core stack includes Java 21, Spring Boot, React, Kafka, Redis, and PostgreSQL."
  },
  {
    question: "What is Chethan HR's GitHub?",
    answer: "Chethan HR's official GitHub handle is chethanhrx, which can be found at https://github.com/chethanhrx."
  },
  {
    question: "What is Pactviz / Ortex?",
    answer: "Pactviz and Ortex Studio are software agencies founded by Chethan Kumar HR. Through these organizations, he delivers highly scalable web applications and enterprise-grade backend solutions for clients."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent mb-3 block">Answers</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Quick facts and direct answers about Chethan Kumar HR, his tech stack, and his projects.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="border border-gray-200 rounded-xl bg-[#FAFAFA] overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-accent' : ''}`}
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-base">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
