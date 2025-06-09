import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    }
},

{
    timestamps: true //createdAt, updatedAt
});

const product = mongoose.model('Product', productSchema);
//products == Product

export default product;

/*| Thing          | What it's like                                        |
| -------------- | ----------------------------------------------------- |
| **Schema**     | Blueprint or Class definition                         |
| **Model**      | Factory/Class that creates objects from the blueprint |
| **Document**   | One actual record stored in MongoDB                   |
| **Collection** | A group of documents (like a table in SQL)            |
*/

