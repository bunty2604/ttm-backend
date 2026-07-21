
console.log('Testing require statements...');

try {
  console.log('1. Requiring express...');
  require('express');
  console.log('✓ express loaded');

  console.log('2. Requiring ./models/user...');
  require('./models/user');
  console.log('✓ user model loaded');

  console.log('3. Requiring bcrypt...');
  require('bcrypt');
  console.log('✓ bcrypt loaded');

  console.log('4. Requiring jsonwebtoken...');
  require('jsonwebtoken');
  console.log('✓ jsonwebtoken loaded');

  console.log('5. Requiring cookie-parser...');
  require('cookie-parser');
  console.log('✓ cookie-parser loaded');

  console.log('6. Requiring cors...');
  require('cors');
  console.log('✓ cors loaded');

  console.log('7. Requiring ./config/db...');
  const connectDB = require('./config/db');
  console.log('✓ db config loaded');

  console.log('Testing connectDB...');
  connectDB();
  console.log('✓ connectDB called');

  console.log('All modules loaded successfully!');
} catch (err) {
  console.error('❌ Error:', err);
  console.error('Stack:', err.stack);
}
