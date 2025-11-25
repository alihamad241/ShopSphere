import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 0,
        title: "fashion for you",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi quia, ratione porro, nemo non.",
        image: "/assets/img/slider/slider_2.png",
    },
    {
        id: 1,
        title: "fashion for you",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi quia, ratione porro, nemo non.",
        image: "/assets/img/slider/slide_4.png",
    },
    {
        id: 2,
        title: "fashion for you",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi quia, ratione porro, nemo non.",
        image: "/assets/img/slider/slider_3.png",
    },
];

export default function HeroSlider({ autoplay = true, interval = 8000 }) {
    const [[page, direction], setPage] = useState([0, 0]);
    const index = ((page % slides.length) + slides.length) % slides.length;
    const timeoutRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!autoplay) return;
        if (isPaused) return;
        timeoutRef.current = setTimeout(() => {
            paginate(1);
        }, interval);
        return () => clearTimeout(timeoutRef.current);
    }, [page, isPaused, autoplay, interval]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") paginate(1);
            if (e.key === "ArrowLeft") paginate(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const paginate = (newDirection) => {
        setPage(([p]) => [p + newDirection, newDirection]);
    };

    // Simple swipe handling
    const touchStartX = useRef(0);
    const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) paginate(dx > 0 ? -1 : 1);
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: "0%", opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    };

    return (
        <section className="pos_home_section py-12">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div
                            className="banner_slider slider_two relative overflow-hidden"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}>
                            <AnimatePresence
                                initial={false}
                                custom={direction}>
                                <motion.div
                                    key={page}
                                    className="single_slider absolute inset-0 bg-center bg-cover flex items-center"
                                    style={{ backgroundImage: `url(${slides[index].image})`, pointerEvents: 'none' }}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.7 }}>
                                    <div className="w-full">
                                        <div className="slider_content">
                                            <div className="slider_content_inner max-w-xl text-center mx-auto py-24 text-white" style={{ pointerEvents: 'auto' }}>
                                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{slides[index].title}</h1>
                                                <p className="mt-4">{slides[index].text}</p>
                                                <a
                                                    href="#"
                                                    className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded">
                                                    shop now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Arrows */}
                            <button
                                aria-label="Previous"
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white p-2 rounded-full pointer-events-auto cursor-pointer"
                                onClick={() => paginate(-1)}>
                                ‹
                            </button>
                            <button
                                aria-label="Next"
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white p-2 rounded-full pointer-events-auto cursor-pointer"
                                onClick={() => paginate(1)}>
                                ›
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-50 pointer-events-auto">
                                {slides.map((s, i) => (
                                    <button
                                        key={s.id}
                                        onClick={() => setPage([i, i > index ? 1 : -1])}
                                        className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}