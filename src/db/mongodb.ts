import mongoose from 'mongoose'

const uri =
  'mongodb+srv://abhishekdhakad61:ppSs5diN2l7v0LuJ@api.im4vksc.mongodb.net/?retryWrites=true&w=majority'

export async function connectDB() {
  try {
    await mongoose.connect(uri)

    console.log('DB connected')
  } catch (error: any) {
    console.log(error)
  }
}
