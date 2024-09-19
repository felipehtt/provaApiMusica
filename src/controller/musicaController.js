import * as db from '../repository/musicaRepository.js';

import { Router } from 'express';
const endpoints = Router()



endpoints.post('/musica', async (req, resp) => {

    try {

        let musica = req.body

        let id = await db.inserirMusica(musica)

        resp.send({

            idMusica: id

        })

    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.get('/musica', async (req, resp) => {

    try {

        let registros = await db.consultarMusica();

        resp.send(registros);


    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.put('/musica/:id', async (req, resp) => {

    try {

        let id = req.params.id;

        let musica = req.body;

        let linhasAfetadas = await db.alterarMusica(id, musica)

        if (linhasAfetadas >= 1) {

            resp.send();

        }
        else {

            resp.status(404).send({ erro: `Nenhum registro alterado.` })

        }

    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.delete('/musica/:id', async (req, resp) => {

    try {

        let id = req.params.id

        let linhasAfetadas = await db.removerMusica(id)

        if (linhasAfetadas >= 1) {

            resp.send();

        }
        else {

            resp.status(404).send({ erro: 'Nenhum registro removido.' });

        }

    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


export default endpoints;