import React, { useState } from 'react';
import { useAction } from '@wasp/actions';
import createForm from '@wasp/actions/createForm';

export function FormBuilderPage() {
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [questions, setQuestions] = useState([]);

  const createFormFn = useAction(createForm);

  const handleAddQuestion = () => {
    // Add question logic
  };

  const handleEditQuestion = () => {
    // Edit question logic
  };

  const handleDeleteQuestion = () => {
    // Delete question logic
  };

  const handleSaveForm = () => {
    createFormFn({
      title: formTitle,
      description: formDescription,
      questions
    });
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Form Builder</h1>
      <div className='mb-4'>
        <label htmlFor='formTitle' className='font-bold'>Form Title:</label>
        <input
          type='text'
          id='formTitle'
          className='border border-gray-300 rounded p-2'
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='formDescription' className='font-bold'>Form Description:</label>
        <textarea
          id='formDescription'
          className='border border-gray-300 rounded p-2'
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
        ></textarea>
      </div>
      <h2 className='text-xl font-bold mb-2'>Questions:</h2>
      <div className='mb-4'>
        {/* Render questions list here */}
      </div>
      <button
        onClick={handleAddQuestion}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Add Question
      </button>
      <button
        onClick={handleSaveForm}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
      >
        Save Form
      </button>
    </div>
  );
}