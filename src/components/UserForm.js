import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', bio: '' });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = true;
    if (!formData.bio.trim()) tempErrors.bio = true;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "format";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setErrors({});
    } else {
      setIsSuccess(false);
    }
  };

  // Helper function to handle border colors
  const getBorderClass = (field) => {
    if (errors[field]) return 'border-red-500 bg-red-50 focus:ring-red-200';
    return 'border-gray-300 focus:border-blue-500 focus:ring-blue-200';
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get Started</h2>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-sm font-medium animate-bounce">
          ✓ Data submitted successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name</label>
          <input 
            type="text"
            placeholder="Jane Doe"
            className={`w-full px-4 py-2 rounded-lg border transition-all outline-none focus:ring-4 ${getBorderClass('name')}`}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Email Address</label>
          <input 
            type="email"
            placeholder="jane@example.com"
            className={`w-full px-4 py-2 rounded-lg border transition-all outline-none focus:ring-4 ${getBorderClass('email')}`}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email === "format" && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Brief Bio</label>
          <textarea 
            rows="3"
            placeholder="Tell us about yourself..."
            className={`w-full px-4 py-2 rounded-lg border transition-all outline-none focus:ring-4 ${getBorderClass('bio')}`}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md active:transform active:scale-95"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default UserForm;