import React from 'react';

const ProductForm = () => {
    const formData = [
        {
            label: 'Title',
            type: 'text',
            placeholder: 'Enter product title',
        },
        {
            label: 'Price',
            type: 'text',
            placeholder: 'Enter product price',
        },
        {
            label: 'Description',
            type: 'textarea',
            placeholder: 'Enter product description',
        },
    ];

    return (
        <section>
            <h2>Add new Product</h2>
            <form>
        {formData.map((field, index) => (
        <div key={index}>
        <label>{field.label}</label>
             {field.type === 'textarea' ? (
             <textarea placeholder={field.placeholder} />) : 
              (<input type={field.type} placeholder={field.placeholder} />)}
        </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ProductForm;
