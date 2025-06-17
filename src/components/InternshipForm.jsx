import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaCode, FaLink, FaClock, FaFileAlt } from 'react-icons/fa';
import { internshipFormConfig, formFieldLabels, formValidation } from '../data/internshipForm';

const InternshipForm = ({ selectedDomain, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    domain: selectedDomain,
    skills: '',
    experience: '',
    portfolio: '',
    availability: '',
    resume: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    const rules = formValidation[name];
    if (!rules) return '';

    if (rules.required && !value) {
      return `${formFieldLabels[name]} is required`;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `${formFieldLabels[name]} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `${formFieldLabels[name]} must be less than ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return `${formFieldLabels[name]} is invalid`;
    }

    if (rules.min && Number(value) < rules.min) {
      return `${formFieldLabels[name]} must be at least ${rules.min}`;
    }

    if (rules.max && Number(value) > rules.max) {
      return `${formFieldLabels[name]} must be less than ${rules.max}`;
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Construct Google Form URL with pre-filled data
    const formUrl = new URL(internshipFormConfig.prefillUrl);
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formUrl.searchParams.append(internshipFormConfig.formFields[key], value);
      }
    });

    // Open form in new tab
    window.open(formUrl.toString(), '_blank');
    onClose();
  };

  const inputFields = [
    { name: 'name', icon: FaUser, type: 'text' },
    { name: 'email', icon: FaEnvelope, type: 'email' },
    { name: 'phone', icon: FaPhone, type: 'tel' },
    { name: 'college', icon: FaGraduationCap, type: 'text' },
    { name: 'course', icon: FaGraduationCap, type: 'text' },
    { name: 'year', icon: FaGraduationCap, type: 'number' },
    { name: 'skills', icon: FaCode, type: 'text' },
    { name: 'experience', icon: FaCode, type: 'textarea' },
    { name: 'portfolio', icon: FaLink, type: 'url' },
    { name: 'availability', icon: FaClock, type: 'number' },
    { name: 'resume', icon: FaFileAlt, type: 'url' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Apply for {selectedDomain} Internship</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {inputFields.map(({ name, icon: Icon, type }) => (
            <div key={name} className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                {formFieldLabels[name]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon className="h-5 w-5 text-gray-400" />
                </div>
                {type === 'textarea' ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    rows={3}
                    className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors[name] ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={`Enter your ${formFieldLabels[name].toLowerCase()}`}
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors[name] ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={`Enter your ${formFieldLabels[name].toLowerCase()}`}
                  />
                )}
              </div>
              {errors[name] && (
                <p className="text-sm text-red-600">{errors[name]}</p>
              )}
            </div>
          ))}

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default InternshipForm; 