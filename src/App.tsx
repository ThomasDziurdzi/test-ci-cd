import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Application de Test Playwright</h1>

      {/* Section Compteur */}
      <section className="counter-section">
        <h2>Compteur</h2>
        <p data-testid="counter-value">Compteur: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        <button onClick={() => setCount(count - 1)}>Décrémenter</button>
        <button onClick={() => setCount(0)}>Réinitialiser</button>
      </section>

      {/* Section Formulaire */}
      <section className="form-section">
        <h2>Formulaire d'inscription</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nom :</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email">Email :</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
              />
            </div>
            <button type="submit">S'inscrire</button>
          </form>
        ) : (
          <div data-testid="success-message">
            <p>✅ Inscription réussie !</p>
            <p>
              Bienvenue, {name} ({email})
            </p>
            <button onClick={() => setSubmitted(false)}>
              Nouvelle inscription
            </button>
          </div>
        )}
      </section>

      {/* Section Liste TODO */}
      <section className="todo-section">
        <h2>Liste de tâches</h2>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Nouvelle tâche"
            data-testid="todo-input"
          />
          <button onClick={addItem} data-testid="add-button">
            Ajouter
          </button>
        </div>
        <ul data-testid="todo-list">
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button
                onClick={() => deleteItem(index)}
                data-testid={`delete-${index}`}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
        {items.length === 0 && <p data-testid="empty-message">Aucune tâche</p>}
      </section>
    </div>
  );
}

export default App;
