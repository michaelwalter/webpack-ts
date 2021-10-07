interface IAuthor {
    image?: string,
    name?: string,
    url?: string,
}

interface ISource {
    image: string,
    name: string,
    url: string,
}

type TAuthor = IAuthor[];

type TSource = ISource[];

export type NewsletterType = {
    category?: string,
    id: number,
    title: string,
    tag: string,
    description: string,
    frequency: string,
    photo: string,
    author?: TAuthor,
    source: TSource,
    preview?: string,
}
