
import Stats from '../components/Stats';
import Logo from '../components/Logo';
import { Form } from '../components/Form';
import PackingList from '../components/PackingList';
import { useState, useEffect } from 'react';

const PackingListMain = () => {
  // Load saved items from localStorage
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('packingItems');

    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Save items whenever the list changes
  useEffect(() => {
    localStorage.setItem('packingItems', JSON.stringify(items));
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, packed: !item.packed }
          : item
      )
    );
  }

  function clearItems() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );

    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="packing-page">
      <Logo />

      <Form onAddItems={handleAddItems} />

      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearItems={clearItems}
      />

      <Stats items={items} />
    </div>
  );
};

export default PackingListMain;
