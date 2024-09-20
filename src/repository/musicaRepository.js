import con from './connection.js';

export async function inserirMusica(musica) {

    const comando = ` 
    
        insert into tb_musica (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacoes, hr_duracao,
        bt_destaque, ds_idioma) 
        values (?, ?, ?, ?, ?, ?, ?, ?);
            
    `

    let resposta = await con.query(comando, [musica.musica, musica.artista, musica.urlMusica, musica.lancamento, musica.qtdVisualizacoes, musica.duracao, musica.destaque, musica.idioma])

    let info = resposta[0]

    let idMusica = info.insertId

    return idMusica;

}


export async function consultarMusica() {

    const comando = `
    
        select id_musica        idMusica, 
            nm_musica           musica,
            ds_artista          artista,
            url_musica          urlMusica,
            dt_lancamento       lancamento,
            qtd_visualizacoes   qtdVisualizacoes,
            hr_duracao          duracao,
            bt_destaque         destaque,
            ds_idioma           idioma
        from tb_musica;

    `

    let resposta = await con.query(comando)

    let registros = resposta[0]

    return registros;

}


export async function alterarMusica(id, musica) {

    const comando = `

        update tb_musica
        set nm_musica = ?,
            ds_artista = ?,
            url_musica = ?,
            dt_lancamento = ?,
            qtd_visualizacoes = ?,
            hr_duracao = ?,
            bt_destaque = ?,
            ds_idioma = ?
        where id_musica = ?;

    `

    let resposta = await con.query(comando, [musica.musica, musica.artista, musica.urlMusica, musica.lancamento, musica.qtdVisualizacoes, musica.duracao, musica.destaque, musica.idioma, id])

    let info = resposta[0]

    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

}


export async function removerMusica(id) {

    const comando = ` 
    
        delete from tb_musica
        where id_musica = ?;
            
    `

    let resposta = await con.query(comando, [id])

    let info = resposta[0]

    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

}
