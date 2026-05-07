"use client";

import Image from "next/image";
import { Search, Zap, FlaskConical, Rocket, Calendar, MapPin, CheckCircle, List, Linkedin, Instagram, Github, Clock } from "lucide-react";
import FAQItem from "@/components/FAQItem";
import copyTexts from "../../copy-texts.json";


export default function Home() {
  const copy = copyTexts.site.sections;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Course Introduction */}
            <section>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                {copy.hero.headline}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {copy.hero.subheadline}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-200 leading-relaxed">
                {copy.hero.reference}
              </p>
            </section>

            {/* Target Audience */}
            <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12">{copy.audience.headline}</h2>
              <div className="space-y-4">
                {copy.audience.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Now */}
            <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12">{copy.why_now.headline}</h2>
              <div className="space-y-4">
                {copy.why_now.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Prompting Explainer */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-6">{copy.prompting_explainer.headline}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{copy.prompting_explainer.text}</p>
            </section>


            {/* Objectives */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-6">{copy.objectives.headline}</h2>
              <div className="space-y-4">
                {copy.objectives.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12">{copy.outcomes.headline}</h2>
              <div className="space-y-4">
                {copy.outcomes.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12">{copy.curriculum.headline}</h2>
              <div className="space-y-8">
                {copy.curriculum.modules.map((module, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-6">{module.title}</h3>
                    <ul className="space-y-3 text-base">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-3">
                          <span className="text-gray-600 dark:text-gray-400">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12">{copy.faq.headline}</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                {copy.faq.items.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12">{copy.author.headline}</h2>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://avatars.githubusercontent.com/u/1384845?v=4"
                      alt={copy.author.full_name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">{copy.author.full_name}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">{copy.author.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {copy.author.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {copy.author.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 justify-center md:justify-start mt-6">
                      <a 
                        href={copy.author.social.linkedin.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a
                        href={copy.author.social.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href={copy.author.social.line.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{copy.details.headline}</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-white font-medium">วันที่: <span className="font-normal">{copy.details.date}</span></span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-white font-medium">เวลา: <span className="font-normal">{copy.details.time}</span></span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-white font-medium">สถานที่: <span className="font-normal">{copy.details.location}</span></span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <List size={20} className="text-gray-600 dark:text-gray-400 mt-1" />
                    <span className="text-gray-900 dark:text-white font-medium">รูปแบบ: <span className="font-normal">{copy.details.format}</span></span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gray-600 dark:text-gray-400 mt-1" />
                    <div className="text-gray-900 dark:text-white font-medium">
                      สิ่งที่ต้องเตรียมมาเอง:
                      <ul className="font-normal mt-2 space-y-1">
                        {copy.details.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-gray-600 dark:text-gray-400">•</span>
                            <span dangerouslySetInnerHTML={{ __html: req }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <a href={copy.footer.google_form_url} target="_blank">
                  <button 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-full font-medium transition-colors duration-200 cursor-pointer"
                >
                    {copy.footer.cta}
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">{copy.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}