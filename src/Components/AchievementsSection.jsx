import React, { useState } from 'react';
import { FaAward } from 'react-icons/fa';

const AchievementsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <section className="achievements-section py-12 px-6 bg-gray-800">
      <h2 className="text-3xl text-center font-bold text-white mb-8">Achievements and Certifications</h2>
      <div className="achievements-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Example Achievement */}
        <div className="achievement-card text-center">
          <img
            src="google-ai-certification.jpg" // Replace with your image
            alt="Google AI Certification"
            className="achievement-img w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => openModal('google-ai-certification.jpg')}
          />
          <p className="text-white mt-4">Google AI Certification</p>
        </div>
        
        <div className="achievement-card text-center">
          <img
            src="hackathon-award.jpg" // Replace with your image
            alt="Hackathon Award"
            className="achievement-img w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => openModal('hackathon-award.jpg')}
          />
          <p className="text-white mt-4">Hackathon Award</p>
        </div>

        {/* Add more achievements or certificates here */}
      </div>

      {/* Lightbox Modal */}
      {showModal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-4 rounded-lg max-w-xl">
            <button
              className="close-btn absolute top-4 right-4 text-gray-700"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Full Size Certification"
              className="max-w-full max-h-96 object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
