import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Plus, Minus, ChevronRight, Home } from "lucide-react";

const faqData = [
    {
        id: 1,
        question:
            "Mauris congue euismod purus at semper. Morbi et vulputate massa?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec mattis finibus elit ut tristique. Nullameritus.",
    },
    {
        id: 2,
        question: "Donec mattis finibus elit ut tristique?",
        answer: "Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
    },
    {
        id: 3,
        question:
            "Aenean elit orci, efficitur sed nisl vitae, interdum maximus nisl?",
        answer: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.",
    },
    {
        id: 4,
        question: "Pellentesque ornare sem lacinia quam venenatis vestibulum?",
        answer: "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
    },
];

export default function Faq() {
    const [activeId, setActiveId] = useState(null);

    const toggle = (id) => setActiveId(activeId === id ? null : id);

    return (
        <div className="font-sans text-gray-600 faq-accent">
            <style>{`
                .faq-accent { --accent: #00bba6; }
                .faq-accent .accent-text { color: var(--accent); }
                .faq-accent .accent-hover:hover { color: var(--accent); }
                .faq-accent .accent-border { border-color: var(--accent) !important; }
                .faq-accent .accordion-header.active { background-color: rgba(0,187,166,0.08); color: var(--accent); }
            `}</style>
            <Header />

            {/* --- Breadcrumbs Area --- */}
            <div className="bg-gray-100 py-6 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <ul className="flex items-center gap-2 text-sm uppercase font-medium text-gray-500">
                        <li>
                            <a
                                href="/"
                                className="flex items-center transition-colors accent-hover">
                                <Home size={14} className="mr-1" /> Home
                            </a>
                        </li>
                        <li>
                            <ChevronRight size={14} />
                        </li>
                        <li className="accent-text">Frequently Questions</li>
                    </ul>
                </div>
            </div>
            {/* --- End Breadcrumbs --- */}

            {/* --- Main Content --- */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    {/* Page Title */}
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
                            Below are frequently asked questions
                        </h4>
                        <p className="text-gray-500">
                            Find answers to common questions here. We are here
                            to help you.
                        </p>
                    </div>

                    {/* Accordion Area */}
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {faqData.map((item) => (
                                <div
                                    key={item.id}
                                    className={`border rounded-sm transition-all duration-200 ${
                                        activeId === item.id
                                            ? "shadow-sm accent-border"
                                            : "border-gray-200 hover:border-gray-300"
                                    }`}>
                                    {/* Accordion Header (Button) */}
                                    <button
                                        onClick={() => toggle(item.id)}
                                        className={`w-full flex justify-between items-center px-6 py-4 text-left transition-colors accordion-header ${
                                            activeId === item.id
                                                ? "active"
                                                : "bg-white text-gray-700 accent-hover"
                                        }`}>
                                        <span className="font-semibold text-sm md:text-base uppercase tracking-wide">
                                            {item.question}
                                        </span>
                                        <span className="ml-4 flex-shrink-0">
                                            {activeId === item.id ? (
                                                <Minus size={16} />
                                            ) : (
                                                <Plus size={16} />
                                            )}
                                        </span>
                                    </button>

                                    {/* Accordion Body (Answer) */}
                                    {/* Using simple conditional rendering. For animation, a library like framer-motion is recommended, but this is pure React/Tailwind */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            activeId === item.id
                                                ? "max-h-96 opacity-100"
                                                : "max-h-0 opacity-0"
                                        }`}>
                                        <div className="px-6 pb-6 pt-2 text-sm leading-relaxed text-gray-500 border-t border-gray-100">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* --- End Main Content --- */}

            <Footer />
        </div>
    );
}
