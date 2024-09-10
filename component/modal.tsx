"use client";
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material';
import Image from 'next/image';

interface Image {
  id: number;
  src: string;
}

const images: Image[] = [
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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (selectedIds: Image[]) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onNext }) => {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((imageId) => imageId !== id)
        : [...prevSelected, id]
    );
  };

  const handleNext = () => {
    const selectedImageObjects = images.filter(image => selectedImages.includes(image.id));
    onNext(selectedImageObjects); // Pass the selected image objects
    onClose();
  };
  

  const handleCancel = () => {
    setSelectedImages([]); // Reset selected images
    onClose(); // Close the modal
  };

  return (
    <Dialog open={isOpen} onClose={handleCancel} maxWidth="md" fullWidth>
      <DialogTitle>Print
      <Button onClick={handleCancel} sx={{ position: 'absolute', right: 8, top: 8 }}>
          &times;
        </Button>   
      </DialogTitle>
      <DialogContent>
        <div style={{ marginBottom: '16px', backgroundColor: '#2196f3', color: 'white', padding: '16px', borderRadius: '4px' }}>
          <Typography variant="h6">Lorem Ipsum</Typography>
          <Typography>Mr. John Doe</Typography>
          <Typography>General Static CT Scan</Typography>
          <Typography>11/10/2024 10:00</Typography>
        </div>
        <Typography variant="body1" gutterBottom>
          {selectedImages.length} Image{selectedImages.length !== 1 ? 's' : ''} Selected
        </Typography>
        <Grid container spacing={2}>
          {images.map((image) => (
            <Grid item xs={3} key={image.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedImages.includes(image.id)}
                    onChange={() => handleCheckboxChange(image.id)}
                    color="primary"
                  />
                }
                label={<img src={image.src} alt={`Image ${image.id}`} style={{ width: '100%', objectFit: 'cover' }} />}
                labelPlacement="top"
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleNext} variant="contained" color="primary">
          Next
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
