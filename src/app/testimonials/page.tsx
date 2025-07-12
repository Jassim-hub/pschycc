import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testimonials - Dr. Dorothy',
  description: 'Read testimonials from clients who have experienced healing and growth through psychological services.',
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah K.",
      service: "Individual Therapy",
      rating: 5,
      text: "Dr. Dorothy helped me through one of the most difficult periods of my life. Her compassionate approach and practical strategies made all the difference. I learned valuable coping skills and gained a new perspective on my challenges.",
      duration: "6 months of therapy"
    },
    {
      name: "Michael R.",
      service: "Anxiety Treatment",
      rating: 5,
      text: "The therapy sessions were transformative. Dr. Dorothy created a safe space where I could explore my anxiety without judgment. Her evidence-based approaches really worked for me.",
      duration: "8 months of therapy"
    },
    {
      name: "Jennifer & David L.",
      service: "Couples Therapy",
      rating: 5,
      text: "Our marriage was in crisis, but Dr. Dorothy helped us rebuild our relationship from the ground up. We learned to communicate better and rediscovered our love for each other.",
      duration: "10 months of couples therapy"
    },
    {
      name: "Maria G.",
      service: "Trauma Recovery",
      rating: 5,
      text: "After years of struggling with trauma, I finally found healing with Dr. Dorothy's EMDR therapy. She was patient, understanding, and helped me reclaim my life.",
      duration: "1 year of trauma therapy"
    },
    {
      name: "James T.",
      service: "Depression Treatment",
      rating: 5,
      text: "Dr. Dorothy's approach to treating my depression was both professional and deeply caring. She helped me understand my patterns and develop healthier ways of thinking.",
      duration: "7 months of therapy"
    },
    {
      name: "Lisa M.",
      service: "Life Transitions",
      rating: 5,
      text: "Going through a major career change was overwhelming, but Dr. Dorothy helped me navigate this transition with confidence. Her guidance was invaluable.",
      duration: "4 months of therapy"
    },
    {
      name: "Robert & Susan H.",
      service: "Pre-marital Counseling",
      rating: 5,
      text: "Dr. Dorothy helped us prepare for marriage by addressing potential challenges and strengthening our communication. We felt so much more confident walking down the aisle.",
      duration: "3 months of pre-marital counseling"
    },
    {
      name: "Amanda C.",
      service: "Anxiety & Panic Disorders",
      rating: 5,
      text: "My panic attacks were controlling my life until I started working with Dr. Dorothy. She taught me techniques that actually work and helped me regain control.",
      duration: "5 months of therapy"
    },
    {
      name: "Thomas K.",
      service: "Stress Management",
      rating: 5,
      text: "As a high-stress executive, I was burning out fast. Dr. Dorothy helped me develop healthy coping strategies and find better work-life balance.",
      duration: "6 months of therapy"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who have found healing, growth, and positive change
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-lg">
                    {Array(testimonial.rating).fill('★').join('')}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.service}</p>
                  <p className="text-sm text-gray-500">{testimonial.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Treatment Outcomes
            </h2>
            <p className="text-xl text-gray-600">
              Evidence of positive change and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">88%</div>
              <p className="text-gray-600">Completed Treatment Goals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
              <p className="text-gray-600">Would Recommend</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect from Therapy
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the therapeutic process and what you can expect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Sessions</h3>
              <p className="text-gray-600">
                We&apos;ll discuss your goals, history, and develop a treatment plan tailored to your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Active Work</h3>
              <p className="text-gray-600">
                Through consistent sessions, we&apos;ll work on developing coping strategies and processing experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth & Maintenance</h3>
              <p className="text-gray-600">
                As you achieve your goals, we&apos;ll focus on maintaining progress and preventing relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">ℹ️</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy & Confidentiality</h3>
                <p className="text-gray-600">
                  All testimonials are shared with client permission and identifying details have been changed 
                  to protect privacy. Client confidentiality is of utmost importance and is strictly maintained 
                  in accordance with professional and legal standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the many people who have found healing and growth through therapy. 
            Take the first step towards positive change today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
