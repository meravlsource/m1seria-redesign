'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const initialFormData = {
    nombre: '',
    dni: '',
    piso: '',
    direccion: '',
    provincia: '',
    localidad: '',
    codigoPostal: '',
    correoElectrónico: '',
    teléfono: '',
    aclaracion: '',
};

const redHoverButton =
    "border border-black bg-black text-white transition-colors duration-200 hover:bg-red-600 hover:border-red-600 hover:text-white active:bg-red-600 active:border-red-600";

const ThankYouModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white border border-black p-6 md:p-8 relative text-xs font-semibold w-full max-w-md mx-auto">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar"
                    className={`absolute top-3 right-3 rounded-full border border-black bg-black text-white w-9 h-9 flex items-center justify-center ${redHoverButton}`}
                >
                    X
                </button>

                <p className="my-12 text-center leading-relaxed">
                    Gracias! Te enviamos un mail
                    <br />
                    con los detalles del pago.
                </p>
            </div>
        </div>
    );

};

export const Modal = ({
    isOpen,
    onClose,
    selectedBook,
}: {
    isOpen: boolean;
    onClose: () => void;
    selectedBook: string;
}) => {
    const [formData, setFormData] = useState(initialFormData);
    const [isThankYouOpen, setThankYouOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);
        setErrorMessage('');

        Promise.all([
            emailjs.send(
                'service_ozdgw4x',
                'template_6xh6t8l',
                {
                    ...formData,
                    libro: selectedBook,
                },
                'Gi5AoPFVLM2f_eDat'
            ),

            emailjs.send(
                'service_ozdgw4x',
                'template_j82w21z',
                {
                    ...formData,
                    libro: selectedBook,
                },
                'Gi5AoPFVLM2f_eDat'
            ),
        ])
            .then(() => {
                setFormData({ ...initialFormData });
                setThankYouOpen(true);
                onClose();
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setErrorMessage(
                    'No se pudo enviar el formulario. Intentá nuevamente.'
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <ThankYouModal
                isOpen={isThankYouOpen}
                onClose={() => setThankYouOpen(false)}
            />

            {!isOpen ? null : (
                <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-3 md:p-6">
                    <div className="relative bg-white border border-black w-full max-w-xl max-h-[90vh] overflow-y-auto p-5 md:p-8">
                        {/* CERRAR */}
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Cerrar formulario"
                            className={`absolute top-3 right-3 rounded-full border border-black bg-black text-white w-9 h-9 flex items-center justify-center ${redHoverButton}`}
                        >
                            X
                        </button>

                        <form
                            className="flex flex-col gap-y-4 mt-10"
                            onSubmit={handleSubmit}
                        >
                            <p className="text-center text-sm font-semibold mb-2 pr-8">
                                {selectedBook}
                            </p>

                            {/* NOMBRE */}
                            <label className="flex flex-col gap-y-1">
                                Nombre y apellido
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                    required
                                    onChange={handleChange}
                                />
                            </label>

                            {/* DNI */}
                            <label className="flex flex-col gap-y-1">
                                DNI
                                <input
                                    type="text"
                                    name="dni"
                                    value={formData.dni}
                                    className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                    required
                                    onChange={handleChange}
                                />
                            </label>

                            {/* DIRECCIÓN Y PISO */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <label className="flex flex-col gap-y-1 min-w-0">
                                    Dirección
                                    <input
                                        type="text"
                                        name="direccion"
                                        value={formData.direccion}
                                        className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                        required
                                        onChange={handleChange}
                                    />
                                </label>

                                <label className="flex flex-col gap-y-1 min-w-0">
                                    Piso / Timbre
                                    <input
                                        type="text"
                                        name="piso"
                                        value={formData.piso}
                                        className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>

                            {/* LOCALIDAD */}
                            <label className="flex flex-col gap-y-1">
                                Localidad
                                <input
                                    type="text"
                                    name="localidad"
                                    value={formData.localidad}
                                    className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                    required
                                    onChange={handleChange}
                                />
                            </label>

                            {/* PROVINCIA: ENCIMA DEL CÓDIGO POSTAL */}
                            <label className="flex flex-col gap-y-1">
                                Provincia
                                <input
                                    type="text"
                                    name="provincia"
                                    value={formData.provincia}
                                    className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                    required
                                    onChange={handleChange}
                                />
                            </label>

                            {/* CÓDIGO POSTAL */}
                            <label className="flex flex-col gap-y-1">
                                Código postal
                                <input
                                    type="text"
                                    name="codigoPostal"
                                    value={formData.codigoPostal}
                                    className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                    required
                                    onChange={handleChange}
                                />
                            </label>

                            {/* CORREO */}
                            <label className="flex flex-col gap-y-1">
                                Correo electrónico
                                <input
                                    type="email"
                                    name="correoElectrónico"
                                    value={formData.correoElectrónico}
                                    className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                    required
                                    onChange={handleChange}
                                />
                            </label>

                            {/* TELÉFONO */}
                            <label className="flex flex-col gap-y-1">
                                Teléfono
                                <input
                                    type="tel"
                                    name="teléfono"
                                    value={formData.teléfono}
                                    className="w-full min-w-0 border border-black p-2 font-normal focus:outline-none focus:border-red-600"
                                    required
                                    onChange={handleChange}
                                />
                            </label>

                            {/* ACLARACIONES */}
                            <label className="flex flex-col gap-y-1">
                                Aclaración adicional
                                <textarea
                                    name="aclaracion"
                                    value={formData.aclaracion}
                                    rows={3}
                                    className="w-full min-w-0 border border-black p-2 font-normal resize-y focus:outline-none focus:border-red-600"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* MENSAJE DE ERROR */}
                            {errorMessage && (
                                <p
                                    role="alert"
                                    className="text-red-600 font-semibold"
                                >
                                    {errorMessage}
                                </p>
                            )}

                            {/* ENVIAR */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`mt-2 w-full py-3 px-4 text-sm ${redHoverButton} disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {isLoading ? 'Enviando...' : 'Enviar'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );

};