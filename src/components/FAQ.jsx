import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is DigiTools and how does it work?",
            answer: "DigiTools is an all-in-one curated marketplace offering premium AI tools, developer boilerplates, UI kits, and productivity software. Once you subscribe or purchase a tool, you receive instant access, API keys, and download links directly in your dashboard."
        },
        {
            question: "Can I use purchased tools in client and commercial projects?",
            answer: "Yes! All digital assets and subscriptions on DigiTools come with a comprehensive commercial license, allowing you to use them in unlimited personal, client, and commercial projects without royalty fees."
        },
        {
            question: "How frequently are new tools and updates added?",
            answer: "Our team curates and adds new tools weekly. Active subscribers receive automatic updates, new model integrations, and premium feature releases at no extra charge."
        },
        {
            question: "What payment methods and currencies are supported?",
            answer: "We support all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay with secure 256-bit SSL encryption."
        },
        {
            question: "What is your refund policy?",
            answer: "We offer a 14-day hassle-free money-back guarantee. If any tool doesn't meet your expectations, simply reach out to our 24/7 support team for an instant refund."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="bg-white py-14 md:py-[100px] scroll-mt-20">
            <div className="max-w-[90%] md:max-w-[900px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-1.5 bg-purple-100 text-[#4F39F6] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                        💬 Got Questions?
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-gray-900 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Everything you need to know about our products, licenses, and subscriptions.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border rounded-2xl transition-all duration-200 overflow-hidden group ${
                                    isOpen
                                        ? "border-[#4F39F6]/40 bg-purple-50/40 shadow-sm"
                                        : "border-gray-200 bg-white hover:border-purple-200 hover:shadow-xs"
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                    className="w-full flex justify-between items-center p-5 md:p-6 text-left font-bold text-gray-900 group-hover:text-[#4F39F6] text-base md:text-lg gap-4 cursor-pointer focus:outline-none transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                                        isOpen ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rotate-180 shadow-xs" : "bg-gray-100 group-hover:bg-purple-100 text-gray-600 group-hover:text-[#4F39F6]"
                                    }`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-5 md:px-6 pb-6 text-gray-700 text-sm md:text-base leading-relaxed border-t border-purple-100/60 pt-4">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

// Code styling and structural review completed.
