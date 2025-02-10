const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes');
// const recipeRoutes = require('./routes/recipeRoutes');
// const commentRoutes = require('./routes/commentRoutes');

// Инициализация .env файла
dotenv.config();

// Создание сервера
const app = express();
app.use(cors());
app.use(express.json()); // Для обработки JSON данных

// Подключение к MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// // Роуты
// app.use('/api/users', userRoutes);
// app.use('/api/recipes', recipeRoutes);
// app.use('/api/comments', commentRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
