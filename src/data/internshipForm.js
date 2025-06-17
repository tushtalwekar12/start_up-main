export const internshipFormConfig = {
  formId: '1FAIpQLSfYOUR_FORM_ID_HERE', // Replace with your actual Google Form ID
  formFields: {
    name: 'entry.1234567890', // Replace with actual field IDs
    email: 'entry.2345678901',
    phone: 'entry.3456789012',
    college: 'entry.4567890123',
    course: 'entry.5678901234',
    year: 'entry.6789012345',
    domain: 'entry.7890123456',
    skills: 'entry.8901234567',
    experience: 'entry.9012345678',
    portfolio: 'entry.0123456789',
    availability: 'entry.1234567890',
    resume: 'entry.2345678901'
  },
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfYOUR_FORM_ID_HERE/viewform',
  prefillUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfYOUR_FORM_ID_HERE/viewform?usp=pp_url'
};

export const formFieldLabels = {
  name: 'Full Name',
  email: 'Email Address',
  phone: 'Phone Number',
  college: 'College/University',
  course: 'Course/Stream',
  year: 'Current Year',
  domain: 'Preferred Domain',
  skills: 'Relevant Skills',
  experience: 'Previous Experience',
  portfolio: 'Portfolio/Projects Link',
  availability: 'Available Hours per Week',
  resume: 'Resume Link'
};

export const formValidation = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  email: {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  },
  phone: {
    required: true,
    pattern: /^[0-9]{10}$/
  },
  college: {
    required: true
  },
  course: {
    required: true
  },
  year: {
    required: true,
    min: 1,
    max: 4
  },
  domain: {
    required: true
  },
  skills: {
    required: true,
    minLength: 10
  },
  experience: {
    required: false
  },
  portfolio: {
    required: false,
    pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  },
  availability: {
    required: true,
    min: 10,
    max: 40
  },
  resume: {
    required: true,
    pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  }
}; 