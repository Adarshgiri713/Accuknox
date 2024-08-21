import React, { useState } from "react";
import "./Dashboard.css";

const App = () => {
  const [categories, setCategories] = useState([
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { name: "Widget 1", content: "Random text 1" },
        { name: "Widget 2", content: "Random text 2" },
        { name: "Widget 2", content: "Random text 2" },
        { name: "Widget 2", content: "Random text 2" }
      ],
    },
    {
      name: "Another Category",
      widgets: [{ name: "Widget A", content: "Random text A" }],
    },
  ]);

  const [newWidget, setNewWidget] = useState({
    name: "",
    content: "",
    category: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const addWidget = () => {
    if (newWidget.name && newWidget.content && newWidget.category) {
      const updatedCategories = categories.map((category) => {
        if (category.name === newWidget.category) {
          return {
            ...category,
            widgets: [
              ...category.widgets,
              { name: newWidget.name, content: newWidget.content },
            ],
          };
        }
        return category;
      });
      setCategories(updatedCategories);
      setNewWidget({ name: "", content: "", category: "" });
    }
  };

  const removeWidget = (categoryName, widgetName) => {
    const updatedCategories = categories.map((category) => {
      if (category.name === categoryName) {
        return {
          ...category,
          widgets: category.widgets.filter(
            (widget) => widget.name !== widgetName
          ),
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <h1 className="new">Dashboard</h1>
        <input
          type="text"
          placeholder="Search Widgets"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="categories-container">
          {filteredCategories.map((category) => (
            <Category
              key={category.name}
              category={category}
              removeWidget={removeWidget}
            />
          ))}
        </div>
      </div>
      <div className="dashboard-sidebar">
        <h2 className="new">Add Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidget.name}
          onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Widget Content"
          value={newWidget.content}
          onChange={(e) =>
            setNewWidget({ ...newWidget, content: e.target.value })
          }
        />
        <select
          value={newWidget.category}
          onChange={(e) =>
            setNewWidget({ ...newWidget, category: e.target.value })
          }
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button onClick={addWidget} className="add-widget-button">
          Add Widget
        </button>
      </div>
    </div>
  );
};

const Category = ({ category, removeWidget }) => (
  <div className="category">
    <h2>{category.name}</h2>
    <div className="widgets-container">
      {category.widgets.map((widget) => (
        <Widget
          key={widget.name}
          widget={widget}
          categoryName={category.name}
          removeWidget={removeWidget}
        />
      ))}
    </div>
  </div>
);

const Widget = ({ widget, categoryName, removeWidget }) => (
  <div className="widget">
    <h3>{widget.name}</h3>
    <p>{widget.content}</p>
    <button
      onClick={() => removeWidget(categoryName, widget.name)}
      className="remove-button"
    >
      &times;
    </button>
  </div>
);

export default App;
