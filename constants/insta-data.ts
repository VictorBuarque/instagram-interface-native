interface FeedItem {
    id: number;
    username: string;
    image: string;
    title: string;
    description: string;
    likes: number;
    liked: boolean;
}

interface StoryItem {
    id: number;
    username: string;
    image: string;
}

export const feed: FeedItem[] = [
    {
        id: 1,
        username: 'John Doe',
        image: require('@/assets/images/pessoa-1.jpeg'),
        title: 'Post 1',
        description: 'This is the first post',
        likes: 100,
        liked: false,
    },
    {
        id: 2,
        username: 'Jane Doe',
        image: require('@/assets/images/pessoa-2.jpeg'),
        title: 'Post 2',
        description: 'This is the second post',
        likes: 100,
        liked: false,
    },
    {
        id: 3,
        username: 'Joseph Doe',
        image: require('@/assets/images/pessoa-3.jpeg'),
        title: 'Post 3',
        description: 'This is the third post',
        likes: 100,
        liked: false,
    },
    {
        id: 4,
        username: 'John Doe',
        image: require('@/assets/images/pessoa-4.jpg'),
        title: 'Post 4',
        description: 'This is the fourth post',
        likes: 100,
        liked: false,
    },
    {
        id: 5,
        username: 'John Doe',
        image: require('@/assets/images/pessoa-5.jpeg'),
        title: 'Post 5',
        description: 'This is the fifth post',
        likes: 100,
        liked: false,
    },
        ]

export const stories: StoryItem[] = [
    {
        id: 1,
        username: 'John Doe',
        image: require('@/assets/images/pessoa-1.jpeg'),
    },
    {
        id: 2,
        username: 'Jane Doe',
        image: require('@/assets/images/pessoa-2.jpeg'),
    },
    {
        id: 3,
        username: 'Joseph Doe',
        image: require('@/assets/images/pessoa-3.jpeg'),
    },
    {
        id: 4,
        username: 'John Doe',
        image: require('@/assets/images/pessoa-4.jpg'),
    },
    {
        id: 5,
        username: 'John Doe',
        image: require('@/assets/images/pessoa-5.jpeg'),
    },
]