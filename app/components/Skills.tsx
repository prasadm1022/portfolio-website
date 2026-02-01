'use client';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Backend & Core',
            skills: [
                {name: 'Java 8/11/17/21', level: 95},
                {name: 'Spring Boot', level: 95},
                {name: 'Spring MVC/Cloud', level: 90},
                {name: 'Hibernate', level: 90},
            ],
            color: 'indigo',
        },
        {
            title: 'Cloud & DevOps',
            skills: [
                {name: 'AWS (ECS, RDS, Lambda, IAM, CloudShell, CloudWatch)', level: 75},
                {name: 'Docker', level: 75},
                {name: 'Jenkins', level: 75},
                {name: 'Nginx', level: 75},
            ],
            color: 'purple',
        },
        {
            title: 'Database & Messaging',
            skills: [
                {name: 'MySQL', level: 80},
                {name: 'Oracle SQL', level: 80},
                {name: 'MongoDB', level: 80},
                {name: 'PostgreSQL', level: 80},
            ],
            color: 'pink',
        },
        {
            title: 'Tools & Practices',
            skills: [
                {name: 'REST APIs & Swagger', level: 95},
                {name: 'Git & Maven', level: 95},
                {name: 'JUnit & Mockito', level: 95},
                {name: 'Agile & TDD', level: 95},
            ],
            color: 'blue',
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; text: string; bar: string }> = {
            indigo: {
                bg: 'bg-indigo-100 dark:bg-indigo-900/30',
                text: 'text-indigo-600 dark:text-indigo-400',
                bar: 'bg-indigo-600'
            },
            purple: {
                bg: 'bg-purple-100 dark:bg-purple-900/30',
                text: 'text-purple-600 dark:text-purple-400',
                bar: 'bg-purple-600'
            },
            pink: {bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', bar: 'bg-pink-600'},
            blue: {bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', bar: 'bg-blue-600'},
        };
        return colors[color];
    };

    return (
        <section id="skills"
                 className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    My <span className="gradient-text">Skills</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className={`text-xl font-semibold mb-6 ${getColorClasses(category.color).text}`}>
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx}>
                                        <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${getColorClasses(category.color).bar} transition-all duration-1000`}
                                                style={{width: `${skill.level}%`}}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
