'use client';
import { useState, useEffect } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Button from '@/app/components/Button';

interface CloudinaryResult {
  public_id: string;
}

const PicUpload = () => {
  const [publicId, setPublicId] = useState('');
  const memberId = '1';
  useEffect(() => {
    if (!publicId) return;
    fetch(`/api/members/${memberId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ profilePic: publicId })
    });
  }, [publicId]);
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