import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "Mauris congue euismod purus at semper. Morbi et vulputate massa?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    { id: 2, question: "Donec mattis finibus elit ut tristique?", answer: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." },
    {
        id: 3,
        question: "Aenean elit orci, efficitur sed nisl vitae, interdum maximus nisl?",
        answer: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.",
    },
];

export default function Faq() {
    const [activeId, setActiveId] = useState(null);

    const toggle = (id) => setActiveId(activeId === id ? null : id);

    return (
        <>
            <Header />
            <div className="breadcrumbs_area">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <a href="/">home</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                </li>
                                <li>Frequently Questions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pos_page">
                <div className="mx-auto px-4">
                    <div className="pos_page_inner">
                        <div className="faq_content_area">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full">
                                    <div className="faq_content_wrapper">
                                        <h4>Below are frequently asked questions</h4>
                                        <p>Find answers to common questions here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion_area">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full">
                                    <div className="class__accordion">
                                        {faqData.map((item) => (
                                            <div
                                                key={item.id}
                                                className="accordion-item card card_dipult">
                                                <div
                                                    className="card-header card_accor"
                                                    id={`heading-${item.id}`}>
                                                    <button
                                                        className={`text-blue-600 hover:underline bg-transparent p-0 ${
                                                            activeId === item.id ? "" : "collapsed"
                                                        }`}
                                                        onClick={() => toggle(item.id)}>
                                                        {item.question}
                                                        <i className={`fa fa-${activeId === item.id ? "minus" : "plus"}`}></i>
                                                    </button>
                                                </div>
                                                {activeId === item.id && (
                                                    <div className="collapse show">
                                                        <div className="card-body">
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
