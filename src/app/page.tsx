"use client";

import Image from "next/image";
import { Search, Zap, FlaskConical, Rocket, Calendar, MapPin, CheckCircle, List } from "lucide-react";
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

            {/* MCP Explainer */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-6">{copy.mcp_explainer.headline}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{copy.mcp_explainer.text}</p>
            </section>

            {/* Why MCP */}
            <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12">{copy.why_mcp.headline}</h2>
              <div className="space-y-4">
                {copy.why_mcp.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                  </div>
                ))}
              </div>
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
                      ความต้องการ:
                      <ul className="font-normal mt-2 space-y-1">
                        {copy.details.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-gray-600 dark:text-gray-400">•</span>
                            <span>{req}</span>
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
                    {copy.footer.waitlist_cta}
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