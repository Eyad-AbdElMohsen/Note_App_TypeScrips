import express , {Express , Request , Response}from "express" 
import bodyParser from 'body-parser';
import mongoose , { Schema, Document } from 'mongoose';
import Note from './models/notes';
import path from 'path';

const DB_URL : string = 'mongodb://localhost:27017/appDB'
const port : number = 4000;

const app : Express = express();
const bodyparserMW = bodyParser.urlencoded({ extended: true });
app.use(bodyparserMW);
app.set('view engine' , 'ejs');
app.set('views' , 'views')
app.use(express.static(path.join(__dirname , 'statics')));

app.get('/',async(req : Request ,res : Response) =>{
    // printing all notes
    await mongoose.connect(DB_URL);
    const notes = await Note.find();
    res.render('Print' , {
        notes : notes
    })
    mongoose.disconnect();
})
app.get('/add' , async(req : Request , res : Response) =>{
    console.log(11);
    res.render('Add');
})
app.post('/add' , async(req : Request , res : Response) =>{
    console.log(22);
    await mongoose.connect(DB_URL);
    let newNote = new Note ({
        paragraph : req.body.paragraph,
    })
    console.log(req.body);
    console.log(333);
    let note = await newNote.save();
    console.log(444);
    console.log(note);
    mongoose.disconnect();
    console.log(555);
    res.redirect('/');
})
app.listen(port , () => {
    console.log(`Hello from the other side in ${port}`);
})
