import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('furEver_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('furEver_favorites');
      setFavorites(saved ? JSON.parse(saved) : []);
    };

    window.addEventListener('favoritesChanged', handleStorageChange);
    return () => window.removeEventListener('favoritesChanged', handleStorageChange);
  }, []);

  const addFavorite = (id) => {
    if (favorites.includes(id)) return;
    if (favorites.length >= 3) {
      alert("Du kan max spara 3 favoriter utan ett konto!");
      return;
    }
    const updated = [...favorites, id];
    localStorage.setItem('furEver_favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event('favoritesChanged')); 
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter((favId) => favId !== id);
    localStorage.setItem('furEver_favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event('favoritesChanged')); 
  };

  const isFavorite = (id) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
