const { supabase } = require('../config/database');

exports.createArticle = async (articleData) => {
    try {
        const { error } = await supabase
            .from('articles')
            .insert([
                {
                    title: articleData.title,
                    content: articleData.content,
                    excerpt: articleData.excerpt,
                    category: articleData.category,
                    status: articleData.status || 'draft',
                }])
            .select();

        if (error) throw new Error(error.message);
        return {};
    } catch (error) {
        return { error };
    }
};

exports.getArticles = async () => {
    try {
        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw new Error(error.message);
        return data;
    }
    catch (error) {
        return { error };
    }
};

exports.getArticle = async (id) => {
    try {
        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw new Error(error.message);
        return data;
    } catch (error) {
        return { error };
    }
}

exports.updateArticle = async (id, articleData) => {
    try {
        const updatedArticle = {
            title: articleData.title,
            content: articleData.content,
            excerpt: articleData.excerpt,
            category: articleData.category,
            status: articleData.status,
        };

        const { error } = await supabase
            .from('articles')
            .update(updatedArticle)
            .eq('id', id);

        if (error) throw new Error(error.message);
        return updatedArticle;
    } catch (error) {
        return { error };
    }
}

exports.deleteArticle = async (id) => {
    try {
        const { error } = await supabase
            .from('articles')
            .delete()
            .eq('id', id);

        if (error) throw new Error(error.message);
        return {};
    } catch (error) {
        return { error };
    }
};
