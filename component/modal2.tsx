import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Divider,
} from '@mui/material';
import Image from 'next/image';

interface Image {
  id: number;
  src: string;
}

interface Modal2Props {
  isOpen: boolean;
  onClose: () => void;
  selectedImages: Image[];
}

const Modal2: React.FC<Modal2Props> = ({ isOpen, onClose, selectedImages }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} maxWidth="lg" fullWidth>
        <DialogTitle>
          Print Preview
          <Button onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
            &times;
          </Button>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                Information
              </Typography>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6' }}>
                <Typography>Register Date: 05-08-2024 11:29:20</Typography>
                <Typography>Patient ID: 00507693</Typography>
                <Typography>Patient Name: AMELIA RAHMA M.</Typography>
                <Typography>Accession No: 20233539495</Typography>
                <Typography>DOB: 05-08-2024</Typography>
                {selectedImages.map((image) => (
                  <Typography key={image.id}>Study: 05-08-2024 11:29:20 (ID: {image.id})</Typography>
                ))}
              </div>
            </Grid>
            <Grid item xs={8}>
              <Divider orientation="vertical" flexItem />
              <Typography variant="h6" gutterBottom>
                Preview
              </Typography>
              <div id="print-section" style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6' }}>
                  <div style={{ textAlign: 'center', border: '1px dashed #ccc', padding: '16px', marginBottom: '16px' }}>
                    HEADER
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' , gap:'25%'}}>
                      <div>
                        <Typography>NO RM : PATIENT ID</Typography>
                        <Typography>NAMA : AMELIA RAHMA M.</Typography>
                        <Typography>TGL. LAHIR : 05-08-2024</Typography>
                        <Typography>UMUR : </Typography>
                        <Typography>KELAMIN : TIDAK DIKETAHUI</Typography>
                        <Typography>DOKTER PENGIRIM : </Typography>
                      </div>
                      <div>
                        <Typography>MODALITAS : </Typography>
                        <Typography>NO. FOTO : </Typography>
                        <Typography>TGL. FOTO : </Typography>
                        <Typography>PEMERIKSAAN : </Typography>
                        <Typography>RUANGAN : </Typography>
                        <Typography>KLINIS : </Typography>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px' }}>
                    <Typography>FINDING:</Typography>
                    <div style={{ border: '1px solid #ccc', height: '80px', marginBottom: '8px' }}></div>
                    <Typography>CONCLUSION:</Typography>
                    <div style={{ border: '1px solid #ccc', height: '80px', marginBottom: '8px' }}></div>
                    <Typography>RECOMMENDATION:</Typography>
                    <div style={{ border: '1px solid #ccc', height: '80px', marginBottom: '16px' }}></div>
                  </div>
                  <Typography align="right" style={{ marginTop: '16px' }}>
                    Dokter Radiologi,
                  </Typography>
                </div>
                <div style={{ pageBreakBefore: 'always', marginTop: '16px' }}></div>
                <Grid container>
                {selectedImages.map((image, index) => (
                    
                   
                    <Grid item xs={6} spacing={3}>
                        <Image 
                    key={index} 
                    src={image.src} 
                    alt={`Image ${index + 1}`} 
                    width={500} 
                    height={500}
                    style={{ width: '100%', marginTop: '16px' }}
                  />
                  </Grid>
                  
                ))}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
          <Button onClick={handlePrint} variant="contained" color="primary">
            Print
          </Button>
        </DialogActions>
      </Dialog>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-section, #print-section * {
            visibility: visible;
          }
          #print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm;
            height: 297mm;
            padding: 0;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Modal2;
