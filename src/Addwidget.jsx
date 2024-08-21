// import React, { useState } from 'react';

// function AddWidgetForm({ categories, addWidget }) {
//   const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
//   const [widgetName, setWidgetName] = useState('');
//   const [widgetText, setWidgetText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addWidget(selectedCategory, widgetName, widgetText);
//     setWidgetName('');
//     setWidgetText('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="add-widget-form">
//       <h3>Add Widget</h3>
//       <select
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
//       >
//         {categories.map((category) => (
//           <option key={category.id} value={category.id}>
//             {category.name}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Widget Name"
//         value={widgetName}
//         onChange={(e) => setWidgetName(e.target.value)}
//       />
//       <textarea
//         placeholder="Widget Text"
//         value={widgetText}
//         onChange={(e) => setWidgetText(e.target.value)}
//       />
//       <button type="submit">Add Widget</button>
//     </form>
//   );
// }

// export default AddWidgetForm;
