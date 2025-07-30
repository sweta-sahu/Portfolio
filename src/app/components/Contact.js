'use client';
import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mrblknae", {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Thanks for your message!');
                form.reset();
            } else {
                const responseData = await response.json();
                if (responseData.errors) {
                    setStatus(responseData.errors.map(error => error.message).join(", "));
                } else {
                    setStatus('Oops! There was a problem submitting your form');
                }
            }
        } catch (error) {
            setStatus('Oops! There was a problem submitting your form');
        }
    };

    return (
        <section id="contact" className="py-24 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-4xl font-bold mb-4">Contact Me</h3>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                    </div>
                    <div className="text-center">
                         <button type="submit" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                           Send Message
                         </button>
                    </div>
                    {status && <p className="text-center mt-4 text-gray-400">{status}</p>}
                </form>
            </div>
        </section>
    );
}
export default Contact;