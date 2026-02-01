'use client';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                I'm a Java Technical Lead with 6+ years of experience in Java backend development,
                                REST API design, and enterprise application modernization. Currently working at CodeGen
                                International (Pvt) Ltd, where I lead development teams and drive technical excellence.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                My expertise includes legacy system modernization (Java 8 to Java 21), microservices
                                architecture, and cloud-native solutions using AWS. I've successfully led multiple
                                travel-domain projects including Clipper Vacations etc.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                I'm passionate about applying OOP principles, design patterns, and Agile methodologies
                                to build scalable and maintainable codebases. When I'm not coding, you can find me
                                playing cricket, traveling, wildlife photographing, or PC gaming.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Technical Leadership</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Leading cross-functional teams, mentorship, and solution design
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div
                                    className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Cloud & DevOps Expert</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        AWS, Docker, Docker Swarm, Jenkins, and containerization
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div
                                    className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Enterprise Solutions</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Microservices, REST APIs, and legacy system modernization
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
