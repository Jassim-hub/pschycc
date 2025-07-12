import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Dr. Dorothy',
  description: 'Learn about Dr. Dorothy\'s background, education, and approach to psychological services.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Dr. Dorothy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing compassionate, evidence-based psychological care 
              to help you achieve mental wellness and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Profile Image and Quick Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-48 h-48 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-8xl">👩‍⚕️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Dorothy</h2>
                <p className="text-gray-600 mb-6">Licensed Clinical Psychologist</p>
                
                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="font-semibold text-gray-900">License</h3>
                    <p className="text-gray-600">PSY123456 - California</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Years of Experience</h3>
                    <p className="text-gray-600">15+ Years</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Specializations</h3>
                    <p className="text-gray-600">Anxiety, Depression, Trauma, Relationships</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography and Approach */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
                  <div className="space-y-4 text-lg text-gray-600">
                    <p>
                      Welcome! I&apos;m Dr. Dorothy, a licensed clinical psychologist with over 15 years 
                      of experience helping individuals and couples navigate life&apos;s challenges and achieve 
                      meaningful change.
                    </p>
                    <p>
                      My journey into psychology began with a deep curiosity about human behavior and a 
                      genuine desire to help others. I believe that everyone has the capacity for growth 
                      and healing, and I&apos;m passionate about creating a safe, supportive environment where 
                      that transformation can occur.
                    </p>
                    <p>
                      Throughout my career, I&apos;ve had the privilege of working with diverse populations and 
                      a wide range of mental health concerns. This experience has taught me that there&apos;s 
                      no one-size-fits-all approach to therapy, which is why I tailor my methods to meet 
                      each client&apos;s unique needs and circumstances.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h2>
                  <div className="space-y-4 text-lg text-gray-600">
                    <p>
                      My therapeutic approach is grounded in evidence-based practices, combining elements 
                      of cognitive-behavioral therapy (CBT), mindfulness-based interventions, and humanistic 
                      approaches. I believe in the power of the therapeutic relationship and work to create 
                      a collaborative partnership with each client.
                    </p>
                    <p>
                      I strive to create a warm, non-judgmental space where you can explore your thoughts, 
                      feelings, and behaviors without fear of criticism. My goal is to help you develop 
                      practical tools and strategies while also gaining deeper insights into yourself and 
                      your relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">Ph.D. in Clinical Psychology</h3>
                  <p className="text-gray-600">University of California, San Francisco</p>
                  <p className="text-sm text-gray-500">2008</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">M.A. in Psychology</h3>
                  <p className="text-gray-600">Stanford University</p>
                  <p className="text-sm text-gray-500">2005</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">B.A. in Psychology</h3>
                  <p className="text-gray-600">University of California, Berkeley</p>
                  <p className="text-sm text-gray-500">2003</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Training & Certifications</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">EMDR Certified Therapist</h3>
                  <p className="text-gray-600">Eye Movement Desensitization and Reprocessing</p>
                  <p className="text-sm text-gray-500">2015</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">Mindfulness-Based Cognitive Therapy</h3>
                  <p className="text-gray-600">Center for Mindfulness Studies</p>
                  <p className="text-sm text-gray-500">2012</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">Gottman Method Couples Therapy</h3>
                  <p className="text-gray-600">The Gottman Institute</p>
                  <p className="text-sm text-gray-500">2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Memberships</h2>
            <p className="text-xl text-gray-600">
              Committed to ongoing professional development and ethical practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">American Psychological Association (APA)</h3>
              <p className="text-gray-600">Member since 2008</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">California Psychological Association</h3>
              <p className="text-gray-600">Member since 2009</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">International Association of Marriage and Family Counselors</h3>
              <p className="text-gray-600">Member since 2011</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
