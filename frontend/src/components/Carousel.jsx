import React, { useEffect, useRef, useState } from "react";


export default function Carousel({ children, autoplay = false, interval = 5000, className = "" }) {
    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const [pages, setPages] = useState(1);
    const [pageIndex, setPageIndex] = useState(0);
    const autoplayRef = useRef(null);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const compute = () => {
            const c = containerRef.current;
            const t = trackRef.current;
            if (!c || !t) return;
            const visibleW = c.clientWidth;

            // determine items per page by breakpoints
            let per = 1;
            if (visibleW >= 1024) per = 4;
            else if (visibleW >= 768) per = 2;
            else per = 1;
            setItemsPerPage(per);

            const childCount = React.Children.count(children) || 1;
            const p = Math.max(1, Math.ceil(childCount / per));
            setPages(p);
            // adjust pageIndex if out of range
            setPageIndex((idx) => Math.min(idx, Math.max(0, p - 1)));
        };
        compute();
        const ro = new ResizeObserver(compute);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [children]);
    
    useEffect(() => {
        if (!autoplay) return;
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            goToPage((pageIndex + 1) % pages);
        }, interval);
        return () => clearInterval(autoplayRef.current);
    }, [autoplay, interval, pageIndex, pages]);

    const goToPage = (i) => {
        const c = containerRef.current;
        if (!c) return;
        const left = i * c.clientWidth;
        c.scrollTo({ left, behavior: "smooth" });
        setPageIndex(i);
    };

    const next = () => goToPage(Math.min(pages - 1, pageIndex + 1));
    const prev = () => goToPage(Math.max(0, pageIndex - 1));

    return (
        <div className={`${className} relative`}>
            <div
                ref={containerRef}
                className="overflow-hidden"
                style={{ scrollSnapType: "x mandatory" }}>
                <div
                    ref={trackRef}
                    className="flex gap-4 px-2"
                    style={{ overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>
                    {React.Children.map(children, (child, idx) => {
                        const pct = Math.max(1, itemsPerPage) > 0 ? `${100 / Math.max(1, itemsPerPage)}%` : undefined;
                        return (
                            <div
                                style={{
                                    scrollSnapAlign: "start",
                                    flex: pct ? `0 0 ${pct}` : "0 0 auto",
                                    maxWidth: pct,
                                    boxSizing: "border-box",
                                }}
                                className="shrink-0">
                                {child}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Arrows */}
            <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hidden md:block">
                ‹
            </button>
            <button
                onClick={next}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hidden md:block">
                ›
            </button>

            {/* Dots */}
            <div className="absolute left-0 right-0 bottom-3 flex justify-center gap-2 z-10">
                {Array.from({ length: pages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i)}
                        className={`w-2 h-2 rounded-full ${i === pageIndex ? "bg-white" : "bg-white/50"}`}
                        aria-label={`Go to page ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
