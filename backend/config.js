export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://myusername:mypassword123@cluster0.py52a.mongodb.net/<dbname>?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}