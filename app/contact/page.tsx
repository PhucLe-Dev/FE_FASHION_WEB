'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPlus } from 'react-icons/fa';

export default function ContactPage() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setFaqOpen(prev => (prev === index ? null : index));
    };

    return (
        <main className="pt-32 pb-20">
            {/* Page Header */}
            <section className=" text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                        Contact <span className="text-accent">Us</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 uppercase tracking-wider text-sm">
                        WED LOVE TO HEAR FROM YOU
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 shadow-lg rounded-sm">
                            <h2 className="text-2xl font-playfair font-bold mb-8">Send Us a Message</h2>
                            <form>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent" placeholder="Your name" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent" placeholder="Your email" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                                    <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent" placeholder="Subject" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                    <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent" placeholder="Your message"></textarea>
                                </div>
                                <button type="submit" className="bg-black text-white px-10 py-4 hover:bg-opacity-90 transition tracking-wider font-medium uppercase w-full">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <div className="mb-12">
                                <h2 className="text-2xl font-playfair font-bold mb-6">Get in Touch</h2>
                                <p className="text-gray-700 mb-8">Our customer service team is available to assist you...</p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="text-accent mr-4 mt-1"><FaMapMarkerAlt className="text-lg" /></div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Our Store</h3>
                                            <p className="text-gray-700">1 Rodeo Drive<br />Beverly Hills, CA 90210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-accent mr-4 mt-1"><FaPhone className="text-lg" /></div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Phone</h3>
                                            <p className="text-gray-700">+1 (310) 555-1234<br />Mon-Fri: 9am-6pm PST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-accent mr-4 mt-1"><FaEnvelope className="text-lg" /></div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Email</h3>
                                            <p className="text-gray-700">support@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="map-container rounded-sm overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=..."
                                    width="100%" height="300" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-playfair font-bold text-black mb-6">
                            <span className="title-decoration">Frequently Asked Questions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto uppercase tracking-wider text-sm">
                            FIND ANSWERS TO COMMON QUESTIONS
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                question: 'What are your shipping options?',
                                answer: 'We offer standard shipping (3-5 business days)...'
                            },
                            {
                                question: 'What is your return policy?',
                                answer: 'We accept returns within 30 days...'
                            },
                            {
                                question: 'How can I track my order?',
                                answer: 'Once your order has shipped, you’ll receive...'
                            },
                            {
                                question: 'Do you offer gift wrapping?',
                                answer: 'Yes, we offer complimentary gift wrapping...'
                            }
                        ].map((item, index) => (
                            <div key={index} className="border-b border-gray-200">
                                <button
                                    className="flex justify-between items-center w-full py-4 text-left"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="font-medium">{item.question}</h3>
                                    <FaPlus className="text-accent" />
                                </button>
                                {faqOpen === index && (
                                    <div className="pb-4">
                                        <p className="text-gray-700">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
