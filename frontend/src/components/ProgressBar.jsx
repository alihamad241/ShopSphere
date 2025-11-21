import React from "react";

function ProgressSkill({ label, percent }) {
    return (
        <div className="progress_skill mb-4">
            <div className="progress bg-gray-200 rounded h-4 overflow-hidden">
                <div
                    className="progress-bar about_prog bg-blue-600 h-4"
                    role="progressbar"
                    style={{ width: percent }}
                    aria-valuenow={parseInt(percent)}
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>
            <div className="flex items-center justify-between mt-2 text-sm text-gray-700">
                <span className="progress_persent font-medium">{label}</span>
                <span className="progress_discount">{percent}</span>
            </div>
        </div>
    );
}

export default function ProgressBar() {
    return (
        <div className="about_progressbar py-8">
            <div className="mx-auto px-4">
                <div className="flex items-center">
                    <div className="w-full md:w-1/2 lg:w-1/2">
                        <div className="progressbar_inner">
                            <h2 className="text-2xl font-bold mb-4">We have Skills to show</h2>
                            <ProgressSkill
                                label="HTML/CSS"
                                percent={"60%"}
                            />
                            <ProgressSkill
                                label="WORDPRESS THEME"
                                percent={"90%"}
                            />
                            <ProgressSkill
                                label="Typhography"
                                percent={"70%"}
                            />
                            <ProgressSkill
                                label="Branding"
                                percent={"80%"}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 mt-6 md:mt-0">
                        <div className="about__img">
                            <img
                                src="/assets/img/ship/about3.jpg"
                                alt=""
                                className="w-full rounded shadow-sm object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
