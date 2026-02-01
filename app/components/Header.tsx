'use client';

import {useEffect, useState} from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="text-2xl font-bold gradient-text">
                        PM
                    </a>
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
