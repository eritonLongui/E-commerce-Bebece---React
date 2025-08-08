import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const GlobalStateContext = createContext(null);

export function GlobalStateProvider({ children }) {
  const [countCarrinho, setCountCarrinho] = useState(0);
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarAdicionado, setMostrarAdicionado] = useState(false);

  const addToCart = useCallback(() => {
    setCountCarrinho(c => c + 1);
    setMostrarAdicionado(true);
    setTimeout(() => {
        setMostrarAdicionado(false)
    }, 3000);
  }, []);

  const toggleFavorite = useCallback((id) => {
    setFavoritos(favs => favs.includes(id)
        ? favs.filter(x => x !== id)
        : [...favs, id]);
  }, []);

  const isFavorite = useCallback((id) => favoritos.includes(id), [favoritos]);

  const value = useMemo(() => ({
    countCarrinho,
    favoritos,
    mostrarAdicionado,
    addToCart,
    toggleFavorite,
    isFavorite
  }), [countCarrinho, favoritos, mostrarAdicionado, addToCart, toggleFavorite, isFavorite]);


  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export const useGlobalState = () => {
  const ctx = useContext(GlobalStateContext);
  return ctx;
};
