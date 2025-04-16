'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  colorClasses: {
    border: string;
    text: string;
    bg: string;
    from: string;
    to: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: 'Brian Vergara',
    role: 'Frontend Developer',
    company: 'INC.',
    content: 'Collaborating with Norhani has been a great experience. She has a great understanding of system design and is always quick to support the front-end team with reliable APIs and thoughtful solutions. What stands out most is her attention to detail, clear communication, and ability to troubleshoot efficiently, all of which make our workflow smooth and productive. She plays an essential role on our team, and I really value working with her.',
    avatar: 'brian.png',
    colorClasses: {
      border: 'border-blue-500',
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      from: 'from-blue-500/10',
      to: 'to-purple-500/10',
    },
  },
  {
    name: 'Naeem Mangcol Jr.',
    role: 'Backend Developer',
    company: 'INC.',
    content: 'Working with Norhani has been an absolute game-changer for our development team. Her ability to quickly understand complex requirements and translate them into efficient, scalable code is impressive. She consistently delivered clean, high-quality work on time, and often went above and beyond by suggesting improvements that saved us time and resources. Her professionalism and problem-solving mindset make them a true asset to any tech project.',
    avatar: 'naeem.png',
    colorClasses: {
      border: 'border-purple-500',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      from: 'from-purple-500/10',
      to: 'to-pink-500/10',
    },
  },
  {
    name: 'Basam Serad',
    role: 'Backend Developer',
    company: 'INC.',
    content: 'Working with Norhani Ayaon has been an absolute pleasure. Not only is Norhani an incredibly skilled software developer, but she is also a fantastic team player. Always approachable and ready to lend a helping hand, Norhani consistently goes above and beyond to provide support whenever needed. Her positive attitude and willingness to collaborate make her an invaluable colleague. Whether it is tackling complex problems or offering administrative support, her dedication and reliability truly stand out.',
    avatar: 'basam.png',
    colorClasses: {
      border: 'border-yellow-500',
      text: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      from: 'from-yellow-500/10',
      to: 'to-pink-500/10',
    },
  },
  {
    name: 'John Leyban Lazada',
    role: 'Data Engineer',
    company: 'INC.',
    content: 'Working with Norhani has been an absolute pleasure. She consistently thinks outside the box and brings fresh, creative ideas to the table. Whether it is streamlining workflows or improving team collaboration, she is always looking for ways to make the workplace better for everyone. Her proactive mindset and innovative approach make a real difference.',
    avatar: 'leyban.png',
    colorClasses: {
      border: 'border-green-500',
      text: 'text-green-400',
      bg: 'bg-green-500/10',
      from: 'from-green-500/10',
      to: 'to-emerald-500/10',
    },
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  const handlePrev = () => instanceRef.current?.prev();
  const handleNext = () => instanceRef.current?.next();

  return (
    <section id='testimonials' className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">From The People I Have Worked With</h2>
        <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Hear from the people who have worked with me
        </p>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-1 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.colorClasses.from} ${testimonial.colorClasses.to} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>

                  <div className={`${testimonial.colorClasses.bg} rounded-2xl overflow-hidden relative border border-gray-700 h-full flex flex-col justify-between`}>
                    <div className="relative p-6 flex-grow">
                      <svg className={`w-8 h-8 ${testimonial.colorClasses.text} mb-4`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                    </div>

                    <div className="p-6 pt-0 flex items-center">
                      <div className={`relative w-12 h-12 rounded-full border-2 ${testimonial.colorClasses.border} mr-4`}>
                        <Image 
                          src={`/${testimonial.avatar}`}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full shadow transition z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full shadow transition z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;