import express from 'express';
import { Contact } from '../models/contactModel.js';

const router = express.Router();



// Route for Save a new Contact
router.post('/', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: 'Please include a name'
            });
        }
        // What gets sent 
        const newContact = request.body;

        const contact = await Contact.create(newContact);

        return response.status(201).send(contact);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all contacts from DB
router.get('/', async (request, response) => {
    try {
        const contacts = await Contact.find({});

        return response.status(200).json({
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get single contact from DB
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const contact = await Contact.findById(id);

        if (!contact) {
            return response.status(404).json({ message: 'Contact not found' });
        }

        return response.status(200).json(contact);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Update a Contact
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Contact.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Contact not found' });
        }

        return response.status(200).send({ message: "Contact updated successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Delete a Contact
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Contact.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Contact not found' });
        }

        return response.status(200).send({ message: "Contact deleted successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;