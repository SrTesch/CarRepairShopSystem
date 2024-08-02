import express, { Request, Response} from 'express';
import { createServer } from 'http';
import carRouter from './routes/carRoutes';
import funcRouter from './routes/funcRoutes';
const app = express();
const server = createServer(app);
const port = 3001;

app.use(express.json());
app.set('view engine', 'ejs');

app.use((req,res,next) =>{
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Substitua pelo URL do seu frontend
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/', (req: Request, res: Response) =>{
	console.log("Alguem tentou acessar tua api...")
	res.send("Eu sou lindo!");
});

app.use('/cars', carRouter);

app.use('/funcs', funcRouter);

server.listen(port, () =>{
	console.log(`I'm Beautiful at http://localhost:${port}`);
});
