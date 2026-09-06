import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LightboxModal } from '../components/gallery/LightboxModal';
import { ShieldCheck, Eye, Filter } from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const GalleryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeBrand, setActiveBrand] = useState(initialBrand);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (searchParams.get('category')) setActiveCategory(searchParams.get('category'));
    if (searchParams.get('brand')) setActiveBrand(searchParams.get('brand'));
  }, [searchParams]);

  const galleryItems = [
    // 1. FRONT VISORS (4 items)
    {
      id: 1,
      category: 'visors',
      title: 'Hero Splendor Plus Visor (Black / Red Graphics)',
      caption: 'Glossy red-black UV coated visor with pre-drilled OEM screw fittings.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      category: 'visors',
      title: 'Bajaj Pulsar 150 / 180 Aggressive Visor',
      caption: 'Sporty front fairing visor engineered for aerodynamic wind deflection.',
      src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      category: 'visors',
      title: 'Hero Passion Pro Tinted Visor Assembly',
      caption: 'Optical polycarbonate tinted lens with heavy duty mounting tabs.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 4,
      category: 'visors',
      title: 'TVS Apache RTR 160 Aerodynamic Visor',
      caption: 'Twin tone racing finish visor designed for high speed stability.',
      src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    },

    // 2. FRONT MUDGUARDS (4 items)
    {
      id: 5,
      category: 'mudguards-front',
      title: 'Hero Splendor Front Mudguard (Gloss Black)',
      caption: 'Flexible vibration-absorbing front mudguard built from virgin ABS.',
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 6,
      category: 'mudguards-front',
      title: 'TVS Apache RTR Front Mudguard (Racing Red)',
      caption: 'Sharp twin-tone mudguard featuring fork dust deflector scoops.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 7,
      category: 'mudguards-front',
      title: 'Honda CB Shine Front Mudguard (Gen Black)',
      caption: 'Durable front fender for Honda CB Shine 125 drum and disc models.',
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 8,
      category: 'mudguards-front',
      title: 'Yamaha FZ V2 / V3 Front Mudguard (Matte Black)',
      caption: 'Muscular wide-tire mudguard contour with matte powder coat depth.',
      src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    },

    // 3. REAR MUDGUARDS (4 items)
    {
      id: 9,
      category: 'mudguards-rear',
      title: 'Honda Activa Scooter Rear Wheel Mudguard',
      caption: 'Heavy polypropylene splatter guard preventing rear wheel splash.',
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 10,
      category: 'mudguards-rear',
      title: 'Bajaj Pulsar Rear Tire Hugger Fender',
      caption: 'Sporty rear swingarm tire hugger protecting mono-shock unit.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 11,
      category: 'mudguards-rear',
      title: 'Hero Splendor Rear Inner Fender Mudguard',
      caption: 'Rear undertail inner splatter fender for Hero Splendor series.',
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 12,
      category: 'mudguards-rear',
      title: 'TVS Jupiter Rear Wheel Inner Guard',
      caption: 'Under-seat rear wheel splatter shield for TVS Jupiter scooters.',
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    },

    // 4. SIDE PANELS (4 items)
    {
      id: 13,
      category: 'side-panels',
      title: 'Honda CB Shine Side Panel Set (Left + Right)',
      caption: 'Precision locking studs engineered for secure rubber grommet engagement.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 14,
      category: 'side-panels',
      title: 'Hero Glamour 125 Side Body Cowl Pair',
      caption: 'High-impact ABS side panels with original decal mounting surfaces.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 15,
      category: 'side-panels',
      title: 'Bajaj Pulsar 150 Ebony Black Side Panel',
      caption: 'Factory match paint finish with crack resistant composite blend.',
      src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 16,
      category: 'side-panels',
      title: 'TVS Star City Plus Side Panel Set',
      caption: 'Seamless chassis fit preventing rattle and loose movement.',
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    },

    // 5. TAIL PANELS (4 items)
    {
      id: 17,
      category: 'tail-panels',
      title: 'Hero HF Deluxe Rear Tail Panel / Cowl',
      caption: 'Heavy duty tail cowl engineered to hold rear light and seat brackets.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 18,
      category: 'tail-panels',
      title: 'Bajaj Pulsar 180 Rear Seat Tail Cowl',
      caption: 'Aggressive twin LED tail lamp cutout cowl for Pulsar series.',
      src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 19,
      category: 'tail-panels',
      title: 'Hero Splendor Pro Tail Light Housing Panel',
      caption: 'Precision rear cowl tab alignment for vibration-free seating.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 20,
      category: 'tail-panels',
      title: 'TVS Apache RTR 160 Rear Tail Fairing',
      caption: 'Sporty tail cowl featuring integrated grab rail mounting slots.',
      src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80'
    },

    // 6. NOSE PANELS (4 items)
    {
      id: 21,
      category: 'nose-panels',
      title: 'Honda Activa 5G / 6G Pearl White Nose Apron',
      caption: 'Virgin ABS scooter center cowl designed for turn signal alignment.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 22,
      category: 'nose-panels',
      title: 'TVS Jupiter 110 Titanium Grey Nose Panel',
      caption: 'Front nose trim panel featuring UV stabilized matte finish.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 23,
      category: 'nose-panels',
      title: 'Suzuki Access 125 Front Nose Apron',
      caption: 'Chrome-ring compatible front nose cowl with multi-layer paint.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 24,
      category: 'nose-panels',
      title: 'Hero Maestro Edge Front Center Nose Cover',
      caption: 'High strength scooter nose panel with clip mounting tabs.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },

    // 7. HEADLIGHT CASES (4 items)
    {
      id: 25,
      category: 'headlight-cases',
      title: 'Hero Splendor Headlight Mask Cover',
      caption: 'Front square headlight outer housing mask with brass inserts.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 26,
      category: 'headlight-cases',
      title: 'Bajaj Pulsar 150 Headlight Housing Bucket',
      caption: 'Inner reflector mounting bucket housing shell for front fairing.',
      src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 27,
      category: 'headlight-cases',
      title: 'Honda CB Shine Headlight Rim Visor Surround',
      caption: 'Front headlight surround trim mask for Honda CB Shine.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 28,
      category: 'headlight-cases',
      title: 'TVS Apache RTR Headlight Fairing Shell',
      caption: 'Beast-eye headlight cowl housing for TVS Apache RTR 160.',
      src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    },

    // 8. METER COVERS (4 items)
    {
      id: 29,
      category: 'meter-covers',
      title: 'Hero Splendor Speedometer Back Housing Cover',
      caption: 'Instrument cluster rear back case protecting speedometer cables.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 30,
      category: 'meter-covers',
      title: 'Honda Activa Instrument Cluster Housing',
      caption: 'Handlebar meter console upper housing for Honda Activa scooters.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 31,
      category: 'meter-covers',
      title: 'Bajaj Pulsar Digital Meter Back Shell',
      caption: 'Semi-digital instrument console back housing shell.',
      src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 32,
      category: 'meter-covers',
      title: 'TVS Jupiter Speedometer Visor Lens Frame',
      caption: 'Speedometer glass visor lens frame for TVS Jupiter 110.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },

    // 9. CHAIN COVERS (4 items)
    {
      id: 33,
      category: 'chain-covers',
      title: 'Bajaj Platina Chain Cover Assembly (Black)',
      caption: 'Full enclosed protective chain cover case preventing dust build-up.',
      src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 34,
      category: 'chain-covers',
      title: 'Hero Splendor Full Enclosed Chain Case',
      caption: 'Upper and lower twin plastic chain guard case for Hero Splendor.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 35,
      category: 'chain-covers',
      title: 'Honda CB Shine Upper & Lower Chain Cover',
      caption: 'Complete 2-piece chain box case for Honda CB Shine 125.',
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 36,
      category: 'chain-covers',
      title: 'TVS Star City Chain Guard Case',
      caption: 'Protected enclosed chain case for TVS Star City series.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },

    // 10. TANK FLAPS (4 items)
    {
      id: 37,
      category: 'tank-flaps',
      title: 'Yamaha FZ V2 / V3 Front Tank Side Flaps (Pair)',
      caption: 'Muscular fuel tank extension air shrouds for Yamaha FZ series.',
      src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 38,
      category: 'tank-flaps',
      title: 'TVS Apache RTR 160 Fuel Tank Extension Shrouds',
      caption: 'Aggressive fuel tank air scoop shrouds for TVS Apache RTR 160.',
      src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 39,
      category: 'tank-flaps',
      title: 'Bajaj Pulsar NS200 Tank Side Air Scoops',
      caption: 'Sporty naked streetfighter tank shrouds for Bajaj Pulsar NS200.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 40,
      category: 'tank-flaps',
      title: 'Hero Xtreme 160R Tank Side Flaps',
      caption: 'Sharp tank cowl extension flaps for Hero Xtreme 160R series.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },

    // 11. LEG SHIELDS (4 items)
    {
      id: 41,
      category: 'leg-shields',
      title: 'Honda Activa Inner Leg Shield Panel',
      caption: 'Inner leg shield apron panel for Honda Activa scooters.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 42,
      category: 'leg-shields',
      title: 'TVS Jupiter Floorboard Footrest Panel',
      caption: 'Heavy load-bearing floorboard panel for TVS Jupiter scooters.',
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 43,
      category: 'leg-shields',
      title: 'Suzuki Access 125 Glove Box Leg Guard',
      caption: 'Front inner leg shield panel with utility pocket for Access 125.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 44,
      category: 'leg-shields',
      title: 'Hero Maestro Inner Body Panel Box',
      caption: 'Inner dashboard leg shield panel for Hero Maestro Edge.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },

    // 12. TAIL LIGHT VISORS (4 items)
    {
      id: 45,
      category: 'tail-light-visors',
      title: 'Hero Splendor Rear Indicator Light Cowl Pair',
      caption: 'Rear turn indicator housing cowls for Hero Splendor Plus.',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 46,
      category: 'tail-light-visors',
      title: 'Honda Activa Tail Light Outer Frame Trim',
      caption: 'Decorative surround frame bezel for Honda Activa tail lamp.',
      src: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 47,
      category: 'tail-light-visors',
      title: 'Bajaj Pulsar Rear License Plate Bracket',
      caption: 'Undertail rear number plate holder & indicator cowl bracket.',
      src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 48,
      category: 'tail-light-visors',
      title: 'TVS Apache Tail Light Accenting Bezel',
      caption: 'Sporty tail lamp surrounding cover cowl for TVS Apache RTR.',
      src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const bikeBrands = ['all', 'Hero', 'Honda', 'TVS', 'Bajaj', 'Suzuki', 'Yamaha'];

  const filteredItems = galleryItems.filter((item) => {
    const matchesCat =
      activeCategory === 'all' ||
      item.category === activeCategory ||
      item.category.startsWith(activeCategory) ||
      activeCategory.startsWith(item.category) ||
      (activeCategory === 'mudguards' && (item.category === 'mudguards-front' || item.category === 'mudguards-rear'));

    const matchesBrand =
      activeBrand === 'all' ||
      item.title.toLowerCase().includes(activeBrand.toLowerCase()) ||
      item.caption.toLowerCase().includes(activeBrand.toLowerCase());

    return matchesCat && matchesBrand;
  });

  const categories = [
    { id: 'all', label: 'All Part Types (48)' },
    { id: 'visors', label: 'Front Visors (4)' },
    { id: 'mudguards-front', label: 'Front Mudguards (4)' },
    { id: 'mudguards-rear', label: 'Rear Mudguards (4)' },
    { id: 'side-panels', label: 'Side Panels (4)' },
    { id: 'tail-panels', label: 'Tail Cowls (4)' },
    { id: 'nose-panels', label: 'Nose Aprons (4)' },
    { id: 'headlight-cases', label: 'Headlight Cases (4)' },
    { id: 'meter-covers', label: 'Meter Covers (4)' },
    { id: 'chain-covers', label: 'Chain Covers (4)' },
    { id: 'tank-flaps', label: 'Tank Flaps (4)' },
    { id: 'leg-shields', label: 'Leg Shields (4)' },
    { id: 'tail-light-visors', label: 'Tail Light Visors (4)' },
  ];

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <div className="pt-10 pb-16 bg-[#050505] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-[#242424] pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212] border border-[#D71920]/40 rounded-full text-xs font-black uppercase tracking-widest text-white mb-2">
            <ShieldCheck className="w-4 h-4 text-[#D71920]" />
            <span>REAL PRODUCT SPARE PARTS CATALOGUE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
            TORQVA Product Gallery
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
            Browse our specialized two-wheeler plastic body part gallery. Filter by bike brand (Hero, Honda, TVS, Bajaj, Suzuki, Yamaha) or part category.
          </p>
        </div>

        {/* Bike Brand Filter Bar */}
        <div className="bg-[#0e0e0e] border border-[#242424] p-4 rounded-xl space-y-3 shadow-lg">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#D71920] flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#D71920]" />
            <span>Filter By Bike Brand:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {bikeBrands.map((b) => (
              <button
                key={b}
                onClick={() => {
                  setActiveBrand(b);
                  setSearchParams(b === 'all' ? {} : { brand: b });
                }}
                className={`px-4 py-1.5 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeBrand.toLowerCase() === b.toLowerCase()
                    ? 'bg-[#D71920] text-white shadow-md'
                    : 'bg-[#141414] text-neutral-300 hover:text-white border border-[#262626]'
                }`}
              >
                {b === 'all' ? 'All Brands' : b}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#D71920] scrollbar-track-[#121212]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-md transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-[#D71920] text-white border-[#D71920] shadow-lg shadow-red-950/50'
                  : 'bg-[#0f0f0f] text-neutral-400 border-[#242424] hover:text-white hover:border-neutral-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group bg-[#0d0d0d] border border-[#242424] hover:border-[#D71920] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden">
                <ImageWithFallback
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#333333] rounded text-[10px] font-black uppercase tracking-wider text-[#D71920]">
                  {item.category.replace('-', ' ')}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#D71920] text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-4 space-y-1.5">
                <h3 className="text-sm font-black text-white group-hover:text-[#D71920] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <LightboxModal
            item={filteredItems[lightboxIndex]}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
};
