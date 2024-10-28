
// ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { handleChange, handleSubmit, validateField } from '../utils/validateForm';
import sittingArea from "../assets/sitting-area2.jpg";
import Banner from './Banner';
import ContactInfo from './ContactInfo';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isTyping, setIsTyping] = useState({});

    // Debounce validation while typing
    useEffect(() => {
        const timers = {};
        
        Object.keys(isTyping).forEach(field => {
            if (isTyping[field]) {
                timers[field] = setTimeout(async () => {
                    const error = await validateField(field, formData[field]);
                    setErrors(prev => ({
                        ...prev,
                        [field]: error
                    }));
                }, 500);
            }
        });

        return () => {
            Object.values(timers).forEach(timer => clearTimeout(timer));
        };
    }, [formData, isTyping]);

    const handleFieldChange = async (e) => {
        const { name } = e.target;
        setIsTyping(prev => ({ ...prev, [name]: true }));
        await handleChange(e, setFormData, setErrors);
        setTimeout(() => {
            setIsTyping(prev => ({ ...prev, [name]: false }));
        }, 500);
    };

    return (
        <div className="w-full min-h-[50vh] px-5 md:px-10 lg:px-20 xl:px-28 lg:pb-10 py-7">
            <Banner />
            <ContactInfo />
            <div className="text-center lg:text-left xl:w-[80%] w-[90%] mx-auto">
                <h2 className="lg:text-3xl text-2xl lg:mx-0 mx-auto font-semibold font-serif text-black lg:my-10 py-5 mt-3">
                    Reach out to Us
                </h2>
            </div>
            <div id="contact-form" className="flex flex-col lg:flex-row items-center justify-center bg-zinc-300 rounded-xl overflow-hidden">
                <div className="lg:w-1/2 w-full h-full">
                    <img className="aspect-square object-cover object-bottom h-full" src={sittingArea} alt="Main Entrance" />
                </div>
                <form 
                    onSubmit={(e) => handleSubmit(e, formData, setFormData, setErrors)}
                    className="lg:w-1/2 w-full md:[80%] lg:space-y-7 space-y-5 mx-auto px-5 lg:px-10 py-5"
                >
                    <h2 className="lg:text-md text-sm font-light text-black">
                        *Please! Fill your original Info, so we can reply to you.
                    </h2>
                    {['name', 'email', 'phone', 'message'].map((field) => (
                        <div key={field} className="flex flex-col gap-2 relative">
                            {field === 'message' ? (
                                <textarea
                                    name={field}
                                    id={field}
                                    value={formData[field]}
                                    onChange={handleFieldChange}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    className={`w-full px-4 py-3 rounded-md border ${
                                        errors[field] ? 'border-red-500' : 'border-gray-300'
                                    } focus:outline-none min-h-[100px] resize-none`}
                                />
                            ) : (
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    id={field}
                                    value={formData[field]}
                                    onChange={handleFieldChange}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    className={`w-full px-4 py-3 rounded-md border ${
                                        errors[field] ? 'border-red-500' : 'border-gray-300'
                                    } focus:outline-none`}
                                />
                            )}
                            {errors[field] && !isTyping[field] && (
                                <p className="absolute lg:-bottom-5 -bottom-[1.2rem] z-10 text-red-500 lg:text-xs text-[0.65rem] mt-1 ml-1">*{errors[field]}</p>
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        
                        className={`w-fit mx-auto ${
                            Object.keys(errors).length > 0 
                                && 'bg-gray-400' 
                        } bg-[#4CC9FE] hover:bg-[#37AFE1] text-white py-3 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-offset-2`}
                    >
                        Send Message
                    </button>
                    {errors.submit && (
                        <p className="text-red-500 text-center text-sm mt-2">{errors.submit}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;