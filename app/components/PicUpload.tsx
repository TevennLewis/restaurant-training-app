'use client';
import { useState, useEffect } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Button from '@/app/components/Button';

interface CloudinaryResult {
  public_id: string;
}

const PicUpload = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <CldUploadWidget 
      uploadPreset='r8oketi1'
      onSuccess={(result, { widget }) => {
        if (result.event !== 'success') return;
        const info = result.info as CloudinaryResult;
        setPublicId(info.public_id);
      }}
    >
      {({ open }) => 
        <Button
          onClick={() => open()}
        >
          Upload
        </Button>}
    </CldUploadWidget>
  )
}

export default PicUpload;