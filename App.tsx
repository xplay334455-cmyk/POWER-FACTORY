import React, { useState } from 'react';
import { PRODUCTS, FEATURES, APP_NAME, APP_NAME_AR } from './constants';
import { Section } from './components/Section';

// Icons
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const IconTikTok = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

// Image placeholders matching the dark aesthetic
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", // Dark gym atmosphere
  feature: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", // Intense workout
  productHeader: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop", // Pullup/Calisthenics
  p1: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", // No equipment
  p2: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop", // Intensity
  p3: "https://images.unsplash.com/photo-1517963879466-e825c151999f?q=80&w=2075&auto=format&fit=crop" // Handstand
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-arabic selection:bg-pf-primary selection:text-black">
      
      {/* Navigation - Glass Effect */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-panel rounded-full px-6 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <a href="#home" className="block group relative">
                <span className="font-teko text-3xl font-bold tracking-tighter text-white relative z-10">
                  POWER<span className="text-pf-primary">FACTORY</span>
                </span>
              </a>
            </div>
            
            <div className="hidden md:flex gap-8 text-sm font-bold font-arabic text-gray-300">
              <a href="#home" className="hover:text-pf-primary transition-colors py-2 px-4 rounded-full hover:bg-white/5">الرئيسية</a>
              <a href="#features" className="hover:text-pf-primary transition-colors py-2 px-4 rounded-full hover:bg-white/5">المميزات</a>
              <a href="#products" className="hover:text-pf-primary transition-colors py-2 px-4 rounded-full hover:bg-white/5">كتبنا</a>
            </div>

            <div className="hidden md:block">
               <a href="#products" className="bg-pf-primary hover:bg-white text-black font-arabic font-bold py-2 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:scale-105">
                  ابدأ الآن
               </a>
            </div>

            <button 
              className="md:hidden text-white hover:text-pf-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IconMenu />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel rounded-[2rem] mt-2 mx-auto max-w-[calc(100%-2rem)] p-4 flex flex-col gap-4 text-center animate-fade-in absolute left-0 right-0 z-50">
             <a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-3 font-bold text-gray-300 hover:text-white rounded-xl hover:bg-white/5">الرئيسية</a>
             <a href="#features" onClick={() => setIsMenuOpen(false)} className="block py-3 font-bold text-gray-300 hover:text-white rounded-xl hover:bg-white/5">المميزات</a>
             <a href="#products" onClick={() => setIsMenuOpen(false)} className="block py-3 font-bold text-gray-300 hover:text-white rounded-xl hover:bg-white/5">كتبنا</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <Section id="home" className="h-screen p-0 flex items-center justify-center relative overflow-hidden bg-black" noAnimation>
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-60 filter contrast-125 grayscale-[20%]"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          
          <div className="glass-panel inline-block px-6 py-2 rounded-full mb-6 backdrop-blur-xl border-white/5">
            <h2 className="font-teko text-pf-primary tracking-[0.3em] text-lg uppercase">
               Official Calisthenics Programs
            </h2>
          </div>

          <div className="relative inline-block">
             <h1 className="text-[15vw] md:text-[10vw] leading-[0.9] font-teko font-black text-white mix-blend-overlay opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full select-none blur-sm">
               FACTORY
             </h1>
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white font-arabic leading-none relative z-10 flex flex-col items-center">
               <span className="block text-outline-bold tracking-wide mb-[-10px] md:mb-[-20px]">UNLEASH</span>
               <span className="block text-pf-primary drop-shadow-[0_0_50px_rgba(204,255,0,0.6)]">YOUR POWER</span>
             </h1>
          </div>

          <p className="text-gray-300 text-lg md:text-xl font-light mt-8 max-w-2xl mx-auto leading-relaxed opacity-90 font-arabic">
            حول جسمك إلى آلة بشرية. تدريب احترافي بدون معدات.
          </p>

          <div className="mt-12">
            <a href="#features" className="inline-flex flex-col items-center gap-4 text-white/50 hover:text-pf-primary transition-colors duration-300 group">
              <div className="w-8 h-14 glass-panel rounded-full relative flex justify-center pt-2 border border-white/20 group-hover:border-pf-primary transition-colors">
                <div className="w-1 h-3 bg-pf-primary rounded-full animate-bounce"></div>
              </div>
              <span className="text-xs font-teko tracking-widest uppercase">Scroll Down</span>
            </a>
          </div>
        </div>
      </Section>

      {/* FEATURES SECTION (01) */}
      <Section id="features" className="bg-[#050505] py-0 relative overflow-hidden">
        <div className="container mx-auto px-4 py-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              
              {/* Left: Image Side with Curvy Glass */}
              <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                 <div className="absolute inset-0 bg-gradient-to-br from-pf-primary/10 to-transparent mix-blend-overlay z-10"></div>
                 <img src={IMAGES.feature} alt="Athlete" className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-110" />
                 
                 {/* Floating Glass Card */}
                 <div className="absolute bottom-8 left-8 right-8 glass-panel rounded-3xl p-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border-pf-primary/20">
                    <div className="flex items-center justify-between">
                       <div>
                          <h4 className="font-bold text-white text-lg">High Intensity</h4>
                          <p className="text-xs text-gray-400">Calisthenics Training</p>
                       </div>
                       <div className="w-10 h-10 rounded-full bg-pf-primary flex items-center justify-center text-black">
                          <IconCheck />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right: Content Side */}
              <div className="relative">
                 {/* Giant Number */}
                 <div className="absolute -top-20 -right-20 text-[15rem] leading-none font-teko font-black text-outline opacity-[0.03] select-none pointer-events-none">
                   01
                 </div>

                 <div className="relative z-10">
                    <div className="inline-block px-4 py-1 rounded-full border border-pf-primary/30 bg-pf-primary/5 mb-6">
                       <h4 className="text-pf-primary font-teko text-sm tracking-[0.2em] uppercase">Why Choose Us</h4>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white font-arabic mb-8 leading-tight">
                       القوة <br/> <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-500">هي الأولوية</span>
                    </h2>

                    <div className="space-y-6">
                       {FEATURES.map((feature, idx) => (
                          <div key={feature.id} className="glass-panel glass-panel-hover rounded-3xl p-6 transition-all duration-300 group cursor-default">
                             <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-pf-primary font-teko text-2xl pt-1 group-hover:bg-pf-primary group-hover:text-black transition-colors">
                                   {idx + 1}
                                </div>
                                <div>
                                   <h3 className="text-xl font-bold text-white mb-1 font-arabic">
                                      {feature.title}
                                   </h3>
                                   <p className="text-gray-400 text-sm leading-relaxed">
                                      {feature.description}
                                   </p>
                                </div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* PRODUCTS SECTION (02) - PRICING TABLE STYLE */}
      <Section id="products" className="bg-[#080808] py-32 relative overflow-hidden">
        {/* Giant Number */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-[20rem] leading-none font-teko font-black text-outline opacity-[0.02] select-none pointer-events-none z-0">
          02
        </div>

        <div className="container mx-auto px-4 relative z-10">
           
           {/* Centered Header */}
           <div className="text-center mb-16 relative">
              <h4 className="text-pf-primary font-teko text-lg tracking-[0.3em] uppercase mb-2">Start Your Process</h4>
              <h2 className="text-5xl md:text-7xl font-black text-white font-arabic leading-none">
                اختر <span className="text-outline-bold">خطتك</span>
              </h2>
              
              {/* Plans Toggle Visual (Decorative) */}
              <div className="flex justify-center mt-8">
                <div className="bg-white/5 p-1 rounded-full inline-flex backdrop-blur-sm border border-white/5">
                  <span className="px-6 py-2 rounded-full bg-pf-primary text-black text-sm font-bold font-teko tracking-widest cursor-default shadow-[0_0_15px_rgba(204,255,0,0.5)]">LIFETIME</span>
                </div>
              </div>
           </div>

           {/* Products Grid - Glass Pricing Style */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              {PRODUCTS.map((product, idx) => {
                 // Middle card is featured
                 const isFeatured = idx === 1;
                 const cardHeight = isFeatured ? "md:scale-110 z-20" : "z-10";
                 
                 // GLASSMORPHISM BACKGROUNDS
                 const bgStyle = isFeatured 
                    ? "bg-pf-primary/10 backdrop-blur-xl border-pf-primary/40 shadow-[0_0_50px_rgba(204,255,0,0.15)]" 
                    : "bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:border-white/20";
                 
                 const btnStyle = isFeatured
                    ? "bg-pf-primary text-black hover:bg-white shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                    : "bg-transparent border border-pf-primary/50 text-pf-primary hover:bg-pf-primary hover:text-black shadow-[0_0_10px_rgba(204,255,0,0.1)]";

                 const textColor = "text-white";
                 const subTextColor = "text-gray-400";
                 const checkColor = isFeatured ? "text-pf-primary" : "text-pf-primary";

                 return (
                   <div key={product.id} className={`rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-500 ${bgStyle} ${cardHeight} border relative overflow-hidden group`}>
                      
                      {/* Glass Reflection Effect */}
                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                      {isFeatured && (
                        <div className="absolute -top-4 bg-pf-primary text-black font-teko font-bold px-6 py-1 rounded-full text-sm tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(204,255,0,0.4)] z-30">
                          Most Popular
                        </div>
                      )}

                      <h3 className={`font-teko text-4xl font-bold uppercase tracking-wide mb-2 ${isFeatured ? 'text-white drop-shadow-lg' : 'text-pf-primary'}`}>
                        {product.title}
                      </h3>
                      <p className={`text-sm font-arabic mb-8 ${subTextColor}`}>
                        {product.imageType === 'book' ? 'Book & Guide' : 'Full Program'}
                      </p>

                      <div className="mb-8 relative">
                         <span className="text-6xl font-teko font-bold text-white tracking-tighter drop-shadow-md">{product.price}</span>
                         <span className={`block text-xs mt-1 uppercase tracking-widest ${subTextColor}`}>One time payment</span>
                      </div>

                      <div className={`w-full border-t ${isFeatured ? 'border-pf-primary/20' : 'border-white/5'} mb-8`}></div>

                      <ul className="space-y-5 mb-10 w-full">
                        {product.features.map((feat, i) => (
                          <li key={i} className="flex items-center justify-center gap-3 text-sm font-arabic text-gray-200">
                            <span className={`${checkColor} drop-shadow-md`}>
                               <IconCheck />
                            </span>
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <button className={`w-full py-4 rounded-full font-teko font-bold text-xl tracking-[0.2em] uppercase transition-all duration-300 ${btnStyle}`}>
                        Choose Plan
                      </button>
                   </div>
                 );
              })}
           </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-[#020202] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-pf-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="md:col-span-2">
                 <h2 className="font-teko text-6xl font-bold text-white mb-6 leading-none">
                    POWER<br/><span className="text-outline-primary">FACTORY</span>
                 </h2>
                 <p className="text-gray-500 max-w-md leading-relaxed font-arabic">
                    نحن نصنع الأبطال. انضم إلى أقوى مجتمع رياضي عربي وابدأ رحلة التغيير الحقيقية اليوم.
                 </p>
              </div>
              
              <div>
                 <h4 className="text-white font-teko text-xl uppercase tracking-widest mb-6">القائمة</h4>
                 <ul className="space-y-4 text-gray-500 font-arabic text-sm">
                    <li><a href="#home" className="hover:text-pf-primary transition-colors">الرئيسية</a></li>
                    <li><a href="#features" className="hover:text-pf-primary transition-colors">المميزات</a></li>
                    <li><a href="#products" className="hover:text-pf-primary transition-colors">الكتب والبرامج</a></li>
                 </ul>
              </div>

              <div>
                 <h4 className="text-white font-teko text-xl uppercase tracking-widest mb-6">تواصل معنا</h4>
                 <div className="flex gap-4">
                    {[IconInstagram, IconFacebook, IconTikTok].map((Icon, i) => (
                       <a key={i} href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-500 hover:text-black hover:bg-pf-primary hover:border-pf-primary transition-all duration-300 hover:scale-110">
                          <Icon />
                       </a>
                    ))}
                 </div>
              </div>
           </div>

           <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-mono uppercase tracking-widest">
              <p>&copy; 2025 {APP_NAME_AR}. ALL RIGHTS RESERVED.</p>
              <p>MADE FOR GLORY</p>
           </div>
        </div>
      </footer>
    </div>
  );
}