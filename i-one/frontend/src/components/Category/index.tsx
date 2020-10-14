import React, { useState } from 'react';
import { FiEdit3, FiTrash, FiCameraOff } from 'react-icons/fi';
import api from '../../services/api';

import { Container } from './styles';

interface ICategory {
    id: string;
    name: string;
    avatar_url?: string;
}

interface ICategoryProps {
    category: ICategory;
    handleDelete: (id: string) => {};
    handleEdit: (category: ICategory) => void;
}

const Category: React.FC<ICategoryProps> = ({
    category,
    handleDelete,
    handleEdit,
}: ICategoryProps) => {
    function setEditing(): void {
        handleEdit(category);
    }

    return (
        <Container>
            <header>
                {category.avatar_url && (
                    <img src="" alt="Imagem não disponível" />
                )}
                {!category.avatar_url && <FiCameraOff size={20} color="#fff" />}
            </header>
            <section className="body">
                <h4>{category.name}</h4>
            </section>
            <section className="footer">
                <div className="icon-container">
                    <button
                        type="button"
                        className="icon"
                        onClick={() => setEditing()}
                        data-testid={`edit-category-${category.id}`}
                    >
                        <FiEdit3 size={20} />
                    </button>

                    <button
                        type="button"
                        className="icon"
                        onClick={() => handleDelete(category.id)}
                        data-testid={`remove-food-${category.id}`}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>
            </section>
        </Container>
    );
};

export default Category;
