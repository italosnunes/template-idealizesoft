import React, { useCallback, useRef } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';

import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';

interface ICategory {
    name: string;
}

interface ICreateCategoryData {
    name: string;
}
interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddCategory: (category: ICategory) => void;
}
const ModalCategoryAdd: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    handleAddCategory,
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: ICreateCategoryData) => {
            console.log(data);
            handleAddCategory(data);
            setIsOpen();
        },
        [handleAddCategory, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Nova Categoria</h1>
                <Input name="name" placeholder="Digite o nome da categoria" />
                <button type="submit">
                    <p className="button-text">Salvar Categoria</p>
                    <div className="button-icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
};

export default ModalCategoryAdd;
