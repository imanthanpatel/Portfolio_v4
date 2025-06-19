import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('access_key', 'a661a774-9fa1-4acb-88ad-22975f3ddb34');
    formData.append('subject', 'New Newsletter Subscription');
    formData.append('from_name', 'Portfolio Newsletter');
    formData.append('email', email);
    formData.append('message', `New subscriber: ${email}`);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await res.json();
    if (result.success) {
      setStatus('✅ Your email has been registered!');
      setEmail('');
    } else {
      setStatus('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-blue-600 rounded-2xl overflow-hidden">
        <div className="relative md:px-16 py-16 px-6 md:py-24">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-white max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Subscribe newsletter
              </h2>
              <p className="text-blue-100 text-base sm:text-lg">
                Get updates on my latest web projects, UI designs, and frontend tips — straight to your inbox.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex w-full max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white px-4 py-3 text-gray-800 rounded-l-xl focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-500  px-6 py-3 text-white font-semibold rounded-r-xl flex items-center gap-2 hover:bg-green-600 transition sm:w-auto w-full cursor-pointer"
              >
                Discover <HiArrowRight />
              </button>
            </form>
          </div>

          {/* Status Message */}
          {status && (
            <div className="text-center mt-4 text-white font-medium">
              {status}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
