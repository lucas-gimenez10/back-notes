const mongoose = require('mongoose')

const url =
  `mongodb+srv://lucasgimenez08:Marcia156@test-curso.irchihr.mongodb.net/noteApp?retryWrites=true&w=majority&appName=test-curso`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'CSS es geniall',
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   console.log(result)
//   mongoose.connection.close()
// })

Note.find({ important:true }).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })