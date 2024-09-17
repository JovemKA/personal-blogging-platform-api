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

export const getArticleController = async (req, res) => {
    try {
        const { data, error } = await getArticle(req.params.id);
        if (error) throw new Error(error.message);

        res.status(200).send(data);
    } catch (error) {
        console.error('Erro ao recuperar artigo:', error);
        res.status(500).send({ message: 'Erro ao recuperar artigo.' });
    }
};

export const putArticleController = async (req, res) => {
    try {
        const id = req.params.id;

        const { error } = await updateArticle(id, req.body);
        if (error) throw new Error(error.message);

        res.status(200).send('Artigo atualizado com sucesso.');
    } catch (error) {
        console.error('Erro ao atualizar artigo:', error);
        res.status(500).send({ message: 'Erro ao atualizar artigo.' });
    }
};

export const deleteArticleController = async (req, res) => {
    try {
        const id = req.params.id;

        const { error } = await deleteArticle(id);
        if (error) throw new Error(error.message);

        res.status(200).send('Artigo deletado com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar artigo:', error);
        res.status(500).send({ message: 'Erro ao deletar artigo.' });
    }
};
