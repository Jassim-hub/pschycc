"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  '/images/anthony-tran-vXymirxr5ac-unsplash.jpg',
  '/images/ben-white-7SRymDKKDus-unsplash.jpg',
  '/images/adrian-swancar-roCfgvkBLVY-unsplash.jpg',
  '/images/claudia-wolff-owBcefxgrIE-unsplash.jpg',
  '/images/nik-shuliahin-BuNWp1bL0nc-unsplash.jpg',
  '/images/mitchel-lensink-Ismnr6WSHCU-unsplash.jpg',
];

function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIdx(current);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);
  const goTo = (idx: number) => {
    setPrevIdx(current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 400);
  };
  const prev = () => {
    setPrevIdx(current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((current - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 400);
  };
  const next = () => {
    setPrevIdx(current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((current + 1) % images.length);
      setIsTransitioning(false);
    }, 400);
  };
  return (
    <section
      className="py-20 relative overflow-hidden"
      aria-label="How I Can Help You section background"
    >
      {/* Outgoing image */}
      <div
        className={`absolute inset-0 transition-opacity duration-400 will-change-opacity z-0 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url('${images[prevIdx]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px',
        }}
      />
      {/* Incoming image */}
      <div
        className={`absolute inset-0 transition-opacity duration-400 will-change-opacity z-0 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url('${images[current]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px',
        }}
      />
      <div className="absolute inset-y-0 left-0 flex items-center z-20">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="bg-gray-500 bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 shadow hover:bg-gray-700 hover:bg-opacity-60 transition"
        >&#8592;</button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20">
        <button
          onClick={next}
          aria-label="Next image"
          className="bg-gray-500 bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 shadow hover:bg-gray-700 hover:bg-opacity-60 transition"
        >&#8594;</button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to image ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-600' : 'bg-white bg-opacity-80'} border border-blue-600`}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How I Can Help You
          </h2>
          <p className="text-xl text-red-600 max-w-3xl mx-auto">
            Specialized psychological services tailored to your unique needs and goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Individual Therapy</h3>
            <p className="text-gray-600">
              One-on-one sessions to address anxiety, depression, trauma, and personal growth challenges.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">💑</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Couples Therapy</h3>
            <p className="text-gray-600">
              Strengthen your relationship through improved communication and conflict resolution.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Trauma Recovery</h3>
            <p className="text-gray-600">
              Evidence-based approaches to heal from traumatic experiences and build resilience.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Path to
                <span className="text-blue-600"> Mental Wellness</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional psychological services with compassion and expertise. 
                I&apos;m here to help you navigate life&apos;s challenges and achieve lasting positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Book Your Appointment
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩‍⚕️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Dorothy</h3>
                  <p className="text-blue-900 mb-4">Licensed Clinical Psychologist</p>
                  <p className="text-sm text-gray-500">
                    &quot;Creating a safe space where healing and growth can flourish.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesCarousel />

      {/* Why Choose Me */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose My Practice?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Evidence-Based Approach</h3>
                    <p className="text-gray-600">
                      Using scientifically proven therapeutic methods tailored to your specific needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Safe & Confidential</h3>
                    <p className="text-gray-600">
                      A judgment-free environment where you can express yourself freely and honestly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Personalized Care</h3>
                    <p className="text-gray-600">
                      Every treatment plan is customized to your unique circumstances and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h3>
              <p className="text-red-600 mb-6">
                Take the first step towards better mental health. Book a consultation today.
              </p>
              <Link
                href="/contact"
                className="block bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What My Clients Say
            </h2>
            <p className="text-xl text-red-600">
              Real stories from people who&apos;ve found healing and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Dr. Dorothy helped me through one of the most difficult periods of my life. 
                Her compassionate approach and practical strategies made all the difference.&quot;
              </p>
              <p className="font-semibold text-gray-900">- Sarah K.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;The therapy sessions were transformative. I learned valuable coping skills 
                and gained a new perspective on my challenges.&quot;
              </p>
              <p className="font-semibold text-gray-900">- Michael R.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Read More Testimonials →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}   


