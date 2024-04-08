'use client';
import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Button from '@/app/components/Button';

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset='r8oketi1'>
      {({ open }) => 
        <Button
          onClick={() => open()}
        >Upload</Button>}
    </CldUploadWidget>
  )
}

export default UploadPage;