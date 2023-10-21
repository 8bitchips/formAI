import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getForm from '@wasp/queries/getForm';

export function FormPreview() {
  const { formId } = useParams();
  const { data: form, isLoading, error } = useQuery(getForm, { id: formId });

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleSaveForm = () => {
    // Save form to the database
  };

  const handleDownloadCode = () => {
    // Generate and download HTML/CSS code
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>{form.title}</h1>
      <p className='mb-4'>{form.description}</p>
      {/* Render form questions here */}
      <div className='flex mt-4'>
        <button
          onClick={handleSaveForm}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
        >
          Save Form
        </button>
        <button
          onClick={handleDownloadCode}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Download Code
        </button>
      </div>
    </div>
  );
}