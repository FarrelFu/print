"use client";
import { useState } from 'react';
import Modal from '@/component/modal';
import Modal2 from '@/component/modal2';

interface Image {
  id: number;
  src: string;
}

export default function Home() {
  const [isImageSelectionModalOpen, setIsImageSelectionModalOpen] = useState(false);
  const [isPrintPreviewModalOpen, setIsPrintPreviewModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<Image[]>([]); // Updated to store selected images

  const handleOpenImageSelectionModal = () => {
    setIsImageSelectionModalOpen(true);
  };

  const handleCloseImageSelectionModal = () => {
    setIsImageSelectionModalOpen(false);
  };

  const handleNext = (selectedImages: Image[]) => { // Updated type to Image[]
    setSelectedImages(selectedImages);
    setIsPrintPreviewModalOpen(true);
    setIsImageSelectionModalOpen(false);
  };

  const handleClosePrintPreviewModal = () => {
    setSelectedImages([]); // Reset selected images when closing the print preview modal
    setIsPrintPreviewModalOpen(false);
    setIsImageSelectionModalOpen(true); // Reopen the image selection modal
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleOpenImageSelectionModal}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Image Selection
      </button>

      <Modal
        isOpen={isImageSelectionModalOpen}
        onClose={handleCloseImageSelectionModal}
        onNext={handleNext} // No type error now
        selectedImages={selectedImages} // Pass selected images to Modal
      />

      <Modal2
        isOpen={isPrintPreviewModalOpen}
        onClose={handleClosePrintPreviewModal}
        selectedImages={selectedImages} // Pass selected images to Modal2
      />
    </div>
  );
}


// Assuming this is where you keep your image data
const images = [
  { id: 1, src: "/img1.jpg" },
  { id: 2, src: '/img2.jpg' },
  { id: 3, src: '/img3.jpg' },
  { id: 4, src: '/img2.jpg' },
  { id: 5, src: '/img1.jpg' },
  { id: 6, src: '/img3.jpg' },
  { id: 7, src: '/img2.jpg' },
  { id: 8, src: '/img1.jpg' },
  { id: 9, src: '/img3.jpg' },
  { id: 10, src: '/img1.jpg' },
  { id: 11, src: '/img2.jpg' },
  { id: 12, src: '/img3.jpg' },
];
