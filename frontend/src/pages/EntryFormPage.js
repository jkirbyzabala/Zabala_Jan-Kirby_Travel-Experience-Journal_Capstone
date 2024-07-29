import React from 'react'; // Import React
import EntryForm from '../components/EntryForm'; // Import the EntryForm component

const EntryFormPage = () => {
  // Function to handle adding a new entry (to be updated based on your needs)
  const handleAddEntry = (entry) => {
    // For example, log the entry or perform other actions
    console.log('New Entry:', entry);
  };

  return (
    <div>
      <h1>Create a New Entry</h1>
      <EntryForm onAddEntry={handleAddEntry} /> {/* Render the EntryForm component */}
    </div>
  );
};

export default EntryFormPage;
