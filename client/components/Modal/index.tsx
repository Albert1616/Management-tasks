import { X } from 'lucide-react';
import React from 'react'
import ReactDOM from 'react-dom';

type Props = {
    children: React.ReactNode,
    title: string,
    isOpen: boolean,
    isClose: () => void;
}

const Modal = ({
    children,
    title,
    isOpen,
    isClose
}: Props) => {

  if(!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='fixed inset-0 w-full h-full flex items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 px-7'>
        <div className='w-full max-w-2xl p-4 rounded bg-white shadow-lg dark:bg-gray-400'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold dark:text-white'>{title}</h1>
                <button onClick={() => isClose()}>
                    <X />
                </button>
            </div>
            {children}
        </div>
    </div>,
    document.body
  );
}

export default Modal;