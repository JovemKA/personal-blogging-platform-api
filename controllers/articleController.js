import {
    createArticle,
    getArticles,
    getArticle,
    updateArticle,
    deleteArticle,
} from '../services/articleService.js';

export const postArticleController = async (req, res) => {
    try {
        if (!req.body.title || !req.body.content || !req.body.excerpt) {
            return res.status(400).send({ message: 'Título, conteúdo e resumo são obrigatórios.' });
        }

        const { error } = await createArticle(req.body);
        if (error) throw new Error(error.message);

        res.status(200).send('Artigo criado com sucesso.');
    } catch (error) {
        console.error('Erro ao criar artigo:', error);
        res.status(500).send({ message: 'Erro ao criar artigo.' });
    }
};

export const getArticlesController = async (req, res) => {
    try {
        const { data, error } = await getArticles();
        if (error) throw new Error(error.message);

        res.status(200).send(data);
    } catch (error) {
        console.error('Erro ao recuperar artigos:', error);
        res.status(500).send({ message: 'Erro ao recuperar artigos.' });
    }
};
