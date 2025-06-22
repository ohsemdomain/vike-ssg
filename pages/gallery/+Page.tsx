// Component that loads immediately (critical above-the-fold content)
function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-6">
      <h1 className="text-4xl font-bold mb-4">Premium Gallery</h1>
      <p className="text-xl mb-4">
        Lightning-fast loading for maximum conversion rates
      </p>
      <button type="button" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Get Started Now
      </button>
    </section>
  );
}

// Component that loads immediately (critical above-the-fold content)
function FeaturesSection() {
  return (
    <section className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          ⚡
        </div>
        <h3 className="text-xl font-semibold mb-2">Ultra Fast</h3>
        <p className="text-gray-600">Optimized for speed and performance</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          🎯
        </div>
        <h3 className="text-xl font-semibold mb-2">High Converting</h3>
        <p className="text-gray-600">Designed to reduce bounce rates</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          📱
        </div>
        <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
        <p className="text-gray-600">Perfect on all devices</p>
      </div>
    </section>
  );
}

// Simple gallery grid - all content loads with the page
function GalleryGrid() {
  const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6',
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Gallery Collection</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((src) => (
          <div key={src} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img 
              src={src} 
              alt="Artwork showcase"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// Simple testimonials section - all content loads with the page
function TestimonialsSection() {
  const testimonials = [
    {
      id: 'testimonial-1',
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "Our bounce rate dropped by 40% after implementing this approach!",
      avatar: "https://picsum.photos/60/60?random=10"
    },
    {
      id: 'testimonial-2',
      name: "Mike Chen",
      role: "E-commerce Owner",
      text: "The fast loading times significantly improved our conversion rates.",
      avatar: "https://picsum.photos/60/60?random=11"
    },
    {
      id: 'testimonial-3',
      name: "Lisa Rodriguez",
      role: "Digital Marketer",
      text: "Perfect for paid advertising campaigns. Users stay engaged!",
      avatar: "https://picsum.photos/60/60?random=12"
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* All content loads immediately as static HTML */}
        <HeroSection />
        <FeaturesSection />
        <GalleryGrid />
        <TestimonialsSection />
        
        {/* Performance info */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-8">
          <h3 className="font-semibold text-green-800 mb-2">⚡ SSG Performance Strategy</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• <strong>Static HTML:</strong> All content pre-rendered at build time</li>
            <li>• <strong>No JavaScript overhead:</strong> No useState, useEffect, or useRef needed</li>
            <li>• <strong>Lazy loading:</strong> Images load as user scrolls (browser native)</li>
            <li>• <strong>Result:</strong> Instant page load + minimal JavaScript bundle</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
