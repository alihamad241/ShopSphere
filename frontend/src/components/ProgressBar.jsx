import React from "react";

const SkillItem = ({ title, percentage }) => (
    <div className="mb-6 relative">
        <div className="flex justify-between mb-2 text-sm font-bold uppercase text-gray-700">
            <span>{title}</span>
            <span>{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
                className="h-full rounded-full transition-all duration-1000 ease-out bg-[#00bba6]"
                style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

export default function ProgressBar() {
    return (
        <section className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left: Progress Bars */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase">
                        We have Skills to show
                    </h2>
                    <div className="pr-0 lg:pr-8">
                        <SkillItem title="HTML/CSS" percentage={60} />
                        <SkillItem title="Wordpress Theme" percentage={90} />
                        <SkillItem title="Typography" percentage={70} />
                        <SkillItem title="Branding" percentage={80} />
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-1/2">
                    <div className="rounded-sm overflow-hidden">
                        <img
                            src="/assets/img/ship/about3.jpg"
                            alt="Skills"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
