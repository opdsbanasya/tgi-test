// validate.js
// Regular expressions for validation
const VALIDATORS = {
    name: {
        pattern: /^[A-Za-z\s]{3,50}$/,
        message: 'Name must contain only letters and spaces (3-50 characters)'
    },
    email: {
        // Complex email validation
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        // Matches valid Indian phone numbers
        pattern: /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
        message: 'Please enter a valid 10-digit phone number'
    },
    message: {
        pattern: /^[\s\S]{10,500}$/,
        message: 'Message must be between 10 and 500 characters'
    }
};

// Helper function to validate email domain
const isValidEmailDomain = async (email) => {
    // List of commonly disposable email domains
    const disposableDomains = [
        'tempmail.com', 'throwaway.com', 'tempmail.net', 'temporary-mail.net',
        // Add more disposable domains as needed
    ];

    const domain = email.split('@')[1];
    
    // Check if it's not a disposable domain
    if (disposableDomains.includes(domain)) {
        return false;
    }

    try {
        // Optional: You can add DNS lookup here to verify domain exists
        // For now, we'll do basic validation
        return domain.includes('.') && domain.split('.')[1].length >= 2;
    } catch (error) {
        return false;
    }
};

export const validateField = async (name, value) => {
    const validator = VALIDATORS[name];
    if (!validator) return '';

    if (!value.trim()) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (!validator.pattern.test(value)) {
        return validator.message;
    }

    // Additional validation for specific fields
    if (name === 'email') {
        // Check for valid email domain
        const isValidDomain = await isValidEmailDomain(value);
        if (!isValidDomain) {
            return 'Please enter a valid email address';
        }
    }

    if (name === 'name') {
        // Additional name validation
        if (value.trim().length < 3) {
            return 'Name must be at least 3 characters long';
        }
        if (!/^[A-Za-z\s]*$/.test(value)) {
            return 'Name can only contain letters and spaces';
        }
        if (/\s{2,}/.test(value)) {
            return 'Name cannot contain consecutive spaces';
        }
    }

    if (name === 'phone') {
        // Additional phone validation
        const numbers = value.replace(/[^\d]/g, '');
        if (numbers.length !== 10 && !/^[6789]/.test(numbers)) {
            return 'Please enter a valid phone number';
        }
    }

    return '';
};

export const handleChange = async (e, setFormData, setErrors) => {
    const { name, value } = e.target;
    
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));

    // Validate field as user types
    const error = await validateField(name, value);
    setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error
    }));
};

export const handleSubmit = async (e, formData, setFormData, setErrors) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const errors = {};
    for (const [field, value] of Object.entries(formData)) {
        const error = await validateField(field, value);
        if (error) {
            errors[field] = error;
        }
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();

        if (response.ok) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setErrors({});
            alert('Message sent successfully!');
        } else {
            setErrors({ submit: data.error || 'Failed to send message. Please try again.' });
        }
    } catch (error) {
        console.error('Submission error:', error);
        setErrors({ submit: `Error: ${error.message}` });
    }
};
