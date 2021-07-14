export interface IInitialStatePosts {
    posts: any[];
    status?: 'loading' | 'succeeded' | 'failed' | 'idle',
    error?: string | any
}

export interface IState {
    posts: {
        posts: IPost[]
        status: 'loading' | 'succeeded' | 'failed'
        error: string
    },
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    comments: Array<IComments>
}

export interface IComments {
   id: number,
   postId: number,
   body: string
}