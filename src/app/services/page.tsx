import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - Dr. Dorothy',
  description: 'Comprehensive psychological services including individual therapy, couples counseling, and trauma recovery.',
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Psychological Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health services tailored to your unique needs and goals
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Individual Therapy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <span className="text-3xl">🧠</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Individual Therapy</h2>
                <p className="text-lg text-gray-600 mb-6">
                  One-on-one sessions designed to help you work through personal challenges, 
                  develop coping strategies, and achieve your mental health goals.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">What I Help With:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Anxiety and Panic Disorders
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Depression and Mood Disorders
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Trauma and PTSD
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Stress Management
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Life Transitions
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Self-Esteem Issues
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Details</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Duration:</strong> 50 minutes</p>
                  <p><strong>Frequency:</strong> Weekly or bi-weekly</p>
                  <p><strong>Format:</strong> In-person or telehealth</p>
                  <p><strong>Cost:</strong> $150 per session</p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Couples Therapy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <span className="text-3xl">💑</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Couples Therapy</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Strengthen your relationship through improved communication, conflict resolution, 
                  and deeper emotional connection.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Areas of Focus:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Communication Skills
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Conflict Resolution
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Intimacy Issues
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Trust and Betrayal
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Pre-marital Counseling
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Parenting Challenges
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-xl lg:order-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Details</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Duration:</strong> 60 minutes</p>
                  <p><strong>Frequency:</strong> Weekly or bi-weekly</p>
                  <p><strong>Format:</strong> In-person or telehealth</p>
                  <p><strong>Cost:</strong> $180 per session</p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Trauma Recovery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <span className="text-3xl">🌱</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Trauma Recovery</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Specialized treatment for trauma survivors using evidence-based approaches 
                  to promote healing and resilience.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Treatment Approaches:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-purple-600 mr-2">✓</span>
                      EMDR Therapy
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-600 mr-2">✓</span>
                      Trauma-Focused CBT
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-600 mr-2">✓</span>
                      Somatic Experiencing
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-600 mr-2">✓</span>
                      Mindfulness-Based Interventions
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-600 mr-2">✓</span>
                      Complex PTSD Treatment
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-600 mr-2">✓</span>
                      Childhood Trauma Recovery
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Details</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Duration:</strong> 60-90 minutes</p>
                  <p><strong>Frequency:</strong> Weekly initially</p>
                  <p><strong>Format:</strong> In-person preferred</p>
                  <p><strong>Cost:</strong> $160 per session</p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Payment</h2>
            <p className="text-xl text-gray-600">
              Making mental health care accessible and affordable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance Accepted</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Blue Cross Blue Shield</li>
                <li>• Aetna</li>
                <li>• Cigna</li>
                <li>• UnitedHealth</li>
                <li>• Kaiser Permanente</li>
                <li>• And many others</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Credit/Debit Cards</li>
                <li>• Health Savings Account (HSA)</li>
                <li>• Flexible Spending Account (FSA)</li>
                <li>• Cash or Check</li>
                <li>• Payment Plans Available</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sliding Scale</h3>
              <p className="text-gray-600 mb-4">
                Limited sliding scale spots available for those experiencing financial hardship.
              </p>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Inquire about availability →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards better mental health. Contact me today to schedule 
            your initial consultation and learn how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
