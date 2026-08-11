import React, { useState, useEffect, useRef } from 'react';

// Array of user testimonials
const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Product Designer at Stripe',
        avatar: 'SC',
        color: 'from-violet-500 to-purple-600',
        rating: 5,
        text: 'DigiTools completely transformed how I source design assets. The quality and variety is unmatched — I find everything I need in one place.',
    },
    {
        name: 'Marcus Williams',
        role: 'Full-Stack Developer',
        avatar: 'MW',
        color: 'from-blue-500 to-indigo-600',
        rating: 5,
        text: 'The AI boilerplates saved me weeks of setup time. The code quality is outstanding and the templates are production-ready out of the box.',
    },
    {
        name: 'Priya Sharma',
        role: 'Startup Founder',
        avatar: 'PS',
        color: 'from-pink-500 to-rose-600',
        rating: 5,
        text: 'Incredible value. We went from idea to launch in 2 weeks using DigiTools templates and AI kits. Highly recommend to any startup team.',
    },
    {
        name: 'James Okafor',
        role: 'UI/UX Freelancer',
        avatar: 'JO',
        color: 'from-emerald-500 to-teal-600',
        rating: 5,
        text: 'My clients are always impressed with how fast I deliver high-quality work. DigiTools is my unfair advantage as a freelancer.',
    },
];

const StarRating = ({ count }) => (
    <div className="flex gap-0.5 mb-3">
        {Array.from({ length: count }).map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
);

const Testimonials = () => {
    const [active, setActive] = useState(0);
    const timer = useRef(null);

    const next = () => setActive(p => (p + 1) % testimonials.length);
    const prev = () => setActive(p => (p - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        timer.current = setInterval(next, 5000);
        return () => clearInterval(timer.current);
    }, []);

    const t = testimonials[active];

    return (
        <section id="testimonials" className="bg-gray-50 py-16 md:py-24 scroll-mt-20">
            <div className="max-w-[90%] md:max-w-[800px] mx-auto text-center">
                <span className="inline-block bg-purple-100 text-[#4F39F6] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                    Testimonials
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-12">
                    Loved by creators worldwide
                </h2>

                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 transition-all duration-500">
                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-4 shadow-lg`}>
                        {t.avatar}
                    </div>

                    <StarRating count={t.rating} />

                    <blockquote className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-6 italic">
                        "{t.text}"
                    </blockquote>

                    <div>
                        <p className="font-bold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors"
                        aria-label="Previous testimonial"
                    >
                        ‹
                    </button>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? 'bg-[#4F39F6] w-6' : 'bg-gray-300'}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors"
                        aria-label="Next testimonial"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

// Code styling and structural review completed.
