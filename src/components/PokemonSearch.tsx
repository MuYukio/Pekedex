import { useState, useEffect } from 'react';
import { fetchPokeList } from '../services/PokeApi';
import type { PokeListItem } from '../types/types';

interface PokemonSearchProps {
    onSelect: (name: string) => void;
}

export function PokemonSearch({ onSelect }: PokemonSearchProps) {

    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<PokeListItem[]>([]);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (!query) return setSuggestions([]);
            fetchPokeList(1000, 0)
                .then((all) => {
                    const filtered = all.filter((p) =>
                        p.name.toLowerCase().includes(query.toLowerCase())
                    )
                    setSuggestions(filtered.slice(0, 10));
                })
                .catch(() => setSuggestions([]));
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    return (
        <div style={{ position: "relative" }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar Pokémon..."
            />
            {suggestions.length > 0 && (
                <ul
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "#fff",
                        border: "1px solid #ccc",
                        zIndex: 1000,
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        maxHeight: "200px",
                        overflowY: "auto"
                    }}
                >
                    {suggestions.map((s) => (
                        <li
                            key={s.name}
                            style={{ padding: "0.5rem", cursor: "pointer" }}
                            onClick={() => {
                                setQuery(s.name)
                                setSuggestions([])
                                onSelect(s.name)
                            }}
                        >
                            {s.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}