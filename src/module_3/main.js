import axios from 'axios';

//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}

umPorSegundo();

// 1.2 faz requisição ao data da api do github
const getUserFromGithub = async(user) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(err) {
        console.log('Usuario não existe');
    }
}

getUserFromGithub('luciosx');


// 1.3
   class Github {
        static async getRepositories(repo) {
            try {
                const response = await axios.get(`https://api.github.com/repos/${repo}`);

                console.log(response.data);
            } catch(err) {
                console.log('Repositório não encontrado!');
            }
        }
   }

   Github.getRepositories('luciosx/Be-The-Hero');
   

// 1.4 
   const buscaUsuario = async user => {
       try {
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(response.data);

       } catch(err) {
            console.log('Usuario não encontrado!');
       }
   }

   buscaUsuario('luciosx');
