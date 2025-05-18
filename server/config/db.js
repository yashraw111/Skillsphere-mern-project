// server/config/db.js
import mongoose from 'mongoose';

export const main = () => {
  mongoose.connect(process.env.DB_URL)
    .then(() => {
      console.log('DB connected...');
    })
    .catch((err) => {
      console.log(err);
    });
};
