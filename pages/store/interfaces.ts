export interface IInitialStatePosts {
    posts: any[];
    status?: 'loading' | 'succeeded' | 'failed' | 'idle',
    error?: string | any
}

export interface IInitialStatePost {
    post: {};
    status?: 'loading' | 'succeeded' | 'failed' | 'idle',
    error?: string | any
}

export interface IState {
    posts: {
        posts: IPost[]
        status: 'loading' | 'succeeded' | 'failed'
        error: string
    },
    post: ISinglePost
}

export interface IPost {
    id: number;
    title: string;
    body: string;
}

export interface ISinglePost extends IPost {
    comments: [
        id: number,
        postId: number,
        body: string
    ]
}