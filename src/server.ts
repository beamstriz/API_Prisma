import express from 'express';
import UserController from './controllers/UserController';
import DadosController from './controllers/DadosController';

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (request, response) => {
  return response.send({ menssage: 'Hello world!'});
});

app.post('/createUser', UserController.createUser);
app.post('/createDados', DadosController.createDados);
app.get('/listDados/:id', DadosController.listDados);
app.put('/updateDados', DadosController.updateDados);
app.delete('/deleteDados/:id', DadosController.deleteDados);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});