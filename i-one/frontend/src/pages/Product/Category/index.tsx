import React, { useState, useCallback, useEffect } from 'react';
import { FiHeadphones, FiPlusSquare } from 'react-icons/fi';

import HeaderModules from '../../../components/HeaderModules';
import ModalCategoryAdd from './ModalCategoryAdd';
import api from '../../../services/api';

import { Container, CategoriesContainer } from './styles';
import Category from '../../../components/Category';

interface ICategory {
    name: string;
    id: string;
}
const ProductCategory: React.FC = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [editing, setEditing] = useState<ICategory>({} as ICategory);

    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const toogleModal = useCallback(() => {
        setModalOpen(!modalOpen);
    }, [modalOpen]);

    function toggleEditModal(): void {
        setEditModalOpen(!editModalOpen);
    }

    useEffect(() => {
        async function loadCategories(): Promise<void> {
            const response = await api.get('/product-categories');
            setCategories(response.data);
        }

        loadCategories();
    }, []);

    const handleAddCategory = useCallback(
        async (category: Omit<ICategory, 'id'>): Promise<void> => {
            try {
                const response = await api.post('/product-categories', {
                    name: category.name,
                });

                setCategories([...categories, response.data]);
            } catch (error) {
                console.log(error);
            }
        },
        [],
    );

    async function handleDelete(id: string): Promise<void> {
        try {
            await api.delete(`/product-categories/${id}`);

            setCategories(categories.filter(category => category.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    function handleEdit(category: ICategory): void {
        setEditing(category);
        toggleEditModal();
    }

    return (
        <Container>
            <HeaderModules
                openModal={toogleModal}
                icon={FiHeadphones}
                title="Categorias"
                iconButton={FiPlusSquare}
                titleButton="Nova Categoria"
            />
            <ModalCategoryAdd
                isOpen={modalOpen}
                setIsOpen={toogleModal}
                handleAddCategory={handleAddCategory}
            />
            <CategoriesContainer>
                {categories &&
                    categories.map(category => (
                        <Category
                            key={category.id}
                            category={category}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    ))}
            </CategoriesContainer>
        </Container>
    );
};

export default ProductCategory;
