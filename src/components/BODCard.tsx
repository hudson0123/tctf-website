import { useState } from "react";
import Image from "next/image";

interface BODMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function BODCard({ member }: { member: BODMember }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center p-6 text-center"
        onClick={() => setShowModal(true)}
      >
        <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-primary/20 transition-all">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          {member.image && (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">{member.name}</h3>
        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
        <button className="text-gray-400 text-sm font-medium group-hover:text-primary flex items-center gap-1 transition-colors">
          Read Bio
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bio Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/20 backdrop-blur-sm animate-fadeIn">
          <div 
            className="absolute inset-0" 
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10"
              onClick={() => setShowModal(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/3 bg-gray-50 aspect-[4/5] relative">
                 <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{member.role}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{member.name}</h2>
                <div className="prose prose-sm text-gray-600 leading-relaxed overflow-y-auto max-h-[40vh] md:max-h-none">
                  {member.bio}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
